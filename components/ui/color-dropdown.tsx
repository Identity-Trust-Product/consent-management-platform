"use client";
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, ChevronDown, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCSSVariable, cssVariableToHex } from "@/lib/utils";
import { HexColorPicker } from "react-colorful";

export type ColorOption =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "shades-black"
  | "shades-white"
  | "neutral-shades"
  | "pick-color"
  | "default";

interface ColorDropdownProps {
  value?: ColorOption;
  onChange: (
    value: ColorOption,
    cssVariable?: string,
    hexColor?: string
  ) => void;
  colorNumber?: number;
  label: string;
  className?: string;
  currentValue?: string; // The actual current value (CSS variable or hex)
}

const colorOptions: { value: ColorOption; label: string; hasColor: boolean }[] =
  [
    { value: "primary", label: "Primary", hasColor: true },
    { value: "secondary", label: "Secondary", hasColor: true },
    { value: "success", label: "Success", hasColor: true },
    { value: "error", label: "Error", hasColor: true },
    { value: "warning", label: "Warning", hasColor: true },
    { value: "shades-black", label: "Black", hasColor: true },
    { value: "shades-white", label: "White", hasColor: true },
    { value: "neutral-shades", label: "Neutral", hasColor: true },
    { value: "pick-color", label: "Pick Color", hasColor: true },
    { value: "default", label: "Default", hasColor: false },
  ];

const getColorClass = (color: ColorOption) => {
  if (color === "default") return "";

  // Only return border class for white to make it visible
  if (color === "shades-white") return "border";

  return "";
};

// Rainbow gradient for pick-color option
const RainbowPatch = () => (
  <div
    className="w-4 h-4 rounded border"
    style={{
      background:
        "linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
    }}
  />
);

export function ColorDropdown({
  value = "default",
  onChange,
  colorNumber = 500,
  label,
  className,
  currentValue,
}: ColorDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  // Extract hex color from currentValue (handles both hex and CSS variables)
  const getCurrentHexColor = useCallback(() => {
    if (!currentValue) {
      return "#23DA7F"; // Default hex color
    }

    if (currentValue.startsWith("#")) {
      return currentValue;
    }

    // Convert CSS variable to hex
    return cssVariableToHex(currentValue);
  }, [currentValue]);

  const [tempColor, setTempColor] = useState(getCurrentHexColor());

  // Update tempColor when currentValue changes
  useEffect(() => {
    setTempColor(getCurrentHexColor());
  }, [getCurrentHexColor]);

  const selectedOption =
    colorOptions.find((option) => option.value === value) || colorOptions[9]; // default

  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between h-10">
            <div className="flex items-center gap-2">
              {selectedOption.hasColor && (
                <div
                  className={cn(
                    "w-4 h-4 rounded",
                    getColorClass(selectedOption.value)
                  )}
                  style={{
                    backgroundColor:
                      value === "pick-color"
                        ? getCurrentHexColor()
                        : getCSSVariable(selectedOption.value, colorNumber),
                  }}
                />
              )}
              <span className="text-sm">
                {value === "pick-color"
                  ? getCurrentHexColor()
                  : selectedOption.label}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full" align="start">
          {colorOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => {
                if (option.value === "pick-color") {
                  setColorPickerOpen(true);
                  setTempColor(getCurrentHexColor());
                } else {
                  const cssVariable = getCSSVariable(option.value, colorNumber);
                  onChange(option.value, cssVariable);
                  setIsOpen(false);
                }
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              {option.hasColor && (
                <>
                  {option.value === "pick-color" ? (
                    <RainbowPatch />
                  ) : (
                    <div
                      className={cn(
                        "w-4 h-4 rounded",
                        getColorClass(option.value)
                      )}
                      style={{
                        backgroundColor: getCSSVariable(
                          option.value,
                          colorNumber
                        ),
                      }}
                    />
                  )}
                </>
              )}
              <span className="text-sm">{option.label}</span>
              {value === option.value && <Check className="h-4 w-4 ml-auto" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Color Picker Dialog */}
      <Dialog open={colorPickerOpen} onOpenChange={setColorPickerOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Pick a Color</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-center">
              <HexColorPicker
                color={tempColor}
                onChange={setTempColor}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: tempColor }}
              />
              <input
                type="text"
                value={tempColor}
                onChange={(e) => setTempColor(e.target.value)}
                className="flex-1 px-2 py-1 border rounded text-sm font-mono"
                placeholder="#000000"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setColorPickerOpen(false);
                  setTempColor(getCurrentHexColor());
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  onChange("pick-color", undefined, tempColor);
                  setColorPickerOpen(false);
                  setIsOpen(false);
                }}
              >
                Apply
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

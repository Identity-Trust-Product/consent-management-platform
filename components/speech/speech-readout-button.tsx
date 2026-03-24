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

import React, { useState, useEffect } from "react";
import { Volume2, Pause } from "lucide-react";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { NoticeReadoutContent } from "@/lib/types/speech-readout";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { cn } from "@/lib/utils";

// Language code to BCP-47 mapping
const LANG_TO_BCP47: Record<string, string> = {
  as: "as-IN", // Assamese
  bn: "bn-IN", // Bengali
  br: "brx-IN", // Bodo
  doi: "doi-IN", // Dogri
  en: "en-IN", // English
  gom: "kok-IN", // Konkani
  gu: "gu-IN", // Gujarati
  hi: "hi-IN", // Hindi
  kn: "kn-IN", // Kannada
  ks: "ks-IN", // Kashmiri
  mai: "mai-IN", // Maithili
  ml: "ml-IN", // Malayalam
  "mni-Mtei": "mni-IN", // Manipuri
  mr: "mr-IN", // Marathi
  ne: "ne-NP", // Nepali
  or: "or-IN", // Odia
  pa: "pa-IN", // Punjabi
  sa: "sa-IN", // Sanskrit
  sd: "sd-IN", // Sindhi
  st: "sat-IN", // Santhali
  ta: "ta-IN", // Tamil
  te: "te-IN", // Telugu
  ur: "ur-IN", // Urdu
};

interface SpeechReadoutButtonProps {
  content: NoticeReadoutContent; // Pre-collated notice content
  className?: string;
  ariaLabel?: string;
}

export const SpeechReadoutButton: React.FC<SpeechReadoutButtonProps> = ({
  content,
  className = "",
  ariaLabel = "Read notice aloud",
}) => {
  const { currentLanguage } = useNoticeLanguage();
  const { isHighContrast } = useHighContrast();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [compatibleVoice, setCompatibleVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  // Find compatible voice for the current language
  useEffect(() => {
    const isSpeechSupported =
      typeof window !== "undefined" && "speechSynthesis" in window;
    setIsSupported(isSpeechSupported);

    if (!isSpeechSupported) return;

    const targetBCP47 = LANG_TO_BCP47[currentLanguage] || currentLanguage;

    const findBestVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) return null;

      // Priority 1: Exact BCP47 match
      let match = voices.find((v) => v.lang === targetBCP47);

      // Priority 2: Base language match
      if (!match) {
        const baseLang = targetBCP47.split("-")[0];
        match = voices.find((v) => v.lang.startsWith(baseLang));
      }

      return match || null;
    };

    const handleVoicesChanged = () => {
      const foundVoice = findBestVoice();
      setCompatibleVoice(foundVoice);
    };

    // Try immediately
    handleVoicesChanged();

    // Listen for updates (crucial for Chrome/Android)
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, [currentLanguage]);

  const handleReadAloud = () => {
    if (!isSupported) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Build text from pre-collated content
    const textParts: string[] = [
      content.title,
      content.subtitle,
      content.description,
      ...content.sections.map(
        (section) => `${section.title}\n\n${section.content}`,
      ),
      content.rights,
      content.cta,
    ];

    const textToRead = textParts.join("\n\n");
    if (!textToRead) return;

    const utterance = new SpeechSynthesisUtterance(textToRead);

    // Use compatible voice if found, otherwise let browser choose based on lang
    if (compatibleVoice) {
      utterance.voice = compatibleVoice;
    }

    // Always set language as a hint/requirement for the browser
    utterance.lang =
      compatibleVoice?.lang ||
      LANG_TO_BCP47[currentLanguage] ||
      currentLanguage;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.error("Speech readout error:", e);
      setIsSpeaking(false);
    };

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Don't render if not supported (browser doesn't have speech API)
  if (!isSupported) {
    return null;
  }

  return (
    <button
      onClick={handleReadAloud}
      aria-label={ariaLabel}
      title={isSpeaking ? "Stop reading" : "Read notice aloud"}
      className={cn(
        "rounded-lg hover:text-current hover:bg-transparent cursor-pointer transition-colors !m-0",
        isHighContrast ? "text-yellow-500 hc-text-gold" : "text-neutral-300",
        className,
      )}
      disabled={!isSupported}
    >
      {isSpeaking ? (
        <Pause
          size={20}
          className={cn(
            "text-red-500 dark:text-red-700",
            isHighContrast && "hc-text-gold",
          )}
        />
      ) : (
        <Volume2
          size={20}
          className={cn(
            "text-gray-700 dark:text-gray-300",
            isHighContrast && "hc-text-white",
          )}
        />
      )}
    </button>
  );
};

export default SpeechReadoutButton;

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

import { createDataRetentionPolicy, updateDataRetentionPolicy } from "@/actions/data-retention-policies";
import { Button } from "@/components/ui/button";
import { StepProgress } from "@/components/step-progress";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Step1PolicyDetails } from "./step1-policy-details";
import { Step2ConfigureProcess } from "./step2-configure-process";

interface PolicyFormProps {
  businessProcesses: any[];
  initialData?: any; // Using any to avoid complex type mapping here, but ideally should be typed
}

export type PolicyFormData = {
  name: string;
  description: string;
  policyUrl: string;
  configurations: {
    businessProcessRuleId: number;
    trigger: string;
    notifyUserIds: string[];
  }[];
};

const steps = [
  { number: 1, title: "Policy Details", description: "Basic details" },
  {
    number: 2,
    title: "Configure Policy",
    description: "Map to processes",
  },
];

export function PolicyForm({ businessProcesses, initialData }: PolicyFormProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Map initialData to form data if present
  const [formData, setFormData] = useState<PolicyFormData>(() => {
    if (initialData) {
      return {
        name: initialData.name,
        description: initialData.description || "",
        policyUrl: initialData.policyUrl || "",
        configurations: initialData.configurations.map((c: any) => ({
          businessProcessRuleId: c.businessProcessRuleId,
          trigger: c.trigger,
          notifyUserIds: c.notifyUserIds || [],
        })),
      };
    }
    return {
      name: "",
      description: "",
      policyUrl: "",
      configurations: [],
    };
  });

  const handleNext = (stepData: Partial<PolicyFormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = (stepData?: Partial<PolicyFormData>) => {
    if (stepData) {
      setFormData((prev) => ({ ...prev, ...stepData }));
    }
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (finalData: Partial<PolicyFormData>) => {
    setIsSubmitting(true);
    const completeData = { ...formData, ...finalData };

    try {
      let result;
      if (initialData?.id) {
        result = await updateDataRetentionPolicy({ id: initialData.id, ...completeData });
      } else {
        result = await createDataRetentionPolicy(completeData);
      }

      if (result.success) {
        toast.success(initialData?.id ? "Policy updated successfully" : "Policy created successfully");
        router.push("/cms/data-fiduciary/data-retention");
      } else {
        toast.error(result.error || "Failed to save policy");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto h-full flex flex-col">
      <div className="-mx-14 pt-4">
        <StepProgress
          currentStep={currentStep}
          totalSteps={2}
          steps={steps}
        />
      </div>

      <div className="border-x flex-1 w-full bg-background">
        {currentStep === 1 && (
          <Step1PolicyDetails
            initialData={formData}
            onNext={handleNext}
            onCancel={() => router.push("/cms/data-fiduciary/data-retention")}
          />
        )}
        {currentStep === 2 && (
          <Step2ConfigureProcess
            initialData={formData}
            businessProcesses={businessProcesses}
            onBack={handleBack}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            onCancel={() => router.push("/cms/data-fiduciary/data-retention")}
          />
        )}
      </div>
    </div>
  );
}

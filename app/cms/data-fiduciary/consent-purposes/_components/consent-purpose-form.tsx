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

import { Suspense } from "react";
import { fetchAllConsentPurposeFormData } from "@/lib/queries/consent-purpose-queries";
import { ConsentPurposeProvider } from "@/contexts/consent-purpose-context";
import { StepProgress } from "@/components/step-progress";
import { Step1Form } from "./step1-form";
import { Step2Form } from "./step2-form";
import { Step3Form } from "./step3-form";
import { Step4Form } from "./step4-form";
import { Step5Form } from "./step5-form";
import { BaselineInitializer } from "./baseline-initializer";
import { getBusinessProcessesUsingConsentPurposeForView } from "@/lib/services/business-processes-service";

interface ConsentPurposeFormProps {
  searchParams: Promise<{ step?: string; id?: string }>;
  mode: "new" | "edit";
}

interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
  userAttributes?: any[];
  purposesOfProcessing?: any[];
  dataProcessors?: any[];
}

const steps = [
  { number: 1, title: "General Settings", description: "Basic information" },
  {
    number: 2,
    title: "Add Purpose of Processing",
    description: "Processing purposes",
  },
  { number: 3, title: "Add Processor", description: "Data processors" },
  { number: 4, title: "Translations", description: "General settings" },
  { number: 5, title: "Review & Save", description: "Review and publish" },
];

async function ConsentPurposeFormContent({
  searchParams,
  mode,
}: ConsentPurposeFormProps) {
  const resolvedSearchParams = await searchParams;
  const step = parseInt(resolvedSearchParams.step || "1");
  const consentPurposeId = resolvedSearchParams.id;
  const isEdit = mode === "edit" || !!consentPurposeId;

  // Fetch ALL data once at the beginning
  const data = await fetchAllConsentPurposeFormData(consentPurposeId);
  let affectedBPs = [];
  if (consentPurposeId) {
    affectedBPs = await getBusinessProcessesUsingConsentPurposeForView(
      Number(consentPurposeId)
    );
  }

  // Render the appropriate step component
  const renderStepComponent = () => {
    const commonProps = { data, isEdit, consentPurposeId, affectedBPs };

    switch (step) {
      case 1:
        return <Step1Form {...commonProps} />;
      case 2:
        return <Step2Form {...commonProps} />;
      case 3:
        return <Step3Form {...commonProps} />;
      case 4:
        return <Step4Form {...commonProps} />;
      case 5:
        return <Step5Form {...commonProps} />;
      default:
        return <Step1Form {...commonProps} />;
    }
  };

  return (
    <>
      {/* Baseline Initializer - sets baseline when editing */}
      <BaselineInitializer data={data} isEdit={isEdit} />

      {/* Step Progress - Full Width */}
      <div className="-mx-14">
        <StepProgress currentStep={step} totalSteps={5} steps={steps} />
      </div>

      {/* Step Content */}
      <div className="border-x flex-1 w-full">{renderStepComponent()}</div>
    </>
  );
}

export function ConsentPurposeForm({
  searchParams,
  mode,
}: ConsentPurposeFormProps) {
  return (
    <div className="container mx-auto h-full flex flex-col">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
            </div>
          </div>
        }
      >
        <ConsentPurposeProvider>
          <ConsentPurposeFormContent searchParams={searchParams} mode={mode} />
        </ConsentPurposeProvider>
      </Suspense>
    </div>
  );
}

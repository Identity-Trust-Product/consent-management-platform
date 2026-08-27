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
import { StepProgress } from "@/components/step-progress";
import { BusinessProcessProvider } from "@/contexts/business-process-context";
import { getBusinessUnits } from "@/actions/business-units";
import {
  getBusinessProcessData,
  getBusinessProcessById,
} from "@/actions/business-processes";
import { BaselineInitializer } from "./baseline-initializer";
import { Step1Form } from "./step1-form";
import { Step2Form } from "./step2-form";
import { Step3Form } from "./step3-form";
import { Step4Form } from "./step4-form";
import { Step6Form } from "./step6-form";

interface BusinessProcessFormProps {
  searchParams: Promise<{ step?: string; id?: string }>;
  mode: "new" | "edit";
}

interface StepData {
  businessProcess?: any;
  businessUnits?: any[];
  consentPurposes?: any[];
  dataProcessors?: any[];
  userAttributes?: any[];
}

const steps = [
  { number: 1, title: "General Settings", description: "Basic information" },
  {
    number: 2,
    title: "Configure Consent",
    description: "Consent configuration",
  },
  {
    number: 3,
    title: "Choose Redirectional URL",
    description: "End User License Agreement",
  },
  { number: 4, title: "Translate", description: "Language translations" },
  { number: 5, title: "Preview & Publish", description: "Review and publish" },
];

async function BusinessProcessFormContent({
  searchParams,
  mode,
}: BusinessProcessFormProps) {
  const resolvedSearchParams = await searchParams;
  const step = parseInt(resolvedSearchParams.step || "1");
  const businessProcessId = resolvedSearchParams.id;
  const isEdit = mode === "edit";

  // Fetch the necessary data for business processes
  const [businessUnits, businessProcessData, existingBusinessProcess] =
    await Promise.all([
      getBusinessUnits(),
      getBusinessProcessData(),
      businessProcessId
        ? getBusinessProcessById(parseInt(businessProcessId))
        : Promise.resolve(null),
    ]);

  const data: StepData = {
    businessProcess: existingBusinessProcess,
    businessUnits,
    consentPurposes: businessProcessData.consentPurposes,
    dataProcessors: businessProcessData.dataProcessors,
    userAttributes: businessProcessData.userAttributes,
  };

  // Render the appropriate step component
  const renderStepComponent = () => {
    const commonProps = { data, isEdit, businessProcessId };

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
        return <Step6Form {...commonProps} />;
      default:
        return <Step1Form {...commonProps} />;
    }
  };

  return (
    <BusinessProcessProvider
      initialData={existingBusinessProcess}
      userAttributes={data.userAttributes}
    >
      {/* Initialize baseline for breaking change detection */}
      {isEdit && existingBusinessProcess && (
        <BaselineInitializer
          data={data}
          isEdit={isEdit}
          businessProcessId={businessProcessId}
        />
      )}

      {/* Step Progress */}
      <div className="-mx-14">
        <StepProgress currentStep={step} totalSteps={5} steps={steps} />
      </div>

      {/* Step Content */}
      <div className="border-x flex-1 w-full">{renderStepComponent()}</div>
    </BusinessProcessProvider>
  );
}

export function BusinessProcessForm({
  searchParams,
  mode,
}: BusinessProcessFormProps) {
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
        <BusinessProcessFormContent searchParams={searchParams} mode={mode} />
      </Suspense>
    </div>
  );
}

"use client";
import React from "react";
import { AutomationHero } from "../../components/automation/AutomationHero";
import { VisualBuilder } from "../../components/automation/VisualBuilder";
import { TriggerTypes } from "../../components/automation/TriggerTypes";
import { ActionTypes } from "../../components/automation/ActionTypes";
import { EcommerceIntegration } from "../../components/automation/EcommerceIntegration";
import { AdvancedConditions } from "../../components/automation/AdvancedConditions";
import { ApiIntegration } from "../../components/automation/ApiIntegration";
import { CustomerSegmentation } from "../../components/automation/CustomerSegmentation";
import { SuccessStories } from "../../components/automation/SuccessStories";
import { PricingCTA } from "../../components/automation/PricingCTA";

export function Automation() {
  return (
    <div className="min-h-screen">
      <AutomationHero />
      <VisualBuilder />
      <TriggerTypes />
      <ActionTypes />
      <EcommerceIntegration />
      <AdvancedConditions />
      <ApiIntegration />
      <CustomerSegmentation />
      <SuccessStories />
      <PricingCTA />
    </div>
  );
}

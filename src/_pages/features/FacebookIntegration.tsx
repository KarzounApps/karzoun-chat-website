import React from "react";
import FacebookIntegrationHero from "@/components/facebook-integration/FacebookIntegrationHero";
import FacebookIntegrationFeatures from "@/components/facebook-integration/FacebookIntegrationFeatures";

export function FacebookIntegration() {
  return (
    <div className="min-h-screen">
      <FacebookIntegrationHero />
      <FacebookIntegrationFeatures />
    </div>
  );
}


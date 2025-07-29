"use client";
import React from "react";
import { WhatsAppCatalogHero } from "../../components/whatsapp-catalog/WhatsAppCatalogHero";
import { WhatsAppCatalogFeatures } from "../../components/whatsapp-catalog/WhatsAppCatalogFeatures";
import { WhatsAppCatalogWorkflow } from "../../components/whatsapp-catalog/WhatsAppCatalogWorkflow";
import { WhatsAppCatalogCTA } from "../../components/whatsapp-catalog/WhatsAppCatalogCTA";

export function WhatsAppCatalog() {
  return (
    <div className="min-h-screen">
      <WhatsAppCatalogHero />
      <WhatsAppCatalogFeatures />
      <WhatsAppCatalogWorkflow />
      <WhatsAppCatalogCTA />
    </div>
  );
}


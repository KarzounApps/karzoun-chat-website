"use client";
import React from "react";
import { ChatBotHero } from "../../components/chatbot/ChatBotHero";
import { VisualBuilder } from "../../components/chatbot/VisualBuilder";
import { WhatsAppIntegration } from "../../components/chatbot/WhatsAppIntegration";
import { InstagramComments } from "../../components/chatbot/InstagramComments";
import { UseCases } from "../../components/chatbot/UseCases";
import { AICapabilities } from "../../components/chatbot/AICapabilities";
import { TemplateShowcase } from "../../components/chatbot/TemplateShowcase";
import { CustomerSuccess } from "../../components/chatbot/CustomerSuccess";
import { PricingCTA } from "../../components/chatbot/PricingCTA";

export function ChatBot() {
  return (
    <div className="min-h-screen">
      <ChatBotHero />
      <VisualBuilder />
      <WhatsAppIntegration />
      <InstagramComments />
      <UseCases />
      <AICapabilities />
      <TemplateShowcase />
      <CustomerSuccess />
      <PricingCTA />
    </div>
  );
}

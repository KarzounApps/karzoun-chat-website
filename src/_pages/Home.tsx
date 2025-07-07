"use client";
import React from "react";
import { Hero } from "../components/sections/Hero";
import { TrustedCustomers } from "../components/sections/TrustedCustomers";
import { Features } from "../components/sections/Features";
import { Details } from "../components/sections/Details";
import { TeamManagement } from "../components/sections/TeamManagement";
import { CustomerData } from "../components/sections/CustomerData";
import { ChatbotFeature } from "../components/sections/ChatbotFeature";
import { AutomationFeature } from "../components/sections/AutomationFeature";
import { TestimonialsAndSecurity } from "../components/sections/TestimonialsAndSecurity";
import { MobileApps } from "../components/sections/2";
import { WhatsAppIntegration } from "@/components/chatbot/WhatsAppIntegration";
import { InstagramComments } from "@/components/chatbot/InstagramComments";
import WhatsappInstaSwitcher from "@/components/sections/whatsappInstaSwitcher";

export function Home() {
  return (
    <>
      <Hero />
      <TrustedCustomers />
      <Features />
      <Details />
      <TeamManagement />
      <CustomerData />
      <ChatbotFeature />
      <WhatsappInstaSwitcher />
      {/* <AutomationFeature /> */}
      <TestimonialsAndSecurity />
      <MobileApps />
    </>
  );
}

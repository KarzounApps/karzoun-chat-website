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
import { MobileApps } from "../components/sections/MobileApps";

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
      <AutomationFeature />
      <TestimonialsAndSecurity />
      <MobileApps />
    </>
  );
}

"use client";
import React from "react";
import { TicketsHero } from "../../components/tickets/TicketsHero";
import { Analytics } from "../../components/tickets/Analytics";

export function TicketsAndTasks() {
  return (
    <div className="min-h-screen">
      <TicketsHero />
      <Analytics />
    </div>
  );
}

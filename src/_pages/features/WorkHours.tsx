"use client";
import React from "react";
import { WorkHoursHero } from "../../components/work-hours/WorkHoursHero";
import { WorkHoursFeatures } from "../../components/work-hours/WorkHoursFeatures";
import { WorkHoursScheduling } from "../../components/work-hours/WorkHoursScheduling";
import { WorkHoursCTA } from "../../components/work-hours/WorkHoursCTA";

export function WorkHours() {
  return (
    <div className="min-h-screen">
      <WorkHoursHero />
      <WorkHoursFeatures />
      <WorkHoursScheduling />
      <WorkHoursCTA />
    </div>
  );
}


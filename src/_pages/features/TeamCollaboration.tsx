"use client";
import React from "react";
import { TeamCollaborationHero } from "../../components/team-collaboration/TeamCollaborationHero";
import { TeamCollaborationBenefits } from "../../components/team-collaboration/TeamCollaborationBenefits";
import { TeamCollaborationHowItWorks } from "../../components/team-collaboration/TeamCollaborationHowItWorks";
import { TeamCollaborationCTA } from "../../components/team-collaboration/TeamCollaborationCTA";

export function TeamCollaboration() {
  return (
    <div className="min-h-screen">
      <TeamCollaborationHero />
      <TeamCollaborationBenefits />
      <TeamCollaborationHowItWorks />
      <TeamCollaborationCTA />
    </div>
  );
}


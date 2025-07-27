"use client";
import React from "react";
import { TagsHero } from "../../components/tags/TagsHero";
import { TagsFeatures } from "../../components/tags/TagsFeatures";
import { TagsUnifiedSystem } from "../../components/tags/TagsUnifiedSystem";
import { TagsCTA } from "../../components/tags/TagsCTA";

export function Tags() {
  return (
    <div className="min-h-screen">
      <TagsHero />
      <TagsFeatures />
      <TagsUnifiedSystem />
      <TagsCTA />
    </div>
  );
}


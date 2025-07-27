"use client";
import React from "react";
import { MobileAppHero } from "../../components/mobile-app/MobileAppHero";
import { MobileAppFeatures } from "../../components/mobile-app/MobileAppFeatures";
import { MobileAppDownload } from "../../components/mobile-app/MobileAppDownload";

export function MobileApp() {
  return (
    <div className="min-h-screen">
      <MobileAppHero />
      <MobileAppFeatures />
      <MobileAppDownload />
    </div>
  );
}


'use client';

import LiveAnalyticsHero from '@/components/live-analytics/LiveAnalyticsHero';
import LiveAnalyticsFeatures from '@/components/live-analytics/LiveAnalyticsFeatures';
import LiveAnalyticsWorkflow from '@/components/live-analytics/LiveAnalyticsWorkflow';
import LiveAnalyticsCTA from '@/components/live-analytics/LiveAnalyticsCTA';

export default function LiveAnalytics() {
  return (
    <div className="min-h-screen">
      <LiveAnalyticsHero />
      <LiveAnalyticsFeatures />
      <LiveAnalyticsWorkflow />
      <LiveAnalyticsCTA />
    </div>
  );
}


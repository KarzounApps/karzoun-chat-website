import React from 'react';
import AdvancedAnalyticsHero from '@/components/advanced-analytics/AdvancedAnalyticsHero';
import AdvancedAnalyticsFeatures from '@/components/advanced-analytics/AdvancedAnalyticsFeatures';

const AdvancedAnalytics = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <AdvancedAnalyticsHero />
      <AdvancedAnalyticsFeatures />
    </div>
  );
};

export default AdvancedAnalytics;


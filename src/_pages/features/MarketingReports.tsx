import React from 'react';
import MarketingReportsHero from '@/components/marketing-reports/MarketingReportsHero';
import MarketingReportsFeatures from '@/components/marketing-reports/MarketingReportsFeatures';

const MarketingReports = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <MarketingReportsHero />
      <MarketingReportsFeatures />
    </div>
  );
};

export default MarketingReports;


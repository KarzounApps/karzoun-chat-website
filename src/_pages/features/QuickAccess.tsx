import React from 'react';
import QuickAccessHero from '@/components/quick-access/QuickAccessHero';
import QuickAccessFeatures from '@/components/quick-access/QuickAccessFeatures';

const QuickAccess = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <QuickAccessHero />
      <QuickAccessFeatures />
    </div>
  );
};

export default QuickAccess;


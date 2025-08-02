import React from 'react';
import BulkActionsHero from '@/components/bulk-actions/BulkActionsHero';
import BulkActionsFeatures from '@/components/bulk-actions/BulkActionsFeatures';
import BulkActionsWorkflow from '@/components/bulk-actions/BulkActionsWorkflow';
import BulkActionsCTA from '@/components/bulk-actions/BulkActionsCTA';

const BulkActions = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <BulkActionsHero />
      <BulkActionsFeatures />
      <BulkActionsWorkflow />
      <BulkActionsCTA />
    </div>
  );
};

export default BulkActions;


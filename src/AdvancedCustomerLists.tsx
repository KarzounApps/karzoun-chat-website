import React from 'react';
import AdvancedCustomerListsHero from '@/components/advanced-customer-lists/AdvancedCustomerListsHero';
import AdvancedCustomerListsFeatures from '@/components/advanced-customer-lists/AdvancedCustomerListsFeatures';
import AdvancedCustomerListsWorkflow from '@/components/advanced-customer-lists/AdvancedCustomerListsWorkflow';

const AdvancedCustomerLists = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <AdvancedCustomerListsHero />
      <AdvancedCustomerListsFeatures />
      <AdvancedCustomerListsWorkflow />
    </div>
  );
};

export default AdvancedCustomerLists;


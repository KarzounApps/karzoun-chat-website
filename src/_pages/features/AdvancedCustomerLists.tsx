'use client';

import AdvancedCustomerListsHero from '@/components/advanced-customer-lists/AdvancedCustomerListsHero';
import AdvancedCustomerListsFeatures from '@/components/advanced-customer-lists/AdvancedCustomerListsFeatures';
import AdvancedCustomerListsWorkflow from '@/components/advanced-customer-lists/AdvancedCustomerListsWorkflow';

export default function AdvancedCustomerLists() {
  return (
    <main>
      <AdvancedCustomerListsHero />
      <AdvancedCustomerListsFeatures />
      <AdvancedCustomerListsWorkflow />
    </main>
  );
}


'use client';

import React from 'react';
import CustomerDataManagementHero from '@/components/customer-data/CustomerDataManagementHero';
import CustomerDataManagementFeatures from '@/components/customer-data/CustomerDataManagementFeatures';
import CustomerDataManagementCTA from '@/components/customer-data/CustomerDataManagementCTA';

const CustomerDataManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <CustomerDataManagementHero />
      <CustomerDataManagementFeatures />
      <CustomerDataManagementCTA />
    </div>
  );
};

export default CustomerDataManagement;


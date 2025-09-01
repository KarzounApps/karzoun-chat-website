import React from 'react';
import SupportTicketsHero from '@/components/support-tickets/SupportTicketsHero';
import SupportTicketsFeatures from '@/components/support-tickets/SupportTicketsFeatures';

const SupportTickets = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SupportTicketsHero />
      <SupportTicketsFeatures />
    </div>
  );
};

export default SupportTickets;


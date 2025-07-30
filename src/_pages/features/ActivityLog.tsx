'use client';

import ActivityLogHero from '@/components/activity-log/ActivityLogHero';
import ActivityLogFeatures from '@/components/activity-log/ActivityLogFeatures';
import ActivityLogWorkflow from '@/components/activity-log/ActivityLogWorkflow';
import ActivityLogCTA from '@/components/activity-log/ActivityLogCTA';

export default function ActivityLog() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ActivityLogHero />
      
      {/* Features Section */}
      <ActivityLogFeatures />
      
      {/* Workflow Section */}
      <ActivityLogWorkflow />
      
      {/* CTA Section */}
      <ActivityLogCTA />
    </main>
  );
}


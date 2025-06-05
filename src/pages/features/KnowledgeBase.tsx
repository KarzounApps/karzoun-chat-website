import React from 'react';
import { KnowledgeBaseHero } from '../../components/knowledgebase/KnowledgeBaseHero';
import { VisualBuilder } from '../../components/knowledgebase/VisualBuilder';
import { AIIntegration } from '../../components/knowledgebase/AIIntegration';
import { ContentManagement } from '../../components/knowledgebase/ContentManagement';
import { TeamCollaboration } from '../../components/knowledgebase/TeamCollaboration';
import { Analytics } from '../../components/knowledgebase/Analytics';
import { SuccessStories } from '../../components/knowledgebase/SuccessStories';
import { PricingCTA } from '../../components/knowledgebase/PricingCTA';

export function KnowledgeBase() {
  return (
    <div className="min-h-screen">
      <KnowledgeBaseHero />
      <VisualBuilder />
      <AIIntegration />
      <ContentManagement />
      <TeamCollaboration />
      <Analytics />
      <SuccessStories />
      <PricingCTA />
    </div>
  );
}
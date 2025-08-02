import React from 'react';
import QuickReplyTemplatesHero from '@/components/quick-reply-templates/QuickReplyTemplatesHero';
import QuickReplyTemplatesFeatures from '@/components/quick-reply-templates/QuickReplyTemplatesFeatures';
import QuickReplyTemplatesCTA from '@/components/quick-reply-templates/QuickReplyTemplatesCTA';

const QuickReplyTemplates = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <QuickReplyTemplatesHero />
      <QuickReplyTemplatesFeatures />
      <QuickReplyTemplatesCTA />
    </div>
  );
};

export default QuickReplyTemplates;


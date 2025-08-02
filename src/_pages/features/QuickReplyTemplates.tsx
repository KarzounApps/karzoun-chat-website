import React from 'react';
import QuickReplyTemplatesHero from '@/components/quick-reply-templates/QuickReplyTemplatesHero';
import QuickReplyTemplatesFeatures from '@/components/quick-reply-templates/QuickReplyTemplatesFeatures';
import QuickReplyTemplatesTrial from '@/components/quick-reply-templates/QuickReplyTemplatesTrial';

const QuickReplyTemplates = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <QuickReplyTemplatesHero />
      <QuickReplyTemplatesFeatures />
      <QuickReplyTemplatesTrial />
    </div>
  );
};

export default QuickReplyTemplates;


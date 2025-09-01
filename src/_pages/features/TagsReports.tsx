import React from 'react';
import TagsReportsHero from '@/components/tags-reports/TagsReportsHero';
import TagsReportsFeatures from '@/components/tags-reports/TagsReportsFeatures';

const TagsReports = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <TagsReportsHero />
      <TagsReportsFeatures />
    </div>
  );
};

export default TagsReports;


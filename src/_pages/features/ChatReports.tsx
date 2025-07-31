import React from 'react';
import ChatReportsHero from '@/components/chat-reports/ChatReportsHero';
import ChatReportsFeatures from '@/components/chat-reports/ChatReportsFeatures';
import ChatReportsWorkflow from '@/components/chat-reports/ChatReportsWorkflow';
import ChatReportsCTA from '@/components/chat-reports/ChatReportsCTA';

const ChatReports = () => {
  return (
    <div className="min-h-screen">
      <ChatReportsHero />
      <ChatReportsFeatures />
      <ChatReportsWorkflow />
      <ChatReportsCTA />
    </div>
  );
};

export default ChatReports;


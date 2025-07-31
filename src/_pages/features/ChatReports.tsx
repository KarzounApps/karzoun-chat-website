import React from 'react';
import ChatReportsHero from '@/components/chat-reports/ChatReportsHero';
import ChatReportsFeatures from '@/components/chat-reports/ChatReportsFeatures';
import ChatReportsCTA from '@/components/chat-reports/ChatReportsCTA';

const ChatReports = () => {
  return (
    <div className="min-h-screen">
      <ChatReportsHero />
      <ChatReportsFeatures />
      <ChatReportsCTA />
    </div>
  );
};

export default ChatReports;


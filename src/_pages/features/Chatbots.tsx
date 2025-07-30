'use client';

import ChatbotsHero from '@/components/chatbots/ChatbotsHero';
import ChatbotsFeatures from '@/components/chatbots/ChatbotsFeatures';
import ChatbotsWorkflow from '@/components/chatbots/ChatbotsWorkflow';

export default function Chatbots() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ChatbotsHero />
      
      {/* Features Section */}
      <ChatbotsFeatures />
      
      {/* Workflow Section */}
      <ChatbotsWorkflow />
    </main>
  );
}


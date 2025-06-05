import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MegaMenu } from './components/navigation/MegaMenu';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Partner } from './pages/Partner';
import { HelpCenter } from './pages/HelpCenter';
import { WabaCostCalculator } from './pages/WabaCostCalculator';
import { WhatsappWidgetGenerator } from './pages/WhatsappWidgetGenerator';
import { AiAssistantTokens } from './pages/AiAssistantTokens';
import { LiveChat } from './pages/features/LiveChat';
import { OmnichannelInbox } from './pages/features/OmnichannelInbox';
import { AiFeatures } from './pages/features/AiFeatures';
import { ChatBot } from './pages/features/ChatBot';
import { Automation } from './pages/features/Automation';
import { KnowledgeBase } from './pages/features/KnowledgeBase';
import { TicketsAndTasks } from './pages/features/TicketsAndTasks';
import { Inbox } from './pages/Inbox';

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white">
        <MegaMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/wabaCostCalculator" element={<WabaCostCalculator />} />
          <Route path="/WhatsappWidgetGenerator" element={<WhatsappWidgetGenerator />} />
          <Route path="/aiAssistantTokens" element={<AiAssistantTokens />} />
          <Route path="/features/live-chat" element={<LiveChat />} />
          <Route path="/features/omnichannel-inbox" element={<OmnichannelInbox />} />
          <Route path="/features/ai-features" element={<AiFeatures />} />
          <Route path="/features/chatbot" element={<ChatBot />} />
          <Route path="/features/automation" element={<Automation />} />
          <Route path="/features/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/features/tickets-and-tasks" element={<TicketsAndTasks />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
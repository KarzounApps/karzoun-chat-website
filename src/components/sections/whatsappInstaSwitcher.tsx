import React, { useState } from "react";
import Platforms from "./platforms";
import { WhatsAppIntegration } from "../chatbot/WhatsAppIntegration";
import { InstagramComments } from "../chatbot/InstagramComments";
import { FacebookComments } from "../chatbot/FacebookComments";
import { TelegramReplies } from "../chatbot/TelegramReplies";
import { EmailAutomation } from "../chatbot/EmailAutomation";

function WhatsappInstaSwitcher() {
  const [activeTab, setActiveTab] = useState("whatsapp");
  return (
    <div className="relative">
      <div className="absolute top-10 left-0 w-full z-10 flex items-center justify-center gap-10">
        <Platforms
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>

      {activeTab === "whatsapp" && <WhatsAppIntegration />}
      {activeTab === "instagram" && <InstagramComments />}
      {activeTab === "facebook" && <FacebookComments />}
      {activeTab === "telegram" && <TelegramReplies />}
      {activeTab === "email" && <EmailAutomation />}
    </div>
  );
}

export default WhatsappInstaSwitcher;

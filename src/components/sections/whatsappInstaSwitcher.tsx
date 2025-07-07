import React, { useState } from "react";
import Platforms from "./platforms";
import { WhatsAppIntegration } from "../chatbot/WhatsAppIntegration";
import { InstagramComments } from "../chatbot/InstagramComments";

function WhatsappInstaSwitcher() {
  const [activeTab, setActiveTab] = useState("whatsapp");
  return (
    <div className="relative">
      <div className="absolute top-10 left-0 w-full   z-10 flex items-center justify-center gap-10">
            <Platforms
          setActiveTab={setActiveTab}
          hideTabs={["email", "telegram", "facebook"]}
          activeTab={activeTab}
        //   className="bg-white"
        />
      </div>

      {activeTab === "whatsapp" && <WhatsAppIntegration />}
      {activeTab === "instagram" && <InstagramComments />}
    </div>
  );
}

export default WhatsappInstaSwitcher;

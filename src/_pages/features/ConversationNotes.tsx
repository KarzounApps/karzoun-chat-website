"use client";
import React from "react";
import { ConversationNotesHero } from "../../components/conversation-notes/ConversationNotesHero";
import { ConversationNotesFeatures } from "../../components/conversation-notes/ConversationNotesFeatures";
import { ConversationNotesHowItWorks } from "../../components/conversation-notes/ConversationNotesHowItWorks";
import { ConversationNotesAdvantages } from "../../components/conversation-notes/ConversationNotesAdvantages";
import { ConversationNotesCTA } from "../../components/conversation-notes/ConversationNotesCTA";

export function ConversationNotes() {
  return (
    <div className="min-h-screen">
      <ConversationNotesHero />
      <ConversationNotesFeatures />
      <ConversationNotesHowItWorks />
      <ConversationNotesAdvantages />
      <ConversationNotesCTA />
    </div>
  );
}


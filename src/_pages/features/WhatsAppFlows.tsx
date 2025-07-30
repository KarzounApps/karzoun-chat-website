'use client'

import React from 'react'
import WhatsAppFlowsHero from '@/components/whatsapp-flows/WhatsAppFlowsHero'
import WhatsAppFlowsFeatures from '@/components/whatsapp-flows/WhatsAppFlowsFeatures'
import WhatsAppFlowsWorkflow from '@/components/whatsapp-flows/WhatsAppFlowsWorkflow'
import WhatsAppFlowsIndustries from '@/components/whatsapp-flows/WhatsAppFlowsIndustries'
import WhatsAppFlowsCTA from '@/components/whatsapp-flows/WhatsAppFlowsCTA'

const WhatsAppFlows = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <WhatsAppFlowsHero />
      <WhatsAppFlowsFeatures />
      <WhatsAppFlowsWorkflow />
      <WhatsAppFlowsIndustries />
      <WhatsAppFlowsCTA />
    </div>
  )
}

export default WhatsAppFlows


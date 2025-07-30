'use client'

import React from 'react'
import SalesManagementHero from '@/components/sales-management/SalesManagementHero'
import SalesManagementFeatures from '@/components/sales-management/SalesManagementFeatures'
import SalesManagementWorkflow from '@/components/sales-management/SalesManagementWorkflow'
import SalesManagementIndustries from '@/components/sales-management/SalesManagementIndustries'
import SalesManagementCTA from '@/components/sales-management/SalesManagementCTA'

const SalesManagement = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SalesManagementHero />
      <SalesManagementFeatures />
      <SalesManagementWorkflow />
      <SalesManagementIndustries />
      <SalesManagementCTA />
    </div>
  )
}

export default SalesManagement


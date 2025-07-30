'use client'

import React from 'react'
import SalesManagementHero from '@/components/sales-management/SalesManagementHero'
import SalesManagementFeatures from '@/components/sales-management/SalesManagementFeatures'

const SalesManagement = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SalesManagementHero />
      <SalesManagementFeatures />
    </div>
  )
}

export default SalesManagement


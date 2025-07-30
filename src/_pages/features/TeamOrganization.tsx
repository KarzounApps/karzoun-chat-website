'use client'

import React from 'react'
import TeamOrganizationHero from '@/components/team-organization/TeamOrganizationHero'
import TeamOrganizationFeatures from '@/components/team-organization/TeamOrganizationFeatures'

const TeamOrganization = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <TeamOrganizationHero />
      <TeamOrganizationFeatures />
    </div>
  )
}

export default TeamOrganization


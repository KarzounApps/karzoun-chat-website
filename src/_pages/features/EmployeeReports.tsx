import React from 'react';
import EmployeeReportsHero from '@/components/employee-reports/EmployeeReportsHero';
import EmployeeReportsFeatures from '@/components/employee-reports/EmployeeReportsFeatures';
import EmployeeReportsCTA from '@/components/employee-reports/EmployeeReportsCTA';

const EmployeeReports = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <EmployeeReportsHero />
      <EmployeeReportsFeatures />
      <EmployeeReportsCTA />
    </div>
  );
};

export default EmployeeReports;


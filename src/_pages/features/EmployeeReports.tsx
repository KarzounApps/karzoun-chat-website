import React from 'react';
import EmployeeReportsHero from '@/components/employee-reports/EmployeeReportsHero';
import EmployeeReportsFeatures from '@/components/employee-reports/EmployeeReportsFeatures';

const EmployeeReports = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <EmployeeReportsHero />
      <EmployeeReportsFeatures />
    </div>
  );
};

export default EmployeeReports;


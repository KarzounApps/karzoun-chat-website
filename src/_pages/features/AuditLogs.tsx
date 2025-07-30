import AuditLogsHero from '@/components/audit-logs/AuditLogsHero';
import AuditLogsFeatures from '@/components/audit-logs/AuditLogsFeatures';
import AuditLogsWorkflow from '@/components/audit-logs/AuditLogsWorkflow';
import AuditLogsCTA from '@/components/audit-logs/AuditLogsCTA';

export default function AuditLogs() {
  return (
    <main className="min-h-screen">
      <AuditLogsHero />
      <AuditLogsFeatures />
      <AuditLogsWorkflow />
      <AuditLogsCTA />
    </main>
  );
}


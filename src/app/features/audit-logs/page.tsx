import { Metadata } from 'next';
import AuditLogs from '@/_pages/features/AuditLogs';

export const metadata: Metadata = {
  title: 'سجلات التدقيق - كرزون شات',
  description: 'مراقبة وتتبع جميع الإجراءات في النظام لأغراض الأمان والامتثال',
};

export default function AuditLogsPage() {
  return <AuditLogs />;
}


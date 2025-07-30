import { Metadata } from 'next';
import ActivityLog from '@/_pages/features/ActivityLog';

export const metadata: Metadata = {
  title: 'سجل النشاطات - كرزون شات',
  description: 'تتبع جميع النشاطات والتغييرات في النظام للمراجعة والتدقيق مع أدوات متقدمة للبحث والتصفية',
  keywords: 'سجل النشاطات, تتبع النشاطات, مراجعة النظام, تدقيق البيانات, أمان النظام',
};

export default function ActivityLogPage() {
  return <ActivityLog />;
}


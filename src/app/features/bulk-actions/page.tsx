import { Metadata } from 'next';
import BulkActions from '@/_pages/features/BulkActions';

export const metadata: Metadata = {
  title: 'تنفيذ إجراءات بالجملة - إدارة البيانات بكفاءة | كرزون',
  description: 'قم بتغيير حالة أو حذف أو إضافة العملاء، المحادثات والكثير عبر تحديد الكل أو البعض. وفر ساعات من العمل اليدوي مع الإجراءات المجمعة المتقدمة.',
  keywords: 'إجراءات مجمعة, إدارة البيانات, تحديد متعدد, حذف بالجملة, تغيير الحالة, إدارة العملاء, إدارة المحادثات',
};

export default function BulkActionsPage() {
  return <BulkActions />;
}


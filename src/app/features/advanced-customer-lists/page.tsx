import { Metadata } from 'next';
import AdvancedCustomerLists from '@/_pages/features/AdvancedCustomerLists';

export const metadata: Metadata = {
  title: 'قوائم العملاء المتقدمة - كرزون شات',
  description: 'إنشاء وإدارة قوائم عملاء مخصصة بناءً على معايير متعددة. قم بتقسيم عملائك إلى مجموعات ذكية لتحسين استراتيجيات التسويق والمبيعات.',
  keywords: 'قوائم العملاء, تقسيم العملاء, استهداف العملاء, تحليل العملاء, كرزون شات',
};

export default function AdvancedCustomerListsPage() {
  return <AdvancedCustomerLists />;
}


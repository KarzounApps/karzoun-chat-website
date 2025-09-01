import { Metadata } from 'next';
import MarketingReports from '@/_pages/features/MarketingReports';

export const metadata: Metadata = {
  title: 'تقارير الحملات التسويقية - تتبع أداء الحملات ومعدلات التحويل | كرزون شات',
  description: 'احصل على تحليلات شاملة لحملاتك التسويقية مع تقارير مفصلة لمعدلات التحويل وعائد الاستثمار. تتبع أداء حملاتك وحسّن استراتيجياتك التسويقية مع كرزون شات.',
  keywords: 'تقارير تسويقية, تحليلات الحملات, معدلات التحويل, عائد الاستثمار, تتبع الأداء, كرزون شات',
  openGraph: {
    title: 'تقارير الحملات التسويقية | كرزون شات',
    description: 'تتبع أداء الحملات التسويقية ومعدلات التحويل بدقة وتفصيل شامل',
    type: 'website',
  },
};

export default function MarketingReportsPage() {
  return <MarketingReports />;
}


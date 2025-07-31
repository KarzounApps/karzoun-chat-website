import { Metadata } from 'next';
import ChatReports from '@/_pages/features/ChatReports';

export const metadata: Metadata = {
  title: 'تقارير المحادثات - تحليل شامل لحجم المحادثات وأوقات الاستجابة | كرزون',
  description: 'احصل على تحليل شامل لحجم المحادثات وأوقات الاستجابة ومعدلات الرضا مع تقارير مفصلة لتحسين أداء خدمة العملاء',
  keywords: 'تقارير المحادثات, تحليل المحادثات, أوقات الاستجابة, معدلات الرضا, تحليل الأداء, خدمة العملاء',
};

export default function ChatReportsPage() {
  return <ChatReports />;
}


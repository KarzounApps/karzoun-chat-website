import { Metadata } from 'next';
import Chatbots from '@/_pages/features/Chatbots';

export const metadata: Metadata = {
  title: 'روبوتات المحادثة - كرزون شات',
  description: 'دمج سهل مع منصات المحادثة الآلية لتقليل عبء العمل وتحسين خدمة العملاء على مدار الساعة',
  keywords: 'روبوتات المحادثة, الذكاء الاصطناعي, خدمة العملاء, أتمتة المحادثات, كرزون شات',
};

export default function ChatbotsPage() {
  return <Chatbots />;
}


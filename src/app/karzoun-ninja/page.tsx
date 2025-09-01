import { Metadata } from 'next';
import KarzounNinja from '@/_pages/KarzounNinja';

export const metadata: Metadata = {
  title: 'كرزون نينجا - خدمة عملاء 24/7 | كرزون شات',
  description: 'هل يمكن أن يولِّد موقعك المزيد من العملاء المحتملين والمبيعات؟ كن العلامة التجارية رقم 1 الموثوق بها في مجالك مع خدمة عملاء كرزون نينجا المتاحة 24/7.',
  keywords: 'كرزون نينجا, خدمة عملاء, دردشة مباشرة, دعم فني, خدمة 24/7, كرزون شات',
  openGraph: {
    title: 'كرزون نينجا - خدمة عملاء 24/7',
    description: 'هل يمكن أن يولِّد موقعك المزيد من العملاء المحتملين والمبيعات؟ كن العلامة التجارية رقم 1 الموثوق بها في مجالك',
    type: 'website',
  },
};

export default function KarzounNinjaPage() {
  return <KarzounNinja />;
}


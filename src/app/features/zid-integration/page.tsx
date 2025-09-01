import { Metadata } from 'next';
import ZidIntegration from '../../../_pages/features/ZidIntegration';

export const metadata: Metadata = {
  title: 'تكامل مع منصة زد - أتمتة خدمة العملاء | كرزون',
  description: 'اربط متجرك الإلكتروني على منصة زد مع كرزون لأتمتة خدمة العملاء وإدارة الطلبات بكفاءة عالية من خلال الواتساب',
  keywords: 'زد, منصة زد, تكامل زد, خدمة العملاء, أتمتة الطلبات, واتساب بيزنس, كرزون',
  openGraph: {
    title: 'تكامل مع منصة زد - أتمتة خدمة العملاء | كرزون',
    description: 'اربط متجرك الإلكتروني على منصة زد مع كرزون لأتمتة خدمة العملاء وإدارة الطلبات بكفاءة عالية من خلال الواتساب',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تكامل مع منصة زد - أتمتة خدمة العملاء | كرزون',
    description: 'اربط متجرك الإلكتروني على منصة زد مع كرزون لأتمتة خدمة العملاء وإدارة الطلبات بكفاءة عالية من خلال الواتساب',
  },
};

export default function ZidIntegrationPage() {
  return <ZidIntegration />;
}


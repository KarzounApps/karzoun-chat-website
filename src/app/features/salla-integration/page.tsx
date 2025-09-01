import { Metadata } from 'next';
import SallaIntegration from '../../../_pages/features/SallaIntegration';

export const metadata: Metadata = {
  title: 'تكامل مع منصة سلة - أتمتة إشعارات الطلبات | كرزون',
  description: 'اربط متجرك الإلكتروني على منصة سلة مع كرزون لأتمتة إشعارات الطلبات وتحسين تجربة العملاء من خلال الواتساب',
  keywords: 'سلة، تكامل، التجارة الإلكترونية، إشعارات الطلبات، واتساب، أتمتة، السلال المتروكة',
};

export default function SallaIntegrationPage() {
  return <SallaIntegration />;
}


import { FacebookIntegration } from "@/_pages/features/FacebookIntegration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تكامل فيسبوك - ربط صفحات فيسبوك ومسنجر مع نظام المراسلة الموحد | كرزون",
  description: "اربط صفحات فيسبوك ومسنجر مع نظام المراسلة الموحد. إدارة شاملة للرسائل والتعليقات مع ردود آلية ذكية وتحليلات متقدمة.",
  keywords: "فيسبوك, مسنجر, تكامل, رسائل, تعليقات, أتمتة, كرزون",
};

export default function FacebookIntegrationPage() {
  return <FacebookIntegration />;
}


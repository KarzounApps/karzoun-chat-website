import React from 'react';
import { Check, X } from 'lucide-react';

const features = {
  "المحادثة المباشرة": {
    basic: true,
    pro: true,
    enterprise: true,
    description: "دردشة مباشرة مع الزوار"
  },
  "صندوق وارد متعدد القنوات": {
    basic: true,
    pro: true,
    enterprise: true,
    description: "دمج جميع قنوات التواصل"
  },
  "عدد المستخدمين": {
    basic: "3 مستخدمين",
    pro: "10 مستخدمين",
    enterprise: "غير محدود",
    description: "عدد المستخدمين المسموح به"
  },
  "المحادثات الشهرية": {
    basic: "1,000",
    pro: "10,000",
    enterprise: "غير محدود",
    description: "عدد المحادثات المسموح بها شهرياً"
  },
  "روبوتات المحادثة": {
    basic: "2 روبوت",
    pro: "5 روبوت",
    enterprise: "غير محدود",
    description: "عدد روبوتات المحادثة المسموح بها"
  },
  "الذكاء الاصطناعي": {
    basic: false,
    pro: true,
    enterprise: true,
    description: "دعم الذكاء الاصطناعي للردود"
  },
  "التحليلات المتقدمة": {
    basic: false,
    pro: true,
    enterprise: true,
    description: "تقارير وتحليلات متقدمة"
  },
  "API مخصص": {
    basic: false,
    pro: false,
    enterprise: true,
    description: "واجهة برمجة تطبيقات مخصصة"
  },
  "دعم متميز": {
    basic: "بريد إلكتروني",
    pro: "24/7 دردشة",
    enterprise: "مدير حساب مخصص",
    description: "مستوى الدعم المقدم"
  },
  "تخصيص الواجهة": {
    basic: "أساسي",
    pro: "متقدم",
    enterprise: "كامل",
    description: "إمكانيات تخصيص واجهة المستخدم"
  }
};

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-4 px-6 text-right border-b border-gray-200">الميزة</th>
            <th className="py-4 px-6 text-center border-b border-gray-200">
              <span className="block text-lg font-bold">الأساسية</span>
              <span className="text-sm text-gray-500">$99/شهرياً</span>
            </th>
            <th className="py-4 px-6 text-center border-b border-gray-200 bg-blue-50">
              <span className="block text-lg font-bold text-google-blue">الاحترافية</span>
              <span className="text-sm text-gray-500">$299/شهرياً</span>
            </th>
            <th className="py-4 px-6 text-center border-b border-gray-200">
              <span className="block text-lg font-bold">المؤسسات</span>
              <span className="text-sm text-gray-500">$999/شهرياً</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(features).map(([feature, values], index) => (
            <tr 
              key={feature}
              className={`hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}
            >
              <td className="py-4 px-6 border-b border-gray-200">
                <div>
                  <span className="font-medium">{feature}</span>
                  <p className="text-sm text-gray-500">{values.description}</p>
                </div>
              </td>
              <td className="py-4 px-6 text-center border-b border-gray-200">
                {typeof values.basic === 'boolean' ? (
                  values.basic ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <span className="text-sm">{values.basic}</span>
                )}
              </td>
              <td className="py-4 px-6 text-center border-b border-gray-200 bg-blue-50">
                {typeof values.pro === 'boolean' ? (
                  values.pro ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <span className="text-sm font-medium">{values.pro}</span>
                )}
              </td>
              <td className="py-4 px-6 text-center border-b border-gray-200">
                {typeof values.enterprise === 'boolean' ? (
                  values.enterprise ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <span className="text-sm">{values.enterprise}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
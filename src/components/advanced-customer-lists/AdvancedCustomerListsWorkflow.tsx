'use client';

import { motion } from 'framer-motion';
import { Filter, Target, Send, BarChart3 } from 'lucide-react';

export default function AdvancedCustomerListsWorkflow() {
  const steps = [
    {
      icon: Filter,
      title: 'تحديد المعايير',
      description: 'اختر المعايير المناسبة لتقسيم عملائك مثل قيمة الطلبات، تكرار الشراء، أو سلوك التصفح',
      details: [
        'معايير مالية (قيمة الطلبات، الإنفاق الإجمالي)',
        'معايير سلوكية (تكرار الزيارات، المنتجات المفضلة)',
        'معايير زمنية (آخر طلب، فترة النشاط)',
        'معايير جغرافية (المنطقة، المدينة)'
      ]
    },
    {
      icon: Target,
      title: 'إنشاء القائمة',
      description: 'قم بتطبيق المعايير المحددة لإنشاء قائمة عملاء مخصصة تلقائياً',
      details: [
        'تطبيق المعايير المتعددة',
        'معاينة النتائج قبل الحفظ',
        'تسمية القائمة وإضافة وصف',
        'جدولة التحديث التلقائي'
      ]
    },
    {
      icon: Send,
      title: 'تنفيذ الحملات',
      description: 'استخدم القائمة لإرسال حملات تسويقية مخصصة أو عروض خاصة',
      details: [
        'إنشاء حملات تسويقية مستهدفة',
        'إرسال عروض وخصومات مخصصة',
        'رسائل تذكيرية للسلة المهجورة',
        'حملات إعادة الاستهداف'
      ]
    },
    {
      icon: BarChart3,
      title: 'تحليل النتائج',
      description: 'راقب أداء حملاتك وقس فعالية تقسيم العملاء لتحسين استراتيجيتك',
      details: [
        'معدل فتح الرسائل والتفاعل',
        'معدل التحويل والمبيعات',
        'عائد الاستثمار للحملات',
        'تحليل سلوك العملاء المستهدفين'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          dir="rtl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            كيف تعمل قوائم العملاء المتقدمة؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            عملية بسيطة من 4 خطوات لإنشاء قوائم عملاء ذكية وتنفيذ حملات مستهدفة
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Step Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Step Content */}
              <div className="text-center" dir="rtl">
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{textAlign: 'center'}}>
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4" style={{textAlign: 'center'}}>
                  {step.description}
                </p>

                {/* Step Details */}
                <div className="space-y-2" style={{direction: 'rtl', textAlign: 'right'}}>
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2" style={{direction: 'rtl', textAlign: 'right', justifyContent: 'flex-start'}}>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm text-gray-700 flex-1" style={{textAlign: 'right', direction: 'rtl', unicodeBidi: 'embed'}}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
          dir="rtl"
        >
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              جاهز لتجربة تقسيم العملاء المتقدم؟
            </h3>
            <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
              ابدأ في إنشاء قوائم عملاء ذكية وحملات مستهدفة لزيادة مبيعاتك وتحسين تجربة العملاء
            </p>
            <div className="flex flex-col sm:flex-row-reverse gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                ابدأ الآن مجاناً
              </button>
              <button className="border border-blue-300 hover:bg-blue-100 text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                جدولة عرض توضيحي
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


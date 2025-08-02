import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const QuickReplyTemplatesCTA = () => {
  const benefits = [
    "قوالب ردود جاهزة ومخصصة",
    "توفير 70% من وقت الاستجابة",
    "دعم متعدد اللغات",
    "تحليلات وتقارير شاملة",
    "تطبيق جوال متقدم",
    "أمان وحماية عالية"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            جاهز لتحسين تواصلك مع العملاء؟
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            ابدأ الآن مع فترة تجريبية مجانية لمدة 14 يوماً. لا يلزم بطاقة ائتمان.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 flex-row-reverse">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100 text-right">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center lg:text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ابدأ تجربتك المجانية
              </h3>
              <p className="text-blue-100 mb-6">
                احصل على قوالب ردود جاهزة واكتشف كيف يمكن تحسين خدمة عملائك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <button className="order-1 sm:order-1 bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2 flex-row-reverse">
                  <ArrowLeft className="w-5 h-5" />
                  ابدأ الآن مجاناً
                </button>
                <button className="order-2 sm:order-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  جدولة عرض توضيحي
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              تحليلات وتقارير متقدمة
            </h3>
            <p className="text-blue-100 mb-6">
              تحليلات شاملة لفهم أداء خدمة العملاء وتحسين تجربة المستخدم
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">تقارير الأداء</div>
                <div className="text-blue-200 text-sm">مؤشرات مفصلة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">تحليل المحادثات</div>
                <div className="text-blue-200 text-sm">فهم احتياجات العملاء</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">تقييم المشغلين</div>
                <div className="text-blue-200 text-sm">قياس أداء الفريق</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">تنبيهات مخصصة</div>
                <div className="text-blue-200 text-sm">إشعارات ذكية</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                استكشف التحليلات
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickReplyTemplatesCTA;


import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const BulkActionsCTA = () => {
  const benefits = [
    "إجراءات مجمعة متقدمة",
    "توفير 90% من وقت المعالجة",
    "أمان وحماية البيانات",
    "تقارير مفصلة ودقيقة",
    "دعم فني متخصص",
    "تحديثات مستمرة"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            جاهز لتحسين كفاءة إدارة بياناتك؟
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
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center lg:text-right">
            <h3 className="text-2xl font-bold text-white mb-6">
              ابدأ تجربتك المجانية
            </h3>
            <p className="text-blue-100 mb-8">
              احصل على إجراءات مجمعة متقدمة واكتشف كيف يمكن تحسين كفاءة إدارة بياناتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 flex-row-reverse">
                <ArrowLeft className="w-5 h-5 rotate-180" />
                ابدأ الآن مجاناً
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                جدولة عرض توضيحي
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkActionsCTA;


'use client';

import { ArrowLeft, Settings, Zap, BarChart3, CheckCircle } from "lucide-react";

export default function KarzounNinjaWorkflow() {
  const steps = [
    {
      icon: Settings,
      title: "إعداد النظام",
      description: "قم بتكوين النظام حسب احتياجاتك الخاصة مع واجهة سهلة الاستخدام",
      details: ["تخصيص الإعدادات", "ربط الأنظمة", "تحديد المهام"]
    },
    {
      icon: Zap,
      title: "تفعيل الأتمتة",
      description: "ابدأ تشغيل العمليات الآلية واتركها تعمل بذكاء وكفاءة عالية",
      details: ["تشغيل المهام", "مراقبة الأداء", "تحسين العمليات"]
    },
    {
      icon: BarChart3,
      title: "تحليل النتائج",
      description: "احصل على تقارير مفصلة ورؤى قيمة لتحسين الأداء المستمر",
      details: ["تقارير شاملة", "رؤى ذكية", "توصيات محسنة"]
    },
    {
      icon: CheckCircle,
      title: "تحقيق النجاح",
      description: "استمتع بالنتائج المحققة ووفر الوقت والجهد لأمور أكثر أهمية",
      details: ["نتائج مضمونة", "توفير الوقت", "زيادة الإنتاجية"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            كيف يعمل كرزون نينجا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أربع خطوات بسيطة للبدء في رحلة الأتمتة الذكية وتحقيق نتائج استثنائية
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <div className="h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-6 relative">
                  {index + 1}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute right-full top-1/2 transform -translate-y-1/2 w-8">
                      <ArrowLeft className="w-6 h-6 text-blue-400 mr-2" />
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 text-sm text-gray-500">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 justify-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              جاهز لبدء رحلة الأتمتة؟
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              انضم إلى آلاف العملاء الذين حولوا أعمالهم باستخدام كرزون نينجا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 justify-center">
                ابدأ التجربة المجانية
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                تحدث مع خبير
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


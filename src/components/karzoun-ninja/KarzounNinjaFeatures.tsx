'use client';

import { Bot, Zap, Shield, BarChart3, Clock, Users } from "lucide-react";

export default function KarzounNinjaFeatures() {
  const features = [
    {
      icon: Bot,
      title: "ذكاء اصطناعي متطور",
      description: "تقنيات الذكاء الاصطناعي الحديثة لأتمتة العمليات المعقدة بدقة عالية"
    },
    {
      icon: Zap,
      title: "سرعة فائقة",
      description: "معالجة فورية للمهام والعمليات مع استجابة سريعة لجميع المتطلبات"
    },
    {
      icon: Shield,
      title: "أمان متقدم",
      description: "حماية شاملة للبيانات مع تشفير متطور وأنظمة أمان متعددة الطبقات"
    },
    {
      icon: BarChart3,
      title: "تحليلات ذكية",
      description: "تقارير تفصيلية ورؤى عميقة لتحسين الأداء واتخاذ قرارات مدروسة"
    },
    {
      icon: Clock,
      title: "عمل على مدار الساعة",
      description: "نظام يعمل 24/7 بدون توقف لضمان استمرارية العمليات"
    },
    {
      icon: Users,
      title: "دعم فني متخصص",
      description: "فريق دعم متاح دائماً لمساعدتك في جميع احتياجاتك التقنية"
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            مميزات كرزون نينجا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف القوة الحقيقية للأتمتة الذكية مع مجموعة شاملة من المميزات المتطورة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4" dir="rtl">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              أرقام تتحدث عن نفسها
            </h3>
            <p className="text-blue-100 text-lg">
              نتائج حقيقية حققها عملاؤنا باستخدام كرزون نينجا
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">+25K</div>
              <div className="text-blue-100">عميل راضٍ</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">معدل النجاح</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50%</div>
              <div className="text-blue-100">توفير في الوقت</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">دعم متواصل</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


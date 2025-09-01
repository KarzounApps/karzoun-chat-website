'use client';

import { Check, Star, ArrowLeft } from "lucide-react";

export default function KarzounNinjaPricing() {
  const plans = [
    {
      name: "المبتدئ",
      price: "99",
      period: "شهرياً",
      description: "مثالي للشركات الناشئة والمشاريع الصغيرة",
      features: [
        "حتى 1,000 عملية شهرياً",
        "دعم فني أساسي",
        "تقارير أساسية",
        "تكامل مع 5 أنظمة",
        "دعم عبر البريد الإلكتروني"
      ],
      popular: false
    },
    {
      name: "المتقدم",
      price: "299",
      period: "شهرياً",
      description: "الأنسب للشركات المتوسطة والمتنامية",
      features: [
        "حتى 10,000 عملية شهرياً",
        "دعم فني متقدم",
        "تقارير تفصيلية",
        "تكامل مع 20 نظام",
        "دعم هاتفي ومباشر",
        "تخصيص متقدم",
        "تحليلات ذكية"
      ],
      popular: true
    },
    {
      name: "المؤسسي",
      price: "999",
      period: "شهرياً",
      description: "للمؤسسات الكبيرة والشركات المتقدمة",
      features: [
        "عمليات غير محدودة",
        "دعم فني مخصص",
        "تقارير مخصصة",
        "تكامل غير محدود",
        "مدير حساب مخصص",
        "تدريب متخصص",
        "SLA مضمون",
        "أمان متقدم"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            خطط الأسعار
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختر الخطة المناسبة لاحتياجاتك وابدأ رحلة الأتمتة الذكية اليوم
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 ${
              plan.popular 
                ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-2xl scale-105' 
                : 'bg-white border-2 border-gray-200 hover:border-blue-300 shadow-lg'
            } transition-all duration-300`}>
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    الأكثر شعبية
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    ر.س
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    / {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      plan.popular ? 'text-green-300' : 'text-green-500'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 ${
                plan.popular
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                ابدأ الآن
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              جميع الخطط تشمل
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-green-500" />
                تجربة مجانية 14 يوم
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-green-500" />
                إلغاء في أي وقت
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-green-500" />
                تحديثات مجانية
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-green-500" />
                ضمان استرداد المال
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { Settings, BarChart3, Download, TrendingUp } from 'lucide-react';

const MarketingReportsWorkflow = () => {
  const steps = [
    {
      icon: Settings,
      title: "إعداد التتبع",
      description: "قم بإعداد معايير التتبع والمؤشرات التي تريد مراقبتها لحملاتك التسويقية",
      details: [
        "تحديد مصادر البيانات",
        "إعداد أهداف التحويل",
        "تخصيص المؤشرات الرئيسية"
      ]
    },
    {
      icon: BarChart3,
      title: "تحليل البيانات",
      description: "احصل على تحليلات شاملة ومفصلة لأداء حملاتك مع مؤشرات الأداء الرئيسية",
      details: [
        "تحليل معدلات التحويل",
        "مراقبة عائد الاستثمار",
        "تتبع مصادر الزيارات",
        "قياس تفاعل العملاء"
      ]
    },
    {
      icon: TrendingUp,
      title: "تحسين الأداء",
      description: "استخدم الرؤى المكتسبة لتحسين استراتيجياتك التسويقية وزيادة فعالية الحملات",
      details: [
        "تحديد نقاط القوة والضعف",
        "تحسين الحملات الحالية",
        "تطوير استراتيجيات جديدة"
      ]
    },
    {
      icon: Download,
      title: "تصدير التقارير",
      description: "احصل على تقارير مفصلة قابلة للتصدير ومشاركتها مع فريقك أو العملاء",
      details: [
        "تقارير PDF احترافية",
        "ملفات Excel تفصيلية",
        "جدولة التقارير التلقائية"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{textAlign: 'center', direction: 'rtl'}}>
            كيف تعمل تقارير الحملات التسويقية؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{textAlign: 'center', direction: 'rtl'}}>
            عملية متكاملة من 4 خطوات لتتبع وتحليل وتحسين أداء حملاتك التسويقية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 pt-8 h-full" dir="rtl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 ml-auto">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3" dir="rtl" style={{textAlign: 'right'}}>
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4" dir="rtl" style={{textAlign: 'right'}}>
                  {step.description}
                </p>
                
                <div className="space-y-2" dir="rtl">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2 text-sm text-gray-500" dir="rtl" style={{direction: 'rtl', textAlign: 'right'}}>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2" />
                      <span className="text-right flex-1" style={{direction: 'rtl', textAlign: 'right', unicodeBidi: 'embed'}}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto" dir="rtl" style={{textAlign: 'center', direction: 'rtl'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{textAlign: 'center', direction: 'rtl'}}>
              جاهز لتتبع أداء حملاتك التسويقية؟
            </h3>
            <p className="text-gray-600 mb-6" style={{textAlign: 'center', direction: 'rtl'}}>
              ابدأ الآن واحصل على رؤى عميقة حول أداء حملاتك وحسّن عائد استثمارك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors order-1">
                ابدأ الآن مجاناً
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors order-2">
                جدولة عرض توضيحي
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingReportsWorkflow;


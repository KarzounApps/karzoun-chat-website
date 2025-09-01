import { Settings, Zap, Play, BarChart3 } from 'lucide-react';

const AutomationWorkflow = () => {
  const steps = [
    {
      icon: Settings,
      title: "إعداد المحفز",
      description: "اختر الحدث أو الشرط الذي سيبدأ تشغيل مسار العمل الآلي",
      details: [
        "محفزات زمنية مجدولة",
        "أحداث العملاء والنظام",
        "شروط مخصصة ومعقدة",
        "محفزات متعددة ومتداخلة"
      ]
    },
    {
      icon: Zap,
      title: "تصميم المسار",
      description: "قم بإنشاء سلسلة من الإجراءات والشروط لتنفيذها تلقائياً",
      details: [
        "إضافة إجراءات متنوعة",
        "تحديد شروط وتفرعات",
        "ضبط التوقيتات والتأخيرات",
        "اختبار المسار قبل التفعيل"
      ]
    },
    {
      icon: Play,
      title: "تفعيل الأتمتة",
      description: "تشغيل مسار العمل ومراقبة أدائه في الوقت الفعلي",
      details: [
        "تفعيل فوري أو مجدول",
        "مراقبة التنفيذ المباشر",
        "إيقاف أو تعديل المسار",
        "إدارة الأخطاء والاستثناءات"
      ]
    },
    {
      icon: BarChart3,
      title: "تحليل النتائج",
      description: "احصل على تقارير مفصلة حول أداء مسارات العمل الآلية",
      details: [
        "تقارير أداء شاملة",
        "معدلات النجاح والفشل",
        "تحليل الوقت المُوفر",
        "توصيات للتحسين"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{textAlign: 'center', direction: 'rtl'}}>
            كيف يعمل التشغيل الآلي؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{textAlign: 'center', direction: 'rtl'}}>
            عملية بسيطة من 4 خطوات لإنشاء وإدارة مسارات العمل الآلية
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
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-blue-200"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{textAlign: 'center', direction: 'rtl'}}>
            جاهز لتجربة التشغيل الآلي؟
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" style={{textAlign: 'center', direction: 'rtl'}}>
            ابدأ الآن ووفر ساعات من العمل اليومي من خلال أتمتة مهامك المتكررة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              جدولة عرض توضيحي
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationWorkflow;


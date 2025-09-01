import React from 'react';
import { BarChart3, TrendingUp, Target, PieChart, Calendar, Download, CheckCircle } from 'lucide-react';

const MarketingReportsFeatures = () => {
  const features = [
    {
      icon: BarChart3,
      title: "تحليلات شاملة ومتقدمة",
      description: "احصل على رؤى عميقة حول أداء حملاتك التسويقية مع تقارير تفصيلية ومؤشرات أداء رئيسية",
      benefits: [
        "تتبع معدلات التحويل بدقة",
        "تحليل مصادر الزيارات",
        "قياس عائد الاستثمار (ROI)",
        "مقارنة أداء الحملات"
      ]
    },
    {
      icon: Target,
      title: "تقارير مخصصة وقابلة للتخصيص",
      description: "أنشئ تقارير مخصصة تناسب احتياجاتك مع إمكانية جدولة التقارير وتصديرها بصيغ متعددة",
      benefits: [
        "تقارير حسب الفترة الزمنية",
        "تصدير بصيغ PDF و Excel",
        "جدولة التقارير التلقائية",
        "تخصيص المؤشرات والمقاييس"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: TrendingUp,
      title: "تتبع الاتجاهات",
      description: "مراقبة اتجاهات الأداء والنمو عبر الزمن"
    },
    {
      icon: PieChart,
      title: "تحليل القطاعات",
      description: "تحليل أداء الحملات حسب القطاعات والفئات"
    },
    {
      icon: Calendar,
      title: "تقارير دورية",
      description: "تقارير يومية وأسبوعية وشهرية تلقائية"
    },
    {
      icon: Download,
      title: "تصدير متقدم",
      description: "تصدير البيانات بصيغ متعددة وقوالب جاهزة"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-right" style={{textAlign: 'center', direction: 'rtl'}}>
            ميزات متقدمة لتقارير الحملات التسويقية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right" style={{textAlign: 'center', direction: 'rtl'}}>
            كل ما تحتاجه لتتبع وتحليل أداء حملاتك التسويقية بدقة واحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>
              <div className="flex items-start gap-4 mb-6 flex-row-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-right flex-1" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>{feature.title}</h3>
                  <p className="text-gray-600 text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>{feature.description}</p>
                </div>
              </div>
              
              <div className="space-y-3" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3 flex-row-reverse text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-right flex-1" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" dir="rtl" style={{textAlign: 'center', direction: 'rtl'}}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm" dir="rtl" style={{textAlign: 'center', direction: 'rtl'}}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingReportsFeatures;


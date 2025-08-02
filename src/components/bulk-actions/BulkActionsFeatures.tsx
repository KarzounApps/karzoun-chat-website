import React from 'react';
import { CheckSquare, Users, MessageSquare, Archive, Trash2, UserPlus, CheckCircle, Settings, BarChart3, Clock, Shield, Zap } from 'lucide-react';

const BulkActionsFeatures = () => {
  const features = [
    {
      icon: CheckSquare,
      title: "تحديد ذكي متقدم",
      description: "تحديد العناصر بناءً على معايير متقدمة مثل التاريخ، الحالة، النوع، والمزيد",
      benefits: [
        "تحديد حسب الفترة الزمنية",
        "فلترة حسب الحالة والنوع",
        "تحديد عكسي وتحديد الكل",
        "حفظ معايير التحديد"
      ]
    },
    {
      icon: Settings,
      title: "إجراءات شاملة ومتنوعة",
      description: "مجموعة واسعة من الإجراءات لإدارة العملاء والمحادثات والبيانات بكفاءة",
      benefits: [
        "تغيير الحالة بالجملة",
        "حذف أو أرشفة متعدد",
        "إضافة علامات وتصنيفات",
        "تحديث البيانات الجماعي"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "توفير الوقت",
      description: "تقليل وقت المعالجة بنسبة 90%"
    },
    {
      icon: Shield,
      title: "أمان متقدم",
      description: "حماية البيانات أثناء العمليات"
    },
    {
      icon: Zap,
      title: "معالجة سريعة",
      description: "تنفيذ آلاف العمليات في ثوانٍ"
    },
    {
      icon: BarChart3,
      title: "تقارير مفصلة",
      description: "تتبع نتائج العمليات المجمعة"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ميزات متقدمة للإجراءات المجمعة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            كل ما تحتاجه لإدارة بياناتك بكفاءة وسرعة فائقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            المزيد من الميزات المتقدمة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkActionsFeatures;


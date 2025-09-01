import React from 'react';
import { Target, Filter, CheckCircle, TrendingUp, ShoppingCart, Calendar, DollarSign, Users } from 'lucide-react';

const AdvancedCustomerListsFeatures = () => {
  const features = [
    {
      icon: Target,
      title: "تقسيم ذكي متقدم",
      description: "إنشاء قوائم عملاء بناءً على سلوك الشراء، التفاعل، والخصائص الديموغرافية",
      benefits: [
        "تقسيم حسب قيمة الإنفاق",
        "تجميع حسب تكرار الشراء",
        "فلترة حسب الموقع الجغرافي",
        "تصنيف حسب مصدر العميل"
      ]
    },
    {
      icon: Filter,
      title: "معايير تقسيم شاملة",
      description: "استخدم معايير متعددة ومعقدة لإنشاء قوائم عملاء دقيقة ومفيدة",
      benefits: [
        "معايير مالية وسلوكية",
        "فترات زمنية مخصصة",
        "دمج معايير متعددة",
        "تحديث تلقائي للقوائم"
      ]
    }
  ];

  const customerListExamples = [
    {
      icon: DollarSign,
      title: "عملاء VIP",
      description: "العملاء الذين أنفقوا أكثر من 1000 ريال خلال آخر 3 أشهر",
      color: "blue",
      count: "247 عميل"
    },
    {
      icon: ShoppingCart,
      title: "مشترين متكررين",
      description: "العملاء الذين اشتروا منتج معين أكثر من 3 مرات خلال العام الماضي",
      color: "green",
      count: "892 عميل"
    },
    {
      icon: TrendingUp,
      title: "عملاء نشطين",
      description: "العملاء الذين لديهم أكثر من 5 طلبات في تاريخهم الشرائي",
      color: "purple",
      count: "1,156 عميل"
    },
    {
      icon: Calendar,
      title: "سلة مهجورة عالية القيمة",
      description: "العملاء الذين لديهم سلة مهجورة بقيمة أكثر من 500 ريال ولم يشتروا خلال الشهر الماضي",
      color: "orange",
      count: "156 عميل"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-100 text-blue-600",
      green: "bg-green-50 border-green-100 text-green-600",
      purple: "bg-purple-50 border-purple-100 text-purple-600",
      orange: "bg-orange-50 border-orange-100 text-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-right" style={{textAlign: 'center', direction: 'rtl'}}>
            ميزات متقدمة لتقسيم العملاء
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right" style={{textAlign: 'center', direction: 'rtl'}}>
            أدوات قوية لإنشاء قوائم عملاء ذكية ومخصصة لاحتياجاتك التسويقية
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

        {/* Customer List Examples */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-right" style={{textAlign: 'center', direction: 'rtl'}}>
              أمثلة على قوائم العملاء
            </h3>
            <p className="text-lg text-gray-600 text-right" style={{textAlign: 'center', direction: 'rtl'}}>
              اكتشف كيف يمكن تقسيم عملائك بناءً على معايير مختلفة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerListExamples.map((example, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${getColorClasses(example.color)}`} dir="rtl">
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${example.color === 'blue' ? 'bg-blue-100' : example.color === 'green' ? 'bg-green-100' : example.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'}`}>
                      <example.icon className={`w-5 h-5 ${example.color === 'blue' ? 'text-blue-600' : example.color === 'green' ? 'text-green-600' : example.color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`} />
                    </div>
                  </div>
                  <div className="flex-1 text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>
                    <div className="flex items-center justify-between mb-2 flex-row-reverse">
                      <h4 className="text-lg font-bold text-gray-900 text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>{example.title}</h4>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${example.color === 'blue' ? 'bg-blue-100 text-blue-600' : example.color === 'green' ? 'bg-green-100 text-green-600' : example.color === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'}`}>
                        {example.count}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>{example.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedCustomerListsFeatures;


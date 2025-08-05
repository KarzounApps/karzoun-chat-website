'use client';

import { motion } from 'framer-motion';
import { 
  Filter, 
  Target, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Calendar,
  DollarSign,
  BarChart3
} from 'lucide-react';

export default function AdvancedCustomerListsFeatures() {
  const mainFeatures = [
    {
      icon: Filter,
      title: 'تقسيم ذكي متقدم',
      description: 'قم بإنشاء قوائم عملاء مخصصة باستخدام معايير متعددة ومعقدة لاستهداف دقيق',
      benefits: [
        'معايير متعددة في استعلام واحد',
        'تحديث تلقائي للقوائم',
        'حفظ المعايير المخصصة',
        'تصدير القوائم بصيغ متعددة'
      ]
    },
    {
      icon: Target,
      title: 'استهداف دقيق للعملاء',
      description: 'استهدف العملاء المناسبين في الوقت المناسب بناءً على سلوكهم وتفاعلهم',
      benefits: [
        'تحليل سلوك الشراء',
        'تتبع تفاعل العملاء',
        'توقع احتياجات العملاء',
        'تخصيص العروض والحملات'
      ]
    }
  ];

  const segmentationExamples = [
    {
      icon: TrendingUp,
      title: 'عملاء عالي القيمة',
      description: 'العملاء الذين أنفقوا أكثر من 1000 ريال في آخر 3 أشهر',
      color: 'blue'
    },
    {
      icon: ShoppingCart,
      title: 'عملاء متكررين',
      description: 'العملاء الذين اشتروا منتج معين أكثر من 3 مرات في السنة الماضية',
      color: 'green'
    },
    {
      icon: Users,
      title: 'عملاء نشطين',
      description: 'العملاء الذين لديهم أكثر من 5 طلبات في تاريخهم',
      color: 'purple'
    },
    {
      icon: Calendar,
      title: 'عملاء فئة منتجات',
      description: 'العملاء الذين اشتروا منتجات من فئة معينة',
      color: 'indigo'
    },
    {
      icon: DollarSign,
      title: 'سلة مهجورة عالية القيمة',
      description: 'عملاء لديهم سلة مهجورة بقيمة أكثر من 500 ريال ولم يطلبوا لشهر',
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: 'تحليلات متقدمة',
      description: 'تقارير مفصلة عن أداء كل قائمة عملاء وفعالية الحملات',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      indigo: 'text-indigo-600',
      orange: 'text-orange-600',
      teal: 'text-teal-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          dir="rtl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مميزات متقدمة لتقسيم العملاء
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استفد من أحدث تقنيات تحليل البيانات لإنشاء قوائم عملاء ذكية ومخصصة
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              dir="rtl"
              style={{textAlign: 'right', direction: 'rtl'}}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1" style={{textAlign: 'right', direction: 'rtl'}}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{textAlign: 'right'}}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4" style={{textAlign: 'right'}}>
                    {feature.description}
                  </p>
                  <div className="space-y-2" style={{direction: 'rtl', textAlign: 'right'}}>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2" style={{direction: 'rtl', textAlign: 'right', justifyContent: 'flex-start'}}>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-sm text-gray-700 flex-1" style={{textAlign: 'right', direction: 'rtl', unicodeBidi: 'embed'}}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Segmentation Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          dir="rtl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            أمثلة على تقسيم العملاء
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اكتشف كيف يمكنك استخدام معايير متعددة لإنشاء قوائم عملاء مخصصة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segmentationExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl p-6 border ${getColorClasses(example.color)}`}
              dir="rtl"
            >
              <div className="flex items-center gap-3 mb-3">
                <example.icon className={`w-6 h-6 ${getIconColorClasses(example.color)}`} />
                <h4 className="font-bold text-lg">{example.title}</h4>
              </div>
              <p className="text-sm leading-relaxed">{example.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


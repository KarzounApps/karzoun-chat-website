'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Activity, Users, Clock, Target } from 'lucide-react';

export default function LiveAnalyticsFeatures() {
  const features = [
    {
      icon: BarChart3,
      title: "لوحة التحكم الحية",
      description: "مراقبة جميع المؤشرات والبيانات في لوحة تحكم واحدة محدثة لحظياً",
      benefits: [
        "عرض البيانات في الوقت الفعلي",
        "مؤشرات أداء قابلة للتخصيص",
        "تحديث تلقائي للبيانات"
      ]
    },
    {
      icon: TrendingUp,
      title: "تحليل الاتجاهات",
      description: "تتبع الاتجاهات والأنماط لفهم سلوك العملاء واتخاذ قرارات مدروسة",
      benefits: [
        "تحليل الاتجاهات الزمنية",
        "توقع الأحمال المستقبلية",
        "تحديد الأنماط المتكررة"
      ]
    },
    {
      icon: Activity,
      title: "مراقبة النشاط المباشر",
      description: "تتبع نشاط العملاء والفريق لحظة بلحظة مع إشعارات فورية",
      benefits: [
        "تتبع النشاط في الوقت الفعلي",
        "إشعارات فورية للأحداث المهمة",
        "مراقبة أداء الفريق"
      ]
    },
    {
      icon: Users,
      title: "تحليل سلوك العملاء",
      description: "فهم عميق لسلوك العملاء وتفضيلاتهم من خلال التحليلات المتقدمة",
      benefits: [
        "تحليل رحلة العميل",
        "تتبع نقاط التفاعل",
        "قياس رضا العملاء"
      ]
    },
    {
      icon: Clock,
      title: "تقارير الاستجابة",
      description: "قياس أوقات الاستجابة وكفاءة الخدمة مع تحليلات مفصلة",
      benefits: [
        "قياس أوقات الاستجابة",
        "تحليل كفاءة الفريق",
        "تحسين جودة الخدمة"
      ]
    },
    {
      icon: Target,
      title: "مؤشرات الأداء الرئيسية",
      description: "تتبع مؤشرات الأداء الرئيسية مع أهداف قابلة للقياس",
      benefits: [
        "مؤشرات أداء قابلة للتخصيص",
        "تحديد الأهداف والمعايير",
        "تقارير أداء شاملة"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            مميزات التحليلات الحية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            احصل على رؤية شاملة لأداء خدمة العملاء مع أدوات تحليل متقدمة ومؤشرات دقيقة
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3 text-right">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


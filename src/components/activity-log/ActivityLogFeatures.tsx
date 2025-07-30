'use client';

import { motion } from 'framer-motion';
import { Activity, Clock, Shield, Search, FileText, Users } from 'lucide-react';

export default function ActivityLogFeatures() {
  const features = [
    {
      icon: Activity,
      title: "تتبع النشاطات الشامل",
      description: "مراقبة جميع الأحداث والتغييرات في النظام بدقة عالية",
      benefits: [
        "تسجيل تلقائي لجميع الأحداث",
        "تتبع تغييرات البيانات",
        "مراقبة نشاطات المستخدمين"
      ]
    },
    {
      icon: Clock,
      title: "السجل الزمني المفصل",
      description: "تسجيل دقيق لأوقات وتواريخ جميع النشاطات والأحداث",
      benefits: [
        "طوابع زمنية دقيقة",
        "ترتيب زمني للأحداث",
        "تتبع المدة الزمنية للعمليات"
      ]
    },
    {
      icon: Shield,
      title: "الأمان والتدقيق",
      description: "حماية متقدمة للبيانات مع إمكانية المراجعة والتدقيق الشامل",
      benefits: [
        "تشفير البيانات الحساسة",
        "مراجعة أمنية شاملة",
        "امتثال لمعايير التدقيق"
      ]
    },
    {
      icon: Search,
      title: "البحث والتصفية المتقدمة",
      description: "أدوات بحث قوية للعثور على النشاطات والأحداث بسرعة",
      benefits: [
        "بحث نصي متقدم",
        "تصفية حسب التاريخ والنوع",
        "فهرسة ذكية للبيانات"
      ]
    },
    {
      icon: FileText,
      title: "التقارير التفصيلية",
      description: "إنشاء تقارير شاملة ومفصلة عن النشاطات والأحداث",
      benefits: [
        "تقارير قابلة للتخصيص",
        "تصدير بصيغ متعددة",
        "جدولة التقارير التلقائية"
      ]
    },
    {
      icon: Users,
      title: "إدارة الصلاحيات",
      description: "تحكم دقيق في صلاحيات الوصول والعرض للسجلات",
      benefits: [
        "مستويات صلاحيات متعددة",
        "تحكم في الوصول للبيانات",
        "تتبع صلاحيات المستخدمين"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            مميزات سجل النشاطات
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            احصل على رؤية شاملة لجميع النشاطات في نظامك مع أدوات متقدمة للمراقبة والتدقيق
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
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
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

              {/* Benefits List */}
              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3 text-right">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
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


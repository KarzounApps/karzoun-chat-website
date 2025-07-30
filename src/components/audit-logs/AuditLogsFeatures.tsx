'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Search, FileText, Lock, Users } from 'lucide-react';
import { Check } from 'lucide-react';

export default function AuditLogsFeatures() {
  const features = [
    {
      icon: Shield,
      title: "مراقبة الأمان الشاملة",
      description: "تتبع جميع الأنشطة الأمنية والوصول للنظام بدقة عالية",
      benefits: [
        "تسجيل محاولات تسجيل الدخول",
        "مراقبة التغييرات الأمنية",
        "تتبع الصلاحيات والأذونات"
      ]
    },
    {
      icon: Clock,
      title: "السجل الزمني المفصل",
      description: "تسجيل دقيق لأوقات وتواريخ جميع الإجراءات والأحداث",
      benefits: [
        "طوابع زمنية دقيقة",
        "ترتيب زمني للأحداث",
        "تتبع مدة العمليات"
      ]
    },
    {
      icon: Search,
      title: "البحث والتصفية المتقدمة",
      description: "أدوات بحث قوية للعثور على السجلات والأحداث بسرعة",
      benefits: [
        "بحث نصي متقدم",
        "تصفية حسب المعايير",
        "فهرسة ذكية للبيانات"
      ]
    },
    {
      icon: FileText,
      title: "التقارير والامتثال",
      description: "إنشاء تقارير شاملة للامتثال والمراجعة الأمنية",
      benefits: [
        "تقارير قابلة للتخصيص",
        "امتثال للمعايير الدولية",
        "تصدير بصيغ متعددة"
      ]
    },
    {
      icon: Lock,
      title: "الحماية والتشفير",
      description: "حماية متقدمة للسجلات مع تشفير البيانات الحساسة",
      benefits: [
        "تشفير البيانات الحساسة",
        "حماية من التلاعب",
        "نسخ احتياطية آمنة"
      ]
    },
    {
      icon: Users,
      title: "إدارة المستخدمين",
      description: "تتبع نشاطات المستخدمين وإدارة الصلاحيات بدقة",
      benefits: [
        "تتبع نشاطات المستخدمين",
        "إدارة الأدوار والصلاحيات",
        "مراقبة الجلسات النشطة"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            مميزات سجلات التدقيق
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            احصل على رؤية شاملة لجميع الأنشطة في نظامك مع أدوات متقدمة للمراقبة والتدقيق والامتثال
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              dir="rtl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3 text-right">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
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


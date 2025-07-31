'use client';

import { motion } from 'framer-motion';
import { Settings, BarChart3, Eye, TrendingUp } from 'lucide-react';

export default function LiveAnalyticsWorkflow() {
  const steps = [
    {
      number: "01",
      icon: Settings,
      title: "إعداد المؤشرات",
      description: "قم بتكوين المؤشرات والمقاييس التي تريد مراقبتها"
    },
    {
      number: "02", 
      icon: BarChart3,
      title: "جمع البيانات",
      description: "يبدأ النظام في جمع البيانات وتحليلها تلقائياً"
    },
    {
      number: "03",
      icon: Eye,
      title: "المراقبة المباشرة",
      description: "راقب الأداء والمؤشرات في الوقت الفعلي"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "التحليل والتحسين",
      description: "احصل على رؤى قابلة للتنفيذ لتحسين الأداء"
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
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
            كيف تعمل التحليلات الحية؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            خطوات بسيطة للحصول على تحليلات فورية ومؤشرات أداء دقيقة لخدمة العملاء
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


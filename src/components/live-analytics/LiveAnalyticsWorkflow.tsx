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

        {/* Analytics Dashboard Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              مثال على لوحة التحليلات الحية
            </h3>
            <p className="text-gray-600">
              شاهد كيف تبدو البيانات والمؤشرات في الوقت الفعلي
            </p>
          </div>

          {/* Dashboard Mock */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">متصل الآن</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">لوحة التحليلات الحية</h4>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">127</div>
                <div className="text-sm text-gray-600">محادثات نشطة</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">2.3 دقيقة</div>
                <div className="text-sm text-gray-600">متوسط الاستجابة</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-1">94%</div>
                <div className="text-sm text-gray-600">معدل الرضا</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">15</div>
                <div className="text-sm text-gray-600">فريق متاح</div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-gray-50 rounded-lg h-32 flex items-center justify-center">
              <div className="text-gray-500 text-sm">رسم بياني للأداء في الوقت الفعلي</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


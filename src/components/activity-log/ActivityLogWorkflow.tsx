'use client';

import { motion } from 'framer-motion';
import { Settings, Activity, Search, FileText } from 'lucide-react';

export default function ActivityLogWorkflow() {
  const steps = [
    {
      number: "01",
      icon: Settings,
      title: "إعداد النظام",
      description: "قم بتكوين إعدادات سجل النشاطات وتحديد الأحداث المراد تتبعها"
    },
    {
      number: "02", 
      icon: Activity,
      title: "التتبع التلقائي",
      description: "يبدأ النظام في تسجيل جميع النشاطات والتغييرات تلقائياً"
    },
    {
      number: "03",
      icon: Search,
      title: "البحث والتصفية",
      description: "استخدم أدوات البحث المتقدمة للعثور على النشاطات المحددة"
    },
    {
      number: "04",
      icon: FileText,
      title: "التقارير والتحليل",
      description: "أنشئ تقارير مفصلة وحلل البيانات لاتخاذ قرارات مدروسة"
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            كيف يعمل سجل النشاطات؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            خطوات بسيطة لإعداد وتشغيل نظام تتبع النشاطات الشامل لنظامك
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto -mt-16 mb-4 relative z-10">
                  <step.icon className="w-6 h-6 text-blue-600" />
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

        {/* Activity Log Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            مثال على سجل النشاطات
          </h3>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">سجل النشاطات</h4>
                <div className="flex gap-2">
                  <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">اليوم</span>
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm">هذا الأسبوع</span>
                </div>
              </div>
            </div>

            {/* Activity Items */}
            <div className="divide-y divide-gray-100">
              {[
                {
                  time: "منذ 5 دقائق",
                  user: "أحمد محمد",
                  action: "قام بتسجيل الدخول",
                  type: "تسجيل دخول",
                  status: "نجح"
                },
                {
                  time: "منذ 15 دقيقة",
                  user: "سارة العتيبي", 
                  action: "أضافت عميل جديد",
                  type: "إضافة بيانات",
                  status: "نجح"
                },
                {
                  time: "منذ 30 دقيقة",
                  user: "خالد الشمري",
                  action: "حدث بيانات العميل",
                  type: "تعديل بيانات",
                  status: "نجح"
                },
                {
                  time: "منذ ساعة",
                  user: "نظام",
                  action: "نسخ احتياطي تلقائي",
                  type: "نسخ احتياطي",
                  status: "نجح"
                }
              ].map((activity, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Activity className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {activity.user} {activity.action}
                        </p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {activity.type}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {activity.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


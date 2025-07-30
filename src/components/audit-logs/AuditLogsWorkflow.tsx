'use client';

import { motion } from 'framer-motion';
import { Settings, Activity, Search, BarChart3 } from 'lucide-react';

export default function AuditLogsWorkflow() {
  const steps = [
    {
      number: "01",
      icon: Settings,
      title: "إعداد النظام",
      description: "قم بتكوين إعدادات سجلات التدقيق وتحديد الأحداث المراد تتبعها"
    },
    {
      number: "02", 
      icon: Activity,
      title: "التسجيل التلقائي",
      description: "يبدأ النظام في تسجيل جميع الأنشطة والإجراءات تلقائياً"
    },
    {
      number: "03",
      icon: Search,
      title: "البحث والمراجعة",
      description: "استخدم أدوات البحث المتقدمة لمراجعة السجلات والأحداث"
    },
    {
      number: "04",
      icon: BarChart3,
      title: "التقارير والامتثال",
      description: "أنشئ تقارير مفصلة للامتثال والمراجعة الأمنية"
    }
  ];

  const auditEntries = [
    {
      user: "أحمد محمد",
      action: "تسجيل دخول ناجح",
      time: "منذ 5 دقائق",
      type: "أمان",
      status: "نجح",
      ip: "192.168.1.100"
    },
    {
      user: "سارة العتيبي", 
      action: "تعديل صلاحيات المستخدم",
      time: "منذ 15 دقيقة",
      type: "إدارة",
      status: "نجح",
      ip: "192.168.1.105"
    },
    {
      user: "خالد الشمري",
      action: "محاولة وصول غير مصرح",
      time: "منذ 30 دقيقة", 
      type: "أمان",
      status: "فشل",
      ip: "192.168.1.200"
    },
    {
      user: "نظام التدقيق",
      action: "نسخ احتياطي للسجلات",
      time: "منذ ساعة",
      type: "نظام",
      status: "نجح",
      ip: "localhost"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Workflow Steps */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            كيف تعمل سجلات التدقيق؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            خطوات بسيطة لإعداد وتشغيل نظام تدقيق شامل لمراقبة الأمان والامتثال
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Audit Log Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">مثال على سجلات التدقيق</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden" dir="rtl">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">سجلات التدقيق</h4>
                <div className="flex gap-2">
                  <button className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-sm">
                    اليوم
                  </button>
                  <button className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded text-sm">
                    هذا الأسبوع
                  </button>
                </div>
              </div>
            </div>

            {/* Audit Entries */}
            <div className="divide-y divide-gray-100">
              {auditEntries.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        entry.status === 'نجح' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{entry.user}</div>
                        <div className="text-sm text-gray-600">{entry.action}</div>
                        <div className="text-xs text-gray-500">IP: {entry.ip}</div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-600">{entry.time}</div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          entry.type === 'أمان' ? 'bg-red-100 text-red-700' :
                          entry.type === 'إدارة' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {entry.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          entry.status === 'نجح' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {entry.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


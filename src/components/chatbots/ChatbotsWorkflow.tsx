'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Settings, Bot, CheckCircle } from 'lucide-react';

export default function ChatbotsWorkflow() {
  const workflowSteps = [
    {
      step: "01",
      icon: Settings,
      title: "إعداد الروبوت",
      description: "قم بإعداد وتخصيص روبوت المحادثة حسب احتياجات عملك وصناعتك"
    },
    {
      step: "02",
      icon: MessageSquare,
      title: "تدريب الذكاء الاصطناعي",
      description: "درب الروبوت على الأسئلة الشائعة والردود المناسبة لعملائك"
    },
    {
      step: "03",
      icon: Bot,
      title: "تفعيل الروبوت",
      description: "فعل الروبوت على منصات المحادثة المختلفة وابدأ في خدمة العملاء"
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "مراقبة وتحسين",
      description: "راقب أداء الروبوت وحسن من ردوده بناءً على تفاعل العملاء"
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            كيف تعمل روبوتات المحادثة؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            خطوات بسيطة لإعداد وتشغيل روبوت المحادثة الذكي لعملك
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-6 relative z-10">
                {step.step}
              </div>

              {/* Connection Line */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-blue-200 -z-10 transform translate-x-8" />
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Chat Demo Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              مثال على محادثة مع الروبوت
            </h3>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="space-y-4">
                {/* Customer Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                    <p className="text-sm">مرحبا، أريد معرفة أوقات العمل</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                    <div className="flex items-center mb-2">
                      <Bot className="w-4 h-4 text-blue-600 ml-2" />
                      <span className="text-xs font-semibold text-blue-600">روبوت المساعدة</span>
                    </div>
                    <p className="text-sm">مرحباً بك! أوقات العمل لدينا من الأحد إلى الخميس من 9 صباحاً حتى 6 مساءً. هل تحتاج لمساعدة أخرى؟</p>
                  </div>
                </div>

                {/* Customer Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                    <p className="text-sm">نعم، كيف يمكنني حجز موعد؟</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                    <div className="flex items-center mb-2">
                      <Bot className="w-4 h-4 text-blue-600 ml-2" />
                      <span className="text-xs font-semibold text-blue-600">روبوت المساعدة</span>
                    </div>
                    <p className="text-sm">يمكنك حجز موعد عبر الرابط التالي أو الاتصال على رقم 123456789. سأقوم بتحويلك لأحد المختصين لمساعدتك.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


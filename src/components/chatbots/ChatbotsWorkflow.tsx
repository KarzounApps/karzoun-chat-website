'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Settings, Bot, CheckCircle, Zap, MessageCircle } from 'lucide-react';

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

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              مميزات روبوتات المحادثة المتقدمة
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* تخصيص مرن */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      تخصيص مرن
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      إعداد وتخصيص الروبوتات حسب احتياجات عملك
                    </p>
                  </div>
                </div>
              </div>

              {/* أتمتة كاملة */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      أتمتة كاملة
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      تقليل عبء العمل من خلال أتمتة المحادثات الروتينية
                    </p>
                  </div>
                </div>
              </div>

              {/* ردود فورية */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      ردود فورية
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      إجابات سريعة ودقيقة على استفسارات العملاء على مدار الساعة
                    </p>
                  </div>
                </div>
              </div>

              {/* ذكاء اصطناعي */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Bot className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      ذكاء اصطناعي
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      روبوتات ذكية تفهم وتتفاعل مع العملاء بطريقة طبيعية
                    </p>
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


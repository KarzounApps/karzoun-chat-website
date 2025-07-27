import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Users, FileText, MessageCircle 
} from 'lucide-react';

export function ConversationNotesHowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'تحويل ملاحظة فورية',
      description: 'حول أي رسالة إلى ملاحظة داخلية بنقرة واحدة',
      step: '01',
    },
    {
      icon: Users,
      title: 'الإشارة إلى الزملاء',
      description: 'اشر إلى زميل في الفريق لإشراكه في المحادثة بسهولة',
      step: '02',
    },
    {
      icon: FileText,
      title: 'إضافة ملاحظات وتنسيق',
      description: 'أضف ملاحظات مفصلة واستخدم التنسيق الغني لتوضيح الأفكار',
      step: '03',
    },
    {
      icon: ArrowRight,
      title: 'إدارة الإجراءات',
      description: 'تتبع الإجراءات والمهام المطلوبة من خلال الملاحظات',
      step: '04',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            كيف تعمل ملاحظات المحادثة؟
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-google-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <div className="w-16 h-16 bg-google-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-google-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


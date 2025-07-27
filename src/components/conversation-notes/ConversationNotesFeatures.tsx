import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Users, FileText, 
  Zap, Star, TrendingUp 
} from 'lucide-react';

export function ConversationNotesFeatures() {
  const features = [
    {
      icon: MessageSquare,
      title: 'ملاحظات فورية داخل المحادثات',
      description: 'وفر الوقت والجهد بإضافة ملاحظات مباشرة داخل المحادثات',
    },
    {
      icon: Users,
      title: 'انتقال سلس',
      description: 'انقل المحادثة إلى الزملاء مع الاحتفاظ بالسياق والملاحظات',
    },
    {
      icon: FileText,
      title: 'تنبيهات فورية',
      description: 'استخدم @ للإشارة إلى زميل وإرسال تنبيه فوري لضمان استجابة سريعة',
    },
    {
      icon: Zap,
      title: 'تنسيق غني',
      description: 'نسق الملاحظات بتنسيق نصي غني لتوضيح الأفكار والمعلومات',
    },
    {
      icon: Star,
      title: 'تجربة عملاء أفضل',
      description: 'تطوير العمل بالحصول على آراء وملاحظات من الفريق',
    },
    {
      icon: TrendingUp,
      title: 'إنتاجية أعلى',
      description: 'احتفظ بسجل واضح يسرّع الردود ويحد من الأخطاء المتكررة.',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            لماذا ملاحظات المحادثة؟
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-google-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-google-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


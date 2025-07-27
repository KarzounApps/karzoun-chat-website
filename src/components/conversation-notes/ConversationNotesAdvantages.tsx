import React from 'react';
import { motion } from 'framer-motion';
import { Check, Monitor } from 'lucide-react';

export function ConversationNotesAdvantages() {
  const advantages = [
    'استخدم الملاحظات لتسهيل التواصل، وتقليل الأخطاء، وتحسين تجربة العملاء بفعالية',
    'أضف الملاحظات العربية بسهولة للمحادثة لتوضيح تفاصيل أخرى',
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ملاحظات أكثر وضوحاً، أداء أكثر تميزاً
            </h2>
            
            <div className="space-y-4 mb-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">
                    {advantage}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="absolute top-4 right-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-4 right-16 w-3 h-3 bg-green-400 rounded-full"></div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Monitor className="w-8 h-8 text-google-blue" />
                  <div>
                    <h3 className="font-semibold text-gray-900">واجهة الملاحظات</h3>
                    <p className="text-sm text-gray-500">تفاعل سهل ومرن</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 border-r-4 border-blue-400 p-3 rounded">
                    <p className="text-sm text-gray-700">ملاحظة: تحقق من تفاصيل الطلب</p>
                  </div>
                  <div className="bg-yellow-50 border-r-4 border-yellow-400 p-3 rounded">
                    <p className="text-sm text-gray-700">@أحمد: يرجى متابعة هذا الطلب</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


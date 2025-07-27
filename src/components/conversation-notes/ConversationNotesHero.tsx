import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function ConversationNotesHero() {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-10"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ناقش مع فريقك، تميّز مع عملائك
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              تواصل داخلي لحل استفسارات العملاء بكفاءة
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">
              صندوق وارد يجمع الملاحظات الداخلية سلطة
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                عرض توضيحي
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-google-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                ابدأ الآن مجاناً
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mock Chat Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl mx-auto"
            >
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    ع
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">عميل</p>
                    <p className="text-sm text-gray-500">مرحباً، أحتاج مساعدة بخصوص الاشتراك</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-r-4 border-yellow-400 p-3 rounded">
                <p className="text-sm text-gray-700">ملاحظة داخلية: تحقق من حالة الاشتراك</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


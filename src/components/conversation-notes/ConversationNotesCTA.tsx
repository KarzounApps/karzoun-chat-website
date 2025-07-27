import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ConversationNotesCTA() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            جاهز للاستفادة من ملاحظات المحادثة؟
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            ابدأ الآن مجاناً - فترة تجريبية لمدة 14 يوماً بدون بطاقة ائتمان
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg transition-colors"
            >
              عرض توضيحي
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-google-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-colors flex items-center gap-2"
            >
              ابدأ الآن مجاناً
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


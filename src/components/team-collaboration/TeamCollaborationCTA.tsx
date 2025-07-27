import React from 'react';
import { motion } from 'framer-motion';

export function TeamCollaborationCTA() {
  return (
    <div className="py-24 bg-gradient-to-b from-google-blue to-blue-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            جاهز للاستفادة من تعاون الفريق؟
          </h2>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            ابدأ الآن مع فترة تجريبية مجانية لمدة 14 يومًا – بدون بطاقة ائتمان. 
            تواصل مع عملائك بذكاء، نظّم عمل فريقك، وزِد المبيعات عبر صندوق الوارد المشترك.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-google-blue hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              ابدأ الآن مجانا
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-google-blue px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              عرض توضيحي
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


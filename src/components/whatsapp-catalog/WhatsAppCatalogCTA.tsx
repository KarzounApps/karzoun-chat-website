import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function WhatsAppCatalogCTA() {
  const benefits = [
    'زيادة المبيعات بنسبة تصل إلى 300%',
    'تقليل وقت معالجة الطلبات بنسبة 80%',
    'تحسين تجربة العملاء وزيادة الرضا',
    'أتمتة كاملة لعملية البيع والشراء'
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ابدأ في بيع منتجاتك عبر
              <span className="block text-green-300 mt-2">واتساب اليوم</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              انضم إلى آلاف التجار الذين يستخدمون كتالوج واتساب لزيادة مبيعاتهم
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-colors flex items-center gap-2 shadow-lg"
          >
            إنشاء كتالوج مجاني
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-900 transition-colors"
          >
            طلب عرض توضيحي
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}


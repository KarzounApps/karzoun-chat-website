'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';

export default function AuditLogsCTA() {
  const benefits = [
    "مراقبة شاملة للأمان والامتثال",
    "تسجيل تلقائي لجميع الأنشطة",
    "تقارير مفصلة وقابلة للتخصيص",
    "بحث وتصفية متقدمة",
    "حماية وتشفير البيانات",
    "دعم فني متخصص"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ابدأ في استخدام سجلات التدقيق اليوم
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              انضم إلى آلاف الشركات التي تستخدم سجلات التدقيق لمراقبة الأمان والامتثال بكفاءة عالية.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-right"
                >
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                ابدأ التجربة المجانية
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                تحدث مع خبير
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


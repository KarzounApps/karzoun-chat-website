'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';

export default function ActivityLogCTA() {
  const stats = [
    {
      number: "99.9%",
      label: "دقة التتبع"
    },
    {
      number: "24/7",
      label: "مراقبة مستمرة"
    },
    {
      number: "100%",
      label: "أمان البيانات"
    },
    {
      number: "95%",
      label: "رضا العملاء"
    }
  ];

  const benefits = [
    "تتبع شامل لجميع النشاطات",
    "أمان وحماية متقدمة للبيانات",
    "تقارير مفصلة وقابلة للتخصيص",
    "بحث وتصفية متقدمة",
    "واجهة سهلة الاستخدام",
    "دعم فني متخصص"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ابدأ في استخدام سجل النشاطات اليوم
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              انضم إلى آلاف الشركات التي تستخدم سجل النشاطات لمراقبة وتدقيق أنظمتها بكفاءة عالية.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                ابدأ التجربة المجانية
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                تحدث مع خبير
              </button>
            </div>

            <p className="text-blue-200 text-sm mt-4">
              إعداد سريع في أقل من 10 دقائق
            </p>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-6 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                جرب سجل النشاطات مجاناً
              </h3>
              <p className="text-blue-100 text-center leading-relaxed">
                احصل على نظام تتبع شامل لنشاطات نظامك وابدأ في مراقبة وتدقيق جميع العمليات خلال دقائق.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


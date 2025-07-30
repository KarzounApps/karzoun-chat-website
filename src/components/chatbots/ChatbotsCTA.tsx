'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Clock, BarChart3, CheckCircle, ArrowLeft } from 'lucide-react';

export default function ChatbotsCTA() {
  const stats = [
    {
      icon: MessageSquare,
      number: "90%",
      label: "تحسن في سرعة الاستجابة"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "خدمة متواصلة"
    },
    {
      icon: Bot,
      number: "80%",
      label: "تقليل في عبء العمل"
    },
    {
      icon: BarChart3,
      number: "95%",
      label: "رضا العملاء"
    }
  ];

  const benefits = [
    "ردود فورية وذكية",
    "تقليل تكاليف خدمة العملاء",
    "دعم متعدد اللغات",
    "تكامل مع جميع المنصات",
    "تحليلات مفصلة للأداء",
    "تحسين مستمر للخدمة"
  ];

  return (
    <section className="py-20 text-white" dir="rtl" style={{
      background: `linear-gradient(135deg, #06142E 0%, #0B2A52 100%)`
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <p className="text-blue-100 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-right">
              ابدأ في استخدام روبوتات المحادثة اليوم
            </h2>
            <p className="text-xl text-blue-100 mb-8 text-center lg:text-right leading-relaxed">
              انضم إلى آلاف الشركات التي تستخدم روبوتات المحادثة الذكية لتحسين خدمة العملاء وتقليل عبء العمل.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start justify-end text-right"
                >
                  <span className="text-blue-100 ml-3 flex-1">{benefit}</span>
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Left Side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center order-2 lg:order-1"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">
                جرب روبوتات المحادثة مجاناً
              </h3>
              <p className="text-blue-100 mb-6">
                احصل على روبوت محادثة ذكي لعملك وابدأ في تحسين خدمة العملاء خلال دقائق.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                  ابدأ التجربة المجانية
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  تحدث مع خبير
                </motion.button>
              </div>

              <p className="text-sm text-blue-200 mt-4">
                إعداد سريع في أقل من 10 دقائق
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


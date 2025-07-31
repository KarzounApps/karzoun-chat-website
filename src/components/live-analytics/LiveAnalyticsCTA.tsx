'use client';

import { motion } from 'framer-motion';

export default function LiveAnalyticsCTA() {
  const benefits = [
    "تحليلات فورية ودقيقة",
    "مراقبة الأداء في الوقت الفعلي", 
    "تقارير قابلة للتخصيص",
    "إشعارات ذكية للأحداث المهمة",
    "تحليل اتجاهات العملاء",
    "دعم فني متخصص"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ابدأ في استخدام التحليلات الحية اليوم
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            انضم إلى آلاف الشركات التي تستخدم التحليلات الحية لمراقبة أداء خدمة العملاء 
            واتخاذ قرارات مدروسة بناءً على بيانات دقيقة.
          </p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                icon: "📊",
                title: "تحليلات فورية",
                description: "مراقبة البيانات والمؤشرات في الوقت الفعلي"
              },
              {
                icon: "📈",
                title: "تتبع الاتجاهات",
                description: "تحليل الاتجاهات والأنماط لاتخاذ قرارات أفضل"
              },
              {
                icon: "⚡",
                title: "مراقبة النشاط",
                description: "تتبع نشاط العملاء والفريق لحظة بلحظة"
              },
              {
                icon: "🎯",
                title: "قياس الأداء",
                description: "مؤشرات أداء شاملة لتقييم جودة الخدمة"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-right">
                <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                <span className="text-blue-100">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              ابدأ التجربة المجانية
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              تحدث مع خبير
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


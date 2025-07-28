import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, BarChart3, CheckCircle2 } from 'lucide-react';

export function WorkHoursCTA() {
  const benefits = [
    'توفير 75% من وقت إدارة الجداول',
    'زيادة رضا الموظفين بنسبة 60%',
    'تقليل أخطاء الجدولة بنسبة 90%',
    'تحسين الإنتاجية بنسبة 40%'
  ];

  const stats = [
    { icon: Clock, value: '24/7', label: 'دعم متواصل' },
    { icon: Users, value: '500+', label: 'فريق راضي' },
    { icon: BarChart3, value: '95%', label: 'دقة في الجدولة' }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
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
              ابدأ في تنظيم ساعات العمل
              <span className="block text-blue-300 mt-2">اليوم</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              انضم إلى آلاف الشركات التي تستخدم نظامنا لإدارة أوقات العمل بكفاءة
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>

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
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg"
          >
            ابدأ التجربة المجانية
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
          >
            طلب عرض توضيحي
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-blue-200 mb-4">موثوق به من قبل الشركات الرائدة</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">شركة التقنية</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">مؤسسة الابتكار</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">مجموعة النجاح</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-blue-200 text-sm">
            تجربة مجانية لمدة 14 يوم • لا حاجة لبطاقة ائتمان • إلغاء في أي وقت
          </p>
        </motion.div>
      </div>
    </div>
  );
}


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, BarChart3, Users, Target, Shield } from 'lucide-react';

const CustomerDataManagementCTA: React.FC = () => {
  const stats = [
    {
      icon: BarChart3,
      number: '85%',
      label: 'تحسن في معدلات التحويل'
    },
    {
      icon: Users,
      number: '3.2x',
      label: 'زيادة في رضا العملاء'
    },
    {
      icon: Target,
      number: '70%',
      label: 'تحسن في دقة الاستهداف'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'امتثال لقوانين الخصوصية'
    }
  ];

  const benefits = [
    'تحليل شامل لبيانات العملاء',
    'تجميع ذكي للعملاء المتشابهين',
    'حملات تسويقية مخصصة',
    'تقارير تفصيلية ورؤى عميقة',
    'حماية متقدمة للبيانات',
    'تكامل مع جميع الأنظمة'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-blue-300" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-right order-1 lg:order-2"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">
                جرب إدارة بيانات العملاء مجاناً
              </h3>
              <p className="text-blue-100 mb-6">
                احصل على رؤى فورية حول عملائك وابدأ في تحسين حملاتك التسويقية خلال دقائق.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  ابدأ التجربة المجانية
                  <ArrowLeft className="w-5 h-5 rotate-180" />
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
                إعداد سريع في أقل من 5 دقائق
              </p>
            </div>
          </motion.div>

          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-right">
              ابدأ في تحسين استراتيجياتك التسويقية اليوم
            </h2>
            <p className="text-xl text-blue-100 mb-8 text-right leading-relaxed">
              انضم إلى آلاف الشركات التي تستخدم أدواتنا المتقدمة لإدارة بيانات العملاء وتحقيق نتائج استثنائية في التسويق والمبيعات.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-end text-right"
                >
                  <span className="text-blue-100 mr-3">{benefit}</span>
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerDataManagementCTA;


'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  Target,
  Check
} from 'lucide-react'

const SalesManagementCTA = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '180%',
      label: 'زيادة في الإيرادات',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      value: '95%',
      label: 'رضا العملاء',
      color: 'bg-blue-500'
    },
    {
      icon: Target,
      value: '3.5x',
      label: 'تحسن في معدل التحويل',
      color: 'bg-purple-500'
    }
  ]

  const benefits = [
    'إعداد سريع في دقائق',
    'دعم فني متخصص',
    'تدريب مجاني للفريق',
    'تكامل مع الأنظمة الحالية'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            ابدأ في تطوير <span className="text-green-400">مبيعاتك</span> اليوم
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            انضم إلى آلاف الشركات التي تستخدم نظامنا لإدارة عمليات البيع وتحقيق نمو استثنائي في الإيرادات
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              ابدأ تجربتك المجانية
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              احجز عرض توضيحي
            </motion.button>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
            >
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SalesManagementCTA


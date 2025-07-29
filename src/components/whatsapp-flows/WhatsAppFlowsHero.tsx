'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Calendar, Users, TrendingUp } from 'lucide-react'

const WhatsAppFlowsHero = () => {
  const flowTypes = [
    {
      title: 'حجز المواعيد',
      description: 'نماذج تلقائية لحجز المواعيد',
      icon: Calendar,
      color: 'bg-blue-500',
      time: '09:00 - 17:00'
    },
    {
      title: 'جمع العملاء المحتملين',
      description: 'استمارات لجذب العملاء الجدد',
      icon: Users,
      color: 'bg-purple-500',
      time: 'متاح 24/7'
    },
    {
      title: 'البيع المتقاطع',
      description: 'عروض إضافية ذكية',
      icon: TrendingUp,
      color: 'bg-orange-500',
      time: 'تلقائي'
    },
    {
      title: 'استطلاع الرأي',
      description: 'جمع آراء العملاء وتقييماتهم',
      icon: MessageSquare,
      color: 'bg-green-500',
      time: '5 دقائق'
    }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-800">مسارات </span>
              <span className="text-green-400">واتساب</span>
              <br />
              <span className="text-gray-800">الآلية</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              صمِّم مسارات تفاعلية داخل محادثة واتساب ترشد العميل خطوةً بخطوة وتجمع البيانات تلقائيًّا
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                ابدأ الآن مجاناً
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                عرض توضيحي
              </motion.button>
            </div>

            <div className="text-sm text-gray-500">
              ✅ تجربة مجانية لمدة 14 يوم • ✅ لا حاجة لبطاقة ائتمان • ✅ إعداد في دقائق
            </div>
          </motion.div>

          {/* Flow Types */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {flowTypes.map((flow, index) => {
              const IconComponent = flow.icon
              return (
                <motion.div
                  key={flow.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`${flow.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-2 text-right">{flow.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 text-right leading-relaxed">{flow.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {flow.time}
                    </span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppFlowsHero


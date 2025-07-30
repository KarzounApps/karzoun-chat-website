'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3,
  ArrowLeft
} from 'lucide-react'

const SalesManagementHero = () => {
  const flowTypes = [
    {
      icon: TrendingUp,
      title: 'تتبع المبيعات',
      description: 'مراقبة شاملة لعمليات البيع',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'إدارة العملاء',
      description: 'متابعة خاصة لكل عميل',
      color: 'bg-green-500'
    },
    {
      icon: Target,
      title: 'الأهداف والمؤشرات',
      description: 'تحديد وتتبع أهداف المبيعات',
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: 'التقارير والتحليل',
      description: 'تحليل شامل للأداء',
      color: 'bg-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            إدارة عمليات <span className="text-green-400">البيع والمبيعات</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            ميزة مخصصة للشركات الخدمية، التجارية أو شركات المنتجات الرقمية SAAS التي تتطلب متابعة خاصة لكل عميل على حدى
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              ابدأ الآن مجاناً
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              عرض توضيحي
            </motion.button>
          </div>
        </motion.div>

        {/* Flow Type Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {flowTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 group cursor-pointer"
              >
                <div className={`${type.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-300 transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default SalesManagementHero


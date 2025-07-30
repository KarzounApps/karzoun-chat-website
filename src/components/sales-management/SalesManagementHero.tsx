'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  MessageSquare,
  Clock,
  User
} from 'lucide-react'

const SalesManagementHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        {/* Dot Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
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
            إدارة عمليات البيع والمبيعات
            <br />
            <span className="text-blue-400">تجربة دردشة متطورة</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            قدم تجربة دردشة مباشرة متميزة لزوار موقعك مع ميزات متقدمة وتخصيص كامل
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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

        {/* Sales Chat Demo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-semibold">مندوب المبيعات</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>متصل الآن</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-4 space-y-4 bg-gray-50 min-h-[300px]" dir="rtl">
              {/* Bot Message */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tr-md p-4 max-w-xs shadow-sm">
                  <p className="text-gray-800 text-sm">
                    مرحباً، لدي استفسار عن خدماتكم
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tl-md p-4 max-w-xs">
                  <p className="text-sm">
                    أهلاً بك! كيف يمكنني مساعدتك اليوم؟
                  </p>
                </div>
              </div>

              {/* Bot Message */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tr-md p-4 max-w-xs shadow-sm">
                  <p className="text-gray-800 text-sm">
                    ما هي باقات الاشتراك المتوفرة لديكم؟
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tl-md p-4 max-w-xs">
                  <p className="text-sm">
                    لدينا عدة باقات تناسب مختلف احتياجات العملاء هل تود معرفة المزيد عن باقة معينة؟
                  </p>
                </div>
              </div>

              {/* Typing Indicator */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tr-md p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-500 text-sm">يكتب رسالته هنا...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                  <input 
                    type="text" 
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full bg-transparent text-gray-600 text-sm outline-none"
                    disabled
                  />
                </div>
                <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SalesManagementHero


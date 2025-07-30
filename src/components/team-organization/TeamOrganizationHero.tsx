'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Users,
  Shield,
  Settings,
  Crown
} from 'lucide-react'

const TeamOrganizationHero = () => {
  return (
    <section className="py-20 text-white relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #06142E 0%, #0B2A52 100%)'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Digital Matrix Dot Grid */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(59, 130, 246, 0.6) 1px, transparent 1px),
              radial-gradient(circle at center, rgba(147, 197, 253, 0.3) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '32px 32px, 16px 16px',
            backgroundPosition: '0 0, 8px 8px'
          }}
        />
        
        {/* Glowing Edge Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#06142E] to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#06142E] to-transparent opacity-60"></div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#06142E] to-transparent opacity-40"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#06142E] to-transparent opacity-40"></div>
        </div>
        
        {/* Subtle Blue Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-400/5"></div>
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
            تنظيم الفريق وهيكل الشركة
          </h1>
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-8">
            إدارة متقدمة للأدوار
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            إنشاء هيكل تنظيمي للفريق وتحديد الأدوار والصلاحيات بطريقة احترافية ومرنة
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

        {/* Team Organization Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Interface Header */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  <span className="font-bold text-xl">إدارة الفريق</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>15 عضو نشط</span>
                </div>
              </div>
            </div>

            {/* Team Structure */}
            <div className="p-6 bg-gray-50" dir="rtl">
              {/* Department Sections */}
              <div className="space-y-6">
                {/* Management Level */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500 p-2 rounded-lg">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">الإدارة العليا</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                      صلاحيات كاملة
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        أ
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">أحمد محمد</p>
                        <p className="text-sm text-gray-600">المدير العام</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        س
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">سارة أحمد</p>
                        <p className="text-sm text-gray-600">مدير العمليات</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sales Department */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">قسم المبيعات</h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      إدارة العملاء
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        م
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">محمد علي</p>
                        <p className="text-sm text-gray-600">مدير المبيعات</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        ف
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">فاطمة حسن</p>
                        <p className="text-sm text-gray-600">مندوب مبيعات</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        ع
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">عبدالله خالد</p>
                        <p className="text-sm text-gray-600">مندوب مبيعات</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Department */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">الدعم الفني</h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      حل المشاكل
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        ي
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">يوسف أحمد</p>
                        <p className="text-sm text-gray-600">مدير الدعم</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        ن
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">نور محمد</p>
                        <p className="text-sm text-gray-600">أخصائي دعم</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  إضافة عضو جديد
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  إدارة الصلاحيات
                </button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-600 transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  تعديل الأدوار
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamOrganizationHero


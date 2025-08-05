'use client';

import { motion } from 'framer-motion';
import { Users, Filter, Target, TrendingUp } from 'lucide-react';

export default function AdvancedCustomerListsHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#06142E] to-[#0B2A52] overflow-hidden">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-right"
            dir="rtl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              قوائم العملاء المتقدمة
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-6">
              إنشاء وإدارة قوائم عملاء مخصصة بناءً على معايير متعددة
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              قم بتقسيم عملائك إلى مجموعات ذكية باستخدام معايير متقدمة مثل سلوك الشراء، قيمة العميل، والتفاعل مع المنتجات لتحسين استراتيجيات التسويق والمبيعات.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row-reverse gap-4 justify-center lg:justify-start"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                ابدأ الآن مجاناً
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                عرض توضيحي
              </button>
            </motion.div>
          </motion.div>

          {/* Customer Segmentation Dashboard Demo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 max-w-2xl"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6" dir="rtl">
                  <h3 className="text-xl font-bold text-gray-800">قوائم العملاء المتقدمة</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">متصل</span>
                  </div>
                </div>

                {/* Segmentation Criteria */}
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4" dir="rtl">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-800">عملاء عالي القيمة</span>
                    </div>
                    <p className="text-sm text-blue-700">العملاء الذين أنفقوا أكثر من 1000 ريال في آخر 3 أشهر</p>
                    <div className="mt-2 text-xs text-blue-600">247 عميل</div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4" dir="rtl">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">عملاء متكررين</span>
                    </div>
                    <p className="text-sm text-green-700">العملاء الذين اشتروا المنتج X أكثر من 3 مرات في السنة الماضية</p>
                    <div className="mt-2 text-xs text-green-600">156 عميل</div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4" dir="rtl">
                    <div className="flex items-center gap-3 mb-2">
                      <Filter className="w-5 h-5 text-orange-600" />
                      <span className="font-semibold text-orange-800">سلة مهجورة عالية القيمة</span>
                    </div>
                    <p className="text-sm text-orange-700">عملاء لديهم سلة مهجورة بقيمة أكثر من 500 ريال</p>
                    <div className="mt-2 text-xs text-orange-600">89 عميل</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 justify-end" dir="rtl">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    إنشاء حملة تسويقية
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                    تصدير القائمة
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


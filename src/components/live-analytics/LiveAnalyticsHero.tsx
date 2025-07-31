'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Activity, Gauge } from 'lucide-react';

export default function LiveAnalyticsHero() {
  const features = [
    {
      icon: BarChart3,
      title: "تحليلات فورية",
      description: "مراقبة البيانات والمؤشرات في الوقت الفعلي"
    },
    {
      icon: TrendingUp,
      title: "تتبع الاتجاهات",
      description: "تحليل الاتجاهات والأنماط لاتخاذ قرارات أفضل"
    },
    {
      icon: Activity,
      title: "مراقبة النشاط",
      description: "تتبع نشاط العملاء والفريق لحظة بلحظة"
    },
    {
      icon: Gauge,
      title: "قياس الأداء",
      description: "مؤشرات أداء شاملة لتقييم جودة الخدمة"
    }
  ];

  return (
    <section dir="rtl" className="relative min-h-screen bg-gradient-to-br from-[#06142E] via-[#0B2A52] to-[#06142E] overflow-hidden">
      {/* Digital Matrix Background with Glowing Dots */}
      <div className="absolute inset-0">
        {/* Base dot pattern */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.6) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>
        
        {/* Glowing effect overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>
        
        {/* Fade out edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142E]/80 via-transparent to-[#06142E]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#06142E]/60 via-transparent to-[#06142E]/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            التحليلات الحية
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-8">
            تحليلات فورية لخدمة العملاء
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            احصل على تحليلات حية حول وضع خدمة العملاء والضغط الحالي على الخدمة. راقب الأداء 
            واتخذ قرارات مدروسة بناءً على بيانات دقيقة ومحدثة لحظياً.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 order-2 sm:order-1">
            عرض توضيحي
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 order-1 sm:order-2">
            ابدأ الآن مجاناً
          </button>
        </motion.div>

        {/* Analytics Dashboard Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-200">متصل الآن</span>
              </div>
              <h4 className="text-lg font-semibold text-white">لوحة التحليلات الحية</h4>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50/90 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">127</div>
                <div className="text-sm text-gray-700">محادثات نشطة</div>
              </div>
              <div className="bg-green-50/90 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2.3 دقيقة</div>
                <div className="text-sm text-gray-700">متوسط الاستجابة</div>
              </div>
              <div className="bg-yellow-50/90 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">94%</div>
                <div className="text-sm text-gray-700">معدل الرضا</div>
              </div>
              <div className="bg-purple-50/90 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
                <div className="text-sm text-gray-700">فريق متاح</div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-gray-50/90 rounded-lg h-32 flex items-center justify-center">
              <div className="text-gray-600 text-sm">رسم بياني للأداء في الوقت الفعلي</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


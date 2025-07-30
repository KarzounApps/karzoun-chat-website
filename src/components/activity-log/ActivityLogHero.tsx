'use client';

import { motion } from 'framer-motion';
import { Activity, Clock, Shield, Search } from 'lucide-react';

export default function ActivityLogHero() {
  const features = [
    {
      icon: Activity,
      title: "تتبع شامل",
      description: "مراقبة جميع النشاطات والتغييرات في النظام"
    },
    {
      icon: Clock,
      title: "سجل زمني",
      description: "تسجيل دقيق لأوقات وتواريخ جميع الأحداث"
    },
    {
      icon: Shield,
      title: "أمان وتدقيق",
      description: "حماية البيانات وإمكانية المراجعة والتدقيق"
    },
    {
      icon: Search,
      title: "بحث متقدم",
      description: "البحث والتصفية السريعة للعثور على النشاطات"
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
            سجل النشاطات
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-8">
            تتبع شامل للنشاطات والتغييرات
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            تتبع جميع النشاطات والتغييرات في النظام للمراجعة والتدقيق. احصل على سجل مفصل 
            لكل حدث مع إمكانية البحث والتصفية المتقدمة لضمان الشفافية والأمان.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 order-2 sm:order-1">
            ابدأ الآن مجاناً
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 order-1 sm:order-2">
            عرض توضيحي
          </button>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="flex-1 text-right">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Search, FileText } from 'lucide-react';

export default function AuditLogsHero() {
  const features = [
    {
      icon: Shield,
      title: "أمان متقدم",
      description: "حماية شاملة للبيانات مع تشفير متقدم وصلاحيات محددة"
    },
    {
      icon: Clock,
      title: "تتبع زمني",
      description: "تسجيل دقيق لأوقات وتواريخ جميع الإجراءات والأحداث"
    },
    {
      icon: Search,
      title: "بحث متقدم",
      description: "أدوات بحث قوية للعثور على السجلات والأحداث بسرعة"
    },
    {
      icon: FileText,
      title: "تقارير شاملة",
      description: "إنشاء تقارير مفصلة للامتثال والمراجعة الأمنية"
    }
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.6) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
          linear-gradient(135deg, #06142E 0%, #0B2A52 50%, #06142E 100%),
          radial-gradient(circle at center, rgba(59, 130, 246, 0.6) 1px, transparent 1px),
          radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 1px, transparent 1px)
        `,
        backgroundSize: `
          100% 100%,
          100% 100%,
          100% 100%,
          100% 100%,
          24px 24px,
          48px 48px
        `,
        backgroundPosition: `
          0 0,
          0 0,
          0 0,
          0 0,
          0 0,
          12px 12px
        `
      }}
    >
      {/* Fade overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(6, 20, 46, 0.8) 0%, transparent 20%, transparent 80%, rgba(6, 20, 46, 0.8) 100%),
            linear-gradient(to bottom, rgba(6, 20, 46, 0.6) 0%, transparent 20%, transparent 80%, rgba(6, 20, 46, 0.8) 100%)
          `
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10" dir="rtl">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              سجلات التدقيق
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6">
              مراقبة شاملة للأمان والامتثال
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              تتبع جميع النشاطات والتغييرات في النظام للمراجعة والتدقيق. احصل على سجل مفصل لكل حدث 
              مع إمكانية البحث والتصفية المتقدمة لضمان الشفافية والأمان.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                ابدأ الآن مجاناً
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                عرض توضيحي
              </button>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


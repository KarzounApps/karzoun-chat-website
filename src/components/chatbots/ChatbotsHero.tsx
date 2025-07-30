'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Zap, Settings } from 'lucide-react';

export default function ChatbotsHero() {
  const chatbotFeatures = [
    {
      icon: Bot,
      title: "ذكاء اصطناعي",
      description: "روبوتات ذكية تفهم وتتفاعل مع العملاء بطريقة طبيعية"
    },
    {
      icon: MessageSquare,
      title: "ردود فورية",
      description: "إجابات سريعة ودقيقة على استفسارات العملاء على مدار الساعة"
    },
    {
      icon: Zap,
      title: "أتمتة كاملة",
      description: "تقليل عبء العمل من خلال أتمتة المحادثات الروتينية"
    },
    {
      icon: Settings,
      title: "تخصيص مرن",
      description: "إعداد وتخصيص الروبوتات حسب احتياجات عملك"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" dir="rtl" style={{
      background: `linear-gradient(135deg, #06142E 0%, #0B2A52 100%)`
    }}>
      {/* Digital Matrix Background */}
      <div className="absolute inset-0">
        {/* Primary dot grid */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.6) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        {/* Secondary dot grid offset */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(147, 197, 253, 0.3) 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
            transform: 'translate(8px, 8px)'
          }}
        />
        {/* Edge fade effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06142E] via-transparent to-[#06142E] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#06142E] via-transparent to-[#06142E] opacity-40" />
        {/* Blue glow overlay */}
        <div className="absolute inset-0 bg-blue-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          روبوتات المحادثة
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-300 mb-8"
        >
          دمج سهل مع منصات المحادثة الآلية
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          قلل من عبء العمل وحسن خدمة العملاء من خلال روبوتات المحادثة الذكية. دمج سهل مع منصات المحادثة الآلية لتوفير ردود فورية ودقيقة على مدار الساعة.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl order-2 sm:order-1">
            ابدأ الآن مجاناً
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 order-1 sm:order-2">
            عرض توضيحي
          </button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {chatbotFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <feature.icon className="w-8 h-8 text-blue-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 text-right">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed text-right">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


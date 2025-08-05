'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, MessageCircle, Settings } from 'lucide-react';
import AnimatedChatDemo from './AnimatedChatDemo';

export default function ChatbotsHero() {
  const features = [
    {
      icon: Settings,
      title: "تخصيص مرن",
      description: "إعداد وتخصيص الروبوتات حسب احتياجات عملك"
    },
    {
      icon: Zap,
      title: "أتمتة كاملة",
      description: "تقليل عبء العمل من خلال أتمتة المحادثات الروتينية"
    },
    {
      icon: MessageCircle,
      title: "ردود فورية",
      description: "إجابات سريعة ودقيقة على استفسارات العملاء على مدار الساعة"
    },
    {
      icon: Bot,
      title: "ذكاء اصطناعي",
      description: "روبوتات ذكية تفهم وتتفاعل مع العملاء بطريقة طبيعية"
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
            روبوتات المحادثة
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-8">
            دمج سهل مع منصات المحادثة الآلية
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            قلل من عبء العمل وحسن خدمة العملاء من خلال روبوتات المحادثة الذكية. دمج سهل مع منصات 
            المحادثة الآلية لتوفير ردود فورية ودقيقة على مدار الساعة.
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

        {/* Animated Chat Demo */}
        <AnimatedChatDemo />
      </div>
    </section>
  );
}


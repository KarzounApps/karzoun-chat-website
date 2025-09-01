'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Bell, MessageSquare, Package, Star, CheckCircle, Zap, Users, BarChart3, Send, Check, Search, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

// Salla WhatsApp Demo Component
const SallaWhatsAppDemo = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Salla-specific conversations
  const conversations = [
    {
      name: "أحمد محمد",
      avatar: "/images/saudi-man-face.jpg",
      status: "متصل",
      messages: [
        { type: "user", text: "أريد عطر فاخر للمناسبات الخاصة" },
        { type: "bot", text: "مرحباً أحمد! لدينا مجموعة رائعة من العطور الفاخرة. ما نوع الرائحة المفضلة لديك؟" },
        { type: "user", text: "أفضل الروائح الخشبية والعودية" },
        { type: "bot", text: "ممتاز! أنصحك بعطر العود الملكي أو عطر الصندل الفاخر. كلاهما مناسب للمناسبات الخاصة." },
      ],
    },
    {
      name: "فاطمة الأحمد",
      avatar: "/images/saudi-woman-traditional.jpg",
      status: "قبل 5 دقائق",
      messages: [
        { type: "user", text: "هل يوجد عطور نسائية جديدة؟" },
        { type: "bot", text: "نعم فاطمة! وصلت مجموعة جديدة من العطور النسائية الفرنسية. هل تفضلين الروائح الزهرية أم الفواكه؟" },
      ],
    },
    {
      name: "محمد العتيبي",
      avatar: "/images/gulf-man-traditional.jpg",
      status: "قبل ساعة",
      messages: [
        { type: "user", text: "متى سيصل طلب العطر؟" },
        { type: "bot", text: "طلبك رقم #EP789 تم شحنه وسيصل غداً إن شاء الله. شكراً لاختيارك متجر عطور!" },
      ],
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (currentMessage < conversations[activeChat].messages.length - 1) {
      const timer = setTimeout(() => {
        if (conversations[activeChat].messages[currentMessage + 1].type === "bot") {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setCurrentMessage((prev) => prev + 1);
          }, 1500);
        } else {
          setCurrentMessage((prev) => prev + 1);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeChat, currentMessage, mounted]);

  useEffect(() => {
    if (!mounted) return;
    setCurrentMessage(0);
  }, [activeChat, mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setActiveChat((prev) => (prev + 1) % conversations.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 max-w-md mx-auto">
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">متجر عطور</h3>
            <div className="flex items-center gap-4">
              <Search className="h-5 w-5" />
              <MoreVertical className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="bg-white border-b border-gray-200">
          <div className="p-3">
            <div className="relative">
              <input
                type="text"
                placeholder="بحث..."
                className="w-full bg-gray-100 border-none rounded-full px-4 py-2 text-sm"
              />
              <Search className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {conversations.map((chat, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 cursor-pointer ${
                  activeChat === index ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveChat(index)}
              >
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-900 truncate">{chat.name}</h4>
                    <span className="text-xs text-gray-500">{chat.status}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.messages[chat.messages.length - 1].text.split("\n")[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Chat */}
        <div className="bg-[#E5DDD5] h-96 relative">
          {/* Chat Header */}
          <div className="bg-[#075E54] text-white p-3 flex items-center gap-3 absolute top-0 left-0 right-0 z-10">
            <img
              src={conversations[activeChat].avatar}
              alt={conversations[activeChat].name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium">{conversations[activeChat].name}</h4>
              <p className="text-xs opacity-80">{conversations[activeChat].status}</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="pt-16 pb-16 px-4 h-full overflow-y-auto">
            <div className="space-y-4">
              {conversations[activeChat].messages.slice(0, currentMessage + 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === "user" ? "bg-white" : "bg-[#DCF8C6]"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <div className="flex justify-end items-center gap-1 mt-1">
                      <span className="text-[10px] text-gray-500">
                        {new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}
                      </span>
                      {message.type === "bot" && <Check className="h-3 w-3 text-[#4FC3F7]" />}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-end">
                  <div className="bg-gray-200 rounded-lg p-3 px-4">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Input */}
          <div className="bg-[#F0F0F0] p-2 absolute bottom-0 left-0 right-0 flex items-center gap-2">
            <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm">اكتب رسالة...</div>
            <button className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center text-white">
              <Send className="h-5 w-5 transform rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SallaIntegrationHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-6 lg:pt-8 xl:pt-10 overflow-hidden" 
             style={{ background: 'linear-gradient(135deg, #06142E 0%, #0B2A52 100%)' }} dir="rtl">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142E]/80 via-transparent to-[#06142E]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06142E]/60 via-transparent to-[#06142E]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-center">
            تكامل مع منصة سلة
          </h1>
          
          <div className="text-center flex flex-col items-center justify-center mb-4">
            <div className="w-full flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 leading-relaxed text-center w-full max-w-4xl mx-auto">
                تكامل مع منصة سلة للتجارة الإلكترونية لمتابعة الطلبات
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            اربط متجرك الإلكتروني على منصة سلة مع كرزون لأتمتة إشعارات الطلبات وتحسين تجربة العملاء من خلال الواتساب
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* WhatsApp Chat Demo */}
          <div className="relative max-w-4xl mx-auto">
            <SallaWhatsAppDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SallaIntegrationHero;


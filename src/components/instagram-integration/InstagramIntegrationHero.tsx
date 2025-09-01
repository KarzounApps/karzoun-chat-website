'use client';

import React, { useState, useEffect } from 'react';
import { Instagram, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Camera, Image, Smile, CheckCircle, Zap, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

// Instagram Chat Demo Component
const InstagramChatDemo = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Instagram-specific conversations
  const conversations = [
    {
      name: "نورا الغامدي",
      username: "@nora_style",
      avatar: "/images/saudi-woman-noura.jpg",
      status: "نشط الآن",
      verified: true,
      messages: [
        { type: "user", text: "شاهدت منشوركم عن الفساتين الجديدة 😍" },
        { type: "bot", text: "أهلاً نورا! شكراً لمتابعتك 💕 أي فستان أعجبك أكثر؟" },
        { type: "user", text: "الفستان الأزرق في الصورة الثالثة" },
        { type: "bot", text: "اختيار رائع! 👗 الفستان متوفر بجميع المقاسات. هل تريدين معرفة السعر والتفاصيل؟" },
      ],
    },
    {
      name: "أحمد الشهري",
      username: "@ahmed_tech",
      avatar: "/images/saudi-man-ahmed.jpg",
      status: "قبل 10 دقائق",
      verified: false,
      messages: [
        { type: "user", text: "هل يمكنني طلب نفس المنتج من الستوري؟" },
        { type: "bot", text: "بالطبع أحمد! المنتج متوفر. سأرسل لك رابط الطلب مباشرة 📱" },
      ],
    },
    {
      name: "سارة العتيبي",
      username: "@sara_beauty",
      avatar: "/images/saudi-woman-sara.jpg",
      status: "قبل ساعة",
      verified: true,
      messages: [
        { type: "user", text: "متى ستنزلون المجموعة الجديدة؟" },
        { type: "bot", text: "المجموعة الجديدة ستكون متاحة الأسبوع القادم! 🎉 سنعلن عنها في الستوري أولاً" },
      ],
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setCurrentMessage(prev => (prev + 1) % 3);
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-md mx-auto">
      {/* Instagram Header */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <Instagram className="h-6 w-6" />
            <span className="font-semibold">كرزون للأزياء</span>
            {conversations[activeChat].verified && (
              <CheckCircle className="h-4 w-4 text-blue-400" />
            )}
          </div>
          <div className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            <MoreHorizontal className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="border-b border-gray-100">
        <div className="flex overflow-x-auto p-2 gap-2">
          {conversations.map((conv, index) => (
            <button
              key={index}
              onClick={() => setActiveChat(index)}
              className={`flex-shrink-0 flex items-center gap-2 p-2 rounded-lg transition-colors ${
                activeChat === index ? 'bg-purple-50 border border-purple-200' : 'hover:bg-gray-50'
              }`}
            >
              <div className="relative">
                <img
                  src={conv.avatar}
                  alt={conv.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                {conv.status === "نشط الآن" && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-gray-900 flex items-center gap-1">
                  {conv.name}
                  {conv.verified && <CheckCircle className="h-3 w-3 text-blue-500" />}
                </div>
                <div className="text-xs text-gray-500">{conv.username}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Chat */}
      <div className="h-80 flex flex-col">
        {/* Chat Header */}
        <div className="p-3 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-3">
            <img
              src={conversations[activeChat].avatar}
              alt={conversations[activeChat].name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 text-right">
              <div className="font-medium text-gray-900 flex items-center gap-1">
                {conversations[activeChat].name}
                {conversations[activeChat].verified && (
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                )}
              </div>
              <div className="text-sm text-gray-500">{conversations[activeChat].status}</div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-3 space-y-3 overflow-y-auto">
          {conversations[activeChat].messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  message.type === 'user'
                    ? 'bg-gray-100 text-gray-900 rounded-tr-sm'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-tl-sm'
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-end"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-2xl rounded-tl-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Message Input */}
        <div className="p-3 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center gap-2">
            <button className="p-2 text-purple-500 hover:bg-purple-50 rounded-full">
              <Camera className="h-5 w-5" />
            </button>
            <button className="p-2 text-purple-500 hover:bg-purple-50 rounded-full">
              <Image className="h-5 w-5" />
            </button>
            <div className="flex-1 bg-white rounded-full border border-gray-200 px-4 py-2">
              <input
                type="text"
                placeholder="اكتب رسالة..."
                className="w-full text-sm text-right bg-transparent outline-none"
                dir="rtl"
              />
            </div>
            <button className="p-2 text-purple-500 hover:bg-purple-50 rounded-full">
              <Smile className="h-5 w-5" />
            </button>
            <button className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-shadow">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InstagramIntegrationHero = () => {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800" dir="rtl">
      {/* Background Pattern - Matching Live Chat */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-10"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            تكامل انستغرام مع
            <span className="block text-blue-400 mt-2">صندوق الوارد الموحد</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            تواصل مع عملائك عبر انستغرام وإدارة جميع المحادثات من مكان واحد. استقبل الرسائل المباشرة وتعليقات المنشورات وردود الستوري والتعليقات على المنشورات في صندوق وارد موحد مع ردود آلية ذكية وإدارة شاملة للتفاعلات.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
              عرض توضيحي
            </button>
          </motion.div>

          {/* Instagram Chat Demo - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <InstagramChatDemo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InstagramIntegrationHero;


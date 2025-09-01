'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, MessageCircle, Users, Clock, CheckCircle2, Send, Heart, Share2, ThumbsUp } from 'lucide-react';

// Facebook Chat Demo Component
const FacebookChatDemo = () => {
  const [activeUser, setActiveUser] = useState(0);
  
  const users = [
    { 
      name: "عبدالله الأحمد", 
      username: "abdullah.ahmed", 
      avatar: "/images/saudi-man-ahmed.jpg",
      status: "نشط الآن",
      lastMessage: "مرحباً، أريد الاستفسار عن المنتجات الجديدة"
    },
    { 
      name: "فاطمة السعيد", 
      username: "fatima.alsaeed", 
      avatar: "/images/saudi-woman-sara.jpg",
      status: "نشط منذ 5 دقائق",
      lastMessage: "شكراً لكم على الخدمة الممتازة"
    },
    { 
      name: "محمد الغامدي", 
      username: "mohammed.alghamdi", 
      avatar: "/images/saudi-man-khalid.jpg",
      status: "نشط منذ 10 دقائق",
      lastMessage: "متى موعد التوصيل؟"
    }
  ];

  const messages = [
    { type: "user", message: "السلام عليكم، لدي استفسار عن منتجاتكم", time: "14:30" },
    { type: "agent", message: "وعليكم السلام ورحمة الله، أهلاً وسهلاً بك! كيف يمكنني مساعدتك؟", time: "14:31" },
    { type: "user", message: "أريد معرفة المزيد عن العروض الحالية", time: "14:32" },
    { type: "agent", message: "بالطبع! لدينا عروض رائعة هذا الأسبوع. هل تفضل منتجات معينة؟", time: "14:33" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveUser((prev) => (prev + 1) % users.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto" dir="rtl">
      {/* Facebook Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
        <Facebook className="w-6 h-6" />
        <div className="flex-1 text-right">
          <h3 className="font-semibold">كرزون للتجارة</h3>
          <p className="text-blue-100 text-sm">صفحة فيسبوك</p>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs">متصل الآن</span>
        </div>
      </div>

      {/* User Tabs */}
      <div className="bg-gray-50 border-b flex overflow-x-auto">
        {users.map((user, index) => (
          <button
            key={index}
            onClick={() => setActiveUser(index)}
            className={`flex items-center gap-2 p-3 min-w-0 flex-shrink-0 border-b-2 transition-colors ${
              activeUser === index 
                ? 'border-blue-500 bg-white text-blue-600' 
                : 'border-transparent text-gray-600 hover:bg-gray-100'
            }`}
          >
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-right min-w-0">
              <p className="font-medium text-sm truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">@{user.username}</p>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
          </button>
        ))}
      </div>

      {/* Active User Info */}
      <div className="p-4 bg-blue-50 border-b">
        <div className="flex items-center gap-3">
          <img 
            src={users[activeUser].avatar} 
            alt={users[activeUser].name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">{users[activeUser].name}</h4>
            <p className="text-sm text-green-600 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              {users[activeUser].status}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${msg.type === 'agent' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-xs px-4 py-2 rounded-2xl ${
              msg.type === 'agent' 
                ? 'bg-gray-100 text-gray-800' 
                : 'bg-blue-600 text-white'
            }`}>
              <p className="text-sm">{msg.message}</p>
              <p className={`text-xs mt-1 ${
                msg.type === 'agent' ? 'text-gray-500' : 'text-blue-100'
              }`}>
                {msg.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const FacebookIntegrationHero = () => {
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
            ربط صفحات فيسبوك ومسنجر مع
            <span className="block text-blue-400 mt-2">نظام المراسلة الموحد</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            اربط صفحات فيسبوك ومسنجر مع نظام المراسلة الموحد. إدارة شاملة للرسائل والتعليقات مع ردود آلية ذكية وتحليلات متقدمة. استقبل رسائل مسنجر وتعليقات المنشورات وإدارة التفاعلات من مكان واحد.
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

          {/* Facebook Chat Demo - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <FacebookChatDemo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FacebookIntegrationHero;


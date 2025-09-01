'use client';

import React, { useState, useEffect } from 'react';
import { Send, Search, MoreVertical } from 'lucide-react';

// WhatsApp Chat Demo Component for Zid Integration
const ZidWhatsAppDemo = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const conversations = [
    {
      name: 'سارة أحمد',
      avatar: '/images/saudi-woman-traditional.jpg',
      time: 'متصل',
      messages: [
        { type: 'user', text: 'مرحباً، أريد معرفة حالة طلبي رقم #ZD456', time: '12:15 م' },
        { type: 'bot', text: 'أهلاً سارة! طلبك رقم #ZD456 تم شحنه اليوم وسيصل خلال يومين إن شاء الله. يمكنك تتبع الشحنة من الرابط المرسل.', time: '12:16 م' }
      ]
    },
    {
      name: 'محمد الغامدي',
      avatar: '/images/saudi-man-face.jpg',
      time: 'قبل 3 دقائق',
      messages: [
        { type: 'user', text: 'هل يوجد خصم على المنتجات الجديدة؟', time: '12:10 م' },
        { type: 'bot', text: 'نعم محمد! يوجد خصم 25% على جميع المنتجات الجديدة حتى نهاية الأسبوع. استخدم كود: NEW25', time: '12:11 م' }
      ]
    },
    {
      name: 'فاطمة العتيبي',
      avatar: '/images/gulf-man-traditional.jpg',
      time: 'قبل ساعة',
      messages: [
        { type: 'user', text: 'متى سيتوفر المنتج الذي طلبته؟', time: '11:15 ص' },
        { type: 'bot', text: 'المنتج سيتوفر خلال 3 أيام. سنرسل لك إشعار فور توفره مع رابط الطلب المباشر.', time: '11:16 ص' }
      ]
    }
  ];

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

  if (!mounted) {
    return <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 max-w-md mx-auto h-96"></div>;
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 max-w-md mx-auto">
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">متجر الإلكترونيات</h3>
            <div className="flex items-center gap-4">
              <Search className="h-5 w-5" />
              <MoreVertical className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="bg-white border-b border-gray-200">
          <div className="p-3">
            <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
              <Search className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500 text-sm">بحث...</span>
            </div>
          </div>
          
          {conversations.map((conversation, index) => (
            <div
              key={index}
              className={`p-4 border-b border-gray-100 flex items-center gap-3 transition-all duration-300 ${
                index === activeChat ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="w-12 h-12 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(conversation.name)}&background=0d8abc&color=fff&size=48`;
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-900 truncate">{conversation.name}</h4>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {index === activeChat && currentMessage >= 0
                    ? conversation.messages[Math.min(currentMessage, conversation.messages.length - 1)]?.text
                    : conversation.messages[conversation.messages.length - 1]?.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Active Chat Messages */}
        <div className="bg-gray-50 p-4 h-64 overflow-y-auto">
          <div className="space-y-3">
            {conversations[activeChat].messages.slice(0, currentMessage + 1).map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 mr-2">يكتب...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Chat Input */}
        <div className="bg-gray-100 p-3 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-500">
            اكتب رسالة...
          </div>
          <button className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center text-white">
            <Send className="h-5 w-5 transform rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};
const ZidIntegrationHero = () => {
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
            تكامل مع منصة زد
          </h1>
          
          <div className="text-center flex flex-col items-center justify-center mb-4">
            <div className="w-full flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 leading-relaxed text-center w-full max-w-4xl mx-auto">
                ربط متجرك على منصة زد مع نظام خدمة العملاء
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            اربط متجرك الإلكتروني على منصة زد مع كرزون لأتمتة خدمة العملاء وإدارة الطلبات بكفاءة عالية من خلال الواتساب
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
            <ZidWhatsAppDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZidIntegrationHero;


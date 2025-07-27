import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, MessageSquare, Users, BarChart, 
  ArrowRight, CheckCircle2, Clock, Search, MoreHorizontal,
  User, Settings, BellRing, Image, Camera, Smile, Zap, Bot, Handshake
} from 'lucide-react';

export function TelegramReplies() {
  const [activeTab, setActiveTab] = useState('messages');
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isReplying, setIsReplying] = useState(false);
  
  // Sample Telegram group messages
  const groupInfo = {
    name: "مجموعة الدعم الفني",
    members: 1247,
    avatar: "https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  };

  const messages = [
    {
      id: 1,
      user: {
        name: "أحمد محمد",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      text: "مرحباً، أحتاج مساعدة في إعداد الحساب",
      time: "14:30",
      reply: {
        text: "أهلاً وسهلاً بك! سأساعدك في إعداد الحساب. يرجى اتباع الخطوات التالية: 1. انقر على إعدادات الحساب 2. أدخل بياناتك الشخصية 3. تأكد من البريد الإلكتروني. هل تحتاج مساعدة إضافية؟",
        time: "14:31"
      }
    },
    {
      id: 2,
      user: {
        name: "سارة أحمد",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      text: "كيف يمكنني تغيير كلمة المرور؟",
      time: "14:35",
      reply: {
        text: "لتغيير كلمة المرور: 1. اذهب إلى الإعدادات 2. اختر 'الأمان' 3. انقر على 'تغيير كلمة المرور' 4. أدخل كلمة المرور الجديدة. تأكد من أن كلمة المرور قوية وتحتوي على أرقام وحروف.",
        time: "14:36"
      }
    },
    {
      id: 3,
      user: {
        name: "خالد العنزي",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      text: "هل يمكنني استخدام التطبيق على عدة أجهزة؟",
      time: "14:40",
      reply: {
        text: "نعم، يمكنك استخدام التطبيق على عدة أجهزة بنفس الحساب. سيتم مزامنة جميع بياناتك تلقائياً. لإضافة جهاز جديد، قم بتسجيل الدخول باستخدام نفس البيانات.",
        time: "14:41"
      }
    }
  ];

  // Auto-advance messages and replies
  useEffect(() => {
    if (currentMessage < messages.length) {
      const timer = setTimeout(() => {
        setIsReplying(true);
        setTimeout(() => {
          setIsReplying(false);
          setCurrentMessage(prev => prev + 1);
        }, 2000);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      // Reset to start the demo again
      setTimeout(() => {
        setCurrentMessage(0);
      }, 3000);
    }
  }, [currentMessage]);

  return (
    <section id="channel-telegram" className="py-16" style={{ backgroundColor: '#0088CC' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
            data-aos="fade-up"
          >
            <div className="text-right">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                أتمتة الردود على تيليجرام
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                الرد الفوري على استفسارات الأعضاء في القنوات والمجموعات على تيليجرام.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <Handshake className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">ترحيب تلقائي بالأعضاء الجدد</h3>
                    <p className="text-gray-600 text-sm">رسائل ترحيب مخصصة لكل عضو جديد</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <Bot className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">جمع الطلبات عبر بوت مخصّص</h3>
                    <p className="text-gray-600 text-sm">بوت ذكي لجمع وتصنيف الطلبات</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">توفير الوقت مع ردود فورية</h3>
                    <p className="text-gray-600 text-sm">ردود سريعة ودقيقة على الاستفسارات</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <BarChart className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">تحليلات لقياس الرسائل الأكثر فاعلية</h3>
                    <p className="text-gray-600 text-sm">قياس الأداء وتحسين الردود</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>مثالي للمجتمعات والقنوات</span>
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    <span>تيليجرام</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Telegram Demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            data-aos="fade-up"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-md mx-auto">
                {/* Telegram Header */}
                <div className="bg-[#0088CC] text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={groupInfo.avatar}
                        alt={groupInfo.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-sm">{groupInfo.name}</h3>
                        <p className="text-xs opacity-90">{groupInfo.members} عضو</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Search className="h-5 w-5" />
                      <MoreHorizontal className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                
                {/* Messages Section */}
                <div className="bg-gray-50 max-h-80 overflow-y-auto p-4 space-y-4">
                  {messages.slice(0, currentMessage).map((message, index) => (
                    <div key={message.id} className="space-y-3">
                      {/* User Message */}
                      <div className="flex gap-2">
                        <img
                          src={message.user.avatar}
                          alt={message.user.name}
                          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm text-blue-600">{message.user.name}</span>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <p className="text-sm text-gray-800 text-right">
                              {message.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bot Reply */}
                      {index < currentMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex gap-2 mr-10"
                        >
                          <div className="w-8 h-8 bg-[#0088CC] rounded-full flex items-center justify-center flex-shrink-0">
                            <Zap className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm text-[#0088CC]">بوت كرزون</span>
                              <span className="text-xs text-gray-500">{message.reply.time}</span>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <p className="text-sm text-blue-800 text-right">
                                {message.reply.text}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Typing Indicator */}
                      {index === currentMessage - 1 && isReplying && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex gap-2 mr-10"
                        >
                          <div className="w-8 h-8 bg-[#0088CC] rounded-full flex items-center justify-center flex-shrink-0">
                            <Zap className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm text-[#0088CC]">بوت كرزون</span>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="bg-white border-t border-gray-200 p-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="اكتب رسالة..."
                      className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-right"
                      readOnly
                    />
                    <button className="bg-[#0088CC] text-white rounded-full p-2">
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


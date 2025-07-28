import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, MessageSquare, Users, BarChart, 
  ArrowRight, CheckCircle2, Clock, Bot, 
  Zap, RefreshCw, Search, MoreHorizontal,
  User, Settings, BellRing, Image, Camera, Smile
} from 'lucide-react';

export function TelegramReplies() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  // Sample Telegram group messages
  const groupMessages = [
    {
      id: 1,
      user: {
        name: "أحمد محمد",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      text: "مرحباً، أريد الاستفسار عن خدماتكم",
      time: "14:30",
      reply: {
        text: "أهلاً وسهلاً بك! يسعدني مساعدتك. يمكنك الاطلاع على خدماتنا من خلال الرابط التالي أو طرح أي استفسار مباشرة.",
        time: "14:31"
      }
    },
    {
      id: 2,
      user: {
        name: "سارة العتيبي",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      text: "هل يمكنني الحصول على عرض سعر؟",
      time: "14:35",
      reply: {
        text: "بالطبع! سأرسل لك عرض سعر مخصص. يرجى إرسال تفاصيل مشروعك عبر رسالة خاصة أو ملء النموذج في الرابط أدناه.",
        time: "14:36"
      }
    },
    {
      id: 3,
      user: {
        name: "خالد الشمري",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      text: "متى تبدأ الدورة التدريبية القادمة؟",
      time: "14:40",
      reply: {
        text: "الدورة التدريبية القادمة تبدأ يوم الأحد القادم الساعة 7 مساءً. يمكنك التسجيل من خلال الرابط أو التواصل معي مباشرة.",
        time: "14:41"
      }
    }
  ];

  // Auto-advance messages and replies
  useEffect(() => {
    if (currentMessage < groupMessages.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
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
    <div className="py-24 bg-gradient-to-r from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              أتمتة الردود على تيليجرام
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              الرد الذكي على استفسارات الأعضاء في القنوات والمجموعات على تيليجرام.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
          {/* Telegram Demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 bg-cyan-100 w-24 h-24 rounded-full opacity-60"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-md mx-auto">
                {/* Telegram Header */}
                <div className="bg-[#0088CC] text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Send className="h-6 w-6" />
                      <div>
                        <h3 className="font-bold">مجموعة الدعم التقني</h3>
                        <p className="text-xs opacity-90">1,234 عضو، 89 متصل</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Search className="h-5 w-5" />
                      <MoreHorizontal className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                
                {/* Telegram Messages */}
                <div className="bg-gray-50 h-96 overflow-y-auto p-4 space-y-4">
                  {/* Welcome Message */}
                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full inline-block">
                      مرحباً بكم في مجموعة الدعم التقني
                    </div>
                  </div>
                  
                  {groupMessages.slice(0, currentMessage).map((message, index) => (
                    <div key={message.id} className="space-y-2">
                      {/* User Message */}
                      <div className="flex items-start gap-2">
                        <img
                          src={message.user.avatar}
                          alt={message.user.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                            <div className="font-medium text-sm text-blue-600">{message.user.name}</div>
                            <div className="text-sm text-gray-800">{message.text}</div>
                            <div className="text-xs text-gray-500 mt-1">{message.time}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bot Reply */}
                      {(index < currentMessage - 1 || !isTyping) && message.reply && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-blue-600 text-white rounded-lg px-3 py-2">
                              <div className="font-medium text-sm">مساعد ذكي</div>
                              <div className="text-sm">{message.reply.text}</div>
                              <div className="text-xs opacity-75 mt-1">{message.reply.time}</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Typing Indicator */}
                      {index === currentMessage - 1 && isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Message Input */}
                <div className="bg-white border-t border-gray-200 p-3 flex items-center gap-2">
                  <button className="text-gray-500">
                    <Image className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    placeholder="اكتب رسالة..."
                    className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 text-white rounded-full p-2">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              إدارة ذكية للمجموعات
              <span className="block text-cyan-600">والقنوات على تيليجرام</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              أتمت الردود على استفسارات الأعضاء في القنوات والمجموعات، وقدم دعماً فورياً وفعالاً لمجتمعك على تيليجرام.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Users,
                  title: "ترحيب تلقائي بالأعضاء الجدد",
                  description: "رسائل ترحيب مخصصة وتوجيه الأعضاء الجدد للموارد المهمة"
                },
                {
                  icon: Bot,
                  title: "جمع الطلبات عبر بوت مخصّص",
                  description: "تجميع وتنظيم طلبات الأعضاء وتوجيهها للفرق المناسبة"
                },
                {
                  icon: Clock,
                  title: "توفير الوقت مع ردود فورية",
                  description: "الرد على الاستفسارات الشائعة بشكل فوري دون تدخل يدوي"
                },
                {
                  icon: BarChart,
                  title: "تحليلات لقياس الرسائل الأكثر فاعلية",
                  description: "قياس مستوى التفاعل وتحليل أداء الرسائل المختلفة"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Send className="h-5 w-5 text-cyan-600" />
                <span>مثالي للمجتمعات والفرق</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "إدارة مجموعات الدعم التقني بكفاءة",
                  "تنظيم القنوات التعليمية والإعلامية",
                  "جمع التغذية الراجعة من الأعضاء",
                  "توجيه الاستفسارات للأقسام المختصة",
                  "بناء مجتمع نشط ومتفاعل"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center gap-1">
                  <span>اكتشف المزيد عن أتمتة تيليجرام</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


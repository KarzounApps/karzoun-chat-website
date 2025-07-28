import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Send, Clock, Tag, 
  ArrowRight, CheckCircle2, BarChart, 
  Zap, RefreshCw, Search, MoreHorizontal,
  User, Settings, BellRing, Image, Camera, Smile,
  Star, Archive, Trash2, Reply
} from 'lucide-react';

export function EmailAutomation() {
  const [currentEmail, setCurrentEmail] = useState(0);
  const [isReplying, setIsReplying] = useState(false);
  
  // Sample emails
  const emails = [
    {
      id: 1,
      from: {
        name: "أحمد محمد",
        email: "ahmed@example.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      subject: "استفسار عن خدمات الشركة",
      content: "السلام عليكم، أريد الاستفسار عن خدماتكم في مجال التسويق الرقمي وما هي الباقات المتاحة؟",
      time: "10:30 ص",
      priority: "عالية",
      reply: {
        content: "وعليكم السلام ورحمة الله وبركاته، شكراً لتواصلكم معنا. يسعدنا تقديم معلومات مفصلة عن خدماتنا. سأرسل لكم كتيباً شاملاً عن باقاتنا خلال الساعات القادمة.",
        time: "10:32 ص"
      }
    },
    {
      id: 2,
      from: {
        name: "سارة العتيبي",
        email: "sara@company.com",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      subject: "طلب عرض سعر",
      content: "مرحباً، نحن شركة ناشئة ونحتاج لخدمات تطوير موقع إلكتروني. هل يمكنكم إرسال عرض سعر مبدئي؟",
      time: "11:15 ص",
      priority: "متوسطة",
      reply: {
        content: "أهلاً وسهلاً بكم، سعداء بتواصلكم معنا. لإعداد عرض سعر دقيق، نحتاج لمعرفة تفاصيل أكثر عن المشروع. سأرسل لكم استمارة تفصيلية لملئها.",
        time: "11:18 ص"
      }
    },
    {
      id: 3,
      from: {
        name: "خالد الشمري",
        email: "khalid@business.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      subject: "مشكلة تقنية في النظام",
      content: "لدينا مشكلة في تسجيل الدخول للنظام منذ صباح اليوم. هل يمكنكم المساعدة؟",
      time: "12:00 م",
      priority: "عاجلة",
      reply: {
        content: "نعتذر عن هذه المشكلة. تم تحويل طلبكم لفريق الدعم التقني وسيتم التواصل معكم خلال 15 دقيقة لحل المشكلة فوراً.",
        time: "12:02 م"
      }
    }
  ];

  // Auto-advance emails and replies
  useEffect(() => {
    if (currentEmail < emails.length) {
      const timer = setTimeout(() => {
        setIsReplying(true);
        setTimeout(() => {
          setIsReplying(false);
          setCurrentEmail(prev => prev + 1);
        }, 2000);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      // Reset to start the demo again
      setTimeout(() => {
        setCurrentEmail(0);
      }, 3000);
    }
  }, [currentEmail]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'عاجلة': return 'text-red-600 bg-red-100';
      case 'عالية': return 'text-orange-600 bg-orange-100';
      case 'متوسطة': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="py-24 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              أتمتة البريد الإلكتروني
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              الرد الذكي على رسائل البريد الواردة وتقليل زمن الاستجابة.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
          {/* Email Demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 bg-yellow-100 w-24 h-24 rounded-full opacity-60"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-md mx-auto">
                {/* Email Header */}
                <div className="bg-[#FFBC0D] text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-6 w-6" />
                      <div>
                        <h3 className="font-bold">صندوق الوارد</h3>
                        <p className="text-xs opacity-90">{emails.length} رسائل جديدة</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Search className="h-5 w-5" />
                      <Settings className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                
                {/* Email List */}
                <div className="bg-white h-96 overflow-y-auto">
                  {emails.slice(0, currentEmail).map((email, index) => (
                    <div key={email.id} className="border-b border-gray-200">
                      {/* Email Item */}
                      <div className="p-4 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <img
                            src={email.from.avatar}
                            alt={email.from.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-sm text-gray-900 truncate">
                                {email.from.name}
                              </h4>
                              <div className="flex items-center gap-2">
                                <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(email.priority)}`}>
                                  {email.priority}
                                </span>
                                <span className="text-xs text-gray-500">{email.time}</span>
                              </div>
                            </div>
                            <p className="text-sm font-medium text-gray-800 mb-1 truncate">
                              {email.subject}
                            </p>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {email.content}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Auto Reply */}
                      {(index < currentEmail - 1 || !isReplying) && email.reply && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-blue-50 border-l-4 border-blue-500 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <Reply className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-medium text-sm text-blue-900">
                                  رد تلقائي
                                </h4>
                                <span className="text-xs text-blue-600">{email.reply.time}</span>
                              </div>
                              <p className="text-sm text-blue-800">
                                {email.reply.content}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                  تم الإرسال تلقائياً
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Typing Indicator */}
                      {index === currentEmail - 1 && isReplying && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gray-50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                              <Reply className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">جاري كتابة الرد...</span>
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Email Actions */}
                <div className="bg-gray-50 border-t border-gray-200 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-600 hover:text-gray-800">
                      <Archive className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <Star className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm">
                    رد جديد
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
              إدارة ذكية للبريد الإلكتروني
              <span className="block text-yellow-600">مع ردود فورية ومخصصة</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              أتمت الردود على رسائل البريد الواردة، وصنف الرسائل حسب الأولوية، ووفر 70% من وقت فريقك في إدارة البريد الإلكتروني.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Mail,
                  title: "ردود ذكية للأسئلة المتكررة",
                  description: "الرد التلقائي على الاستفسارات الشائعة بردود مخصصة ومناسبة"
                },
                {
                  icon: Tag,
                  title: "تصنيف الرسائل وتحويلها للفرق المختصّة",
                  description: "تصنيف تلقائي للرسائل وتوجيهها للأقسام المناسبة"
                },
                {
                  icon: Clock,
                  title: "توفير 70٪ من وقت الفريق",
                  description: "تقليل الوقت المطلوب لإدارة البريد الإلكتروني بشكل كبير"
                },
                {
                  icon: BarChart,
                  title: "تحليلات معدل الفتح والرد",
                  description: "قياس أداء الرسائل ومعدلات الاستجابة والتفاعل"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-yellow-600" />
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
                <Mail className="h-5 w-5 text-yellow-600" />
                <span>مثالي للشركات وفرق الدعم</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "إدارة استفسارات العملاء بكفاءة عالية",
                  "تصنيف الرسائل حسب الأولوية والموضوع",
                  "تحويل الطلبات للأقسام المختصة تلقائياً",
                  "متابعة معدلات الاستجابة والأداء",
                  "تحسين تجربة العملاء مع الردود السريعة"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-1">
                  <span>اكتشف المزيد عن أتمتة البريد الإلكتروني</span>
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


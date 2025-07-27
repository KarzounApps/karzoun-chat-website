import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Inbox, Send, Tag, Clock, BarChart, 
  ArrowRight, CheckCircle2, Users, Search, MoreHorizontal,
  User, Settings, BellRing, Image, Camera, Smile, Zap, 
  MailOpen, Tags, Stopwatch, PieChart
} from 'lucide-react';

export function EmailAutomation() {
  const [activeTab, setActiveTab] = useState('inbox');
  const [currentEmail, setCurrentEmail] = useState(0);
  const [isReplying, setIsReplying] = useState(false);
  
  // Sample email inbox
  const emails = [
    {
      id: 1,
      sender: {
        name: "أحمد محمد",
        email: "ahmed@example.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      subject: "استفسار عن المنتج الجديد",
      preview: "مرحباً، أود الاستفسار عن المنتج الجديد وما هي المواصفات...",
      time: "10:30 ص",
      isRead: false,
      reply: {
        text: "شكراً لك على استفسارك. المنتج الجديد يتميز بالمواصفات التالية: 1. تقنية متطورة 2. ضمان لمدة عامين 3. خدمة عملاء متميزة. يمكنك طلبه عبر موقعنا أو الاتصال بنا. هل تحتاج معلومات إضافية؟",
        time: "10:35 ص"
      }
    },
    {
      id: 2,
      sender: {
        name: "سارة أحمد",
        email: "sara@example.com",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      subject: "طلب إعادة تعيين كلمة المرور",
      preview: "أحتاج مساعدة في إعادة تعيين كلمة المرور الخاصة بحسابي...",
      time: "09:45 ص",
      isRead: false,
      reply: {
        text: "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد أو مجلد الرسائل غير المرغوب فيها. الرابط صالح لمدة 24 ساعة. إذا لم تستلم الرسالة، يرجى التواصل معنا.",
        time: "09:50 ص"
      }
    },
    {
      id: 3,
      sender: {
        name: "خالد العنزي",
        email: "khalid@example.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      subject: "شكوى بخصوص الخدمة",
      preview: "أود تقديم شكوى بخصوص الخدمة المقدمة وأطلب حلاً سريعاً...",
      time: "08:20 ص",
      isRead: false,
      reply: {
        text: "نعتذر عن أي إزعاج قد تكون واجهته. تم تحويل شكواك إلى فريق خدمة العملاء المختص وسيتم التواصل معك خلال 24 ساعة لحل المشكلة. نقدر ملاحظاتك ونسعى لتحسين خدماتنا.",
        time: "08:25 ص"
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

  return (
    <section id="channel-email" className="py-16" style={{ backgroundColor: '#FFBC0D' }}>
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
                أتمتة البريد الإلكتروني
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                الرد الذكي على رسائل البريد الواردة وتقليل زمن الاستجابة.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <MailOpen className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">ردود ذكية للأسئلة المتكررة</h3>
                    <p className="text-gray-600 text-sm">ردود تلقائية مخصصة لكل نوع استفسار</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <Tags className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">تصنيف الرسائل وتحويلها للفرق المختصّة</h3>
                    <p className="text-gray-600 text-sm">توجيه الرسائل للقسم المناسب تلقائياً</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <Stopwatch className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">توفير 70٪ من وقت الفريق</h3>
                    <p className="text-gray-600 text-sm">تقليل الوقت المطلوب للرد على الرسائل</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <PieChart className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">تحليلات معدل الفتح والرد</h3>
                    <p className="text-gray-600 text-sm">قياس فعالية الردود وتحسين الأداء</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>مثالي للشركات والمؤسسات</span>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>البريد الإلكتروني</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Email Demo */}
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
                {/* Email Header */}
                <div className="bg-[#FFBC0D] text-gray-900 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Inbox className="h-6 w-6" />
                      <h3 className="font-bold">صندوق الوارد</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <Search className="h-5 w-5" />
                      <Settings className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                
                {/* Email List */}
                <div className="bg-white max-h-80 overflow-y-auto">
                  {emails.slice(0, currentEmail + 1).map((email, index) => (
                    <div key={email.id} className="border-b border-gray-200">
                      {/* Email Item */}
                      <div className="p-4 hover:bg-gray-50">
                        <div className="flex items-start gap-3">
                          <img
                            src={email.sender.avatar}
                            alt={email.sender.name}
                            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <span className={`font-medium text-sm ${!email.isRead ? 'text-gray-900' : 'text-gray-600'}`}>
                                  {email.sender.name}
                                </span>
                                {!email.isRead && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                              </div>
                              <span className="text-xs text-gray-500">{email.time}</span>
                            </div>
                            <h4 className={`text-sm mb-1 text-right ${!email.isRead ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                              {email.subject}
                            </h4>
                            <p className="text-xs text-gray-500 text-right truncate">
                              {email.preview}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Auto Reply */}
                      {index < currentEmail && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-yellow-50 border-l-4 border-yellow-400 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Zap className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium text-sm text-yellow-800">
                                  رد تلقائي - بوت كرزون
                                </span>
                                <span className="text-xs text-yellow-600">{email.reply.time}</span>
                              </div>
                              <p className="text-sm text-yellow-800 text-right leading-relaxed">
                                {email.reply.text}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Typing Indicator */}
                      {index === currentEmail && isReplying && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="bg-yellow-50 border-l-4 border-yellow-400 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Zap className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium text-sm text-yellow-800">
                                  جاري الرد...
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Email Actions */}
                <div className="bg-gray-50 border-t border-gray-200 p-3">
                  <div className="flex items-center justify-center gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>رسالة جديدة</span>
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


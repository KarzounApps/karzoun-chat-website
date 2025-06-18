import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Send,
  Smartphone,
  Check,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  BarChart,
  Users,
  ShoppingCart,
  Calendar,
  Zap,
  RefreshCw,
  BellRing,
  Loader2,
} from "lucide-react";

export function WhatsAppIntegration() {
  const [activeChat, setActiveChat] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  // Sample WhatsApp conversations
  const conversations = [
    {
      name: "أحمد محمد",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "متصل",
      messages: [
        { type: "user", text: "مرحباً، أريد الاستفسار عن المنتج الجديد" },
        { type: "bot", text: "أهلاً بك! يسعدني مساعدتك. ما هي المعلومات التي تود معرفتها عن المنتج الجديد؟" },
        { type: "user", text: "ما هي المواصفات والسعر؟" },
        {
          type: "bot",
          text: "المنتج الجديد يأتي بمواصفات متطورة تشمل:\n- شاشة عالية الدقة\n- بطارية تدوم 24 ساعة\n- مقاوم للماء\n\nالسعر: 1,999 ريال\n\nهل تود معرفة المزيد؟",
        },
      ],
    },
    {
      name: "سارة العتيبي",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "قبل 5 دقائق",
      messages: [
        { type: "user", text: "متى سيتم توصيل طلبي رقم #45678؟" },
        { type: "bot", text: "مرحباً! سأتحقق من حالة طلبك حالاً..." },
        { type: "bot", text: "طلبك رقم #45678 في مرحلة الشحن وسيصل خلال 24-48 ساعة. هل تحتاج إلى مساعدة أخرى؟" },
      ],
    },
    {
      name: "خالد السعيد",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "قبل ساعة",
      messages: [
        { type: "user", text: "أريد حجز موعد للصيانة" },
        {
          type: "bot",
          text: "أهلاً بك! يسعدني مساعدتك في حجز موعد للصيانة. هل تفضل زيارة الفرع أم خدمة الصيانة المنزلية؟",
        },
        { type: "user", text: "خدمة الصيانة المنزلية" },
        {
          type: "bot",
          text: "ممتاز! المواعيد المتاحة للصيانة المنزلية هي:\n\n- الأحد 10 مارس، 10 صباحاً - 12 ظهراً\n- الاثنين 11 مارس، 2 - 4 مساءً\n- الثلاثاء 12 مارس، 9 - 11 صباحاً\n\nيرجى اختيار الموعد المناسب لك.",
        },
      ],
    },
  ];

  // Auto-advance messages in the active chat
  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChat, currentMessage]);

  // Reset current message when changing chat
  useEffect(() => {
    setCurrentMessage(0);
  }, [activeChat]);

  // Auto rotate between chats
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChat((prev) => (prev + 1) % conversations.length);
    }, 15000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">روبوتات واتساب للأعمال</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              أتمتة التواصل مع العملاء عبر واتساب للأعمال، وتوفير تجربة سلسة وفعالة على المنصة الأكثر استخداماً
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
          {/* WhatsApp Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 bg-green-100 w-24 h-24 rounded-full opacity-60"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-md mx-auto">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] text-white p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">واتساب للأعمال</h3>
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
                  {/* Chat Background */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id="whatsapp-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                          <path d="M25,0 L50,25 L25,50 L0,25 Z" fill="#075E54" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#whatsapp-pattern)" />
                    </svg>
                  </div>

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
          </motion.div>

          {/* Features Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              تواصل مع عملائك
              <span className="block text-green-600">على المنصة المفضلة لديهم</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              أتمت التواصل مع عملائك عبر واتساب للأعمال، المنصة الأكثر استخداماً في المنطقة، وقدم تجربة سلسة وفعالة تزيد
              من رضا العملاء وتحسن معدلات التحويل.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: MessageSquare,
                  title: "ردود تلقائية ذكية",
                  description: "الرد على استفسارات العملاء الشائعة تلقائياً على مدار الساعة",
                },
                {
                  icon: ShoppingCart,
                  title: "تجربة تسوق سلسة",
                  description: "تمكين العملاء من تصفح المنتجات وإتمام عمليات الشراء عبر واتساب",
                },
                {
                  icon: Calendar,
                  title: "حجز المواعيد",
                  description: "تمكين العملاء من حجز وإدارة المواعيد بسهولة عبر المحادثة",
                },
                {
                  icon: BarChart,
                  title: "تحليلات متقدمة",
                  description: "قياس أداء روبوتات المحادثة وتحسينها باستمرار",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-green-600" />
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
                <BellRing className="h-5 w-5 text-green-600" />
                <span>مميزات حصرية لواتساب للأعمال</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "إرسال رسائل إشعارات وتنبيهات للعملاء",
                  "دعم الوسائط المتعددة (صور، فيديو، ملفات)",
                  "إنشاء كتالوج منتجات متكامل",
                  "تكامل مع أنظمة إدارة علاقات العملاء",
                  "تقارير تحليلية مفصلة عن أداء المحادثات",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                  <span>اكتشف المزيد عن ميزات واتساب للأعمال</span>
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

// Create a Search icon component since it's not in Lucide
function Search(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// Create a MoreVertical icon component since it's not in Lucide
function MoreVertical(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

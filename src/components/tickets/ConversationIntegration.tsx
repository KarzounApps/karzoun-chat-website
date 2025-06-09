import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  ArrowRight,
  Ticket,
  Users,
  Clock,
  Tag,
  Flag,
  User,
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Send,
  ArrowLeftRight,
  Settings,
  Bell,
  Calendar,
  FileText,
  Layers,
  Bot,
  Workflow,
  Zap,
} from "lucide-react";

export function ConversationIntegration() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showTicketForm, setShowTicketForm] = useState(false);

  // Sample conversation data
  const conversation = {
    customer: {
      name: "أحمد محمد",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    messages: [
      {
        id: 1,
        type: "customer",
        text: "مرحباً، لدي مشكلة في الدفع الإلكتروني",
        time: "10:30",
      },
      {
        id: 2,
        type: "agent",
        text: "مرحباً بك! آسف لسماع ذلك. هل يمكنك إخباري بالمزيد عن المشكلة؟",
        time: "10:31",
      },
      {
        id: 3,
        type: "customer",
        text: "عندما أحاول الدفع تظهر رسالة خطأ ولا يمكنني إكمال عملية الشراء",
        time: "10:32",
      },
    ],
  };

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">تحويل المحادثات إلى مهام</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              حول المحادثات الجارية إلى تذاكر ومهام بنقرة واحدة. تتبع وأدر طلبات العملاء بكفاءة من نفس واجهة المحادثة.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Conversation Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={conversation.customer.avatar}
                    alt={conversation.customer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{conversation.customer.name}</h3>
                    <span className="text-sm text-gray-500">متصل الآن</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeftRight className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Settings className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreHorizontal className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-[400px] flex flex-col">
              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {conversation.messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === "customer" ? "justify-start" : "justify-end"}`}
                    onClick={() => setSelectedMessage(message as any)}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === "customer" ? "bg-gray-100" : "bg-[#2ca24c] text-white"
                      }`}
                    >
                      <p className="mb-1">{message.text}</p>
                      <span className="text-xs opacity-70">{message.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => setShowTicketForm(true)}
                    className="flex items-center gap-2 bg-[#2ca24c] text-white px-4 py-2 rounded-lg text-sm"
                  >
                    <Ticket className="h-4 w-4" />
                    <span>تحويل إلى تذكرة</span>
                  </button>
                  <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm">
                    <Tag className="h-4 w-4" />
                    <span>إضافة وسم</span>
                  </button>
                  <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm">
                    <Users className="h-4 w-4" />
                    <span>تحويل للفريق</span>
                  </button>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="اكتب رسالتك هنا..."
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2ca24c] focus:border-transparent"
                  />
                  <button className="bg-[#2ca24c] text-white p-2 rounded-lg">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ticket Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">تحويل إلى تذكرة</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">عنوان التذكرة</label>
                  <input
                    type="text"
                    defaultValue="مشكلة في الدفع الإلكتروني"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2ca24c] focus:border-transparent"
                  />
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الأولوية</label>
                  <div className="flex gap-2">
                    {["منخفضة", "متوسطة", "عالية", "عاجلة"].map((priority) => (
                      <button
                        key={priority}
                        className={`px-4 py-2 rounded-lg text-sm ${
                          priority === "عالية"
                            ? "bg-[#2ca24c] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {priority}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Assignee */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">تعيين إلى</label>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2 space-x-reverse">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-sm"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                    <button className="p-1 bg-gray-100 rounded-full">
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Due Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ الاستحقاق</label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2ca24c] focus:border-transparent"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الوسوم</label>
                  <div className="flex flex-wrap gap-2">
                    {["دعم فني", "دفع إلكتروني", "عالي الأولوية"].map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                    <button className="p-1 bg-gray-100 rounded-full">
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2ca24c] focus:border-transparent"
                    defaultValue="العميل يواجه مشكلة في إتمام عملية الدفع الإلكتروني. يظهر رسالة خطأ عند محاولة إكمال عملية الشراء."
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                      <Bell className="h-4 w-4" />
                      <span className="text-sm">تذكيرات</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">مرفقات</span>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">إلغاء</button>
                    <button className="bg-[#2ca24c] text-white px-4 py-2 rounded-lg text-sm">إنشاء التذكرة</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ArrowLeftRight,
              title: "تحويل سلس",
              description: "حول المحادثات إلى تذاكر بنقرة واحدة مع نقل كامل السياق",
              features: ["تحويل فوري للمحادثات", "نقل تلقائي للمعلومات", "ربط بالمحادثة الأصلية"],
            },
            {
              icon: Workflow,
              title: "تدفق عمل ذكي",
              description: "تدفقات عمل مؤتمتة لمعالجة التذاكر بكفاءة",
              features: ["توجيه تلقائي للفريق", "إشعارات مخصصة", "متابعة حالة التذكرة"],
            },
            {
              icon: Layers,
              title: "تكامل شامل",
              description: "تكامل سلس مع جميع أدوات وأنظمة العمل",
              features: ["ربط مع CRM", "تكامل مع نظام المهام", "تزامن البيانات"],
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <feature.icon className="h-8 w-8 text-[#2ca24c] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#2ca24c]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

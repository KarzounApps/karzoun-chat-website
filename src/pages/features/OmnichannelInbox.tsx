import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Send, Facebook, Instagram, Mail, 
  Globe, Shield, Clock, CheckCircle2, ArrowRight,
  Smartphone, Laptop, Headphones, BarChart, Code,
  PieChart, BellRing, Sparkles, Palette, Layout,
  Layers, Lock, Key, Database, RefreshCw, Users,
  Bot, Zap, Tag, Filter, Search, MoreHorizontal,
  Star, Phone, Calendar, FileText, MessageCircle,
  Inbox, Share2, UserPlus, Settings2, ArrowLeftRight
} from 'lucide-react';

// Sample conversation data
const conversations = [
  {
    id: 1,
    customer: {
      name: "أحمد محمد",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    channel: "whatsapp",
    lastMessage: "شكراً لكم على المساعدة السريعة",
    time: "قبل 5 دقائق",
    status: "مغلقة",
    priority: "عادية",
    assigned: "محمد علي"
  },
  {
    id: 2,
    customer: {
      name: "سارة أحمد",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    channel: "facebook",
    lastMessage: "متى يمكنني استلام الطلب؟",
    time: "قبل 15 دقيقة",
    status: "مفتوحة",
    priority: "عالية",
    assigned: "فاطمة حسن"
  },
  {
    id: 3,
    customer: {
      name: "خالد العتيبي",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    channel: "instagram",
    lastMessage: "هل لديكم فرع في الرياض؟",
    time: "قبل ساعة",
    status: "معلقة",
    priority: "منخفضة",
    assigned: null
  }
];

export function OmnichannelInbox() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-10"></div>
          <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                صندوق وارد موحد
                <span className="block text-google-blue mt-2">لجميع قنوات التواصل</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                اجمع كل محادثات عملائك من مختلف المنصات في مكان واحد. إدارة أسهل، استجابة أسرع، وتجربة أفضل للعملاء.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-google-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                  ابدأ الآن مجاناً
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                  عرض توضيحي
                </button>
              </div>
            </motion.div>
          </div>

          {/* Inbox Demo */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-12 divide-x divide-gray-200">
                {/* Sidebar */}
                <div className="col-span-4 border-l">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-semibold">المحادثات</h2>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Filter className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="بحث في المحادثات..."
                        className="w-full pl-4 pr-10 py-2 bg-gray-100 border-none rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {conversations.map((conv) => (
                      <div
                        key={conv.id}
                        onClick={() => setSelectedConversation(conv)}
                        className={`p-4 cursor-pointer transition-colors ${
                          selectedConversation.id === conv.id
                            ? 'bg-blue-50'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={conv.avatar}
                            alt={conv.customer.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-gray-900 truncate">
                                {conv.customer.name}
                              </h4>
                              <span className="text-xs text-gray-500">{conv.time}</span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">
                              {conv.lastMessage}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                conv.status === 'مفتوحة'
                                  ? 'bg-green-100 text-green-800'
                                  : conv.status === 'معلقة'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {conv.status}
                              </span>
                              {conv.assigned && (
                                <span className="text-xs text-gray-500">
                                  {conv.assigned}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-span-8">
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={selectedConversation.customer.avatar}
                          alt={selectedConversation.customer.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{selectedConversation.customer.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>آخر تواجد: قبل 5 دقائق</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>المنطقة: الرياض</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Star className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Share2 className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <MoreHorizontal className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto">
                      {/* Messages will go here */}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="اكتب رسالتك هنا..."
                          className="flex-1 bg-gray-100 border-none rounded-lg px-4 py-2"
                        />
                        <button className="bg-google-blue text-white p-2 rounded-lg">
                          <Send className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              كل قنوات التواصل في مكان واحد
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              وفر وقت فريقك وحسن تجربة عملائك مع صندوق وارد موحد لجميع قنوات التواصل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Inbox,
                title: "صندوق وارد موحد",
                description: "جميع المحادثات من كل القنوات في مكان واحد"
              },
              {
                icon: ArrowLeftRight,
                title: "تحويل المحادثات",
                description: "تحويل سلس للمحادثات بين أعضاء الفريق"
              },
              {
                icon: Tag,
                title: "تصنيف تلقائي",
                description: "تصنيف ذكي للمحادثات حسب المحتوى والأولوية"
              },
              {
                icon: Bot,
                title: "ردود آلية",
                description: "ردود تلقائية ذكية على الاستفسارات الشائعة"
              },
              {
                icon: Users,
                title: "إدارة الفريق",
                description: "توزيع المهام وإدارة الصلاحيات بكفاءة"
              },
              {
                icon: BarChart,
                title: "تقارير متقدمة",
                description: "تحليلات شاملة لأداء خدمة العملاء"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <feature.icon className="h-8 w-8 text-google-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Supported Channels */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              قنوات متعددة، منصة واحدة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تواصل مع عملائك عبر قنواتهم المفضلة من منصة موحدة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "WhatsApp Business", icon: Send, color: "text-green-600" },
              { name: "Facebook Messenger", icon: Facebook, color: "text-blue-600" },
              { name: "Instagram Direct", icon: Instagram, color: "text-pink-600" },
              { name: "البريد الإلكتروني", icon: Mail, color: "text-red-600" },
              { name: "دردشة الموقع", icon: MessageSquare, color: "text-purple-600" },
              { name: "تيليجرام", icon: Send, color: "text-blue-500" },
              { name: "SMS", icon: MessageCircle, color: "text-gray-600" },
              { name: "قنوات مخصصة", icon: Settings2, color: "text-gray-800" }
            ].map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
              >
                <channel.icon className={`h-8 w-8 ${channel.color} mx-auto mb-4`} />
                <h3 className="font-medium">{channel.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Collaboration */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                تعاون فريق أفضل، خدمة عملاء أسرع
              </h2>
              <p className="text-gray-600 mb-8">
                ميزات متقدمة تساعد فريقك على العمل بكفاءة أعلى وتقديم خدمة أفضل للعملاء.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: UserPlus,
                    title: "إدارة الفريق",
                    description: "أدوار وصلاحيات مخصصة لكل عضو في الفريق"
                  },
                  {
                    icon: Share2,
                    title: "تحويل المحادثات",
                    description: "تحويل سلس للمحادثات بين أعضاء الفريق"
                  },
                  {
                    icon: FileText,
                    title: "ملاحظات داخلية",
                    description: "مشاركة الملاحظات والتعليقات بين أعضاء الفريق"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <feature.icon className="h-6 w-6 text-google-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              {/* Team collaboration visualization */}
              <div className="aspect-square rounded-xl bg-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              تحليلات شاملة لتحسين الأداء
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              فهم أفضل لأداء خدمة العملاء مع تقارير وتحليلات متقدمة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "وقت الاستجابة",
                value: "1.5 دقيقة",
                change: "-25%"
              },
              {
                icon: CheckCircle2,
                title: "معدل الرضا",
                value: "95%",
                change: "+5%"
              },
              {
                icon: MessageSquare,
                title: "المحادثات النشطة",
                value: "1,234",
                change: "+12%"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <stat.icon className="h-6 w-6 text-google-blue" />
                  </div>
                  <h3 className="font-semibold">{stat.title}</h3>
                </div>
                <div className="flex items-end gap-3">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className={`text-sm ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            جاهز لتوحيد قنوات تواصلك مع العملاء؟
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            ابدأ الآن مع فترة تجريبية مجانية لمدة 14 يوماً. لا يلزم بطاقة ائتمان.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
              جدولة عرض توضيحي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
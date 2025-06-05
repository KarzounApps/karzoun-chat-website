import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageSquare, FileText, Clock,
  User, Edit, CheckCircle2, Lock, Globe,
  Share2, UserPlus, Settings2, History,
  Bell, Calendar, ArrowRight, Shield,
  Plus, Filter, Search, MoreHorizontal,
  Flag, Tag, Send, ChevronDown
} from 'lucide-react';

export function TeamCollaboration() {
  const [activeView, setActiveView] = useState('activity');

  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "مدير المشروع",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "متصل"
    },
    {
      id: 2,
      name: "سارة أحمد",
      role: "مسؤول دعم",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "مشغول"
    },
    {
      id: 3,
      name: "محمد علي",
      role: "مطور",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "غير متصل"
    }
  ];

  // Sample activity data
  const activities = [
    {
      id: 1,
      user: teamMembers[0],
      action: "أضاف تعليق على",
      target: "تذكرة #1234",
      time: "قبل 5 دقائق",
      comment: "تم التواصل مع العميل وتأكيد المشكلة. سيتم حلها خلال الساعات القادمة."
    },
    {
      id: 2,
      user: teamMembers[1],
      action: "حول تذكرة إلى",
      target: "محمد علي",
      time: "قبل 15 دقيقة",
      priority: "عالية"
    },
    {
      id: 3,
      user: teamMembers[2],
      action: "أكمل",
      target: "مهمة #4567",
      time: "قبل ساعة",
      status: "مكتملة"
    }
  ];

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
            <h2 className="text-3xl font-bold mb-4">
              تعاون فريق فعال
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              أدوات متكاملة لتمكين فريقك من العمل معاً بكفاءة على معالجة التذاكر والمهام
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Members Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">أعضاء الفريق</h3>
                <button className="text-[#2ca24c] hover:text-[#239a41]">
                  <UserPlus className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          member.status === 'متصل' ? 'bg-green-500' :
                          member.status === 'مشغول' ? 'bg-yellow-500' :
                          'bg-gray-500'
                        }`}></div>
                      </div>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.role}</div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="w-full flex items-center justify-center gap-2 p-2 text-[#2ca24c] hover:bg-green-50 rounded-lg transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>إضافة عضو جديد</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="font-medium">نشاط الفريق</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveView('activity')}
                      className={`px-3 py-1.5 rounded-lg text-sm ${
                        activeView === 'activity'
                          ? 'bg-[#2ca24c] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      النشاطات
                    </button>
                    <button
                      onClick={() => setActiveView('tasks')}
                      className={`px-3 py-1.5 rounded-lg text-sm ${
                        activeView === 'tasks'
                          ? 'bg-[#2ca24c] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      المهام
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Filter className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <History className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4">
                    <img
                      src={activity.user.avatar}
                      alt={activity.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{activity.user.name}</span>
                        <span className="text-gray-500">{activity.action}</span>
                        <span className="font-medium text-[#2ca24c]">{activity.target}</span>
                      </div>
                      {activity.comment && (
                        <p className="text-gray-600 bg-gray-50 p-3 rounded-lg mt-2">
                          {activity.comment}
                        </p>
                      )}
                      {activity.priority && (
                        <span className="inline-flex items-center gap-1 text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mt-2">
                          <Flag className="h-3 w-3" />
                          {activity.priority}
                        </span>
                      )}
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-gray-500">{activity.time}</span>
                        <button className="text-sm text-[#2ca24c] hover:underline">
                          رد
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Input */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="اكتب تعليقاً..."
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2ca24c] focus:border-transparent"
                  />
                  <button className="bg-[#2ca24c] text-white p-2 rounded-lg">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MessageSquare,
              title: "تعليقات وملاحظات",
              description: "تواصل فعال بين أعضاء الفريق على التذاكر والمهام",
              features: [
                "تعليقات داخلية",
                "ملاحظات خاصة",
                "إشارة للأعضاء"
              ]
            },
            {
              icon: Bell,
              title: "إشعارات مخصصة",
              description: "إبقاء الفريق على اطلاع بآخر المستجدات",
              features: [
                "تنبيهات فورية",
                "إشعارات مخصصة",
                "تذكيرات المهام"
              ]
            },
            {
              icon: Shield,
              title: "إدارة الصلاحيات",
              description: "تحكم دقيق في صلاحيات كل عضو",
              features: [
                "أدوار مخصصة",
                "صلاحيات مرنة",
                "سجل النشاطات"
              ]
            }
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
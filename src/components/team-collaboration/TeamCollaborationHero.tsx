import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, MessageSquare, Clock } from 'lucide-react';

export function TeamCollaborationHero() {
  const teamMembers = [
    { name: 'أحمد محمد', role: 'مدير خدمة العملاء', avatar: 'أ', status: 'online' },
    { name: 'سارة أحمد', role: 'مختص دعم فني', avatar: 'س', status: 'busy' },
    { name: 'خالد سعيد', role: 'مختص مبيعات', avatar: 'خ', status: 'online' },
  ];

  return (
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
              تعاون فريق 
              <span className="block text-google-blue mt-2">سلس</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              مركز رسائل واحد لفريقك
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              أدر كل محادثات العملاء مع فريقك بفعالية عبر صندوق وارد موحد
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                عرض توضيحي
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-google-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                ابدأ الآن مجاناً
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Team Collaboration Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Inbox Section */}
                <div className="md:col-span-2">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-google-blue" />
                        صندوق الوارد المشترك
                      </h3>
                      <span className="text-sm text-gray-500">3 محادثات نشطة</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 border-r-4 border-red-400">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">عميل جديد - استفسار عاجل</span>
                          <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">عاجل</span>
                        </div>
                        <p className="text-sm text-gray-600">مُعيّن إلى: أحمد محمد</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border-r-4 border-blue-400">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">دعم فني - مشكلة تقنية</span>
                          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">دعم فني</span>
                        </div>
                        <p className="text-sm text-gray-600">مُعيّن إلى: سارة أحمد</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border-r-4 border-green-400">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">استفسار مبيعات</span>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">مبيعات</span>
                        </div>
                        <p className="text-sm text-gray-600">مُعيّن إلى: خالد سعيد</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Status Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-google-blue" />
                    حالة الفريق
                  </h3>
                  
                  <div className="space-y-3">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-8 h-8 bg-google-blue rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            {member.avatar}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                            member.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                          }`}></div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{member.name}</p>
                          <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


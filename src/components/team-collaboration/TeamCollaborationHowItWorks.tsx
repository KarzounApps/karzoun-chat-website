import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, MessageSquare, Zap, AtSign, Mail, Phone } from 'lucide-react';

export function TeamCollaborationHowItWorks() {
  const features = [
    {
      icon: ArrowRight,
      text: "توجيه فوري للمحادثات حسب المهارات أو القسم لضمان أسرع حل."
    },
    {
      icon: AtSign,
      text: "تعيين المهام و@الإشارات داخل صندوق الوارد لتعزيز تواصل فريقك."
    },
    {
      icon: MessageSquare,
      text: "تكامل مع شات وقنوات التواصل لتجميع رسائل البريد والواتساب ووسائل التواصل في مكان واحد."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            كيف يعمل تعاون الفريق؟
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-google-blue" />
                  صندوق الوارد المشترك
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">الفريق متصل</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Conversation Assignment */}
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                        ع
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">عميل جديد</p>
                        <p className="text-sm text-gray-600">استفسار عن الخدمات</p>
                      </div>
                    </div>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">عاجل</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <p className="text-sm text-gray-700">مرحباً، أريد معرفة المزيد عن خدماتكم</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AtSign className="w-4 h-4 text-google-blue" />
                      <span className="text-sm text-gray-600">مُعيّن إلى: أحمد محمد</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-6 bg-google-blue rounded-full flex items-center justify-center text-white text-xs">
                        أ
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Internal Note */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">ملاحظة داخلية</span>
                  </div>
                  <p className="text-sm text-gray-700">@سارة يمكنك مساعدة هذا العميل بالمعلومات التقنية؟</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">
                      س
                    </div>
                    <span className="text-xs text-gray-500">سارة أحمد - مختص دعم فني</span>
                  </div>
                </div>

                {/* Channel Integration */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">قنوات التواصل المتكاملة</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-gray-600">واتساب</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-600">بريد إلكتروني</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-gray-600">مكالمات</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-google-blue rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-right text-lg">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}


'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  MessageCircle, 
  Heart, 
  Send, 
  Camera, 
  Image, 
  Video, 
  Users, 
  BarChart3, 
  Zap, 
  Clock, 
  Target, 
  TrendingUp,
  Eye,
  ThumbsUp,
  Share2,
  Bookmark,
  Bell,
  Settings,
  CheckCircle2,
  ArrowRight,
  Play,
  Pause,
  Volume2
} from 'lucide-react';

const InstagramIntegrationFeatures = () => {
  const [activeTab, setActiveTab] = useState('messages');

  const features = [
    {
      icon: MessageCircle,
      title: "الرسائل المباشرة",
      description: "استقبل وأرسل الرسائل المباشرة من انستغرام مباشرة في صندوق الوارد الموحد",
      benefits: [
        "دمج كامل مع الرسائل المباشرة",
        "ردود آلية ذكية على الاستفسارات الشائعة",
        "تتبع حالة المحادثات والردود",
        "إشعارات فورية للرسائل الجديدة"
      ]
    },
    {
      icon: Heart,
      title: "إدارة التفاعلات والتعليقات",
      description: "تتبع وإدارة جميع التفاعلات على منشوراتك من إعجابات وتعليقات ومشاركات مع ردود مباشرة على التعليقات",
      benefits: [
        "مراقبة التعليقات والرد عليها مباشرة من المنصة",
        "تحويل التعليقات إلى محادثات خاصة",
        "تحليل معدلات التفاعل والوصول",
        "إدارة الإعجابات والمشاركات",
        "ردود آلية على التعليقات الشائعة",
        "تقارير تفصيلية عن أداء التعليقات"
      ]
    },
    {
      icon: Users,
      title: "إدارة المتابعين",
      description: "تنظيم وتصنيف المتابعين والعملاء المحتملين مع تتبع تفاعلاتهم",
      benefits: [
        "تصنيف المتابعين حسب الاهتمامات",
        "تتبع العملاء المحتملين",
        "إحصائيات نمو المتابعين",
        "تحليل سلوك المتابعين"
      ]
    },
    {
      icon: BarChart3,
      title: "تحليلات متقدمة",
      description: "احصل على رؤى عميقة حول أداء حسابك وتفاعل الجمهور مع المحتوى",
      benefits: [
        "تحليل أداء المنشورات والستوري",
        "إحصائيات الوصول والانطباعات",
        "تقارير التفاعل والمشاركة",
        "تحليل أفضل أوقات النشر"
      ]
    },
    {
      icon: Zap,
      title: "الأتمتة الذكية",
      description: "أتمت ردودك وتفاعلاتك مع المتابعين باستخدام الذكاء الاصطناعي للرسائل والتعليقات",
      benefits: [
        "ردود آلية مخصصة حسب نوع الاستفسار",
        "ردود تلقائية على التعليقات الشائعة",
        "ترحيب تلقائي بالمتابعين الجدد",
        "تصنيف الرسائل والتعليقات حسب الأولوية",
        "تحويل التعليقات المهمة إلى رسائل خاصة",
        "جدولة المنشورات والستوري"
      ]
    },
    {
      icon: Target,
      title: "استهداف العملاء",
      description: "حدد واستهدف العملاء المحتملين بناءً على تفاعلهم مع المحتوى",
      benefits: [
        "تحديد العملاء المحتملين تلقائياً",
        "تصنيف حسب مستوى الاهتمام",
        "متابعة رحلة العميل من المتابعة للشراء",
        "حملات استهداف مخصصة"
      ]
    }
  ];

  const integrationSteps = [
    {
      step: 1,
      title: "ربط الحساب",
      description: "اربط حساب انستغرام التجاري بكرزون بنقرة واحدة",
      icon: Instagram
    },
    {
      step: 2,
      title: "تكوين الإعدادات",
      description: "اضبط إعدادات الردود الآلية والتصنيفات",
      icon: Settings
    },
    {
      step: 3,
      title: "بدء التشغيل",
      description: "ابدأ في استقبال وإدارة رسائل انستغرام",
      icon: CheckCircle2
    }
  ];

  const demoData = {
    messages: {
      title: "إدارة الرسائل المباشرة",
      content: (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">الرسائل المباشرة</h3>
              <p className="text-sm text-gray-500">15 رسالة جديدة</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { name: "نورا الغامدي", message: "هل المنتج متوفر بلون أزرق؟", time: "قبل 5 دقائق", unread: true },
              { name: "أحمد الشهري", message: "شكراً لكم، الخدمة ممتازة", time: "قبل 15 دقيقة", unread: false },
              { name: "سارة العتيبي", message: "متى موعد التخفيضات القادمة؟", time: "قبل ساعة", unread: true }
            ].map((msg, index) => (
              <div key={index} className={`p-4 rounded-lg border ${msg.unread ? 'bg-purple-50 border-purple-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="font-medium text-gray-900">{msg.name}</span>
                    {msg.unread && <div className="w-2 h-2 bg-purple-500 rounded-full"></div>}
                  </div>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
                <p className="text-gray-700 text-sm">{msg.message}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    analytics: {
      title: "تحليلات الأداء",
      content: (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">تحليلات انستغرام</h3>
              <p className="text-sm text-gray-500">آخر 30 يوم</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">الوصول</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">24.5K</div>
              <div className="text-xs text-green-600">↑ 12.5%</div>
            </div>
            
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium text-gray-700">التفاعل</span>
              </div>
              <div className="text-2xl font-bold text-pink-600">3.2K</div>
              <div className="text-xs text-green-600">↑ 8.3%</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">معدل التفاعل</span>
              <span className="text-sm font-medium">4.2%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '42%' }}></div>
            </div>
          </div>
        </div>
      )
    },
    automation: {
      title: "الردود الآلية",
      content: (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">الردود الآلية</h3>
              <p className="text-sm text-gray-500">نشط</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { trigger: "مرحبا", response: "أهلاً وسهلاً! كيف يمكنني مساعدتك اليوم؟", active: true },
              { trigger: "أسعار", response: "يمكنك مراجعة أسعارنا في الكتالوج المرفق", active: true },
              { trigger: "توصيل", response: "نوصل لجميع مناطق المملكة خلال 24-48 ساعة", active: false }
            ].map((rule, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">"{rule.trigger}"</span>
                    <div className={`w-2 h-2 rounded-full ${rule.active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>
                  <button className="text-xs text-purple-600 hover:text-purple-700">تعديل</button>
                </div>
                <p className="text-sm text-gray-600">← {rule.response}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  };

  return (
    <div className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            مميزات تكامل انستغرام
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استفد من جميع إمكانيات انستغرام لتحسين تواصلك مع العملاء وزيادة مبيعاتك
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-xl mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">جرب الميزات بنفسك</h3>
            <p className="text-gray-600">اكتشف كيف يعمل تكامل انستغرام مع كرزون</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-xl p-1 flex gap-1">
              {Object.entries(demoData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-white text-purple-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {data.title}
                </button>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            {demoData[activeTab as keyof typeof demoData].content}
          </motion.div>
        </motion.div>

        {/* Integration Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">كيفية البدء</h3>
            <p className="text-gray-600">ثلاث خطوات بسيطة لربط انستغرام مع كرزون</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">جاهز لتطوير تواصلك مع العملاء؟</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            ابدأ في استخدام تكامل انستغرام مع كرزون اليوم واكتشف الفرق في تجربة عملائك
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              ابدأ الآن مجاناً
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              تحدث مع خبير
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InstagramIntegrationFeatures;


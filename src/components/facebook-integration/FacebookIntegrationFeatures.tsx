'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  MessageCircle, 
  Heart, 
  Send, 
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
  Volume2,
  MessageSquare,
  UserPlus,
  Calendar,
  Filter,
  Tag,
  Globe
} from 'lucide-react';

const FacebookIntegrationFeatures = () => {
  const [activeTab, setActiveTab] = useState('messages');

  const features = [
    {
      icon: MessageCircle,
      title: "رسائل مسنجر",
      description: "استقبل وأرسل رسائل مسنجر مباشرة من صندوق الوارد الموحد مع إدارة شاملة للمحادثات",
      benefits: [
        "دمج كامل مع رسائل مسنجر",
        "ردود آلية ذكية على الاستفسارات الشائعة",
        "تتبع حالة المحادثات والردود",
        "إشعارات فورية للرسائل الجديدة",
        "دعم الملفات والصور والفيديوهات",
        "تصنيف المحادثات حسب الأولوية"
      ]
    },
    {
      icon: Heart,
      title: "إدارة تعليقات فيسبوك",
      description: "تتبع وإدارة جميع تعليقات منشورات فيسبوك مع ردود مباشرة وتحويل للمحادثات الخاصة",
      benefits: [
        "مراقبة تعليقات المنشورات والرد عليها مباشرة",
        "تحويل التعليقات إلى محادثات مسنجر خاصة",
        "تحليل معدلات التفاعل والوصول",
        "إدارة الإعجابات والمشاركات",
        "ردود آلية على التعليقات الشائعة",
        "تقارير تفصيلية عن أداء التعليقات",
        "فلترة التعليقات حسب المشاعر"
      ]
    },
    {
      icon: Users,
      title: "إدارة المتابعين والعملاء",
      description: "تنظيم وتصنيف متابعي الصفحة والعملاء المحتملين مع تتبع شامل للتفاعلات",
      benefits: [
        "تصنيف المتابعين حسب الاهتمامات والسلوك",
        "تتبع العملاء المحتملين من التعليقات والرسائل",
        "إحصائيات نمو المتابعين والتفاعل",
        "تحليل سلوك المتابعين وأنماط التفاعل",
        "إنشاء قوائم مخصصة للعملاء",
        "متابعة رحلة العميل من المتابعة للشراء"
      ]
    },
    {
      icon: BarChart3,
      title: "تحليلات متقدمة",
      description: "احصل على رؤى عميقة حول أداء صفحتك وتفاعل الجمهور مع المحتوى والرسائل",
      benefits: [
        "تحليل أداء المنشورات والتفاعلات",
        "إحصائيات الوصول والانطباعات",
        "تقارير التفاعل والمشاركة التفصيلية",
        "تحليل أفضل أوقات النشر والتفاعل",
        "معدلات الاستجابة لرسائل مسنجر",
        "تحليل المشاعر للتعليقات والرسائل"
      ]
    },
    {
      icon: Zap,
      title: "الأتمتة الذكية",
      description: "أتمت ردودك وتفاعلاتك مع المتابعين باستخدام الذكاء الاصطناعي للرسائل والتعليقات",
      benefits: [
        "ردود آلية مخصصة حسب نوع الاستفسار",
        "ردود تلقائية على تعليقات فيسبوك الشائعة",
        "ترحيب تلقائي بالمتابعين الجدد",
        "تصنيف الرسائل والتعليقات حسب الأولوية",
        "تحويل التعليقات المهمة إلى رسائل مسنجر",
        "جدولة المنشورات والردود",
        "روبوتات محادثة ذكية لمسنجر"
      ]
    },
    {
      icon: Target,
      title: "استهداف العملاء المتقدم",
      description: "حدد واستهدف العملاء المحتملين بناءً على تفاعلهم مع المحتوى والرسائل",
      benefits: [
        "تحديد العملاء المحتملين تلقائياً من التفاعلات",
        "تصنيف حسب مستوى الاهتمام والتفاعل",
        "متابعة رحلة العميل من المتابعة للشراء",
        "حملات استهداف مخصصة عبر مسنجر",
        "تجميع العملاء حسب السلوك والاهتمامات",
        "إنشاء جماهير مخصصة للإعلانات"
      ]
    }
  ];

  const interactiveDemo = {
    messages: {
      title: "إدارة رسائل مسنجر",
      subtitle: "12 رسالة جديدة",
      content: [
        { name: "عبدالله الأحمد", time: "قبل 5 دقائق", message: "هل يمكنني معرفة أسعار المنتجات الجديدة؟", avatar: "/images/saudi-man-ahmed.jpg" },
        { name: "فاطمة السعيد", time: "قبل 15 دقيقة", message: "شكراً لكم، الخدمة ممتازة جداً", avatar: "/images/saudi-woman-sara.jpg" },
        { name: "محمد الغامدي", time: "قبل ساعة", message: "متى موعد وصول الطلبية؟", avatar: "/images/saudi-man-khalid.jpg" }
      ]
    },
    analytics: {
      title: "تحليلات الأداء",
      subtitle: "آخر 30 يوم",
      content: [
        { label: "رسائل مسنجر", value: "2,847", change: "+12%" },
        { label: "تعليقات المنشورات", value: "1,234", change: "+8%" },
        { label: "معدل الاستجابة", value: "94%", change: "+3%" },
        { label: "رضا العملاء", value: "4.8/5", change: "+0.2" }
      ]
    },
    automation: {
      title: "الردود الآلية",
      subtitle: "قوالب نشطة",
      content: [
        { trigger: "مرحباً", response: "أهلاً وسهلاً بك في كرزون! كيف يمكنني مساعدتك؟", type: "ترحيب" },
        { trigger: "الأسعار", response: "يمكنك الاطلاع على جميع أسعارنا من خلال الرابط التالي...", type: "معلومات" },
        { trigger: "التوصيل", response: "نوصل لجميع مناطق المملكة خلال 24-48 ساعة", type: "خدمات" }
      ]
    }
  };

  return (
    <div className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            مميزات تكامل فيسبوك ومسنجر
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            استفد من جميع إمكانيات فيسبوك ومسنجر لتحسين تواصلك مع العملاء وزيادة مبيعاتك
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">جرب الميزات بنفسك</h2>
            <p className="text-xl text-gray-600">اكتشف كيف يعمل تكامل فيسبوك ومسنجر مع كرزون</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(interactiveDemo).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            {activeTab === 'messages' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{interactiveDemo.messages.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {interactiveDemo.messages.subtitle}
                  </span>
                </div>
                <div className="space-y-4">
                  {interactiveDemo.messages.content.map((msg, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <img src={msg.avatar} alt={msg.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{msg.name}</h4>
                          <span className="text-sm text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-gray-700">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{interactiveDemo.analytics.title}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {interactiveDemo.analytics.subtitle}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {interactiveDemo.analytics.content.map((stat, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-700">{stat.label}</h4>
                        <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'automation' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{interactiveDemo.automation.title}</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {interactiveDemo.automation.subtitle}
                  </span>
                </div>
                <div className="space-y-4">
                  {interactiveDemo.automation.content.map((rule, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                          {rule.type}
                        </span>
                        <span className="text-gray-600">عند كتابة: "{rule.trigger}"</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-800">{rule.response}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Getting Started Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">كيفية البدء</h2>
            <p className="text-xl text-gray-600">ثلاث خطوات بسيطة لربط فيسبوك ومسنجر مع كرزون</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "ربط صفحة فيسبوك",
                description: "اربط صفحة فيسبوك التجارية ومسنجر بكرزون بنقرة واحدة"
              },
              {
                step: "2", 
                title: "تكوين الإعدادات",
                description: "اضبط إعدادات الردود الآلية والتصنيفات للرسائل والتعليقات"
              },
              {
                step: "3",
                title: "بدء التشغيل", 
                description: "ابدأ في استقبال وإدارة رسائل مسنجر وتعليقات فيسبوك"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">جاهز لتطوير تواصلك مع العملاء؟</h2>
          <p className="text-xl mb-8 opacity-90">
            ابدأ في استخدام تكامل فيسبوك ومسنجر مع كرزون اليوم واكتشف الفرق في تجربة عملائك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
              تحدث مع خبير
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FacebookIntegrationFeatures;


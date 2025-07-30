'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Clock, Users, BarChart3, Shield, CheckCircle } from 'lucide-react';

export default function ChatbotsFeatures() {
  const features = [
    {
      icon: Bot,
      title: "ذكاء اصطناعي متقدم",
      description: "روبوتات ذكية تتعلم وتتطور مع كل محادثة لتقديم تجربة أفضل",
      benefits: [
        "فهم طبيعي للغة العربية",
        "تعلم من المحادثات السابقة",
        "ردود ذكية ومناسبة للسياق"
      ]
    },
    {
      icon: MessageSquare,
      title: "محادثات تفاعلية",
      description: "تفاعل طبيعي وسلس مع العملاء يحاكي المحادثة البشرية",
      benefits: [
        "ردود فورية على الاستفسارات",
        "دعم للرسائل النصية والصوتية",
        "تفاعل متعدد الوسائط"
      ]
    },
    {
      icon: Clock,
      title: "خدمة على مدار الساعة",
      description: "روبوتات تعمل بلا توقف لخدمة عملائك في أي وقت",
      benefits: [
        "متاح 24/7 دون انقطاع",
        "لا يتطلب فترات راحة",
        "استجابة فورية للطوارئ"
      ]
    },
    {
      icon: Users,
      title: "إدارة متعددة العملاء",
      description: "قدرة على التعامل مع آلاف المحادثات في نفس الوقت",
      benefits: [
        "محادثات متزامنة غير محدودة",
        "توزيع ذكي للمحادثات",
        "أولوية للحالات العاجلة"
      ]
    },
    {
      icon: BarChart3,
      title: "تحليلات ذكية",
      description: "تقارير مفصلة عن أداء الروبوتات وتفاعل العملاء",
      benefits: [
        "إحصائيات شاملة للأداء",
        "تحليل رضا العملاء",
        "تحسين مستمر للردود"
      ]
    },
    {
      icon: Shield,
      title: "أمان وخصوصية",
      description: "حماية متقدمة لبيانات العملاء والمحادثات",
      benefits: [
        "تشفير شامل للمحادثات",
        "امتثال لمعايير الأمان",
        "حماية البيانات الحساسة"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            مميزات روبوتات المحادثة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استفد من أحدث تقنيات الذكاء الاصطناعي لتحسين خدمة العملاء وتقليل عبء العمل
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Icon */}
              <div className="flex justify-end mb-6">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-right">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-right leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start justify-end text-right">
                    <span className="text-gray-700 ml-3 flex-1">{benefit}</span>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


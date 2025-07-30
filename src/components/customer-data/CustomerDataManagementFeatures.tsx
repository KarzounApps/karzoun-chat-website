'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  BarChart3, 
  Users, 
  Target, 
  Shield, 
  Zap,
  CheckCircle
} from 'lucide-react';

const CustomerDataManagementFeatures: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'تجميع البيانات الشامل',
      description: 'اجمع بيانات العملاء من جميع نقاط التفاعل في مكان واحد',
      benefits: [
        'تكامل مع جميع القنوات الرقمية',
        'تحديث تلقائي للبيانات',
        'تخزين آمن ومنظم'
      ]
    },
    {
      icon: BarChart3,
      title: 'تحليل السلوك المتقدم',
      description: 'فهم أعمق لسلوك العملاء وأنماط الشراء',
      benefits: [
        'تحليل رحلة العميل',
        'تتبع التفاعلات',
        'توقع الاحتياجات المستقبلية'
      ]
    },
    {
      icon: Users,
      title: 'تجميع العملاء الذكي',
      description: 'تصنيف العملاء إلى مجموعات متجانسة لاستهداف أفضل',
      benefits: [
        'تجميع تلقائي بالذكاء الاصطناعي',
        'معايير تصنيف مخصصة',
        'تحديث ديناميكي للمجموعات'
      ]
    },
    {
      icon: Target,
      title: 'الاستهداف الدقيق',
      description: 'إنشاء حملات تسويقية مخصصة لكل مجموعة عملاء',
      benefits: [
        'رسائل مخصصة لكل مجموعة',
        'توقيت مثالي للحملات',
        'قياس فعالية الاستهداف'
      ]
    },
    {
      icon: Shield,
      title: 'الأمان والخصوصية',
      description: 'حماية متقدمة لبيانات العملاء مع الامتثال للقوانين',
      benefits: [
        'تشفير متقدم للبيانات',
        'امتثال لقوانين الخصوصية',
        'تحكم في صلاحيات الوصول'
      ]
    },
    {
      icon: Zap,
      title: 'الأتمتة الذكية',
      description: 'أتمتة عمليات إدارة البيانات وتحليلها',
      benefits: [
        'تحديث تلقائي للملفات',
        'تنبيهات ذكية',
        'تقارير دورية تلقائية'
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            مميزات إدارة بيانات العملاء
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استفد من أدوات متقدمة لتنظيم وتحليل بيانات عملائك وتحسين استراتيجياتك التسويقية
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
                  <li key={benefitIndex} className="flex items-center justify-end text-right">
                    <span className="text-gray-700 mr-3">{benefit}</span>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerDataManagementFeatures;


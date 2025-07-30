'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Calendar, 
  MessageSquare,
  Check
} from 'lucide-react'

const SalesManagementFeatures = () => {
  const features = [
    {
      icon: Users,
      title: 'إدارة العملاء المحتملين',
      description: 'تتبع وإدارة شامل للعملاء المحتملين من أول تفاعل حتى إتمام الصفقة',
      benefits: [
        'تصنيف العملاء حسب الأولوية',
        'تتبع مراحل البيع',
        'تسجيل تفاعلات العملاء',
        'تحديد الفرص الواعدة'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'تتبع أداء المبيعات',
      description: 'مراقبة مستمرة لأداء فريق المبيعات والصفقات الجارية',
      benefits: [
        'لوحة تحكم شاملة',
        'تتبع الأهداف اليومية والشهرية',
        'مقارنة الأداء بالفترات السابقة',
        'تحديد نقاط القوة والضعف'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Target,
      title: 'إدارة الأهداف والمؤشرات',
      description: 'تحديد وتتبع أهداف المبيعات ومؤشرات الأداء الرئيسية',
      benefits: [
        'تحديد أهداف ذكية وقابلة للقياس',
        'تتبع التقدم في الوقت الفعلي',
        'تنبيهات عند الانحراف عن الهدف',
        'تقارير دورية للإدارة'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: 'التقارير والتحليلات',
      description: 'تحليل شامل لبيانات المبيعات وإنتاج تقارير مفصلة',
      benefits: [
        'تقارير مخصصة حسب الحاجة',
        'تحليل اتجاهات السوق',
        'توقع المبيعات المستقبلية',
        'قياس عائد الاستثمار'
      ],
      color: 'bg-orange-500'
    },
    {
      icon: Calendar,
      title: 'جدولة المتابعات',
      description: 'تنظيم وجدولة المتابعات مع العملاء لضمان عدم فقدان أي فرصة',
      benefits: [
        'تذكيرات تلقائية للمتابعة',
        'جدولة المواعيد والاجتماعات',
        'تتبع تاريخ التفاعلات',
        'تحديد أولويات المتابعة'
      ],
      color: 'bg-indigo-500'
    },
    {
      icon: MessageSquare,
      title: 'التواصل المتكامل',
      description: 'منصة موحدة للتواصل مع العملاء عبر جميع القنوات',
      benefits: [
        'تكامل مع واتساب والبريد الإلكتروني',
        'سجل شامل للمحادثات',
        'ردود آلية ذكية',
        'تصعيد المحادثات للمختصين'
      ],
      color: 'bg-teal-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            مميزات <span className="text-green-500">إدارة المبيعات</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            أدوات شاملة لإدارة عمليات البيع بكفاءة وتحقيق أهداف المبيعات
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start gap-6">
                  <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SalesManagementFeatures


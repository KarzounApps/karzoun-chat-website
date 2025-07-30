'use client'

import React from 'react'
import { motion } from 'framer-motion'
import WhatsAppBookingDemo from './WhatsAppBookingDemo'
import { 
  Settings, 
  Database, 
  TrendingUp, 
  ArrowDown
} from 'lucide-react'

const WhatsAppFlowsWorkflow = () => {
  const steps = [
    {
      icon: Settings,
      title: 'تصميم المسار',
      description: 'صمم مسار المحادثة بسهولة باستخدام أدوات السحب والإفلات',
      details: ['إنشاء الأسئلة والخيارات', 'تحديد المسارات الشرطية', 'إضافة الوسائط والملفات'],
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'بدء المحادثة',
      description: 'العميل يبدأ المحادثة ويتفاعل مع المسار التلقائي',
      details: ['رسالة ترحيب تلقائية', 'عرض الخيارات المتاحة', 'توجيه ذكي للمحتوى'],
      color: 'bg-green-500'
    },
    {
      icon: Database,
      title: 'جمع البيانات',
      description: 'النظام يجمع ويحفظ إجابات العميل تلقائياً',
      details: ['حفظ فوري للبيانات', 'تصنيف المعلومات', 'ربط مع CRM'],
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'تحليل النتائج',
      description: 'تحليل شامل لأداء المسارات ومعدلات الإكمال',
      details: ['تقارير مفصلة', 'معدلات التحويل', 'اقتراحات التحسين'],
      color: 'bg-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            كيف تعمل <span className="text-green-500">المسارات الآلية</span>؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            عملية بسيطة من 4 خطوات لإنشاء مسارات تفاعلية تحسن تجربة العملاء
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6" dir="rtl">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 justify-start">
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                          الخطوة {index + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 text-right">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-right leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center justify-start gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <ArrowDown className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* WhatsApp Booking Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-8"
          >
            <WhatsAppBookingDemo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppFlowsWorkflow


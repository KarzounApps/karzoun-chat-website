'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Workflow, 
  Database, 
  Zap, 
  BarChart3, 
  Shield, 
  Palette,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const WhatsAppFlowsFeatures = () => {
  const features = [
    {
      icon: Workflow,
      title: 'مسارات تفاعلية ذكية',
      description: 'صمم مسارات محادثة متقدمة تتفاعل مع ردود العملاء وتوجههم للخطوة التالية تلقائياً',
      color: 'bg-blue-500',
      benefits: ['تصميم بصري سهل', 'منطق شرطي متقدم', 'تفرعات ذكية']
    },
    {
      icon: Database,
      title: 'جمع البيانات التلقائي',
      description: 'اجمع معلومات العملاء وتفضيلاتهم تلقائياً أثناء المحادثة وخزنها في قاعدة البيانات',
      color: 'bg-purple-500',
      benefits: ['حفظ تلقائي', 'تصنيف ذكي', 'تصدير سهل']
    },
    {
      icon: Zap,
      title: 'استجابة فورية',
      description: 'ردود سريعة ومخصصة بناءً على اختيارات العميل مع إمكانية التحويل للدعم البشري',
      color: 'bg-yellow-500',
      benefits: ['رد فوري', 'تخصيص ذكي', 'تصعيد تلقائي']
    },
    {
      icon: BarChart3,
      title: 'تحليلات شاملة',
      description: 'تتبع أداء المسارات ومعدلات الإكمال والتحويل مع تقارير مفصلة',
      color: 'bg-green-500',
      benefits: ['تقارير مفصلة', 'معدلات الأداء', 'تحسين مستمر']
    },
    {
      icon: Shield,
      title: 'أمان وخصوصية',
      description: 'حماية كاملة لبيانات العملاء مع التشفير والامتثال لمعايير الأمان العالمية',
      color: 'bg-red-500',
      benefits: ['تشفير متقدم', 'امتثال GDPR', 'نسخ احتياطية']
    },
    {
      icon: Palette,
      title: 'تخصيص كامل',
      description: 'خصص شكل ومحتوى المسارات ليتناسب مع هوية علامتك التجارية ومتطلباتك',
      color: 'bg-indigo-500',
      benefits: ['قوالب جاهزة', 'تصميم مرن', 'علامة تجارية']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            مميزات <span className="text-green-500">المسارات الآلية</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشف كيف تساعدك مسارات واتساب الآلية في تحسين تجربة العملاء وزيادة معدلات التحويل
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-right">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-right leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center justify-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center justify-start gap-2 text-green-500 font-semibold cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span className="text-sm">اكتشف المزيد</span>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              جاهز لتحسين تجربة عملائك؟
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              ابدأ في إنشاء مسارات واتساب تفاعلية تزيد من رضا العملاء ومعدلات التحويل
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              ابدأ التجربة المجانية
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatsAppFlowsFeatures


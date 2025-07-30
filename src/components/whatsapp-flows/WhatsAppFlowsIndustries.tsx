'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Stethoscope, 
  ShoppingBag, 
  GraduationCap, 
  Building2,
  Car,
  Utensils,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react'

const WhatsAppFlowsIndustries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const industries = [
    {
      icon: Stethoscope,
      name: 'الرعاية الصحية',
      color: 'bg-blue-500',
      description: 'حجز المواعيد والاستشارات الطبية',
      useCases: [
        'حجز المواعيد الطبية',
        'تذكير بالأدوية',
        'استطلاع رضا المرضى',
        'متابعة ما بعد العلاج'
      ],
      stats: {
        conversion: '150%',
        satisfaction: '95%',
        efficiency: '80%'
      },
      example: {
        title: 'مسار حجز موعد طبي',
        steps: [
          'اختيار نوع الخدمة الطبية',
          'تحديد التخصص المطلوب',
          'اختيار الطبيب والموعد',
          'تأكيد البيانات الشخصية'
        ]
      }
    },
    {
      icon: ShoppingBag,
      name: 'العقارات',
      color: 'bg-green-500',
      description: 'تحسين تجربة التسوق والمبيعات',
      useCases: [
        'استطلاع تفضيلات العملاء',
        'توصيات المنتجات',
        'عملية الإرجاع والاستبدال',
        'تقييم المنتجات'
      ],
      stats: {
        conversion: '200%',
        satisfaction: '92%',
        efficiency: '75%'
      },
      example: {
        title: 'مسار توصية المنتجات',
        steps: [
          'تحديد نوع المنتج المطلوب',
          'اختيار الميزانية المناسبة',
          'تحديد التفضيلات الشخصية',
          'عرض المنتجات المقترحة'
        ]
      }
    },
    {
      icon: GraduationCap,
      name: 'التعليم',
      color: 'bg-purple-500',
      description: 'تسجيل الطلاب والدورات التدريبية',
      useCases: [
        'تسجيل الدورات التدريبية',
        'تقييم مستوى الطلاب',
        'جدولة الامتحانات',
        'استطلاع رأي الطلاب'
      ],
      stats: {
        conversion: '180%',
        satisfaction: '88%',
        efficiency: '85%'
      },
      example: {
        title: 'مسار تسجيل دورة تدريبية',
        steps: [
          'اختيار مجال التدريب',
          'تحديد مستوى الخبرة',
          'اختيار مواعيد الدورة',
          'تأكيد التسجيل والدفع'
        ]
      }
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
            حلول لجميع <span className="text-green-500">الصناعات</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مسارات واتساب مخصصة لكل صناعة تلبي احتياجاتك الخاصة وتحسن تجربة عملائك
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <motion.button
                key={industry.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeIndustry === index
                    ? `${industry.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{industry.name}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Industry Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`${industries[activeIndustry].color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                  {React.createElement(industries[activeIndustry].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {industries[activeIndustry].name}
                  </h3>
                  <p className="text-gray-600">
                    {industries[activeIndustry].description}
                  </p>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-right">
                  حالات الاستخدام الشائعة:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industries[activeIndustry].useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center justify-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">
                    {industries[activeIndustry].stats.conversion}
                  </div>
                  <div className="text-sm text-gray-600">زيادة التحويل</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">
                    {industries[activeIndustry].stats.satisfaction}
                  </div>
                  <div className="text-sm text-gray-600">رضا العملاء</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">
                    {industries[activeIndustry].stats.efficiency}
                  </div>
                  <div className="text-sm text-gray-600">توفير الوقت</div>
                </div>
              </div>
            </div>

            {/* Example Flow */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-6 text-right">
                {industries[activeIndustry].example.title}
              </h4>
              
              <div className="space-y-4">
                {industries[activeIndustry].example.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex-row-reverse"
                  >
                    <div className={`${industries[activeIndustry].color} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <span className="text-gray-700 flex-1 text-right">{step}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">مسار تفاعلي كامل في أقل من 5 دقائق</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default WhatsAppFlowsIndustries


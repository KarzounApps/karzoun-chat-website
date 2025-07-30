'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  ShoppingCart, 
  Monitor,
  Check
} from 'lucide-react'

const SalesManagementIndustries = () => {
  const [activeTab, setActiveTab] = useState('service')

  const industries = [
    {
      id: 'service',
      title: 'الشركات الخدمية',
      icon: Building2,
      description: 'حلول مخصصة للشركات التي تقدم خدمات متنوعة',
      useCases: [
        'تتبع طلبات الخدمة',
        'إدارة العقود والاتفاقيات',
        'متابعة رضا العملاء',
        'تحليل ربحية الخدمات'
      ],
      stats: [
        { label: 'زيادة المبيعات', value: '85%', color: 'text-green-600' },
        { label: 'تحسن رضا العملاء', value: '92%', color: 'text-blue-600' },
        { label: 'توفير في الوقت', value: '60%', color: 'text-purple-600' }
      ],
      example: {
        title: 'مثال: شركة خدمات تقنية',
        steps: [
          'استقبال طلب خدمة من العميل',
          'تقييم متطلبات المشروع',
          'إعداد عرض سعر مفصل',
          'متابعة العميل حتى الموافقة',
          'تنفيذ المشروع وإدارة التوقعات'
        ]
      }
    },
    {
      id: 'commercial',
      title: 'الشركات التجارية',
      icon: ShoppingCart,
      description: 'أدوات متقدمة لإدارة المبيعات في القطاع التجاري',
      useCases: [
        'إدارة المخزون والطلبات',
        'تتبع شبكة الموزعين',
        'تحليل أداء المنتجات',
        'إدارة العروض والخصومات'
      ],
      stats: [
        { label: 'زيادة الإيرادات', value: '78%', color: 'text-green-600' },
        { label: 'تحسن إدارة المخزون', value: '89%', color: 'text-blue-600' },
        { label: 'سرعة معالجة الطلبات', value: '65%', color: 'text-purple-600' }
      ],
      example: {
        title: 'مثال: شركة توزيع منتجات',
        steps: [
          'تسجيل طلب من موزع جديد',
          'التحقق من الجدارة الائتمانية',
          'تحديد شروط التوزيع',
          'إعداد اتفاقية التوزيع',
          'بدء التوريد ومتابعة الأداء'
        ]
      }
    },
    {
      id: 'saas',
      title: 'شركات SAAS',
      icon: Monitor,
      description: 'حلول متخصصة لشركات المنتجات الرقمية والبرمجيات',
      useCases: [
        'إدارة الاشتراكات والتجديدات',
        'تتبع استخدام المنتج',
        'برامج الإحالة والشراكات',
        'تحليل معدلات الإلغاء'
      ],
      stats: [
        { label: 'زيادة الاشتراكات', value: '94%', color: 'text-green-600' },
        { label: 'تقليل معدل الإلغاء', value: '67%', color: 'text-blue-600' },
        { label: 'تحسن قيمة العميل', value: '156%', color: 'text-purple-600' }
      ],
      example: {
        title: 'مثال: منصة إدارة مشاريع',
        steps: [
          'تسجيل عميل محتمل للتجربة المجانية',
          'متابعة استخدام المنصة',
          'تقديم دعم فني متخصص',
          'عرض خطط الاشتراك المناسبة',
          'تحويل العميل لمشترك مدفوع'
        ]
      }
    }
  ]

  const activeIndustry = industries.find(industry => industry.id === activeTab)

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
            حلول مخصصة <span className="text-green-500">لكل قطاع</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            أدوات إدارة المبيعات المصممة خصيصاً لتلبية احتياجات كل نوع من أنواع الشركات
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => {
            const IconComponent = industry.icon
            return (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === industry.id
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {industry.title}
              </button>
            )
          })}
        </div>

        {/* Industry Content */}
        <AnimatePresence mode="wait">
          {activeIndustry && (
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left Side - Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <activeIndustry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{activeIndustry.title}</h3>
                    <p className="text-gray-600">{activeIndustry.description}</p>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">حالات الاستخدام الشائعة:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {activeIndustry.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {activeIndustry.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Example */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-800 mb-6">{activeIndustry.example.title}</h4>
                
                <div className="space-y-4">
                  {activeIndustry.example.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-2 text-green-700">
                    <Check className="w-5 h-5" />
                    <span className="font-semibold">مسار متكامل في أقل من 5 دقائق</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default SalesManagementIndustries


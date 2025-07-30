'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  UserPlus, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle,
  ArrowDown
} from 'lucide-react'

const SalesManagementWorkflow = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'إضافة العميل المحتمل',
      description: 'تسجيل بيانات العميل المحتمل وتصنيفه حسب الأولوية',
      details: [
        'إدخال البيانات الأساسية',
        'تحديد مصدر العميل',
        'تقييم مستوى الاهتمام',
        'تخصيص مندوب مبيعات'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'التواصل والمتابعة',
      description: 'بدء التواصل مع العميل وتسجيل جميع التفاعلات',
      details: [
        'إرسال رسالة ترحيب',
        'تحديد احتياجات العميل',
        'تقديم العروض المناسبة',
        'جدولة المتابعات'
      ],
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      title: 'تطوير الفرصة',
      description: 'تطوير الفرصة التجارية ونقلها عبر مراحل البيع',
      details: [
        'تقديم عرض سعر مفصل',
        'التفاوض على الشروط',
        'معالجة الاعتراضات',
        'تحديث حالة الفرصة'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: CheckCircle,
      title: 'إتمام الصفقة',
      description: 'إنهاء الصفقة وتحليل النتائج لتحسين الأداء',
      details: [
        'توقيع العقد',
        'تسجيل قيمة الصفقة',
        'تحديث إحصائيات المبيعات',
        'تقييم أداء المندوب'
      ],
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
            كيف تعمل <span className="text-green-500">إدارة المبيعات</span>؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            عملية منظمة من 4 خطوات لإدارة دورة المبيعات من البداية حتى النهاية
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

          {/* Sales Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-8"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
                <h4 className="text-xl font-bold mb-2">لوحة تحكم المبيعات</h4>
                <p className="text-blue-100 text-sm">نظرة شاملة على أداء المبيعات</p>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">245</div>
                    <div className="text-sm text-gray-600">عميل محتمل</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">89</div>
                    <div className="text-sm text-gray-600">صفقة مكتملة</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">156</div>
                    <div className="text-sm text-gray-600">فرصة نشطة</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">73%</div>
                    <div className="text-sm text-gray-600">معدل التحويل</div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">الأنشطة الأخيرة</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="text-sm">
                        <span className="font-medium">أحمد محمد</span>
                        <span className="text-gray-600"> أتم صفقة بقيمة 15,000 ريال</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm">
                        <span className="font-medium">سارة أحمد</span>
                        <span className="text-gray-600"> أضافت عميل محتمل جديد</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="text-sm">
                        <span className="font-medium">محمد علي</span>
                        <span className="text-gray-600"> حدث حالة فرصة إلى "تفاوض"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SalesManagementWorkflow


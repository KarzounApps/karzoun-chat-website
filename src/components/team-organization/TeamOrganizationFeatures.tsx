'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Shield, 
  Settings, 
  Crown,
  UserCheck,
  Building2,
  Check
} from 'lucide-react'

const TeamOrganizationFeatures = () => {
  const features = [
    {
      icon: Users,
      title: 'إدارة الفرق والأقسام',
      description: 'تنظيم الفريق في أقسام وإدارات مختلفة مع هيكل واضح ومرن',
      benefits: [
        'إنشاء أقسام متعددة',
        'تنظيم الفرق حسب التخصص',
        'هيكل تنظيمي مرئي',
        'سهولة إعادة التنظيم'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'إدارة الصلاحيات والأدوار',
      description: 'تحديد صلاحيات مخصصة لكل دور مع مستويات أمان متقدمة',
      benefits: [
        'أدوار مخصصة للمستخدمين',
        'صلاحيات متدرجة',
        'حماية البيانات الحساسة',
        'مراجعة سجل الأنشطة'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Crown,
      title: 'التسلسل الهرمي للإدارة',
      description: 'بناء هيكل إداري واضح مع تحديد المسؤوليات والتبعية',
      benefits: [
        'تحديد المديرين والمرؤوسين',
        'سلسلة القيادة الواضحة',
        'تفويض الصلاحيات',
        'إدارة التصعيد'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: UserCheck,
      title: 'إدارة حسابات المستخدمين',
      description: 'إنشاء وإدارة حسابات الفريق مع معلومات شخصية ومهنية',
      benefits: [
        'ملفات شخصية شاملة',
        'معلومات الاتصال',
        'تاريخ الانضمام',
        'حالة النشاط'
      ],
      color: 'bg-orange-500'
    },
    {
      icon: Settings,
      title: 'إعدادات الفريق المتقدمة',
      description: 'تخصيص إعدادات العمل والتفضيلات لكل فريق أو قسم',
      benefits: [
        'ساعات العمل المخصصة',
        'إعدادات الإشعارات',
        'تفضيلات التواصل',
        'قواعد التوزيع'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Building2,
      title: 'هيكل الشركة المتكامل',
      description: 'عرض شامل لهيكل الشركة مع جميع الأقسام والفروع',
      benefits: [
        'خريطة تنظيمية تفاعلية',
        'معلومات الأقسام',
        'إحصائيات الفريق',
        'تقارير الأداء'
      ],
      color: 'bg-indigo-500'
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
            ميزات <span className="text-blue-500">تنظيم الفريق</span> المتقدمة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            أدوات شاملة لإدارة وتنظيم فريق العمل مع صلاحيات مرنة وهيكل تنظيمي واضح
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                {/* Icon */}
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (benefitIndex * 0.05) }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ابدأ في تنظيم فريقك اليوم
            </h3>
            <p className="text-xl mb-6 opacity-90">
              أنشئ هيكل تنظيمي احترافي وحدد الأدوار والصلاحيات بسهولة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ابدأ التجربة المجانية
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                تحدث مع خبير
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamOrganizationFeatures


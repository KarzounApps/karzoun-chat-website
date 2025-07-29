'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Calendar,
  Zap,
  Shield,
  Headphones
} from 'lucide-react'

const WhatsAppFlowsCTA = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'زيادة معدل التحويل بنسبة 150%',
      description: 'تحسين كبير في معدلات إكمال العمليات مقارنة بالطرق التقليدية'
    },
    {
      icon: Users,
      title: 'رضا العملاء بنسبة 95%',
      description: 'تجربة مستخدم محسنة تؤدي إلى رضا أعلى وولاء أكبر للعلامة التجارية'
    },
    {
      icon: Calendar,
      title: 'زيادة حجز المواعيد بـ 8.2 مرة',
      description: 'تسهيل عملية الحجز يؤدي إلى زيادة كبيرة في المواعيد المحجوزة'
    },
    {
      icon: Zap,
      title: 'توفير 80% من الوقت',
      description: 'أتمتة العمليات توفر وقت الفريق للتركيز على المهام الأهم'
    }
  ]

  const features = [
    'إعداد سريع في أقل من 10 دقائق',
    'دعم فني متاح 24/7',
    'تكامل مع أنظمة CRM الشائعة',
    'تحليلات مفصلة في الوقت الفعلي',
    'أمان وخصوصية على أعلى مستوى',
    'قوالب جاهزة لجميع الصناعات'
  ]

  const supportFeatures = [
    {
      icon: Shield,
      title: 'أمان متقدم',
      description: 'حماية شاملة لبيانات عملائك'
    },
    {
      icon: Headphones,
      title: 'دعم مستمر',
      description: 'فريق دعم متخصص متاح دائماً'
    },
    {
      icon: Zap,
      title: 'إعداد سريع',
      description: 'ابدأ في دقائق بدون تعقيدات'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            ابدأ في تحسين <span className="text-green-500">تجربة عملائك</span> اليوم
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            انضم إلى آلاف الشركات التي تستخدم مسارات واتساب الآلية لتحسين خدمة العملاء وزيادة المبيعات
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ما الذي ستحصل عليه؟
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-end gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-gray-700">{feature}</span>
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              جاهز لبدء رحلتك مع مسارات واتساب الآلية؟
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              ابدأ تجربتك المجانية الآن ولا تحتاج لبطاقة ائتمان. إعداد سريع في أقل من 10 دقائق
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                ابدأ التجربة المجانية
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                طلب عرض توضيحي
              </motion.button>
            </div>

            <div className="mt-6 text-sm text-green-100">
              ✅ تجربة مجانية لمدة 14 يوم • ✅ لا حاجة لبطاقة ائتمان • ✅ إلغاء في أي وقت
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatsAppFlowsCTA


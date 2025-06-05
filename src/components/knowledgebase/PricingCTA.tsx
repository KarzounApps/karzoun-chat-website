import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, ArrowRight, FileText, Bot, 
  Users, BarChart, Shield, Zap
} from 'lucide-react';

export function PricingCTA() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              ابدأ رحلتك مع قاعدة المعرفة الذكية
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              اختر الخطة المناسبة لاحتياجاتك وابدأ في تحسين إدارة المعرفة في مؤسستك
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">الأساسية</h3>
              <div className="text-3xl font-bold mb-2">$99<span className="text-gray-500 text-lg font-normal">/شهرياً</span></div>
              <p className="text-gray-600">مثالية للشركات الناشئة والأعمال الصغيرة</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "قاعدة معرفة عامة",
                "3 مستخدمين",
                "1,000 مقال",
                "محرر متقدم",
                "تحليلات أساسية",
                "دعم عبر البريد الإلكتروني"
              ].map((feature, index) => ( <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              ابدأ الآن
            </button>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#2ca24c] relative"
          >
            <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
              <span className="bg-[#2ca24c] text-white px-4 py-1 rounded-full text-sm font-medium">الأكثر شعبية</span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">الاحترافية</h3>
              <div className="text-3xl font-bold mb-2">$299<span className="text-gray-500 text-lg font-normal">/شهرياً</span></div>
              <p className="text-gray-600">للشركات المتوسطة التي تتطلع للنمو</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "قاعدة معرفة عامة وخاصة",
                "10 مستخدمين",
                "10,000 مقال",
                "محرر متقدم",
                "تحليلات متقدمة",
                "مساعد ذكي",
                "تكامل API",
                "دعم على مدار الساعة"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-[#2ca24c] text-white py-3 rounded-xl font-semibold hover:bg-[#239a41] transition-colors">
              ابدأ الآن
            </button>
          </motion.div>
          
          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">المؤسسات</h3>
              <div className="text-3xl font-bold mb-2">$999<span className="text-gray-500 text-lg font-normal">/شهرياً</span></div>
              <p className="text-gray-600">حلول مخصصة للمؤسسات الكبيرة</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "قواعد معرفة غير محدودة",
                "مستخدمين غير محدودين",
                "مقالات غير محدودة",
                "محرر متقدم",
                "تحليلات مخصصة",
                "مساعد ذكي متقدم",
                "API مخصص",
                "مدير حساب مخصص",
                "تدريب شامل",
                "دعم VIP"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              تواصل معنا
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: FileText,
              title: "محتوى غير محدود",
              description: "أنشئ وأدر محتوى غير محدود في قاعدة المعرفة"
            },
            {
              icon: Bot,
              title: "مساعد ذكي",
              description: "مساعد مدعوم بالذكاء الاصطناعي للإجابة على الاستفسارات"
            },
            {
              icon: Shield,
              title: "أمان متقدم",
              description: "حماية البيانات وتشفير المحتوى وفقاً لأعلى المعايير"
            },
            {
              icon: BarChart,
              title: "تحليلات شاملة",
              description: "رؤى تفصيلية عن استخدام قاعدة المعرفة"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <feature.icon className="h-8 w-8 text-[#2ca24c] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            جاهز لتحسين إدارة المعرفة في مؤسستك؟
          </h3>
          <p className="text-gray-600 mb-8">
            ابدأ اليوم مع فترة تجريبية مجانية لمدة 14 يوماً. لا يلزم بطاقة ائتمان.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#2ca24c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#239a41] transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              جدولة عرض توضيحي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
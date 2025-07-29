import React from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  MessageSquare, 
  ShoppingCart, 
  CreditCard,
  Package,
  CheckCircle,
  ArrowRight,
  Smartphone
} from 'lucide-react';

export function WhatsAppCatalogWorkflow() {
  const workflowSteps = [
    {
      step: '1',
      icon: Upload,
      title: 'رفع المنتجات',
      description: 'ارفع منتجاتك مع الصور والأوصاف والأسعار',
      color: 'bg-blue-500',
      details: [
        'صور عالية الجودة',
        'أوصاف مفصلة',
        'تحديد الأسعار',
        'تصنيف المنتجات'
      ]
    },
    {
      step: '2',
      icon: MessageSquare,
      title: 'مشاركة الكتالوج',
      description: 'شارك الكتالوج مع العملاء في محادثات واتساب',
      color: 'bg-green-500',
      details: [
        'إرسال تلقائي',
        'مشاركة مخصصة',
        'حملات تسويقية',
        'ردود آلية'
      ]
    },
    {
      step: '3',
      icon: ShoppingCart,
      title: 'اختيار المنتجات',
      description: 'العملاء يتصفحون ويختارون المنتجات بسهولة',
      color: 'bg-purple-500',
      details: [
        'تصفح سهل',
        'بحث سريع',
        'مقارنة المنتجات',
        'إضافة للسلة'
      ]
    },
    {
      step: '4',
      icon: CreditCard,
      title: 'إتمام الطلب',
      description: 'طلب وتأكيد ودفع بنقرات قليلة',
      color: 'bg-orange-500',
      details: [
        'طلب فوري',
        'تأكيد تلقائي',
        'خيارات دفع متعددة',
        'إرسال الفاتورة'
      ]
    }
  ];

  const catalogTypes = [
    {
      icon: '🛍️',
      title: 'كتالوج المنتجات',
      description: 'عرض شامل لجميع منتجاتك مع التفاصيل والأسعار'
    },
    {
      icon: '🏷️',
      title: 'كتالوج العروض',
      description: 'عروض خاصة وتخفيضات لفترة محدودة'
    },
    {
      icon: '📱',
      title: 'كتالوج الخدمات',
      description: 'عرض الخدمات المتاحة مع إمكانية الحجز المباشر'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Workflow Steps */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              كيف يعمل كتالوج واتساب؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              أربع خطوات بسيطة لتحويل محادثاتك إلى مبيعات
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              )}

              <div className="relative z-10 bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 transition-colors duration-300">
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-sm font-semibold text-gray-500 mb-1">الخطوة {step.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>

                <ul className="space-y-1">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-xs text-gray-500">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Catalog Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              أنواع الكتالوجات المتاحة
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              اختر النوع المناسب لنشاطك التجاري
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {catalogTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{type.title}</h4>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white">
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              جرب الكتالوج التفاعلي الآن
            </h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              شاهد كيف يبدو كتالوجك داخل محادثة واتساب واختبر تجربة العميل
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            >
              تجربة تفاعلية
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


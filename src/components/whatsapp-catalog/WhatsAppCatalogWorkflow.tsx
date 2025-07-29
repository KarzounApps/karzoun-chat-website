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

        {/* Personalized Shopping Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              تجربة تسوق شخصية ومخصصة
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              يحصل كل عميل على تجربة تسوق مخصصة بناءً على احتياجاته واهتماماته
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* WhatsApp Chat Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl max-w-sm mx-auto">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-green-500 text-white p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-green-500 font-bold text-sm">متجر</span>
                    </div>
                    <div>
                      <div className="font-semibold">متجر الجمال</div>
                      <div className="text-xs opacity-90">متصل الآن</div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 bg-gray-50 min-h-96">
                    {/* Customer Message */}
                    <div className="flex justify-end">
                      <div className="bg-green-100 text-gray-800 rounded-lg p-3 max-w-xs text-sm">
                        أحتاج منتجات للعناية بالبشرة المعرضة لحب الشباب
                      </div>
                    </div>

                    {/* Store Response */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-3 max-w-xs text-sm shadow-sm">
                        مرحباً! إليك مجموعة منتجاتنا المخصصة لعلاج حب الشباب
                      </div>
                    </div>

                    {/* Catalog Card */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-4 max-w-xs shadow-lg border">
                        <div className="flex items-center gap-2 mb-3">
                          <ShoppingCart className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold text-sm">مجموعة علاج حب الشباب</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <div className="w-8 h-8 bg-orange-200 rounded"></div>
                            <span className="text-xs">غسول الوجه</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <div className="w-8 h-8 bg-brown-200 rounded"></div>
                            <span className="text-xs">كريم علاج البقع</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <div className="w-8 h-8 bg-blue-200 rounded"></div>
                            <span className="text-xs">مرطب مهدئ</span>
                          </div>
                        </div>

                        <button className="w-full bg-blue-500 text-white text-xs py-2 rounded mt-3">
                          استكشف الكتالوج
                        </button>
                      </div>
                    </div>

                    {/* Customer Response */}
                    <div className="flex justify-end">
                      <div className="bg-green-100 text-gray-800 rounded-lg p-3 max-w-xs text-sm">
                        أريد شراء هذه المنتجات
                      </div>
                    </div>

                    {/* Order Confirmation */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm border border-green-200">
                        <div className="text-center">
                          <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-gray-800">سلتك جاهزة!</div>
                          <div className="text-xs text-gray-600 mb-3">اضغط على الزر أدناه لإتمام الطلب</div>
                          <button className="bg-green-500 text-white text-xs py-2 px-4 rounded">
                            إتمام الطلب
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">محادثة طبيعية</h4>
                  <p className="text-gray-600">العملاء يطلبون المنتجات بطريقة طبيعية كما لو كانوا يتحدثون مع صديق</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">اقتراحات ذكية</h4>
                  <p className="text-gray-600">النظام يقترح المنتجات المناسبة بناءً على طلب العميل واهتماماته</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">طلب فوري</h4>
                  <p className="text-gray-600">من الاستفسار إلى الطلب في ثوانٍ معدودة دون مغادرة المحادثة</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">تأكيد تلقائي</h4>
                  <p className="text-gray-600">تأكيد الطلبات وإرسال التفاصيل تلقائياً مع خيارات الدفع والتوصيل</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

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


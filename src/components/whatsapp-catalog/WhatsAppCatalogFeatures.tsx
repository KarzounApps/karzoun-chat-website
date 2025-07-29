import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  MessageSquare, 
  Zap, 
  Users, 
  BarChart3,
  Settings,
  CreditCard,
  Package,
  Smartphone
} from 'lucide-react';

export function WhatsAppCatalogFeatures() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'كتالوج تفاعلي',
      description: 'اعرض منتجاتك بطريقة جذابة مع صور عالية الجودة وأوصاف مفصلة داخل محادثة واتساب',
      color: 'bg-green-500'
    },
    {
      icon: MessageSquare,
      title: 'طلب بنقرة واحدة',
      description: 'يمكن للعملاء طلب المنتجات مباشرة من الكتالوج دون الحاجة لمغادرة المحادثة',
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'أتمتة المبيعات',
      description: 'أتمتة عملية استقبال الطلبات وإرسال تأكيدات الشراء والفواتير تلقائياً',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'إدارة العملاء',
      description: 'تتبع طلبات العملاء وتاريخ المشتريات وبناء قاعدة بيانات عملاء شاملة',
      color: 'bg-orange-500'
    },
    {
      icon: BarChart3,
      title: 'تحليلات المبيعات',
      description: 'احصل على تقارير مفصلة عن أداء المنتجات ومعدلات التحويل والإيرادات',
      color: 'bg-red-500'
    },
    {
      icon: Settings,
      title: 'تخصيص متقدم',
      description: 'خصص شكل ومحتوى الكتالوج ليتناسب مع هوية علامتك التجارية',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ميزات كتالوج واتساب
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              حول محادثات واتساب إلى متجر إلكتروني متكامل
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              لماذا تختار كتالوج واتساب؟
            </h3>
            <p className="text-green-100 text-lg max-w-3xl mx-auto">
              الحل الأمثل لزيادة مبيعاتك من خلال أكثر منصات التواصل استخداماً
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">زيادة المبيعات</h4>
              <p className="text-green-100 text-sm">
                زيادة معدلات التحويل بنسبة تصل إلى 300%
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">سهولة الاستخدام</h4>
              <p className="text-green-100 text-sm">
                واجهة بسيطة وسهلة للعملاء والبائعين
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">تجربة محمولة</h4>
              <p className="text-green-100 text-sm">
                تسوق مريح من الهاتف المحمول
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Bell, Users, 
  MapPin, Wifi, Shield 
} from 'lucide-react';

export function MobileAppFeatures() {
  const features = [
    {
      icon: MessageSquare,
      title: 'ملفات وسائط',
      description: 'إرسال واستقبال الصور والفيديوهات والملفات بسهولة',
    },
    {
      icon: Bell,
      title: 'محادثات متعددة',
      description: 'إدارة عدة محادثات في نفس الوقت - مع عملاء متعددين بكفاءة',
    },
    {
      icon: Users,
      title: 'إشعارات فورية',
      description: 'تلقي إشعارات فورية عند وصول رسائل جديدة من العملاء',
    },
    {
      icon: MapPin,
      title: 'عمل أوفلاين وأونلاين',
      description: 'تصفح المحادثات والرد عليها حتى بدون اتصال بالإنترنت',
    },
    {
      icon: Wifi,
      title: 'مزامنة جوالي',
      description: 'مزامنة تلقائية مع الموقع الإلكتروني لضمان عدم فقدان أي محادثة',
    },
    {
      icon: Shield,
      title: 'بيانات آمنة',
      description: 'تشفير البيانات والرسائل لضمان الأمان والخصوصية التامة',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            ميزات متقدمة في راحة يدك
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            كل ما تحتاجه لإدارة محادثات عملائك من هاتفك المحمول
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-google-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-google-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


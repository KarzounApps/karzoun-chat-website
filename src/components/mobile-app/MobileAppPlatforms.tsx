import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Monitor } from 'lucide-react';

export function MobileAppPlatforms() {
  const platforms = [
    {
      icon: Smartphone,
      title: 'Android',
      subtitle: 'جوجل بلاي',
      description: 'متوافق مع جميع أجهزة الأندرويد',
      features: ['Android 6.0+', 'تحديثات تلقائية', 'دعم كامل للعربية'],
    },
    {
      icon: Smartphone,
      title: 'iOS',
      subtitle: 'آب ستور',
      description: 'متوافق مع iPhone و iPad',
      features: ['iOS 12.0+', 'تحديثات فورية', 'تصميم متجاوب'],
    },
    {
      icon: Globe,
      title: 'تطبيق شامل',
      subtitle: 'جميع المنصات',
      description: 'تجربة موحدة عبر جميع الأجهزة',
      features: ['مزامنة فورية', 'واجهة موحدة', 'دعم متعدد اللغات'],
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            تطبيق شامل مع جميع الأجهزة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            حمل التطبيق على جهازك المفضل واستمتع بتجربة سلسة
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-google-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <platform.icon className="w-10 h-10 text-google-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {platform.title}
                </h3>
                <p className="text-google-blue font-medium">
                  {platform.subtitle}
                </p>
                <p className="text-gray-600 mt-2">
                  {platform.description}
                </p>
              </div>

              <div className="space-y-3">
                {platform.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <Monitor className="w-16 h-16 text-google-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              تطبيق شامل
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استمتع بتجربة موحدة عبر جميع أجهزتك مع مزامنة فورية وواجهة سهلة الاستخدام
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


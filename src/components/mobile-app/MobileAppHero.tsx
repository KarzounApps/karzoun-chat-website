import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, Users } from 'lucide-react';

export function MobileAppHero() {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-10"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              تطبيق كرزون شات
              <span className="block text-google-blue mt-2">للجوال</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-8">
              إدارة محادثات العملاء من أي مكان باستخدام تطبيقات الجوال المتقدمة
              لنظامي iOS و Android
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                تحميل للأندرويد
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-google-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                تحميل للآيفون
              </motion.button>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Phone Screen Content */}
                <div className="bg-google-blue text-white p-4 text-center">
                  <h3 className="font-semibold">كرزون شات</h3>
                </div>
                
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">أحمد محمد</p>
                      <p className="text-xs text-gray-500">مرحباً، أحتاج مساعدة</p>
                    </div>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mr-auto">1</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">سارة أحمد</p>
                      <p className="text-xs text-gray-500">شكراً لكم على الخدمة الممتازة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">خالد سعد</p>
                      <p className="text-xs text-gray-500">متى سيتم تسليم الطلب؟</p>
                    </div>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mr-auto">2</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


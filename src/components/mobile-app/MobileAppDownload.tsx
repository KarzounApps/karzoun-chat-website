import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function MobileAppDownload() {
  return (
    <div className="py-24 bg-gradient-to-b from-google-blue to-blue-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ابدأ إدارة خدمة العملاء من هاتفك الآن
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            حمل تطبيق كرزون شات واستمتع بإدارة محادثات العملاء من أي مكان وفي أي وقت
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-colors flex items-center gap-3"
            >
              <Download className="w-6 h-6" />
              <div className="text-right">
                <p className="text-xs">تحميل من</p>
                <p className="font-semibold">Google Play</p>
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-colors flex items-center gap-3"
            >
              <Download className="w-6 h-6" />
              <div className="text-right">
                <p className="text-xs">تحميل من</p>
                <p className="font-semibold">App Store</p>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


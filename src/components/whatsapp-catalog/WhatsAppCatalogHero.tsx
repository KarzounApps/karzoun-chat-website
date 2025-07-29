import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageSquare, Zap, ArrowRight } from 'lucide-react';

export function WhatsAppCatalogHero() {
  const catalogFeatures = [
    { name: 'عرض المنتجات', icon: '🛍️', color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'طلب بنقرة واحدة', icon: '👆', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'متابعة الطلبات', icon: '📦', color: 'bg-orange-100 text-orange-800 border-orange-200' },
  ];

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#25D366,#128C7E)] opacity-10"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(#25D366_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-green-500/10 p-4 rounded-2xl">
                <ShoppingCart className="w-12 h-12 text-green-500" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              كتالوج 
              <span className="block text-green-400 mt-2">واتساب</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              اعرض منتجاتك مباشرةً داخل المحادثة
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">
              دَع العملاء يختارون ويطلبون بنقرة واحدة من خلال كتالوج تفاعلي داخل محادثات واتساب
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                ابدأ الآن مجاناً
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                عرض توضيحي
              </motion.button>
            </div>

            {/* Catalog Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catalogFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`p-4 rounded-lg border ${feature.color} text-center`}
                  >
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <div className="font-medium text-sm">{feature.name}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 text-center text-gray-400 text-sm">
                تجربة تسوق متكاملة داخل واتساب
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


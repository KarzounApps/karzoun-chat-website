import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';

export function TagsHero() {
  const tagExamples = [
    { name: 'عاجل', color: 'bg-red-100 text-red-800 border-red-200' },
    { name: 'دعم فني', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'مبيعات', color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'متابعة', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  ];

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-10"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              وسوم تنظم 
              <span className="block text-google-blue mt-2">تواصلك</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              صنف كل شيء بسهولة
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">
              صنف المحادثات والعملاء والمهام للحصول على رؤية مرتبة وأداء أسرع
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                عرض توضيحي
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-google-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                ابدأ الآن مجاناً
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Tag Examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {tagExamples.map((tag, index) => (
                  <motion.span
                    key={tag.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${tag.color}`}
                  >
                    {tag.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


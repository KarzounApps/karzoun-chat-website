import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Users, ArrowRight } from 'lucide-react';

export function WorkHoursHero() {
  const scheduleExamples = [
    { name: 'الصباح', time: '9:00 - 13:00', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'المساء', time: '14:00 - 18:00', color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'الليل', time: '19:00 - 23:00', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { name: 'عطلة نهاية الأسبوع', time: '10:00 - 16:00', color: 'bg-orange-100 text-orange-800 border-orange-200' },
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
            <div className="flex justify-center mb-6">
              <div className="bg-google-blue/10 p-4 rounded-2xl">
                <Clock className="w-12 h-12 text-google-blue" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              إدارة ساعات 
              <span className="block text-google-blue mt-2">العمل</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              تحديد ساعات العمل وجداول المناوبة للفريق
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">
              نظم أوقات عمل فريقك بكفاءة، وحدد جداول المناوبة، وتأكد من توفر الدعم على مدار الساعة لعملائك
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

            {/* Schedule Examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {scheduleExamples.map((schedule, index) => (
                  <motion.div
                    key={schedule.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`p-4 rounded-lg border ${schedule.color} text-center`}
                  >
                    <div className="font-medium text-sm">{schedule.name}</div>
                    <div className="text-xs mt-1 opacity-80">{schedule.time}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 text-center text-gray-400 text-sm">
                جداول مناوبة مرنة تناسب احتياجات فريقك
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


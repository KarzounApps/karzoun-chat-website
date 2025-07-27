import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function MobileAppTestimonials() {
  const testimonials = [
    {
      name: 'فيصل صالح',
      role: 'مدير مبيعات',
      company: 'شركة التقنية المتقدمة',
      rating: 5,
      text: 'تطبيق رائع يساعدني في إدارة محادثات العملاء أثناء التنقل. واجهة سهلة وسريعة.',
    },
    {
      name: 'منيرة أحمد',
      role: 'مديرة خدمة العملاء',
      company: 'متجر الأزياء العصرية',
      rating: 5,
      text: 'أستطيع الآن الرد على استفسارات العملاء في أي وقت ومن أي مكان. التطبيق غير حياتي المهنية.',
    },
    {
      name: 'خالد محمد',
      role: 'صاحب متجر إلكتروني',
      company: 'متجر الإلكترونيات الذكية',
      rating: 5,
      text: 'التطبيق سهل الاستخدام ومليء بالميزات المفيدة. أنصح به كل من يريد تحسين خدمة العملاء.',
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
            لسنا مجرد شركة تقنية، بل رفيق عربي يجمع العقول
            المبدعة لتطوير حلول ترتقي بتجربة عملائك وتنمي أعمالك
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-google-blue/20 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-google-blue">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-google-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              جاهز لبدء رحلتك معنا؟
            </h3>
            <p className="text-blue-100 mb-6">
              ما رأيك بأن تحصل على مكالمة من مسؤول المبيعات ليقوم بالإجابة على استفساراتك؟
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-google-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              اطلب مكالمة الآن
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


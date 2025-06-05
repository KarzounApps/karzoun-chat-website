import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';

// Dummy testimonials data
const dummyTestimonials = [
  {
    id: 1,
    name: "أحمد الشمري",
    role: "مدير التسويق",
    company: "شركة التقنية المتقدمة",
    content: "زيادة رضا العملاء بنسبة 85% منذ استخدام كرزون. النظام سهل الاستخدام وفعال للغاية.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    stats: {
      satisfaction: "85%",
      response: "2.5 دقيقة",
      retention: "95%"
    },
    rating: 5
  },
  {
    id: 2,
    name: "سارة العتيبي",
    role: "مديرة المبيعات",
    company: "متجر الأناقة",
    content: "تحسين معدل التحويل بنسبة 40% مع دعم عملاء أفضل. كرزون غير طريقة عملنا للأفضل.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    stats: {
      conversion: "40%",
      sales: "2.5x",
      support: "24/7"
    },
    rating: 5
  },
  {
    id: 3,
    name: "محمد القحطاني",
    role: "الرئيس التنفيذي",
    company: "تك سوليوشنز",
    content: "أتمتة 90% من عمليات خدمة العملاء مع الحفاظ على جودة عالية في الخدمة.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    stats: {
      automation: "90%",
      satisfaction: "94%",
      efficiency: "3x"
    },
    rating: 5
  }
];

interface TestimonialsCarouselProps {
  autoPlay?: boolean;
  interval?: number;
}

export function TestimonialsCarousel({ autoPlay = true, interval = 5000 }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % dummyTestimonials.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % dummyTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => 
      current === 0 ? dummyTestimonials.length - 1 : current - 1
    );
  };

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={dummyTestimonials[currentIndex].avatar}
                alt={dummyTestimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg">
                  {dummyTestimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">
                  {dummyTestimonials[currentIndex].role}
                </p>
                <p className="text-gray-500 text-sm">
                  {dummyTestimonials[currentIndex].company}
                </p>
              </div>
              <div className="flex gap-1 mr-auto">
                {[...Array(dummyTestimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-xl font-medium text-gray-900 mb-8">
              "{dummyTestimonials[currentIndex].content}"
            </blockquote>

            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
              {Object.entries(dummyTestimonials[currentIndex].stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="font-bold text-google-blue text-2xl">{value}</div>
                  <div className="text-sm text-gray-600">{key}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {dummyTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-google-blue scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, BarChart, TrendingUp, MessageSquare, 
  ArrowRight, CheckCircle2, Star, Quote, 
  ChevronLeft, ChevronRight, Building, Globe
} from 'lucide-react';

export function CustomerSuccess() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Sample success metrics
  const metrics = [
    { 
      icon: MessageSquare, 
      value: "70%", 
      label: "تقليل وقت الاستجابة",
      description: "تقليل وقت الاستجابة للعملاء بنسبة 70% باستخدام الرد الآلي"
    },
    { 
      icon: Users, 
      value: "85%", 
      label: "زيادة رضا العملاء",
      description: "تحسين تجربة العملاء وزيادة معدلات الرضا بنسبة 85%"
    },
    { 
      icon: TrendingUp, 
      value: "40%", 
      label: "زيادة معدل التحويل",
      description: "زيادة معدل تحويل الزوار إلى عملاء بنسبة 40%"
    },
    { 
      icon: BarChart, 
      value: "60%", 
      label: "تقليل تكاليف الدعم",
      description: "خفض تكاليف خدمة العملاء بنسبة 60% من خلال الأتمتة"
    }
  ];
  
  // Sample testimonials
  const testimonials = [
    {
      quote: "ساعدنا روبوت المحادثة من كرزون على تحسين تجربة عملائنا بشكل كبير. لقد تمكنا من تقليل وقت الاستجابة بنسبة 70% وزيادة معدل رضا العملاء بنسبة 85%.",
      author: "أحمد العتيبي",
      position: "مدير خدمة العملاء",
      company: "شركة الاتصالات السعودية",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/STC_Logo.svg",
      rating: 5
    },
    {
      quote: "بفضل روبوتات المحادثة الذكية، تمكنا من أتمتة 80% من استفسارات العملاء المتكررة، مما سمح لفريقنا بالتركيز على المهام ذات القيمة المضافة الأعلى.",
      author: "سارة الشمري",
      position: "رئيس قسم التسويق",
      company: "بنك الراجحي",
      logo: "https://upload.wikimedia.org/wikipedia/ar/5/5d/Al_Rajhi_Bank_Logo.svg",
      rating: 5
    },
    {
      quote: "تكامل روبوت المحادثة مع قنوات التواصل المختلفة سمح لنا بتقديم تجربة موحدة للعملاء عبر واتساب وانستغرام وموقعنا الإلكتروني.",
      author: "خالد السعيد",
      position: "المدير التنفيذي للتقنية",
      company: "مجموعة صافولا",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Savola_Group_Logo.svg",
      rating: 5
    }
  ];
  
  // Case studies
  const caseStudies = [
    {
      title: "شركة الاتصالات السعودية",
      category: "الاتصالات",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      results: [
        "تقليل وقت الاستجابة بنسبة 70%",
        "زيادة رضا العملاء بنسبة 85%",
        "أتمتة 80% من الاستفسارات المتكررة"
      ]
    },
    {
      title: "بنك الراجحي",
      category: "الخدمات المالية",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      results: [
        "تقليل تكاليف خدمة العملاء بنسبة 60%",
        "زيادة معدل استخدام الخدمات الرقمية بنسبة 45%",
        "تحسين أمن المعاملات بنسبة 90%"
      ]
    },
    {
      title: "مجموعة صافولا",
      category: "التجزئة",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      results: [
        "زيادة معدل التحويل بنسبة 40%",
        "تقليل معدل هجر سلة التسوق بنسبة 35%",
        "زيادة متوسط قيمة الطلب بنسبة 25%"
      ]
    }
  ];

  // Navigation for testimonials
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              قصص نجاح عملائنا
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              اكتشف كيف ساعدت روبوتات المحادثة الذكية من كرزون الشركات في تحسين تجربة عملائها وتحقيق نتائج أعمال ملموسة
            </p>
          </motion.div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <metric.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="font-medium text-gray-900 mb-2">{metric.label}</div>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="quote-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <text x="0" y="30" fill="#ffffff" fontSize="40">"</text>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#quote-pattern)" />
              </svg>
            </div>
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <Quote className="h-16 w-16 text-white opacity-20" />
              </div>
              
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 max-w-3xl mx-auto">
                  {testimonials[activeTestimonial].quote}
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <div className="flex mb-2">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <img 
                      src={testimonials[activeTestimonial].logo} 
                      alt={testimonials[activeTestimonial].company} 
                      className="h-12 object-contain bg-white p-2 rounded-lg"
                    />
                  </div>
                  
                  <div className="text-white">
                    <div className="font-bold">{testimonials[activeTestimonial].author}</div>
                    <div className="text-blue-200">{testimonials[activeTestimonial].position}</div>
                    <div className="text-blue-200">{testimonials[activeTestimonial].company}</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Navigation */}
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={prevTestimonial}
                  className="bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === activeTestimonial 
                          ? 'bg-white w-8' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">دراسات حالة</h3>
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              <span>عرض جميع دراسات الحالة</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {study.category === 'الاتصالات' && <Globe className="h-5 w-5 text-blue-600" />}
                    {study.category === 'الخدمات المالية' && <Building className="h-5 w-5 text-blue-600" />}
                    {study.category === 'التجزئة' && <Building className="h-5 w-5 text-blue-600" />}
                    <span className="text-sm text-blue-600">{study.category}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4">{study.title}</h4>
                  
                  <ul className="space-y-2 mb-4">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 text-sm"
                  >
                    <span>قراءة دراسة الحالة كاملة</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
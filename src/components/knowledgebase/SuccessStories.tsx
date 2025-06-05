import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Building2, ArrowRight, Quote,
  ChevronLeft, ChevronRight, FileText,
  Users, BarChart, TrendingUp
} from 'lucide-react';

const successStories = [
  {
    company: "شركة الاتصالات السعودية",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/STC_Logo.svg",
    quote: "ساعدتنا قاعدة المعرفة من كرزون في تحسين كفاءة خدمة العملاء بشكل كبير وتقليل وقت الاستجابة بنسبة 60%",
    author: "أحمد العتيبي",
    position: "مدير خدمة العملاء",
    metrics: {
      satisfaction: "92%",
      responseTime: "-60%",
      efficiency: "+45%"
    }
  },
  {
    company: "بنك الراجحي",
    logo: "https://upload.wikimedia.org/wikipedia/ar/5/5d/Al_Rajhi_Bank_Logo.svg",
    quote: "المساعد الذكي المدعوم بقاعدة المعرفة ساعدنا في أتمتة 75% من استفسارات العملاء المتكررة",
    author: "سارة الشمري",
    position: "رئيس قسم التسويق",
    metrics: {
      automation: "75%",
      satisfaction: "88%",
      cost: "-40%"
    }
  },
  {
    company: "مجموعة صافولا",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Savola_Group_Logo.svg",
    quote: "تكامل قاعدة المعرفة مع أنظمتنا الداخلية حسن من كفاءة الموظفين وسرعة الوصول للمعلومات",
    author: "خالد السعيد",
    position: "المدير التنفيذي للتقنية",
    metrics: {
      efficiency: "+65%",
      adoption: "95%",
      productivity: "+50%"
    }
  }
];

export function SuccessStories() {
  const [activeStory, setActiveStory] = useState(0);

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev > 0 ? prev - 1 : successStories.length - 1));
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
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
              اكتشف كيف ساعدت قاعدة المعرفة الذكية من كرزون الشركات في تحسين خدمة العملاء وزيادة الإنتاجية
            </p>
          </motion.div>
        </div>

        {/* Success Story Carousel */}
        <div className="relative">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#2ca24c]/10 to-[#f1b500]/10 rounded-3xl p-10 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="quote-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <text x="0" y="30" fill="#2ca24c" fontSize="40">"</text>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#quote-pattern)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <Quote className="h-16 w-16 text-[#2ca24c] opacity-20" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/3 flex flex-col items-center">
                  <img 
                    src={successStories[activeStory].logo}
                    alt={successStories[activeStory].company}
                    className="h-16 object-contain bg-white p-4 rounded-xl shadow-lg mb-6"
                  />
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">
                      {successStories[activeStory].author}
                    </div>
                    <div className="text-[#2ca24c]">
                      {successStories[activeStory].position}
                    </div>
                    <div className="text-gray-600">
                      {successStories[activeStory].company}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <blockquote className="text-2xl font-medium text-gray-900 mb-8">
                    "{successStories[activeStory].quote}"
                  </blockquote>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(successStories[activeStory].metrics).map(([key, value], index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-[#2ca24c]">{value}</div>
                        <div className="text-sm text-gray-600">{
                          key === 'satisfaction' ? 'رضا العملاء' :
                          key === 'responseTime' ? 'وقت الاستجابة' :
                          key === 'efficiency' ? 'تحسن الكفاءة' :
                          key === 'automation' ? 'نسبة الأتمتة' :
                          key === 'cost' ? 'تقليل التكاليف' :
                          key === 'adoption' ? 'نسبة التبني' :
                          key === 'productivity' ? 'زيادة الإنتاجية' :
                          key
                        }</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          {/* Story Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeStory 
                    ? 'bg-[#2ca24c] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FileText,
              value: "50,000+",
              label: "مقال منشور",
              description: "محتوى غني يغطي مختلف المجالات"
            },
            {
              icon: Users,
              value: "1M+",
              label: "مستخدم نشط",
              description: "يستفيدون من قاعدة المعرفة شهرياً"
            },
            {
              icon: BarChart,
              value: "85%",
              label: "تحسن في الكفاءة",
              description: "زيادة في إنتاجية فرق العمل"
            }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center"
            >
              <metric.icon className="h-8 w-8 text-[#2ca24c] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-lg font-medium text-[#2ca24c] mb-2">{metric.label}</div>
              <p className="text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
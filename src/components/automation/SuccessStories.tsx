import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, ShoppingCart, MessageSquare, Users, 
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight,
  Building2, Globe, Rocket, Zap, Clock, BarChart,
  DollarSign, TrendingUp, UserCheck, Target
} from 'lucide-react';

// Sample success stories data
const successStories = [
  {
    company: "شركة الاتصالات السعودية",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/STC_Logo.svg",
    industry: "الاتصالات",
    description: "أتمتة عمليات خدمة العملاء وتحسين تجربة المستخدم",
    results: [
      "تقليل وقت الاستجابة بنسبة 70%",
      "زيادة رضا العملاء بنسبة 85%",
      "توفير 45% من تكاليف خدمة العملاء"
    ],
    automations: [
      "أتمتة الردود على الاستفسارات الشائعة",
      "متابعة حالة الطلبات والشكاوى",
      "إدارة طلبات الدعم الفني"
    ],
    metrics: {
      responseTime: "2.5 دقيقة",
      satisfaction: "92%",
      automation: "80%"
    },
    testimonial: {
      quote: "ساعدتنا أتمتة كرزون في تحسين كفاءة خدمة العملاء بشكل كبير وتقليل التكاليف مع الحفاظ على جودة الخدمة",
      author: "أحمد العتيبي",
      position: "مدير خدمة العملاء"
    }
  },
  {
    company: "بنك الراجحي",
    logo: "https://upload.wikimedia.org/wikipedia/ar/5/5d/Al_Rajhi_Bank_Logo.svg",
    industry: "الخدمات المالية",
    description: "أتمتة العمليات المصرفية وتحسين تجربة العملاء الرقمية",
    results: [
      "زيادة استخدام الخدمات الرقمية بنسبة 60%",
      "تقليل الأخطاء البشرية بنسبة 95%",
      "تحسين معدل التحويل بنسبة 40%"
    ],
    automations: [
      "أتمتة فتح الحسابات الجديدة",
      "معالجة طلبات القروض",
      "إدارة الاستفسارات المالية"
    ],
    metrics: {
      digitalAdoption: "85%",
      errorReduction: "95%",
      processSpeed: "75%"
    },
    testimonial: {
      quote: "مكنتنا منصة كرزون من تقديم خدمات مصرفية رقمية متطورة مع الحفاظ على أعلى معايير الأمان والدقة",
      author: "سارة الشمري",
      position: "رئيس القنوات الرقمية"
    }
  },
  {
    company: "مجموعة صافولا",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Savola_Group_Logo.svg",
    industry: "التجزئة",
    description: "أتمتة عمليات سلسلة التوريد وإدارة المخزون",
    results: [
      "تحسين كفاءة سلسلة التوريد بنسبة 55%",
      "تقليل تكاليف التشغيل بنسبة 35%",
      "زيادة دقة التنبؤ بالطلب بنسبة 80%"
    ],
    automations: [
      "أتمتة إدارة المخزون",
      "تتبع الشحنات والتوصيل",
      "إدارة طلبات الموردين"
    ],
    metrics: {
      efficiency: "95%",
      accuracy: "98%",
      cost: "-35%"
    },
    testimonial: {
      quote: "ساعدتنا أتمتة العمليات في تحسين الكفاءة التشغيلية وتقليل التكاليف مع ضمان توفر المنتجات في الوقت المناسب",
      author: "خالد السعيد",
      position: "مدير العمليات"
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
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              اكتشف كيف ساعدت حلول الأتمتة من كرزون الشركات في تحسين كفاءة عملياتها وتحقيق نتائج أعمال ملموسة
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
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Story Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={successStories[activeStory].logo} 
                    alt={successStories[activeStory].company}
                    className="h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{successStories[activeStory].company}</h3>
                    <p className="text-gray-600">{successStories[activeStory].industry}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6">
                  {successStories[activeStory].description}
                </p>

                <div className="space-y-6 mb-8">
                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      <span>النتائج المحققة</span>
                    </h4>
                    <ul className="space-y-2">
                      {successStories[activeStory].results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Automations */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <span>الأتمتة المطبقة</span>
                    </h4>
                    <ul className="space-y-2">
                      {successStories[activeStory].automations.map((automation, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Rocket className="h-5 w-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-700">{automation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(successStories[activeStory].metrics).map(([key, value], index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">{value}</div>
                      <div className="text-sm text-gray-600">
                        {key === 'responseTime' ? 'وقت الاستجابة' :
                         key === 'satisfaction' ? 'رضا العملاء' :
                         key === 'automation' ? 'نسبة الأتمتة' :
                         key === 'digitalAdoption' ? 'التحول الرقمي' :
                         key === 'errorReduction' ? 'تقليل الأخطاء' :
                         key === 'processSpeed' ? 'سرعة العمليات' :
                         key === 'efficiency' ? 'الكفاءة' :
                         key === 'accuracy' ? 'الدقة' :
                         'التكلفة'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="border-r-4 border-purple-500 pr-4 mb-6">
                  <p className="text-gray-700 italic mb-2">"{successStories[activeStory].testimonial.quote}"</p>
                  <footer>
                    <div className="font-medium text-gray-900">{successStories[activeStory].testimonial.author}</div>
                    <div className="text-gray-600">{successStories[activeStory].testimonial.position}</div>
                  </footer>
                </blockquote>
              </div>

              {/* Visual Content */}
              <div className="bg-gray-50 p-8 flex items-center justify-center">
                <div className="space-y-8">
                  {/* Automation Flow Visualization */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Workflow className="h-5 w-5 text-purple-600" />
                      <span>تدفق الأتمتة</span>
                    </h4>
                    {/* Add your flow visualization here */}
                    <div className="h-64 bg-gray-50 rounded-lg"></div>
                  </div>

                  {/* Analytics Visualization */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-purple-600" />
                      <span>تحليلات الأداء</span>
                    </h4>
                    {/* Add your analytics visualization here */}
                    <div className="h-48 bg-gray-50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <button
              onClick={prevStory}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <button
              onClick={nextStory}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Story Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === activeStory 
                  ? 'bg-purple-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Story ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            جاهز لبدء رحلة الأتمتة الخاصة بك؟
          </h3>
          <p className="text-gray-600 mb-8">
            انضم إلى مئات الشركات الناجحة التي تستخدم كرزون لأتمتة عملياتها
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="bg-white text-purple-600 border border-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
              تواصل مع المبيعات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add Workflow icon component since it's not imported
function Workflow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}
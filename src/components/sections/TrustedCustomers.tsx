import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { 
  Users, Building2, Globe, CheckCircle2, 
  MessageSquare, ArrowRight
} from 'lucide-react';

// Company logos data with categories
const companyCategories = [
  {
    name: "المؤسسات المالية",
    companies: [
      {
        name: "بنك الراجحي",
        logo: "https://upload.wikimedia.org/wikipedia/ar/5/5d/Al_Rajhi_Bank_Logo.svg"
      },
      {
        name: "مصرف الإنماء",
        logo: "https://www.alinma.com/style%20library/alinma/images/logo.svg"
      },
      {
        name: "البنك الأهلي",
        logo: "https://www.alahli.com/ar-sa/PublishingImages/NCB-Logo.svg"
      }
    ]
  },
  {
    name: "الاتصالات والتقنية",
    companies: [
      {
        name: "شركة الاتصالات السعودية",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/STC_Logo.svg"
      },
      {
        name: "موبايلي",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Mobily_logo.svg"
      },
      {
        name: "زين",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Zain_Group_logo.svg"
      }
    ]
  },
  {
    name: "الطاقة والصناعة",
    companies: [
      {
        name: "أرامكو",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Aramco_logo.svg"
      },
      {
        name: "سابك",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/SABIC_logo.svg"
      },
      {
        name: "معادن",
        logo: "https://www.maaden.com.sa/images/maaden-logo.svg"
      }
    ]
  },
  {
    name: "التجزئة والأغذية",
    companies: [
      {
        name: "مجموعة صافولا",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Savola_Group_Logo.svg"
      },
      {
        name: "شركة المراعي",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Almarai_logo.svg"
      },
      {
        name: "مجموعة الحكير",
        logo: "https://www.fawazalhokair.com/wp-content/themes/hokair/assets/images/logo.svg"
      }
    ]
  }
];

// Statistics data with brand colors
const statistics = [
  {
    icon: Users,
    value: "10,000+",
    label: "عميل نشط",
    description: "من الشركات الصغيرة إلى المؤسسات الكبرى",
    color: "bg-google-blue"
  },
  {
    icon: MessageSquare,
    value: "5M+",
    label: "محادثة شهرياً",
    description: "تتم معالجتها بكفاءة عبر منصتنا",
    color: "bg-google-blue"
  },
  {
    icon: Globe,
    value: "25+",
    label: "دولة حول العالم",
    description: "نخدم عملاء في مختلف أنحاء العالم",
    color: "bg-google-blue"
  },
  {
    icon: CheckCircle2,
    value: "99.9%",
    label: "وقت تشغيل",
    description: "موثوقية عالية على مدار الساعة",
    color: "bg-google-blue"
  }
];

// Counter animation component
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  
  // Parse the numeric part of the value
  const finalValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    let start = 0;
    let timeoutId: NodeJS.Timeout;
    
    if (isInView) {
      // Calculate the increment based on the final value and duration
      const incrementTime = (duration * 1000) / finalValue;
      
      const updateCount = () => {
        start += 1;
        if (start <= finalValue) {
          setCount(start);
          timeoutId = setTimeout(updateCount, incrementTime);
        } else {
          setCount(finalValue);
        }
      };
      
      updateCount();
    }
    
    return () => clearTimeout(timeoutId);
  }, [finalValue, duration, isInView]);
  
  return (
    <span ref={countRef} className="inline-block">
      {count}{suffix}
    </span>
  );
};

export function TrustedCustomers() {
  const [activeCategory, setActiveCategory] = useState(0);
  
  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % companyCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trusted by section with animated heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue to-blue-600">
                الشركات الرائدة
              </span>{" "}
              تثق بنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              انضم إلى آلاف الشركات التي تعتمد على كرزون لتحسين تجربة عملائها وتنمية أعمالها
            </p>
          </motion.div>
        </div>

        {/* Interactive company showcase */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Category tabs */}
            <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-100">
              {companyCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === index
                      ? 'text-google-blue border-b-2 border-google-blue'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Company logos grid */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {companyCategories[activeCategory].companies.map((company, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-32"
                    >
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="max-h-16 max-w-full object-contain" 
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* View all clients button */}
            <div className="px-8 pb-8 text-center">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-google-blue hover:text-blue-700 font-medium"
              >
                عرض جميع عملائنا
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Modern animated counters */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              أرقام تتحدث عن نجاحنا
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نفخر بالنتائج التي نحققها لعملائنا حول العالم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-md p-8 text-center h-full border border-gray-100 hover:border-google-blue/30 hover:shadow-lg transition-all duration-300">
                  <div className="absolute -top-4 right-1/2 transform translate-x-1/2">
                    <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center shadow-md`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="mt-8 mb-2">
                    <div className="text-4xl font-bold text-gray-900">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-lg font-medium text-google-blue mt-1">{stat.label}</div>
                  </div>
                  
                  <div className="text-gray-600 text-sm">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
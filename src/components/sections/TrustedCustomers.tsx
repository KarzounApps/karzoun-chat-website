import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { Users, Building2, Globe, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

// Company logos data with categories
const companyCategories = [
  {
    name: "تجارة الالكترونية",
    companies: [
      {
        name: "ريفي",
        logo: "/brands/1-ريفي.png",
      },
      {
        name: "كبش",
        logo: "/brands/2.webp",
      },
      {
        name: "سجادتي",
        logo: "/brands/3.png",
      },
      {
        name: "بلسم ",
        logo: "/brands/بلسم.png",
      },
      {
        name: "abaya ",
        logo: "/brands/abaya.png",
      },
    ],
  },
  {
    name: "مؤسسات حكومية",
    companies: [
      {
        name: "وزارة الدفاع",
        logo: "/brands/وزارة الدفاع.png",
      },
      {
        name: "تجمع ",
        logo: "/brands/تجمع.png",
      },
      {
        name: "اعتزاز",
        logo: "/brands/اعتزاز.png",
      },
      {
        name: "nedco",
        logo: "/brands/nedco.png",
      },
    ],
  },
  {
    name: "مولات",
    companies: [
      {
        name: "الخبر",
        logo: "/brands/الخبر.png",
      },
      {
        name: "السيف قلاري",
        logo: "/brands/السيف قلاري.png",
      },
      {
        name: "الشامل",
        logo: "/brands/الشامل.png",
      },
    ],
  },
  {
    name: "اتصالات وتقنية",
    companies: [
      {
        name: "ايوا",
        logo: "/brands/ايوا.png",
      },
      {
        name: "حدود التواصل",
        logo: "/brands/حدود التواصل.png",
      },
      {
        name: "بروميت",
        logo: "/brands/بروميت.png",
      },
      {
        name: "قصر الحاسبات",
        logo: "/brands/قصر الحاسبات.png",
      },
      {
        name: "متجر-دليل-الشبكة",
        logo: "/brands/متجر-دليل-الشبكة.png",
      },
    ],
  },
  {
    name: "تعليم",
    companies: [
      {
        name: "تاصيل",
        logo: "/brands/تاصيل.png",
      },
      {
        name: "رائز",
        logo: "/brands/رائز.png",
      },
      {
        name: "مدارس سعود",
        logo: "/brands/مدارس سعود.png",
      },
    ],
  },
  {
    name: "مطاعم",
    companies: [
      {
        name: "دندن",
        logo: "/brands/restaurant/دندن.jpg",
      },
      {
        name: "قلزم",
        logo: "/brands/restaurant/قلزم.png",
      },
      {
        name: "يمي",
        logo: "/brands/restaurant/يمي.png",
      },
    ],
  },
  {
    name: "جمعيات خيرية",
    companies: [
      {
        name: "جمعية حسان",
        logo: "/brands/جمعية حسان.png",
      },
      {
        name: "جمعية رعاية",
        logo: "/brands/جمعية رعاية .png",
      },
      {
        name: "جمعية",
        logo: "/brands/جمعية.jpg",
      },
    ],
  },
  {
    name: "عقارات",
    companies: [
      {
        name: "logo-1.png",
        logo: "/brands/logo-1.png",
      },
      {
        name: "عقار 1.png",
        logo: "/brands/عقار 1.png",
      },
      {
        name: "ايفاد.png",
        logo: "/brands/ايفاد.png",
      },
    ],
  },
  {
    name: "جامعات حكومية",
    companies: [
      {
        name: "جامعة جازان",
        logo: "/brands/jazan.png",
      },
      {
        name: "جامعة الملك سعود",
        logo: "/brands/ksu_logo_out.png",
      },
    ],
  },
];

// Statistics data with brand colors
const statistics = [
  {
    icon: Users,
    value: "24,000+",
    label: "عميل نشط",
    description: "من الشركات الصغيرة إلى المؤسسات الكبرى",
    color: "bg-google-blue",
    startValue: 20000,
  },
  {
    icon: MessageSquare,
    value: "5M+",
    label: "رسالة يوميا",
    description: "تتم معالجتها بكفاءة عبر منصتنا",
    color: "bg-google-blue",
  },
  {
    icon: Globe,
    value: "25+",
    label: " دولة",
    description: "نخدمك أينما كنت",
    color: "bg-google-blue",
  },
  {
    icon: CheckCircle2,
    value: "99.9%",
    label: "وقت تشغيل",
    description: "خدمة لا تنقطع 24/7",
    color: "bg-google-blue",
  },
];

// Counter animation component
const Counter = ({
  value,
  duration = 2,
  startValue = 0,
}: {
  value: string;
  duration?: number;
  startValue?: number;
}) => {
  const [count, setCount] = useState(startValue);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  // Parse the numeric part of the value
  const finalValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    let start = startValue;
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
    <span dir="ltr" ref={countRef} className="inline-block">
      {count}
      {suffix}
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
  }, [activeCategory]);

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
              أكثر من
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue to-blue-600">
                {" "}
                25000 عميل نشط{" "}
              </span>{" "}
              يثقون بكرزون
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
                      ? "text-google-blue border-b-2 border-google-blue"
                      : "text-gray-500 hover:text-gray-900"
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
                  className={`grid grid-cols-1 ${
                    companyCategories[activeCategory].companies.length > 4 ? "md:grid-cols-5" : "md:grid-cols-4"
                  } gap-8`}
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
                        className="max-h-24 max-w-full object-contain rounded-lg"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* View all clients button */}
          </div>
        </div>

        {/* Modern animated counters */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">أرقام ننمو بها كل يوم</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">ثقة متجدّدة من عملائنا حول العالم</p>
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
                      <Counter value={stat.value} startValue={stat.startValue} />
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

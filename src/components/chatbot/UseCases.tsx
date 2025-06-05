import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Calendar, MessageSquare, 
  HelpCircle, Building2, Briefcase, Zap, 
  ArrowRight, CheckCircle2, Users, BarChart, 
  Clock, Shield, Smartphone, Globe, Headphones,
  School, Heart, Lightbulb, Landmark, Home
} from 'lucide-react';

export function UseCases() {
  const [activeCase, setActiveCase] = useState('ecommerce');
  
  const useCases = {
    ecommerce: {
      title: "التجارة الإلكترونية",
      icon: ShoppingCart,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      description: "تحسين تجربة التسوق وزيادة المبيعات من خلال روبوتات محادثة ذكية",
      features: [
        "الرد على استفسارات المنتجات بشكل فوري",
        "توجيه العملاء خلال عملية الشراء",
        "إرسال إشعارات حالة الطلب والشحن",
        "استرداد السلة المهجورة",
        "تقديم توصيات المنتجات الشخصية"
      ],
      stats: [
        { value: "35%", label: "زيادة في معدل التحويل" },
        { value: "24/7", label: "دعم العملاء" },
        { value: "45%", label: "تقليل في تكاليف خدمة العملاء" }
      ],
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    appointments: {
      title: "حجز المواعيد",
      icon: Calendar,
      color: "bg-green-100",
      textColor: "text-green-600",
      description: "تبسيط عملية حجز المواعيد وإدارتها للعيادات والمراكز الخدمية",
      features: [
        "حجز المواعيد تلقائياً عبر المحادثة",
        "إرسال تذكيرات المواعيد",
        "إعادة جدولة وإلغاء المواعيد بسهولة",
        "عرض الأوقات المتاحة بشكل ديناميكي",
        "تأكيد المواعيد وإرسال التعليمات"
      ],
      stats: [
        { value: "60%", label: "تقليل في معدل التخلف عن المواعيد" },
        { value: "40%", label: "زيادة في كفاءة الجدولة" },
        { value: "30%", label: "توفير في وقت الموظفين" }
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    support: {
      title: "خدمة العملاء",
      icon: Headphones,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      description: "تقديم دعم فوري للعملاء وحل المشكلات بكفاءة",
      features: [
        "الرد على الأسئلة الشائعة تلقائياً",
        "تصعيد المشكلات المعقدة إلى فريق الدعم",
        "متابعة حالة طلبات الدعم",
        "جمع تقييمات رضا العملاء",
        "توفير حلول فورية للمشكلات البسيطة"
      ],
      stats: [
        { value: "85%", label: "معدل حل المشكلات تلقائياً" },
        { value: "70%", label: "تحسين في رضا العملاء" },
        { value: "50%", label: "تقليل في وقت الانتظار" }
      ],
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    education: {
      title: "التعليم والتدريب",
      icon: School,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      description: "تعزيز تجربة التعلم وتقديم الدعم للطلاب والمتدربين",
      features: [
        "الإجابة على استفسارات المناهج والمقررات",
        "تقديم اختبارات تفاعلية وتمارين",
        "متابعة تقدم الطلاب وتقديم التوصيات",
        "تذكير بمواعيد الاختبارات والواجبات",
        "توفير موارد تعليمية إضافية"
      ],
      stats: [
        { value: "40%", label: "زيادة في مشاركة الطلاب" },
        { value: "65%", label: "تحسين في نتائج التعلم" },
        { value: "80%", label: "رضا الطلاب عن الدعم المقدم" }
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    finance: {
      title: "الخدمات المالية",
      icon: Landmark,
      color: "bg-red-100",
      textColor: "text-red-600",
      description: "تقديم خدمات مالية آمنة وشخصية للعملاء",
      features: [
        "الاستعلام عن الرصيد والمعاملات",
        "إجراء التحويلات وسداد الفواتير",
        "تقديم المشورة المالية الشخصية",
        "الإبلاغ عن المعاملات المشبوهة",
        "طلب المنتجات المالية الجديدة"
      ],
      stats: [
        { value: "55%", label: "زيادة في استخدام الخدمات الرقمية" },
        { value: "30%", label: "تقليل في تكاليف العمليات" },
        { value: "90%", label: "أمان المعاملات" }
      ],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    realestate: {
      title: "العقارات",
      icon: Home,
      color: "bg-indigo-100",
      textColor: "text-indigo-600",
      description: "تسهيل عملية البحث عن العقارات وإدارة العلاقات مع العملاء",
      features: [
        "البحث عن العقارات حسب المعايير المحددة",
        "جدولة جولات عرض العقارات",
        "تقديم معلومات تفصيلية عن العقارات",
        "الإجابة على الاستفسارات الشائعة",
        "متابعة عمليات البيع والتأجير"
      ],
      stats: [
        { value: "50%", label: "زيادة في استفسارات العملاء المؤهلين" },
        { value: "40%", label: "تقليل في وقت إتمام الصفقات" },
        { value: "35%", label: "زيادة في معدل تحويل العملاء" }
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
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
              حلول مخصصة لمختلف القطاعات
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              روبوتات محادثة مصممة خصيصاً لتلبية احتياجات مختلف القطاعات والصناعات، مع ميزات متخصصة لكل مجال
            </p>
          </motion.div>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(useCases).map(([key, useCase]) => (
            <button
              key={key}
              onClick={() => setActiveCase(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeCase === key
                  ? `${useCase.color} ${useCase.textColor} font-medium`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <useCase.icon className="h-5 w-5" />
              <span>{useCase.title}</span>
            </button>
          ))}
        </div>

        {/* Active Use Case */}
        <AnimatedUseCase useCase={useCases[activeCase]} />
      </div>
    </div>
  );
}

// Animated Use Case Component
function AnimatedUseCase({ useCase }) {
  return (
    <motion.div
      key={useCase.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      {/* Image */}
      <div className="relative">
        <div className={`absolute -top-6 -right-6 ${useCase.color} w-24 h-24 rounded-full opacity-60`}></div>
        <div className="relative z-10">
          <img
            src={useCase.image}
            alt={useCase.title}
            className="rounded-2xl shadow-xl object-cover w-full h-96"
          />
          
          {/* Stats */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            {useCase.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-4 min-w-[120px]"
              >
                <div className={`text-xl font-bold ${useCase.textColor}`}>{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className={`${useCase.color} p-3 rounded-lg`}>
            <useCase.icon className={`h-6 w-6 ${useCase.textColor}`} />
          </div>
          <h3 className="text-2xl font-bold">{useCase.title}</h3>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">{useCase.description}</p>
        
        <div className="space-y-4 mb-8">
          {useCase.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className={`${useCase.color} p-1 rounded-full`}>
                <CheckCircle2 className={`h-5 w-5 ${useCase.textColor}`} />
              </div>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
        
        <a href="#" className={`inline-flex items-center gap-2 ${useCase.textColor} hover:underline font-medium`}>
          <span>اكتشف المزيد عن حلول {useCase.title}</span>
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </motion.div>
  );
}
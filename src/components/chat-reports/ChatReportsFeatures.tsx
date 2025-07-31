import React from 'react';
import { BarChart3, Clock, TrendingUp, Users, FileText, Shield } from 'lucide-react';

const ChatReportsFeatures = () => {
  const features = [
    {
      icon: BarChart3,
      title: "تحليل حجم المحادثات",
      description: "تتبع عدد المحادثات اليومية والأسبوعية والشهرية مع إحصائيات مفصلة عن الذروات والأوقات الهادئة",
      benefits: [
        "تحليل الاتجاهات الزمنية",
        "تحديد أوقات الذروة",
        "مقارنة الفترات الزمنية",
        "توقع الأحمال المستقبلية"
      ]
    },
    {
      icon: Clock,
      title: "تقارير أوقات الاستجابة",
      description: "قياس متوسط أوقات الاستجابة لكل عضو في الفريق وتحديد المجالات التي تحتاج تحسين",
      benefits: [
        "متوسط وقت الاستجابة الأولى",
        "وقت حل المشكلات",
        "مقارنة أداء الفريق",
        "تحديد الاختناقات"
      ]
    },
    {
      icon: TrendingUp,
      title: "معدلات الرضا والتقييم",
      description: "تحليل تقييمات العملاء ومعدلات الرضا مع تتبع التحسينات عبر الزمن",
      benefits: [
        "تقييمات العملاء المباشرة",
        "معدل الرضا العام",
        "تحليل التعليقات",
        "مؤشرات الجودة"
      ]
    },
    {
      icon: Users,
      title: "تحليل أداء الفريق",
      description: "مراقبة أداء كل عضو في فريق خدمة العملاء مع تقارير مفصلة عن الإنتاجية",
      benefits: [
        "عدد المحادثات المعالجة",
        "معدل حل المشكلات",
        "تقييم الأداء الفردي",
        "مقارنة الأداء"
      ]
    },
    {
      icon: FileText,
      title: "التقارير المخصصة",
      description: "إنشاء تقارير مخصصة حسب احتياجاتك مع إمكانية تصدير البيانات بصيغ مختلفة",
      benefits: [
        "تقارير قابلة للتخصيص",
        "تصدير متعدد الصيغ",
        "جدولة التقارير",
        "مشاركة التقارير"
      ]
    },
    {
      icon: Shield,
      title: "الأمان والخصوصية",
      description: "حماية بيانات المحادثات والتقارير مع ضمان الامتثال لمعايير الخصوصية والأمان",
      benefits: [
        "تشفير البيانات",
        "صلاحيات الوصول",
        "سجل العمليات",
        "الامتثال للمعايير"
      ]
    }
  ];

  return (
    <section dir="rtl" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مميزات تقارير المحادثات
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            احصل على رؤى شاملة حول أداء خدمة العملاء من خلال تقارير متقدمة تساعدك على اتخاذ قرارات مدروسة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 text-right">
                    {feature.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 text-right leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start justify-end gap-3">
                    <span className="text-gray-700 text-right">{benefit}</span>
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatReportsFeatures;


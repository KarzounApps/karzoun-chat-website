import React from 'react';
import { Users, TrendingUp, Clock, Award, BarChart3, Target, CheckCircle, AlertCircle } from 'lucide-react';

const EmployeeReportsFeatures = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "تحليل الأداء الشامل",
      description: "قياس أداء كل موظف بناءً على معايير متعددة مثل عدد المحادثات المعالجة وجودة الخدمة ومعدلات الرضا",
      benefits: [
        "تقييم شامل للأداء الفردي",
        "مقارنة الأداء بين الموظفين",
        "تحديد نقاط القوة والضعف",
        "تتبع التحسن عبر الزمن"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "معدلات الاستجابة",
      description: "مراقبة أوقات الاستجابة لكل موظف وتحديد المجالات التي تحتاج تحسين لضمان خدمة عملاء سريعة",
      benefits: [
        "متوسط وقت الاستجابة الأولى",
        "وقت حل المشكلات",
        "تحليل أوقات الذروة",
        "مقارنة الأداء الزمني"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "تقارير الإنتاجية",
      description: "تحليل مستوى إنتاجية الموظفين من خلال عدد المحادثات المعالجة والمهام المكتملة والأهداف المحققة",
      benefits: [
        "عدد المحادثات اليومية",
        "معدل إنجاز المهام",
        "تحقيق الأهداف المحددة",
        "مقارنة الإنتاجية الشهرية"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "تقييم الجودة",
      description: "قياس جودة الخدمة المقدمة من كل موظف من خلال تقييمات العملاء ومراجعة المحادثات",
      benefits: [
        "تقييمات العملاء المباشرة",
        "مراجعة جودة المحادثات",
        "معدل رضا العملاء",
        "تحليل التعليقات والملاحظات"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "تحديد الأهداف",
      description: "وضع أهداف واضحة لكل موظف ومتابعة تحقيقها مع تقديم التوجيه والدعم اللازم",
      benefits: [
        "أهداف فردية قابلة للقياس",
        "متابعة التقدم اليومي",
        "تنبيهات عند عدم تحقيق الأهداف",
        "مكافآت وحوافز الإنجاز"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "إدارة الفريق",
      description: "أدوات شاملة لإدارة فريق خدمة العملاء مع إمكانية تنظيم المناوبات وتوزيع المهام",
      benefits: [
        "جدولة المناوبات",
        "توزيع المحادثات",
        "إدارة الصلاحيات",
        "تقارير الحضور والغياب"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مميزات تقارير الموظفين
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            احصل على رؤى شاملة حول أداء فريق خدمة العملاء من خلال تقارير متقدمة تساعدك على تحسين الإنتاجية وتطوير المهارات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 flex-row-reverse mb-6">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <span className="text-gray-700 text-right flex-1">{benefit}</span>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeReportsFeatures;


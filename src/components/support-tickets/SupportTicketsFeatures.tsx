import React from 'react';
import { 
  ClipboardList, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Users,
  BarChart3,
  Filter,
  Bell,
  FileText,
  Target,
  Calendar,
  Download
} from 'lucide-react';

const SupportTicketsFeatures = () => {
  const features = [
    {
      icon: <ClipboardList className="w-8 h-8 text-blue-500" />,
      title: "إدارة التذاكر الشاملة",
      description: "نظام متكامل لإدارة جميع تذاكر الدعم والمهام مع تتبع دقيق لحالة كل تذكرة من الإنشاء حتى الإغلاق",
      benefits: [
        "إنشاء وتصنيف التذاكر تلقائياً",
        "تتبع حالة التذاكر في الوقت الفعلي",
        "ربط التذاكر بالمحادثات والعملاء",
        "أرشفة وبحث متقدم في التذاكر"
      ]
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-blue-500" />,
      title: "إدارة الأولويات",
      description: "تصنيف التذاكر حسب مستوى الأولوية مع تخصيص قواعد تلقائية لتحديد الأولوية بناءً على نوع المشكلة والعميل",
      benefits: [
        "تصنيف تلقائي للأولويات",
        "قواعد مخصصة لتحديد الأولوية",
        "تنبيهات للتذاكر عالية الأولوية",
        "إعادة ترتيب الأولويات ديناميكياً"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "قياس أوقات الاستجابة",
      description: "تتبع دقيق لأوقات الاستجابة الأولى وأوقات الحل مع تحليل الأداء وتحديد مجالات التحسين",
      benefits: [
        "قياس وقت الاستجابة الأولى",
        "تتبع وقت الحل الإجمالي",
        "مقارنة الأداء بالمعايير المحددة",
        "تحليل الاتجاهات الزمنية"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "توزيع المهام",
      description: "توزيع ذكي للتذاكر على فريق الدعم بناءً على التخصص والحمولة والتوفر مع إمكانية إعادة التوزيع",
      benefits: [
        "توزيع تلقائي حسب التخصص",
        "مراقبة حمولة العمل لكل موظف",
        "إعادة توزيع المهام عند الحاجة",
        "تتبع أداء الفريق الفردي"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "تقارير الأداء",
      description: "تقارير شاملة عن أداء فريق الدعم مع مؤشرات الأداء الرئيسية ومعدلات الرضا والإنتاجية",
      benefits: [
        "مؤشرات الأداء الرئيسية (KPIs)",
        "تقارير رضا العملاء",
        "تحليل الإنتاجية والكفاءة",
        "مقارنات دورية للأداء"
      ]
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-500" />,
      title: "التنبيهات والإشعارات",
      description: "نظام تنبيهات ذكي للتذاكر المتأخرة والأولويات العالية مع إشعارات مخصصة لكل عضو في الفريق",
      benefits: [
        "تنبيهات للتذاكر المتأخرة",
        "إشعارات الأولوية العالية",
        "تذكيرات المتابعة التلقائية",
        "إشعارات مخصصة لكل موظف"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مميزات تذاكر الدعم والمهام
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نظام متكامل لإدارة تذاكر الدعم مع تتبع الأولويات وقياس الأداء لتحسين جودة الخدمة
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



        {/* Ticket Management Demo */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              إدارة متقدمة للتذاكر
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              نظام شامل لإدارة تذاكر الدعم مع أدوات متقدمة لتحسين الأداء وجودة الخدمة
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">47</div>
              <div className="text-blue-100">تذكرة نشطة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2.4h</div>
              <div className="text-blue-100">متوسط وقت الحل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">94%</div>
              <div className="text-blue-100">معدل الرضا</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-blue-100">عضو فريق الدعم</div>
            </div>
          </div>
        </div>

        {/* Integration Features */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              تكامل شامل مع النظام
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تكامل سلس مع جميع أجزاء النظام لتجربة موحدة وفعالة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">إدارة العملاء</h4>
              <p className="text-gray-600 text-sm">
                ربط مباشر مع ملفات العملاء وتاريخ المحادثات
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">التقارير والتحليلات</h4>
              <p className="text-gray-600 text-sm">
                تقارير شاملة عن أداء الدعم ومعدلات الحل
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">تصدير البيانات</h4>
              <p className="text-gray-600 text-sm">
                تصدير التقارير والبيانات بصيغ متعددة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportTicketsFeatures;


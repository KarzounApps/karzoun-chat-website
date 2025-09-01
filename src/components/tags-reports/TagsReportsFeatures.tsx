import React from 'react';
import { 
  Tag, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Filter, 
  Users,
  MessageSquare,
  Calendar,
  Target,
  CheckCircle,
  Settings,
  Download
} from 'lucide-react';

const TagsReportsFeatures = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "تحليل استخدام الوسوم",
      description: "بينما تستمر في تلقي أنواع متعددة من المحادثات، ستحتاج لتقسيم تلك المحادثات إلى تصنيفات أو تسميات مختلفة، بحيث أن كل تصنيف يحتوي على نوع واحد 'عميل جديد' و 'عميل محتمل' و 'في انتظار الدفع' و 'الضمانات' و 'المؤسسات' ليست سوى أمثلة قليلة على التصنيفات التي قد تحتاجها في نهاية المطاف",
      benefits: [
        "تحليل شامل لاستخدام الوسوم",
        "إحصائيات مفصلة لكل وسم",
        "مقارنة الأداء بين الوسوم",
        "تتبع التطور عبر الزمن"
      ]
    },
    {
      icon: <PieChart className="w-8 h-8 text-blue-500" />,
      title: "توزيع المحادثات",
      description: "إذا كنت تريد من أن تعرف مجموعة أي المحادثات التي تتلقاها كثيراً أو أيهم - يمكنك القيام بذلك بسهولة بمساعدة تقرير المحادثات الخاص بنا",
      benefits: [
        "رسوم بيانية تفاعلية للتوزيع",
        "تحليل نسب المحادثات لكل وسم",
        "مقارنة الفترات الزمنية",
        "تصدير البيانات والتقارير"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "تحليل الاتجاهات",
      description: "تتبع اتجاهات استخدام الوسوم عبر الزمن وتحديد الأنماط الموسمية والتغيرات في سلوك العملاء",
      benefits: [
        "تحليل الاتجاهات الزمنية",
        "تحديد الأنماط الموسمية",
        "توقع الاحتياجات المستقبلية",
        "تحسين استراتيجية التصنيف"
      ]
    },
    {
      icon: <Filter className="w-8 h-8 text-blue-500" />,
      title: "تصفية متقدمة",
      description: "أدوات تصفية قوية تتيح لك تحليل البيانات حسب الفترة الزمنية، الفريق، نوع المحادثة، ومعايير أخرى",
      benefits: [
        "تصفية حسب التاريخ والوقت",
        "تصفية حسب الفريق والموظف",
        "تصفية حسب نوع المحادثة",
        "حفظ المرشحات المخصصة"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "تحليل الفرق",
      description: "مراقبة كيفية استخدام الفرق المختلفة للوسوم وتحديد أفضل الممارسات في التصنيف",
      benefits: [
        "مقارنة أداء الفرق",
        "تحديد أفضل الممارسات",
        "تدريب الفرق الجديدة",
        "توحيد معايير التصنيف"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "تحسين الأداء",
      description: "استخدم رؤى تقارير الوسوم لتحسين عمليات خدمة العملاء وزيادة الكفاءة التشغيلية",
      benefits: [
        "تحديد مجالات التحسين",
        "تحسين توزيع العمل",
        "زيادة الكفاءة التشغيلية",
        "تحسين تجربة العملاء"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مميزات تقارير الوسوم
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            احصل على رؤى شاملة حول استخدام الوسوم وتوزيع المحادثات لتحسين تصنيف المحادثات وزيادة الكفاءة
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

        {/* Additional Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">تقارير دورية</h3>
            <p className="text-gray-600 text-sm">
              تقارير تلقائية يومية وأسبوعية وشهرية
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">تصدير البيانات</h3>
            <p className="text-gray-600 text-sm">
              تصدير التقارير بصيغ PDF وExcel وCSV
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">تخصيص التقارير</h3>
            <p className="text-gray-600 text-sm">
              إنشاء تقارير مخصصة حسب احتياجاتك
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">تحليل المحتوى</h3>
            <p className="text-gray-600 text-sm">
              تحليل محتوى المحادثات المصنفة
            </p>
          </div>
        </div>

        {/* Tags Management Demo */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              إدارة الوسوم المتقدمة
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              قم بتنظيم وإدارة الوسوم بكفاءة مع أدوات متقدمة لتحسين تصنيف المحادثات
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">وسم نشط</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1,247</div>
              <div className="text-blue-100">محادثة مصنفة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">89%</div>
              <div className="text-blue-100">معدل الاستخدام</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TagsReportsFeatures;


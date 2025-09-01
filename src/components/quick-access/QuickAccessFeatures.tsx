import React from 'react';
import { 
  Search, 
  Keyboard, 
  Zap, 
  Filter, 
  History, 
  Bookmark,
  Command,
  ArrowRight,
  Clock,
  Star,
  Target,
  Layers
} from 'lucide-react';

const QuickAccessFeatures = () => {
  const features = [
    {
      icon: Search,
      title: 'البحث الذكي المتقدم',
      description: 'بحث فوري وذكي عبر جميع أقسام النظام مع اقتراحات تلقائية ونتائج مرتبة حسب الأولوية',
      items: [
        'بحث فوري بدون تأخير',
        'اقتراحات ذكية أثناء الكتابة',
        'ترتيب النتائج حسب الأولوية',
        'بحث متعدد اللغات'
      ]
    },
    {
      icon: Zap,
      title: 'الوصول الفوري',
      description: 'انتقال سريع بين الصفحات والوظائف في أقل من ثانية واحدة مع حفظ السياق',
      items: [
        'سرعة استجابة أقل من 0.2 ثانية',
        'حفظ السياق أثناء التنقل',
        'تحميل مسبق للصفحات',
        'انتقال سلس بدون انقطاع'
      ]
    },
    {
      icon: Filter,
      title: 'التصفية المتقدمة',
      description: 'أدوات تصفية قوية لتضييق نطاق البحث والعثور على المحتوى المطلوب بدقة',
      items: [
        'تصفية حسب النوع والفئة',
        'فلاتر زمنية متقدمة',
        'حفظ الفلاتر المفضلة',
        'تصفية حسب الأولوية'
      ]
    }
  ];

  const workflowSteps = [
    {
      icon: Command,
      title: 'اضغط Ctrl+K',
      description: 'افتح أداة الوصول السريع من أي مكان في النظام'
    },
    {
      icon: Search,
      title: 'ابحث أو تصفح',
      description: 'اكتب ما تبحث عنه أو تصفح الخيارات المتاحة'
    },
    {
      icon: Target,
      title: 'اختر الوجهة',
      description: 'حدد الصفحة أو الوظيفة المطلوبة من النتائج'
    },
    {
      icon: Zap,
      title: 'انتقل فوراً',
      description: 'استمتع بالانتقال السريع والسلس للوجهة المحددة'
    }
  ];

  return (
    <div className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            مميزات أداة الوصول السريع
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف كيف تجعل أداة الوصول السريع تجربة التنقل في النظام أسرع وأكثر كفاءة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              كيف تعمل أداة الوصول السريع؟
            </h3>
            <p className="text-lg text-gray-600">
              عملية بسيطة من 4 خطوات للوصول السريع لأي مكان في النظام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-gray-300 mx-auto rotate-180" />
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccessFeatures;


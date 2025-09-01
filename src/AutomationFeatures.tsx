import { Zap, Bot, Clock, Settings, CheckCircle, ArrowRight, MessageSquare, Calendar, Target, Workflow } from 'lucide-react';

const AutomationFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "محفزات ذكية متقدمة",
      description: "إنشاء محفزات تلقائية تستجيب لأحداث مختلفة في النظام لبدء مسارات العمل",
      benefits: [
        "محفزات زمنية مجدولة",
        "محفزات سلوكية للعملاء",
        "محفزات أحداث النظام",
        "محفزات مخصصة قابلة للبرمجة"
      ]
    },
    {
      icon: Bot,
      title: "إجراءات آلية شاملة",
      description: "مجموعة واسعة من الإجراءات التلقائية لأتمتة المهام المتكررة وتحسين الكفاءة",
      benefits: [
        "إرسال رسائل تلقائية",
        "تحديث بيانات العملاء",
        "إنشاء تقارير دورية",
        "تنفيذ مهام مخصصة"
      ]
    }
  ];

  const automationExamples = [
    {
      icon: MessageSquare,
      title: "أتمتة الرسائل",
      description: "إرسال رسائل ترحيب، متابعة، وتذكيرات تلقائية للعملاء",
      count: "2,847",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "جدولة المهام",
      description: "جدولة وتنفيذ المهام في أوقات محددة أو فترات دورية",
      count: "156",
      color: "green"
    },
    {
      icon: Target,
      title: "استهداف ذكي",
      description: "استهداف العملاء بناءً على سلوكهم وخصائصهم التلقائية",
      count: "892",
      color: "purple"
    },
    {
      icon: Workflow,
      title: "مسارات معقدة",
      description: "إنشاء مسارات عمل متقدمة مع شروط وتفرعات متعددة",
      count: "423",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800", 
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600", 
      orange: "text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getCountColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-right" style={{textAlign: 'center', direction: 'rtl'}}>
            ميزات متقدمة للتشغيل الآلي
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right" style={{textAlign: 'center', direction: 'rtl'}}>
            أدوات قوية لأتمتة مسارات العمل وتوفير الوقت والجهد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>
              <div className="flex items-start gap-4 mb-6 flex-row-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-right flex-1" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>{feature.title}</h3>
                  <p className="text-gray-600 text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>{feature.description}</p>
                </div>
              </div>
              
              <div className="space-y-3" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3 flex-row-reverse text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-right" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Automation Examples */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-right" style={{textAlign: 'center', direction: 'rtl'}}>
            أمثلة على التشغيل الآلي
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-right" style={{textAlign: 'center', direction: 'rtl'}}>
            اكتشف كيف يمكن أتمتة مهامك اليومية لتوفير الوقت والجهد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationExamples.map((example, index) => (
            <div key={index} className={`rounded-xl p-6 border-2 ${getColorClasses(example.color)} hover:shadow-lg transition-all`} dir="rtl">
              <div className="flex items-center justify-between mb-4 flex-row-reverse">
                <example.icon className={`w-8 h-8 ${getIconColor(example.color)}`} />
                <span className={`text-2xl font-bold ${getCountColor(example.color)}`}>{example.count}</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-right" dir="rtl">{example.title}</h4>
              <p className="text-sm text-right" dir="rtl">{example.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationFeatures;


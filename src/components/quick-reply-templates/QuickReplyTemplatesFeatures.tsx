import React from 'react';
import { 
  Globe, 
  MessageSquare, 
  Users, 
  Smartphone, 
  BarChart3, 
  Shield,
  CheckCircle,
  Zap,
  Clock,
  FileText,
  Settings,
  Search
} from 'lucide-react';

const QuickReplyTemplatesFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "دعم متعدد اللغات",
      description: "إنشاء قوالب ردود بلغات متعددة لخدمة عملاء عالميين",
      benefits: [
        "دعم أكثر من 50 لغة",
        "ترجمة تلقائية للقوالب",
        "تخصيص حسب المنطقة الجغرافية",
        "واجهة متعددة اللغات"
      ]
    },
    {
      icon: MessageSquare,
      title: "الرد الآلي الذكي",
      description: "ردود ذكية على الاستفسارات الشائعة مع إمكانية التخصيص الكامل",
      benefits: [
        "ذكاء اصطناعي متقدم",
        "تعلم من المحادثات السابقة",
        "ردود مخصصة حسب السياق",
        "تحديث تلقائي للقوالب"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ميزات متقدمة لتجربة دردشة مثالية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            كل ما تحتاجه لتقديم تجربة دردشة احترافية لعملائك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <span className="text-gray-700 text-right flex-1" dir="rtl" style={{textAlign: 'right', direction: 'rtl'}}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            المزيد من الميزات المتقدمة
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">ردود فورية</h4>
              <p className="text-sm text-gray-600">استجابة سريعة للعملاء</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">توفير الوقت</h4>
              <p className="text-sm text-gray-600">تقليل وقت الاستجابة بنسبة 70%</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <FileText className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">قوالب مخصصة</h4>
              <p className="text-sm text-gray-600">إنشاء قوالب حسب احتياجاتك</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Search className="w-8 h-8 text-purple-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">بحث ذكي</h4>
              <p className="text-sm text-gray-600">العثور على القوالب بسرعة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickReplyTemplatesFeatures;


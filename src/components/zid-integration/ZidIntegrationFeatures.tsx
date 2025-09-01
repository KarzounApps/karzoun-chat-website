import React from 'react';
import { 
  ShoppingCart, 
  Bell, 
  MessageSquare, 
  Package, 
  Star, 
  UserPlus,
  Download,
  Settings,
  Megaphone,
  Bot,
  Code,
  Send,
  CheckCircle,
  Clock,
  Users,
  Zap,
  TrendingUp
} from 'lucide-react';

const ZidIntegrationFeatures = () => {
  const mainFeatures = [
    {
      icon: ShoppingCart,
      title: 'أتمتة إدارة الطلبات',
      description: 'نظام متكامل لإدارة طلبات متجر زد تلقائياً مع إشعارات فورية للعملاء والموظفين',
      items: [
        'إشعارات تلقائية عند إنشاء طلب جديد',
        'تحديثات حالة الطلب في الوقت الفعلي',
        'رسائل تأكيد الدفع والاستلام',
        'تتبع شحنات الطلبات مع العملاء'
      ]
    },
    {
      icon: Bell,
      title: 'إشعارات ذكية للمخزون',
      description: 'تنبيهات فورية عند نفاد المخزون أو انخفاض الكميات مع إشعارات العملاء المهتمين',
      items: [
        'تنبيهات نفاد المخزون للإدارة',
        'إشعار العملاء عند توفر المنتجات',
        'تقارير المخزون الدورية',
        'تنبيهات المنتجات الأكثر طلباً'
      ]
    },
    {
      icon: UserPlus,
      title: 'خدمة العملاء المتقدمة',
      description: 'نظام خدمة عملاء شامل مع ردود تلقائية ذكية وتوجيه الاستفسارات للأقسام المناسبة',
      items: [
        'ردود تلقائية على الاستفسارات الشائعة',
        'توجيه المحادثات للموظف المناسب',
        'قاعدة معرفة تفاعلية للمنتجات',
        'تقييم جودة الخدمة من العملاء'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Download,
      title: 'تصدير البيانات والتقارير',
      description: 'تصدير جميع بيانات التكامل والتحليلات بصيغ متعددة'
    },
    {
      icon: Settings,
      title: 'إعدادات متقدمة للتخصيص',
      description: 'تخصيص كامل لجميع الرسائل والإشعارات حسب احتياجاتك'
    },
    {
      icon: Megaphone,
      title: 'حملات تسويقية مستهدفة',
      description: 'إرسال حملات تسويقية مخصصة بناءً على سلوك العملاء'
    },
    {
      icon: Bot,
      title: 'روبوت محادثة ذكي',
      description: 'روبوت محادثة متطور للرد على استفسارات العملاء تلقائياً'
    },
    {
      icon: Code,
      title: 'API متقدم للمطورين',
      description: 'واجهة برمجية شاملة لتطوير تكاملات مخصصة'
    },
    {
      icon: Send,
      title: 'إرسال مجمع للرسائل',
      description: 'إرسال رسائل جماعية لقوائم العملاء المختلفة'
    }
  ];

  return (
    <div className="py-24 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              مميزات التكامل مع منصة زد
            </h2>
            <img 
              src="/images/ZidLogo.png" 
              alt="Zid" 
              className="w-12 h-8 md:w-16 md:h-10 object-contain"
            />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استفد من جميع إمكانيات كرزون مع تكامل سلس مع منصة زد لتحسين خدمة العملاء وزيادة الكفاءة التشغيلية
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">مميزات إضافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">لماذا تختار تكامل كرزون مع زد؟</h3>
            <p className="text-blue-100">مميزات حصرية تجعل متجرك الإلكتروني أكثر احترافية ونجاحاً</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-2xl font-bold mb-1">95%</div>
              <div className="text-blue-100 text-sm">معدل تسليم الرسائل</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-green-300" />
              </div>
              <div className="text-2xl font-bold mb-1">60%</div>
              <div className="text-blue-100 text-sm">زياده المبيعات</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-purple-300" />
              </div>
              <div className="text-2xl font-bold mb-1">10K+</div>
              <div className="text-blue-100 text-sm">متجر يستخدم كرزون</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <ShoppingCart className="w-8 h-8 text-orange-300" />
              </div>
              <div className="text-2xl font-bold mb-1">35%</div>
              <div className="text-blue-100 text-sm">استرداد السلال المتروكة</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZidIntegrationFeatures;


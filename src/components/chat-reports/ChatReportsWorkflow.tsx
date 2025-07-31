import React from 'react';
import { Settings, Database, BarChart3, FileText } from 'lucide-react';

const ChatReportsWorkflow = () => {
  const steps = [
    {
      icon: Settings,
      title: "إعداد التقارير",
      description: "قم بتكوين معايير التقارير وتحديد المؤشرات المطلوب تتبعها"
    },
    {
      icon: Database,
      title: "جمع البيانات",
      description: "النظام يجمع البيانات تلقائياً من جميع المحادثات والتفاعلات"
    },
    {
      icon: BarChart3,
      title: "التحليل والمعالجة",
      description: "تحليل البيانات وإنشاء الرؤى والإحصائيات المفيدة"
    },
    {
      icon: FileText,
      title: "إنشاء التقارير",
      description: "إنتاج تقارير شاملة قابلة للتخصيص والمشاركة"
    }
  ];

  return (
    <section dir="rtl" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            كيف تعمل تقارير المحادثات
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            عملية بسيطة من أربع خطوات للحصول على تقارير شاملة ومفيدة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reports Dashboard Demo */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            نموذج لوحة التقارير
          </h3>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  تصدير التقرير
                </button>
                <select className="border border-gray-300 rounded-lg px-4 py-2">
                  <option>آخر 30 يوم</option>
                  <option>آخر 7 أيام</option>
                  <option>آخر 3 أشهر</option>
                </select>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">تقرير الأداء الشهري</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">3,847</div>
                <div className="text-gray-600 text-sm">إجمالي المحادثات</div>
                <div className="text-green-600 text-xs mt-1">↑ 12% من الشهر الماضي</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">2.1 دقيقة</div>
                <div className="text-gray-600 text-sm">متوسط وقت الاستجابة</div>
                <div className="text-green-600 text-xs mt-1">↓ 8% تحسن</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">94.5%</div>
                <div className="text-gray-600 text-sm">معدل رضا العملاء</div>
                <div className="text-green-600 text-xs mt-1">↑ 3% تحسن</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-3 text-right">أداء الفريق</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">247 محادثة</div>
                      <div className="text-xs text-gray-500">96% رضا</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700">أحمد محمد</span>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">أ</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">198 محادثة</div>
                      <div className="text-xs text-gray-500">98% رضا</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700">سارة العتيبي</span>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">س</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">156 محادثة</div>
                      <div className="text-xs text-gray-500">92% رضا</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700">خالد الشمري</span>
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">خ</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-3 text-right">أوقات الذروة</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">80%</span>
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-gray-700">9:00 - 11:00 ص</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">100%</span>
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-20 h-2 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-gray-700">2:00 - 4:00 م</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">60%</span>
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-12 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-gray-700">7:00 - 9:00 م</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatReportsWorkflow;


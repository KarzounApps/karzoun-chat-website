import React from 'react';
import { CheckSquare, Users, MessageSquare, Settings, BarChart3 } from 'lucide-react';

const BulkActionsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-6 lg:pt-8 xl:pt-10 bg-gradient-to-br from-[#06142E] via-[#0B2A52] to-[#06142E] overflow-hidden" dir="rtl">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142E]/80 via-transparent to-[#06142E]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06142E]/60 via-transparent to-[#06142E]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
          تنفيذ إجراءات بالجملة
        </h1>
        
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-8 text-center leading-relaxed" 
              style={{textAlign: 'center', width: '100%', display: 'block'}}>
            قم بتغيير حالة أو حذف أو إضافة العملاء، المحادثات والكثير عبر تحديد الكل أو البعض
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          وفر ساعات من العمل اليدوي من خلال تنفيذ إجراءات متعددة على مئات أو آلاف العناصر بنقرة واحدة. إدارة فعالة وسريعة لقاعدة بياناتك
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors order-1">
            ابدأ الآن مجاناً
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors order-2">
            عرض توضيحي
          </button>
        </div>

        {/* Bulk Actions Dashboard Demo */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6 flex-row-reverse">
              <h3 className="text-white font-semibold text-lg">لوحة الإجراءات المجمعة</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">متصل الآن</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-right">
              <div className="flex items-center justify-between mb-4 flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <CheckSquare className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">تحديد الكل (1,247 عنصر)</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">تطبيق الإجراءات</button>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">إلغاء التحديد</button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">847</div>
                  <div className="text-sm text-gray-600">عملاء محددين</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">400</div>
                  <div className="text-sm text-gray-600">محادثات محددة</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <Settings className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">إجراءات متاحة</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-gray-600">معدل النجاح</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkActionsHero;


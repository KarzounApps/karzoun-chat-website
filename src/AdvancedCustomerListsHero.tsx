import React from 'react';
import { Users, Filter, Search, BarChart3, Target, Database } from 'lucide-react';

const AdvancedCustomerListsHero = () => {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-center">
            قوائم العملاء المتقدمة
          </h1>
          
          <div className="text-center flex flex-col items-center justify-center mb-4">
            <div className="w-full flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 leading-relaxed text-center w-full max-w-4xl mx-auto"
                  style={{
                    textAlign: 'center !important',
                    display: 'block !important',
                    width: '100% !important',
                    margin: '0 auto !important',
                    padding: '0 !important',
                    position: 'relative !important',
                    left: 'auto !important',
                    right: 'auto !important',
                    transform: 'none !important'
                  }}>
                إنشاء وإدارة قوائم عملاء مخصصة بناءً على معايير متعددة
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            قم بتقسيم عملائك إلى مجموعات ذكية بناءً على سلوك الشراء، التفاعل، والخصائص الديموغرافية لتحسين استراتيجيات التسويق والمبيعات
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Customer Segmentation Dashboard Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6 flex-row-reverse">
              <h3 className="text-xl font-bold text-white">متصل الآن</h3>
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">لوحة تقسيم العملاء</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 min-h-[320px] flex flex-col">
              <div className="flex items-center justify-between mb-6 flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">5 قوائم نشطة (2,847 عميل)</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                    إنشاء قائمة جديدة
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
                    تصدير البيانات
                  </button>
                </div>
              </div>
              
              {/* Customer Lists Examples */}
              <div className="bg-gray-50 rounded-lg p-4 flex-1">
                <h4 className="text-gray-700 font-medium mb-3 text-right">قوائم العملاء النشطة:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-3 rounded border flex-row-reverse">
                    <div className="flex items-center gap-2 flex-row-reverse">
                      <Database className="w-4 h-4 text-blue-500" />
                      <span className="text-blue-600 font-medium text-sm">247 عميل</span>
                    </div>
                    <span className="text-gray-700 text-sm">عملاء VIP (إنفاق +1000 ريال)</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded border flex-row-reverse">
                    <div className="flex items-center gap-2 flex-row-reverse">
                      <Database className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 font-medium text-sm">892 عميل</span>
                    </div>
                    <span className="text-gray-700 text-sm">مشترين متكررين (3+ طلبات)</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded border flex-row-reverse">
                    <div className="flex items-center gap-2 flex-row-reverse">
                      <Database className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-600 font-medium text-sm">156 عميل</span>
                    </div>
                    <span className="text-gray-700 text-sm">سلة مهجورة (+500 ريال)</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded border flex-row-reverse">
                    <div className="flex items-center gap-2 flex-row-reverse">
                      <Database className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-600 font-medium text-sm">423 عميل</span>
                    </div>
                    <span className="text-gray-700 text-sm">عملاء غير نشطين (30+ يوم)</span>
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

export default AdvancedCustomerListsHero;


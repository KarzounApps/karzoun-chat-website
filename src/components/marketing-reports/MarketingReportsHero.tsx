import React from 'react';
import { BarChart3, TrendingUp, Target, Users, DollarSign, Eye } from 'lucide-react';

const MarketingReportsHero = () => {
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
            تقارير الحملات التسويقية
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
                تتبع أداء الحملات التسويقية ومعدلات التحويل بدقة وتفصيل شامل
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            احصل على رؤى عميقة حول أداء حملاتك التسويقية مع تقارير تفصيلية تساعدك على اتخاذ قرارات مدروسة وتحسين عائد الاستثمار
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Marketing Reports Dashboard Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6 flex-row-reverse">
              <h3 className="text-xl font-bold text-white">لوحة تحليلات الحملات</h3>
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">تحديث مباشر</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 min-h-[320px] flex flex-col">
              <div className="flex items-center justify-between mb-6 flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">8 حملات نشطة | آخر 30 يوم</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                    تصدير التقرير
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
                    تخصيص الفترة
                  </button>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                  <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">247K</div>
                  <div className="text-sm text-gray-600">مشاهدات الحملة</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                  <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">12.4K</div>
                  <div className="text-sm text-gray-600">عملاء محتملين</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-100">
                  <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">8.7%</div>
                  <div className="text-sm text-gray-600">معدل التحويل</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-100">
                  <DollarSign className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">156K</div>
                  <div className="text-sm text-gray-600">إجمالي المبيعات</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center border border-red-100">
                  <TrendingUp className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">+24%</div>
                  <div className="text-sm text-gray-600">نمو شهري</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center border border-indigo-100">
                  <BarChart3 className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-indigo-600">4.2</div>
                  <div className="text-sm text-gray-600">عائد الاستثمار</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingReportsHero;


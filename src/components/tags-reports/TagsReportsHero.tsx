import React from 'react';
import { Tag, BarChart3, TrendingUp, Users, MessageSquare, Filter } from 'lucide-react';

const TagsReportsHero = () => {
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
            تقارير الوسوم
          </h1>
          
          <div className="text-center flex flex-col items-center justify-center mb-4">
            <div className="w-full flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 leading-relaxed text-center w-full max-w-4xl mx-auto">
                تحليل استخدام الوسوم وتوزيع المحادثات حسب التصنيفات بدقة وتفصيل شامل
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            تعرف على التصنيفات التي تحصل على أكبر عدد من المحادثات، والفئات التي تستهلكها أو تفيد المحادثة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Tags Reports Dashboard Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6 flex-row-reverse">
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">تحديث مباشر</span>
              </div>
              <h3 className="text-xl font-bold text-white">لوحة تقارير الوسوم</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 min-h-[320px] flex flex-col">
              <div className="flex items-center justify-between mb-6 flex-row-reverse">
                <div className="flex items-center gap-2 text-gray-600 flex-row-reverse">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">15 وسم نشط | آخر 30 يوم</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    تصدير التقرير
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                    تخصيص الفترة
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Tag className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">1,247</div>
                  <div className="text-sm text-gray-600">المحادثات المصنفة</div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">89%</div>
                  <div className="text-sm text-gray-600">معدل استخدام الوسوم</div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">+24%</div>
                  <div className="text-sm text-gray-600">نمو التصنيف</div>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">342</div>
                  <div className="text-sm text-gray-600">متوسط المحادثات اليومية</div>
                </div>
                
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Filter className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">الوسوم النشطة</div>
                </div>
                
                <div className="bg-indigo-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">8</div>
                  <div className="text-sm text-gray-600">الفرق المستخدمة</div>
                </div>
              </div>

              {/* Top Tags List */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-right">أكثر الوسوم استخداماً:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">عميل_سابق</span>
                    </div>
                    <div className="text-sm text-gray-600">287 محادثة</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">عميل_محتمل</span>
                    </div>
                    <div className="text-sm text-gray-600">234 محادثة</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">في_انتظار_الدفع</span>
                    </div>
                    <div className="text-sm text-gray-600">156 محادثة</div>
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

export default TagsReportsHero;


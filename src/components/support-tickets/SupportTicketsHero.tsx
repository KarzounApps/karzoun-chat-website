import React from 'react';
import { ClipboardList, Clock, AlertTriangle, CheckCircle, Users, BarChart3 } from 'lucide-react';

const SupportTicketsHero = () => {
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
            تذاكر الدعم والمهام
          </h1>
          
          <div className="text-center flex flex-col items-center justify-center mb-4">
            <div className="w-full flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 leading-relaxed text-center w-full max-w-4xl mx-auto">
                متابعة حالة تذاكر الدعم وأوقات الحل ومستويات الأولوية بدقة وتفصيل شامل
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            تتبع جميع تذاكر الدعم والمهام مع إدارة الأولويات وقياس أوقات الاستجابة والحل لتحسين جودة الخدمة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Support Tickets Dashboard Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6 flex-row-reverse">
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">تحديث مباشر</span>
              </div>
              <h3 className="text-xl font-bold text-white">لوحة تذاكر الدعم والمهام</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 min-h-[400px] flex flex-col">
              <div className="flex items-center justify-between mb-6 flex-row-reverse">
                <div className="flex items-center gap-2 text-gray-600 flex-row-reverse">
                  <ClipboardList className="w-5 h-5" />
                  <span className="text-sm">47 تذكرة نشطة | آخر 30 يوم</span>
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
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <ClipboardList className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">47</div>
                  <div className="text-sm text-gray-600">التذاكر النشطة</div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">156</div>
                  <div className="text-sm text-gray-600">التذاكر المحلولة</div>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">2.4</div>
                  <div className="text-sm text-gray-600">ساعة متوسط الحل</div>
                </div>
                
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-1">8</div>
                  <div className="text-sm text-gray-600">أولوية عالية</div>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">94%</div>
                  <div className="text-sm text-gray-600">معدل الرضا</div>
                </div>
                
                <div className="bg-indigo-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">12</div>
                  <div className="text-sm text-gray-600">فريق الدعم</div>
                </div>
              </div>

              {/* Priority Tickets List */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-right">التذاكر حسب الأولوية:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">أولوية عالية</span>
                    </div>
                    <div className="text-sm text-gray-600">8 تذاكر</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium">أولوية متوسطة</span>
                    </div>
                    <div className="text-sm text-gray-600">23 تذكرة</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">أولوية منخفضة</span>
                    </div>
                    <div className="text-sm text-gray-600">16 تذكرة</div>
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

export default SupportTicketsHero;


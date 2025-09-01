import React from 'react';
import { BarChart3, TrendingUp, PieChart, Activity, Users, MessageSquare } from 'lucide-react';

const AdvancedAnalyticsHero = () => {
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
            تحليلات متقدمة
          </h1>
          
          <div className="text-center flex flex-col items-center justify-center mb-4">
            <div className="w-full flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 leading-relaxed text-center w-full max-w-4xl mx-auto">
                رؤى تفصيلية عن أداء خدمة العملاء بدقة وتفصيل شامل
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            احصل على تحليلات عميقة ومؤشرات أداء شاملة لتحسين جودة خدمة العملاء واتخاذ قرارات مدروسة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Advanced Analytics Dashboard Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6 flex-row-reverse">
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">تحديث مباشر</span>
              </div>
              <h3 className="text-xl font-bold text-white">لوحة التحليلات المتقدمة</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 min-h-[500px] flex flex-col">
              <div className="flex items-center justify-between mb-6 flex-row-reverse">
                <div className="flex items-center gap-2 text-gray-600 flex-row-reverse">
                  <Activity className="w-5 h-5" />
                  <span className="text-sm">تحليلات شاملة | آخر 30 يوم</span>
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

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">12,847</div>
                  <div className="text-sm text-gray-600">إجمالي المحادثات</div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">+18%</div>
                  <div className="text-sm text-gray-600">نمو شهري</div>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">3,456</div>
                  <div className="text-sm text-gray-600">عملاء نشطين</div>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">96%</div>
                  <div className="text-sm text-gray-600">معدل الرضا</div>
                </div>
              </div>

              {/* Interactive Charts Section */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Performance Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-right">أداء الفريق الأسبوعي</h4>
                  <div className="h-48 flex items-end justify-between gap-2">
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-500 rounded-t" style={{height: '120px'}}></div>
                      <span className="text-xs text-gray-600 mt-2">السبت</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-500 rounded-t" style={{height: '90px'}}></div>
                      <span className="text-xs text-gray-600 mt-2">الأحد</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-500 rounded-t" style={{height: '150px'}}></div>
                      <span className="text-xs text-gray-600 mt-2">الاثنين</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-500 rounded-t" style={{height: '110px'}}></div>
                      <span className="text-xs text-gray-600 mt-2">الثلاثاء</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-500 rounded-t" style={{height: '140px'}}></div>
                      <span className="text-xs text-gray-600 mt-2">الأربعاء</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-500 rounded-t" style={{height: '100px'}}></div>
                      <span className="text-xs text-gray-600 mt-2">الخميس</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-500 rounded-t" style={{height: '80px'}}></div>
                      <span className="text-xs text-gray-600 mt-2">الجمعة</span>
                    </div>
                  </div>
                </div>

                {/* Customer Satisfaction Pie Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-right">توزيع رضا العملاء</h4>
                  <div className="h-48 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          strokeDasharray="75, 100"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeDasharray="20, 100"
                          strokeDashoffset="-75"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">96%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">راضي (75%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">راضي جداً (21%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Trends */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-right">اتجاهات أوقات الاستجابة</h4>
                <div className="h-32 flex items-end justify-between">
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-600 mb-1">2.1 دقيقة</div>
                    <div className="w-6 bg-green-500 rounded-t" style={{height: '80px'}}></div>
                    <span className="text-xs text-gray-600 mt-1">الأسبوع 1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-600 mb-1">1.8 دقيقة</div>
                    <div className="w-6 bg-green-500 rounded-t" style={{height: '90px'}}></div>
                    <span className="text-xs text-gray-600 mt-1">الأسبوع 2</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-600 mb-1">2.3 دقيقة</div>
                    <div className="w-6 bg-yellow-500 rounded-t" style={{height: '70px'}}></div>
                    <span className="text-xs text-gray-600 mt-1">الأسبوع 3</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-600 mb-1">1.6 دقيقة</div>
                    <div className="w-6 bg-green-500 rounded-t" style={{height: '100px'}}></div>
                    <span className="text-xs text-gray-600 mt-1">الأسبوع 4</span>
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

export default AdvancedAnalyticsHero;


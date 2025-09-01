import { Play, Zap, Clock, Settings, ArrowRight, Bot, MessageSquare, Calendar } from 'lucide-react';

const AutomationHero = () => {
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
            التشغيل الآلي
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
                تجنب المهام المتكررة عن طريق أتمتة سير العمل
              </h2>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            وفر وقت فريقك وارفع كفاءة العمل من خلال أتمتة المهام المتكررة وإنشاء مسارات عمل ذكية تعمل تلقائياً على مدار الساعة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Play className="w-5 h-5" />
              ابدأ الآن مجاناً
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              عرض توضيحي
            </button>
          </div>

          {/* Automation Workflow Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6 flex-row-reverse">
              <h3 className="text-xl font-bold text-white">مسار العمل الآلي</h3>
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">يعمل الآن</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 min-h-[400px]">
              {/* Workflow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Trigger */}
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 relative">
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div className="flex items-center gap-3 mb-3 flex-row-reverse">
                    <Zap className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-blue-800">محفز تلقائي</h4>
                  </div>
                  <p className="text-blue-700 text-sm mb-3">عميل جديد يسجل في النظام</p>
                  <div className="bg-white rounded p-2 text-xs text-gray-600">
                    <div className="flex items-center gap-2 flex-row-reverse">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>تم التفعيل: 15:30</span>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200 relative">
                  <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div className="flex items-center gap-3 mb-3 flex-row-reverse">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-green-800">إجراء فوري</h4>
                  </div>
                  <p className="text-green-700 text-sm mb-3">إرسال رسالة ترحيب تلقائية</p>
                  <div className="bg-white rounded p-2 text-xs">
                    <div className="text-gray-800 mb-1">مرحباً بك في كرزون! 👋</div>
                    <div className="text-gray-600">نحن سعداء بانضمامك إلينا</div>
                  </div>
                </div>

                {/* Delay & Follow-up */}
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200 relative">
                  <div className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div className="flex items-center gap-3 mb-3 flex-row-reverse">
                    <Clock className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-purple-800">متابعة مجدولة</h4>
                  </div>
                  <p className="text-purple-700 text-sm mb-3">انتظار 24 ساعة ثم إرسال دليل البدء</p>
                  <div className="bg-white rounded p-2 text-xs text-gray-600">
                    <div className="flex items-center gap-2 flex-row-reverse">
                      <Calendar className="w-3 h-3" />
                      <span>مجدول: غداً 15:30</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">127</div>
                  <div className="text-sm text-gray-600">مسار نشط</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2,847</div>
                  <div className="text-sm text-gray-600">إجراء منفذ</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">معدل النجاح</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">18</div>
                  <div className="text-sm text-gray-600">ساعة موفرة يومياً</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;


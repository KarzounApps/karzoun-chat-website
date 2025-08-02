import React from 'react';
import { MessageSquare, Clock, Users, Zap } from 'lucide-react';

const QuickReplyTemplatesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#06142E] via-[#0B2A52] to-[#06142E] overflow-hidden" dir="rtl">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0">
        {/* Base dot pattern */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        {/* Glowing overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
        {/* Fade edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142E]/80 via-transparent to-[#06142E]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06142E]/60 via-transparent to-[#06142E]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-center">
            قوالب الردود السريعة
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
                إنشاء قوالب ردود جاهزة للاستخدام المتكرر وتوفير الوقت
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            وفر وقت فريقك وحسن جودة خدمة العملاء من خلال إنشاء مكتبة شاملة من قوالب الردود الجاهزة للاستخدام الفوري
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Chat Interface Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6 flex-row-reverse">
              <h3 className="text-xl font-bold text-white">محادثة مباشرة للموقع</h3>
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">متصل الآن</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 min-h-[300px] flex flex-col">
              <div className="flex items-center justify-between mb-4 flex-row-reverse">
                <span className="text-gray-600 text-sm">وقت الرد: 30 ثانية</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex-1 space-y-4">
                {/* Customer message */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-gray-800 text-right">مرحباً لدي استفسار عن خدماتكم</p>
                  </div>
                </div>
                
                {/* Agent typing indicator */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                    <p className="text-right">أهلاً بك! كيف يمكنني مساعدتك اليوم؟</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-500 text-sm flex-row-reverse">
                  <MessageSquare className="w-4 h-4" />
                  <span>اكتب رسالتك هنا...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">70%</div>
              <div className="text-sm text-gray-300">توفير في الوقت</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">3x</div>
              <div className="text-sm text-gray-300">سرعة الاستجابة</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-gray-300">رضا العملاء</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <MessageSquare className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">قالب جاهز</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickReplyTemplatesHero;


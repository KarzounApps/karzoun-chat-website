import React from 'react';
import { BarChart3, Clock, TrendingUp, Users } from 'lucide-react';

const ChatReportsHero = () => {
  return (
    <section 
      dir="rtl" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #06142E 0%, #0B2A52 50%, #06142E 100%),
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0.5px, transparent 0.5px)
        `,
        backgroundSize: '100% 100%, 24px 24px, 24px 24px',
        backgroundPosition: '0 0, 0 0, 12px 12px'
      }}
    >
      {/* Fade overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 30%, rgba(6, 20, 46, 0.4) 70%, rgba(6, 20, 46, 0.8) 100%),
            linear-gradient(to right, rgba(6, 20, 46, 0.8) 0%, transparent 15%, transparent 85%, rgba(6, 20, 46, 0.8) 100%),
            linear-gradient(to bottom, rgba(6, 20, 46, 0.6) 0%, transparent 15%, transparent 85%, rgba(6, 20, 46, 0.8) 100%)
          `
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            تقارير المحادثات
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-8">
            تحليل شامل لحجم المحادثات وأوقات الاستجابة ومعدلات الرضا
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            احصل على رؤى عميقة حول أداء خدمة العملاء من خلال تقارير تفصيلية تساعدك على تحسين جودة الخدمة وزيادة رضا العملاء
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-2 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-1 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Analytics Dashboard Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">لوحة تحليل المحادثات</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">متصل الآن</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">1,247</div>
                <div className="text-blue-300 text-sm">إجمالي المحادثات</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">1.8 دقيقة</div>
                <div className="text-blue-300 text-sm">متوسط الاستجابة</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">96%</div>
                <div className="text-blue-300 text-sm">معدل الرضا</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">23</div>
                <div className="text-blue-300 text-sm">فريق متاح</div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 h-32 flex items-center justify-center">
              <div className="text-blue-300 text-sm">مخطط الأداء في الوقت الفعلي</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatReportsHero;


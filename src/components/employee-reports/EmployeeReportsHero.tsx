import React from 'react';
import { Users, TrendingUp, Clock, Award } from 'lucide-react';

const EmployeeReportsHero = () => {
  return (
    <section 
      dir="rtl" 
      className="relative min-h-screen bg-gradient-to-br from-[#06142E] via-[#0B2A52] to-[#06142E] overflow-hidden"
    >
      {/* Digital Matrix Background with Glowing Dots */}
      <div className="absolute inset-0">
        {/* Base dot pattern */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.6) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>
        
        {/* Glowing effect overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>
        
        {/* Fade out edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142E]/80 via-transparent to-[#06142E]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#06142E]/60 via-transparent to-[#06142E]/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center w-full" style={{textAlign: 'center !important'}}>
              تقارير الموظفين
            </h1>
            
            <div className="w-full flex justify-center items-center mb-8">
              <h2 
                className="text-xl md:text-2xl font-semibold text-blue-400 leading-relaxed text-center w-full max-w-4xl mx-auto"
                style={{
                  textAlign: 'center !important',
                  display: 'block !important',
                  width: '100% !important',
                  maxWidth: '100% !important',
                  margin: '0 auto !important',
                  padding: '0 !important',
                  position: 'static !important',
                  left: 'auto !important',
                  right: 'auto !important',
                  transform: 'none !important',
                  textIndent: '0 !important',
                  direction: 'ltr !important',
                  unicodeBidi: 'normal !important'
                }}
              >
                قياس أداء الموظفين وإنتاجيتهم ومعدلات الاستجابة
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            احصل على رؤى شاملة حول أداء فريق خدمة العملاء من خلال تقارير مفصلة تساعدك على تحسين الإنتاجية وتطوير المهارات
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Employee Performance Dashboard Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6 flex-row-reverse">
              <h3 className="text-xl font-semibold text-white">لوحة أداء الموظفين</h3>
              <div className="flex items-center gap-2 flex-row-reverse">
                <span className="text-green-400 text-sm">تحديث مباشر</span>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">15</div>
                <div className="text-blue-300 text-sm">موظف نشط</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">92%</div>
                <div className="text-blue-300 text-sm">معدل الأداء</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">2.1 دقيقة</div>
                <div className="text-blue-300 text-sm">متوسط الاستجابة</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">847</div>
                <div className="text-blue-300 text-sm">المحادثات المعالجة</div>
              </div>
            </div>
            
            {/* Top Performers Section */}
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-4 text-right">أفضل الموظفين أداءً</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-row-reverse">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">أ</div>
                    <span className="text-white">أحمد محمد</span>
                  </div>
                  <div className="text-green-400 font-semibold">98%</div>
                </div>
                <div className="flex items-center justify-between flex-row-reverse">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">س</div>
                    <span className="text-white">سارة أحمد</span>
                  </div>
                  <div className="text-green-400 font-semibold">95%</div>
                </div>
                <div className="flex items-center justify-between flex-row-reverse">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">م</div>
                    <span className="text-white">محمد علي</span>
                  </div>
                  <div className="text-green-400 font-semibold">93%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeReportsHero;


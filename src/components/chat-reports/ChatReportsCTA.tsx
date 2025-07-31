import React from 'react';

const ChatReportsCTA = () => {
  const benefits = [
    "تحليل شامل للمحادثات",
    "تقارير أوقات الاستجابة",
    "معدلات الرضا والتقييم",
    "مراقبة أداء الفريق",
    "تقارير مخصصة",
    "أمان وخصوصية عالية"
  ];

  return (
    <section dir="rtl" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ابدأ في استخدام تقارير المحادثات اليوم
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            انضم إلى آلاف الشركات التي تستخدم تقارير المحادثات لتحسين أداء خدمة العملاء وزيادة معدلات الرضا
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-end gap-3">
                <span className="text-blue-100">{benefit}</span>
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ التجربة المجانية
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
              تحدث مع خبير
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatReportsCTA;


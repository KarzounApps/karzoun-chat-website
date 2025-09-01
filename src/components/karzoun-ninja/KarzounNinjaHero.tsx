'use client';

import React from 'react';

export default function KarzounNinjaHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#06142E] to-[#0B2A52] overflow-hidden flex items-center justify-center" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
              هل يمكن أن يولِّد موقعك
              <br />
              <span className="text-blue-400">المزيد من العملاء المحتملين</span>
              <br />
              والمبيعات؟
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              كن العلامة التجارية رقم 1 الموثوق بها في مجالك. لا مزيد من الأسئلة التي لا يُردّ عليها. ساعد عملاءك في دقائق — وليس ساعات أو أيام.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              جرّب الخدمة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { ArrowLeft } from 'lucide-react';

const QuickReplyTemplatesTrial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ابدأ تجربتك المجانية
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            احصل على قوالب ردود جاهزة واكتشف كيف يمكن تحسين خدمة عملائك
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="order-1 sm:order-1 bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2 flex-row-reverse">
              <ArrowLeft className="w-5 h-5" />
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              جدولة عرض توضيحي
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickReplyTemplatesTrial;


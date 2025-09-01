'use client';

import React from 'react';
import { Check } from 'lucide-react';

export default function WhyWorkWithUs() {
  return (
    <section className="py-16 lg:py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            لماذا عليك أن تعمل معنا؟
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              أثبتت المحادثة المباشرة أنها تزيد العملاء المحتملين ورضا العملاء، لكن التحدي الأكبر هو توفير فريق حاضر دائمًا عبر الإنترنت عندما يحتاج العملاء للمساعدة.
            </p>

            {/* Checklist */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">زيادة عدد العملاء المحتملين</h3>
                  <p className="text-gray-600 text-sm">تحويل الزوار إلى عملاء محتملين من خلال الرد الفوري على استفساراتهم</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">راحة بال عند الحديث عن رضا العميل</h3>
                  <p className="text-gray-600 text-sm">ضمان حصول عملائك على أفضل خدمة ممكنة في جميع الأوقات</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">زيادة ولاء العميل + خدمة عملاء لائقة</h3>
                  <p className="text-gray-600 text-sm">بناء علاقات طويلة المدى مع العملاء من خلال خدمة استثنائية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


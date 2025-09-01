'use client';

import React from 'react';
import { Users, TrendingUp, Clock } from 'lucide-react';

export default function CustomerCare() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            دعنا نهتم بعملائك الحاليين وتفرّغ أنت لجذب المزيد منهم
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">أشخاص حقيقيون</h3>
                <p className="text-gray-600 leading-relaxed">
                  لا روبوتات ولا إجابات عشوائية بعد الآن. نُوظّف فقط أشخاصًا حقيقيين مُدرّبين ليصبحوا خبراء خدمة عملاء.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">من عملاء محتملين → عملاء فعليين</h3>
                <p className="text-gray-600 leading-relaxed">
                  نُدير المحادثات باحترافية ونحوّل الفضوليين إلى مشترين، ونُحسّن عائد الاستثمار من إعلاناتك.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">خدمة 24/7 — 365</h3>
                <p className="text-gray-600 leading-relaxed">
                  لن نتوقف عن العمل إطلاقًا؛ ما يعني أن عملاءك يحصلون على خدمة رائعة كل يوم من أيام السنة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


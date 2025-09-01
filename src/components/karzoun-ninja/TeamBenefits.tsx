'use client';

import React from 'react';
import { Users, Clock, DollarSign, Heart, Globe } from 'lucide-react';

export default function TeamBenefits() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            مميزات العمل مع طاقم فريقنا
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Benefit Card 1 */}
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

          {/* Benefit Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">خدمة 24/7 — 365</h3>
                <p className="text-gray-600 leading-relaxed">
                  نحن لا نتوقف عن العمل على الإطلاق؛ ما يعني حصول عملائك على خدمة رائعة كل يوم من أيام السنة وبدون توقف.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">نوفر الوقت والكثير من المال</h3>
                <p className="text-gray-600 leading-relaxed">
                  يستطيع موظفونا خدمة عدة مشاريع في الوقت نفسه. أنت تشارك تكلفة التوظيف مع شركات أخرى تستخدم خدماتنا أيضًا.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">لدينا جانب إنساني — نوفر فرص عمل للمحترفين</h3>
                <p className="text-gray-600 leading-relaxed">
                  نُوظّف المؤهلين من كل الدول العربية، مع أولوية لمن يمتلكون الإمكانات ويحتاجون فرصة لحياة كريمة.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Card 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">موجودون في كل مكان — ندعم أكثر من 10 منصات</h3>
                <p className="text-gray-600 leading-relaxed">
                  فريقنا مُجهّز للتعامل مع أشهر منصات التواصل والدردشة مثل Facebook وInstagram وغيرها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


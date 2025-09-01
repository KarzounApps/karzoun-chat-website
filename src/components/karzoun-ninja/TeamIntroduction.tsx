'use client';

import React from 'react';

export default function TeamIntroduction() {
  return (
    <section className="py-16 lg:py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
            من هو فريق كرزون نينجا؟
          </h2>
          
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              أعضاء فريق كرزون الموهوبون ماهرون في التعامل مع العملاء في أغلب المواقف المعقدة، سواء كان الأمر يتعلق بالصوت أو الرسائل النصية أو الدردشة أو البريد الإلكتروني أو وسائل التواصل الاجتماعي؛ فهم على دراية جيدة بتقديم تجربة غنية بالمعلومات لكل عميل وجعله يشعر بالراحة.
            </p>
            
            <p>
              أحد أهم أهداف دعم العملاء هو الرد على استفسار العميل بسرعة. تمكين العملاء من الدردشة مع علامتك التجارية مباشرة يقود إلى قرارات أسرع، يقلّل الاضطراب، يزيد الولاء بمرور الوقت، ويربح مبيعات كنت ستفقدها.
            </p>
          </div>

          <div className="mt-12">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              أنت في المكان الصحيح
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


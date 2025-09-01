'use client';

import React from 'react';

export default function HighlightBanner() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          كُن متميزًا
        </h2>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          في عالمٍ مزدحم يعمل 24/7، يتوقع عملاؤك دائمًا أن يجيبهم شخص ما عندما يكون لديهم سؤال.
        </p>
      </div>
    </section>
  );
}


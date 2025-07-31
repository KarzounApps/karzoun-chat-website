import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const EmployeeReportsCTA = () => {
  const benefits = [
    "تحليل شامل لأداء الموظفين",
    "تقارير معدلات الاستجابة",
    "قياس الإنتاجية والجودة",
    "إدارة الأهداف والمكافآت",
    "تقارير مخصصة",
    "أمان وخصوصية عالية"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ابدأ في استخدام تقارير الموظفين اليوم
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            انضم إلى آلاف الشركات التي تستخدم تقارير الموظفين لتحسين أداء فريق خدمة العملاء وزيادة الإنتاجية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 flex-row-reverse">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100 text-right">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center lg:text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ابدأ تجربتك المجانية
              </h3>
              <p className="text-blue-100 mb-6">
                احصل على تقارير شاملة لأداء موظفيك واكتشف كيف يمكن تحسين إنتاجية فريقك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <button className="order-2 sm:order-1 bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2 flex-row-reverse">
                  <ArrowLeft className="w-5 h-5" />
                  ابدأ التجربة المجانية
                </button>
                <button className="order-1 sm:order-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  تحدث مع خبير
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeReportsCTA;


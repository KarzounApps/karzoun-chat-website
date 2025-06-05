import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';

export function AutomationFeature() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-4">بناء عمليات أتمتة متقدمة</p>
          <h2 className="text-4xl font-bold mb-4">
            قم بأتمتة أي شيء يمكنك
            <br />
            تخيله، لا حدود سوى مخيلتك
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            الحصول على امكانيات عظيمة لم تعد حكراً على
            أصحاب الخبرة التقنية المتقدمة. مع كرزون شات
            يمكنك بناء خطتك وكأنك ترسم على ورق.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-right">
              <p className="text-gray-600">
                استخدم منشئ مسار الأتمتة عبر السحب والإفلات لإنشاء رد آلي أي
                عملية أتمتة بسهولة ومرونة وسرعة، بدون الحاجة إلى خبرة برمجية.
              </p>
              <p className="text-gray-600">
                يمكنك أيضاً استخدام العشرات من القوالب الجاهزة للأتمتة والرد الآلي
                لمختلف الاستخدامات، لقد قمنا بتصميم المنصة حتى تتمكن من البدء في
                تسليم المهام لموظفي خدمة العملاء لديك وإنشاء الرد الآلي والأتمتة في
                غضون دقائق معدودة فقط.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="aspect-[4/3] bg-gray-50 rounded-lg flex items-center justify-center">
                <GitBranch className="h-24 w-24 text-google-blue opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
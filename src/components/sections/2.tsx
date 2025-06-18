import { motion } from "framer-motion";

export function MobileApps() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex justify-center space-x-4">
              {/* Placeholder for phone mockups */}
              <div className="w-48 h-96 bg-gray-100 rounded-3xl transform rotate-6">
                <img src="/images/phone2.webp" alt="Mobile Apps" className="w-full h-full " />
              </div>
              <div className="w-48 h-96 bg-gray-200 rounded-3xl transform -rotate-6">
                <img src="/images/phone2.webp" alt="Mobile Apps" className="w-full h-full " />
              </div>
              {/* <img src="/images/phone2.web" alt="Mobile Apps" className="w-full h-full object-cover" /> */}
            </div>
          </div>

          <div className="text-right">
            <h2 className="text-3xl font-bold mb-6">
              تطبيق على هواتف الاندرويد و ايفون
              <br />
              تفاعل مع عملائك اينما كنت
            </h2>
            <p className="text-gray-600 mb-8">
              لا تقلق بشأن متابعة وإدارة رسائل عملائك اينما كنت ، نعم لدينا نقدم لك ايضا تطبيق خاص على هواتف الاندرويد و
              ايفون لكي تخدم عملائك بسلاسة وسرعة
            </p>

            <div className="flex justify-end gap-4">
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-600 mb-4">
            هل بقي لك القليل للتفكير ان كرزون شات هو ما تحتاجه ؟ دعنا نقطع الشك باليقين
          </p>
          <p className="text-xl font-semibold mb-8">اجري مكالمة مع احد المختصين لنجيب على جميع استفساراتك</p>
          <a
            href="#"
            className="inline-block bg-google-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            المحادثة المباشرة
          </a>
        </div>
      </div>
    </div>
  );
}

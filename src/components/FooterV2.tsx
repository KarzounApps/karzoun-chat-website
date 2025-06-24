import { CircleCheckBig, Facebook, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";
import React from "react";

function FooterV2() {
  return (
    <div className="bg-[#3A7CED] min-h-[700px] md:px-10 px-4">
      <div className="flex justify-between  mx-auto  py-10">
        <div className="text-white ">
          <h2 className="text-4xl font-bold mb-4">من نحن</h2>
          <p className="md:text-lg text-sm">
            نحن لسنا فقط شركة تقدم خدمات ومنتجات تقنية, نحن مجتمع متكامل لرواد العمل والتطوير في الوطن العربي
          </p>
        </div>
        <div className="relative w-[350px] h-full">
          <img
            src="/images/meta-partner.png"
            className="absolute top-10 md:-rotate-30 -rotate-[40deg] w-80  md:-translate-x-0 -translate-x-6"
            alt="footer-logo"
          />
          <img src="/images/soc.webp" className="absolute top-10  md:w-26 w-16 md:translate-x-16 " alt="footer-logo" />
        </div>
      </div>
      <div className="flex justify-between md:flex-row flex-col items-center mt-10 gap-5 md:px-10 px-4">
        <div>
          <div className="flex items-center gap-2">
            <CircleCheckBig className="w-7 h-7 text-white" />
            <p className="text-white md:text-xl  font-bold">جدراء بالثقة</p>
          </div>
          <p className="text-gray-300 md:text-lg text-[15px]">
            موثوقون لدى الآلاف من التجار في الوطن العربي, ابحث عن تقييماتنا او اسئل عنا.. سوف نكون سعداء لو قمت بالبحث
            عن كرزون في الإنترنت
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <CircleCheckBig className="w-7 h-7 text-white" />
            <p className="text-white text-xl font-bold">فريق مبدع</p>
          </div>
          <p className="text-gray-300 md:text-lg text-[15px]">
            جميع منتجات وخدمات شركتنا بدأت بفكرة رائعة حولناها لمشروع حقيقي, نحن نفكر في المستقبل 7 ساعات في اليوم ونعمل
            ساعة واحدة فقط
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <CircleCheckBig className="w-7 h-7 text-white" />
            <p className="text-white text-xl font-bold">متواضعون وبسطاء</p>
          </div>
          <p className="text-gray-300 md:text-lg text-[15px]">
            نحن ايضاً تجار مثلك تماماً, انت تقوم ببيع منتجاتك ونحن نساعدك على ذلك… الأمر بسيط وواضح ” نحن نفهم تماماً
            احتياجاتك ونوفرها لك”
          </p>
        </div>
      </div>
      <div className="bg-[#74C2EF] p-7 flex md:flex-row flex-col justify-between items-center mt-10">
        <div>
          <h2 className="text-white text-2xl font-bold">هل لديك ما تقوله لنا ؟</h2>
          <p className="text-black text-lg font-[500] mt-5 ">
            ما رأيك بأن تحصل على مكالمة من مسؤول المبيعات ليقوم بالإجابة على اسفساراتك …؟!
          </p>
        </div>
        <div>
          <button className="bg-black p-2 px-3 outline-none rounded-md text-white">اطلب مكالمة الان</button>
        </div>
      </div>
      {/* <div className="flex justify-between gap-2 mt-3 p-3">
        <div>
        </div>
        <div className="">
          <p className="text-white font-bold">معلومات التواصل</p>
        </div>
      </div> */}

      {/* here the last section */}
      <footer className="backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Column 1 - Company Logo and Social (moved to right) */}
            <div className="text-center">
              <img src="/images/karzoun-white.webp" alt="footer-logo" className="mx-auto" />

              <p className="text-white/90 mb-4 text-lg font-semibold">منصة إدارة خدمة عملاء احترافية</p>
              <p className="text-white/70 text-base mb-8 leading-relaxed">تجربة تجمع واحدة لجميع وسائل التواصل</p>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  // className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <Youtube className="w-6 h-6 text-white font-bold" />
                </a>
                <a
                  href="#"
                  // className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-white font-bold" />
                </a>
                <a
                  href="#"
                  // className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <Twitter className="w-6 h-6 text-white font-bold" />
                </a>
                <a
                  href="#"
                  // className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-white font-bold" />
                </a>
              </div>
            </div>

            {/* Column 2 - Contact Info */}
            <div dir="rtl" className="text-right">
              <h3 className="text-xl font-bold md:mb-8 mb-4 text-white">معلومات التواصل</h3>
               <div className=" md:space-y-3 space-y-2">
                <p className="text-white/80 text-lg leading-relaxed">كورون ميديا ماركتينغ إند ديجيتال سيرفيسز</p>
                <p className="text-white/80 text-lg">ش.ذ.م.م</p>
                <div className="flex items-center gap-3 justify-start text-white/80 text-lg ">
                  <Mail className="w-6 h-6 font-bold" />
                  <span>Support@karzoun.chat</span>
                </div>
                <div className="flex items-center gap-3  text-white/80 text-lg">
                  <Phone className="w-6 h-6 font-bold" />
                  <span>+971-50-774-6687</span>
                </div>
              </div>
            </div>

            {/* Column 3 - Services */}
            <div className="text-right">
              <h3 className="text-xl font-bold md:mb-8 mb-4 text-white">الخدمات</h3>
              <ul className=" md:space-y-3 space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    كورون الإشعارات المتقدم
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    كورون شات
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    كورون بيتا
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    كورون ماركتينغ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Important Links */}
            <div className="text-right">
              <h3 className="text-xl font-bold md:mb-8 mb-4 text-white">روابط هامة</h3>
              <ul className=" md:space-y-3 space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    برنامج الشركاء
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    شروط الاستخدام
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    اعمل معنا
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5 - Help & Support */}
            <div className="text-right">
              <h3 className="text-xl font-bold md:mb-8 mb-4  text-white">المساعدة والدعم</h3>
              <ul className=" md:space-y-3 space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    آخر الأخبار
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    تواصل معنا
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    وثائق الـ API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
                    مركز المساعدة (قاعدة المعرفة)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterV2;

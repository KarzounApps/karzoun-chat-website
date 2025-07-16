import { CircleCheckBig, Facebook, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";
import React from "react";
const ColoredDotG = () => {
  return (
    <div className="w-6 h-6  border-3 p-1 border-[#41cda7] rounded-full flex items-center justify-center">
      <div className="w-full h-full bg-[#41cda7] rounded-full"></div>
    </div>
  );
};
const ColoredDotY = () => {
  return (
    <div className="w-6 h-6 p-1 border-3 border-[#0DEED5] rounded-full flex items-center justify-center">
      <div className="w-full h-full bg-[#0DEED5] rounded-full"></div>
    </div>
  );
};
const ColoredDotR = () => {
  return (
    <div className="w-6 h-6 p-1 border-3 border-[#E07772] rounded-full flex items-center justify-center">
      <div className="w-full h-full bg-[#E07772] rounded-full"></div>
    </div>
  );
};
function FooterV2() {
  return (
    <div className="bg-[#0393E3] min-h-[700px] md:px-10 px-4 relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-top bg-[length:160%]"
        style={{ backgroundImage: "url('/web-dev-24-1.png')" }}
      />
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex justify-between  mx-auto  py-16">
          <div className="text-white ">
            {/* <h2 className="">من نحن</h2> */}
            <p className="text-2xl font-bold mb-4 md:w-2/3 w-full">
              لسنا مجرّد شركة تقنية؛ نحن مجتمع روّاد عربي يجمع العقول المبدعة ليطوّر حلولاً ترتقي بتجربة عملائك وتنمّي
              أعمالك.{" "}
            </p>
          </div>
          <div className="relative w-[350px] h-full">
            <img
              src="/images/meta-partner.png"
              className="absolute top-10 md:-rotate-60 -rotate-[40deg] w-72  md:-translate-x-0 -translate-x-6"
              alt="footer-logo"
            />
            <img
              src="/images/soc.webp"
              className="absolute top-10  md:w-24  w-16 md:translate-x-16 "
              alt="footer-logo"
            />
          </div>
        </div>
        <div className="flex justify-between md:flex-row flex-col items-center mt-10 gap-5 px-4">
          <div className="md:w-1/4 w-full">
            <div className="flex items-center gap-2">
              {/* <CircleCheckBig className="w-7 h-7 text-white" /> */}
              <ColoredDotG />
              <p className="text-white md:text-lg  font-bold">جدراء بالثقة</p>
            </div>
            <p className="text-gray-300 md:text-base text-[15px]">
              أكثر من 25000 تاجر ومؤسسة عربية يعتمدون علينا يوميًّا لإدارة تواصلهم وخدمة عملائهم بكفاءة.
            </p>
          </div>
          <div className="md:w-1/4 w-full">
            <div className="flex items-center gap-2">
              <ColoredDotY />
              <p className="text-white text-lg font-bold">مبتكرون</p>
            </div>
            <p className="text-gray-300 md:text-base text-[15px]">
              نحوِّل الأفكار الجريئة إلى منتجات حقيقية بفرق عربية شغوفة بالتقنية؛ نفكّر للمستقبل وننفّذ اليوم.
            </p>
          </div>
          <div className="md:w-1/4 w-full">
            <div className="flex items-center gap-2">
              <ColoredDotR />
              <p className="text-white text-lg font-bold">قريبون منك</p>
            </div>
            <p className="text-gray-300 md:text-base text-[15px]">
              نحن روّاد أعمال قبل أن نكون مطوّرين؛ نفهم تحدّياتك ونبني الحلول التي تحتاجها بلغتك وببساطة تناسب فريقك.
            </p>
          </div>
        </div>
        <div className="bg-[#74C2EF] p-7 flex md:flex-row flex-col justify-between items-center mt-10">
          <div>
            <h2 className="text-white text-2xl font-bold">جاهز تبدأ رحلتك معنا؟</h2>
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
          <div className="container mx-auto  py-16">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Column 1 - Company Logo and Social (moved to right) */}
              <div className="text-center">
                <img src="/images/karzoun-white.webp" alt="footer-logo" className="mx-auto w-24 mb-4" />
                <p className="text-white/70  text-xs font-semibold">منصة إدارة خدمة عملاء احترافية</p>
                <p className="text-white/70 text-xs mb-8 leading-relaxed">تجربة تجمع واحدة لجميع وسائل التواصل</p>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.youtube.com/channel/UCtVqhxVYaTe5HaOFpBhOpTg"
                    // className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                  >
                    <Youtube className="w-6 h-6 text-white font-bold" />
                  </a>
                  <a
                    href="https://www.instagram.com/karzoun_marketing/"
                    // className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-white font-bold" />
                  </a>
                  <a
                    href="https://twitter.com/Karzoun_Tech"
                    // className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-white font-bold" />
                  </a>
                  <a
                    href="https://www.facebook.com/karzoun.tech/"
                    // className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white font-bold" />
                  </a>
                </div>
              </div>

              {/* Column 2 - Contact Info */}
              <div dir="rtl" className="text-right">
                <h3 className="text-base font-bold md:mb-8 mb-4 text-white">معلومات التواصل</h3>
                <div className=" md:space-y-3 space-y-2">
                  <p className="text-white/80 text-sm leading-relaxed">كورون ميديا ماركتينغ إند ديجيتال سيرفيسز</p>
                  <p className="text-white/80 text-sm">ش.ذ.م.م</p>
                  <div className="flex items-center gap-3 justify-start text-white/80 text-sm ">
                    <Mail className="w-6 h-6 font-bold" />
                    <span>Support@karzoun.chat</span>
                  </div>
                  <div className="flex items-center gap-3  text-white/80 text-sm">
                    <Phone className="w-6 h-6 font-bold" />
                    <span>+971-50-774-6687</span>
                  </div>
                </div>
              </div>

              {/* Column 3 - Services */}
              <div className="text-right">
                <h3 className="text-base font-bold md:mb-8 mb-4 text-white">الخدمات</h3>
                <ul className=" md:space-y-2 space-y-2">
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      كورون الإشعارات المتقدم
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      كورون شات
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      كورون بيتا
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      كورون ماركتينغ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4 - Important Links */}
              <div className="text-right">
                <h3 className="text-base font-bold md:mb-8 mb-4 text-white">روابط هامة</h3>
                <ul className=" md:space-y-2 space-y-2">
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      برنامج الشركاء
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      شروط الاستخدام
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      سياسة الخصوصية
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      اعمل معنا
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 5 - Help & Support */}
              <div className="text-right">
                <h3 className="text-base font-bold md:mb-8 mb-4  text-white">المساعدة والدعم</h3>
                <ul className=" md:space-y-2 space-y-2">
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      من نحن
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      آخر الأخبار
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      تواصل معنا
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      وثائق الـ API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                      مركز المساعدة (قاعدة المعرفة)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default FooterV2;

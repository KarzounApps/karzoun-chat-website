import { CircleCheckBig } from "lucide-react";
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
      <div className="flex justify-between gap-2"></div>
    </div>
  );
}

export default FooterV2;

import { motion } from "framer-motion";
import { AutomationFlowDemo } from "../AutomationFlowDemo";
import { Bot, MessageSquare, Zap, ArrowRight, Send, Instagram, Mail, Smartphone, Facebook } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path
      stroke="currentColor"
      strokeWidth="12"
      d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"
    />
  </svg>
);
export function Hero() {
  const [activeTab, setActiveTab] = useState("whatsapp");

  const platforms = [
    { id: "whatsapp", name: "واتساب", icon: Send, color: "hover:bg-green-500" },
    { id: "instagram", name: "انستغرام", icon: Instagram, color: "hover:bg-pink-500" },
    { id: "facebook", name: "فيسبوك", icon: Facebook, color: "hover:bg-blue-600" },
    { id: "telegram", name: "تيليغرام", icon: TelegramIcon, color: "hover:bg-blue-500" },
    { id: "email", name: "البريد الإلكتروني", icon: Mail, color: "hover:bg-red-500" },
  ];
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-5"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            أتمتة تواصلك مع العملاء
            <span className="text-google-blue"> بكل سهولة</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            حوّل علاقاتك مع العملاء من خلال أتمتة الرسائل الذكية. قم ببناء تدفقات العمل المرئية، وتواصل مع العملاء،
            ونمّي أعمالك مع منصتنا القوية لإدارة علاقات العملاء.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActiveTab(platform.id)}
                className={`flex items-center gap-2 md:px-4 px-2 py-2 rounded-lg transition-colors ${
                  // activeTab === platform.id
                  //   ? `${platform.color} text-white`
                  // :
                  `bg-gray-100 text-gray-500 hover:text-white ${platform.color}`
                }`}
              >
                <platform.icon className="h-5 w-5" />
                <span>{platform.name}</span>
              </button>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="rounded-md bg-google-blue px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              ابدأ مجاناً
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#" className="text-base font-semibold leading-6 text-gray-900">
              شاهد العرض التوضيحي <span aria-hidden="true">←</span>
            </motion.a>
          </div>
        </motion.div>
        <div className="text-center w-full mt-7">
          <Image src="/meta-business-partner.png" alt="Hero" width={150} height={150} className="mx-auto" />
        </div>
        {/* Automation Flow Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <AutomationFlowDemo />
        </motion.div>
      </div>
    </div>
  );
}

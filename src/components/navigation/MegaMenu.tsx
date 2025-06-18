"use client";
import React, { useState } from "react";
import {
  Box,
  BarChart,
  Boxes,
  Brain,
  LayoutGrid,
  MessageSquare,
  Smartphone,
  Zap,
  ChevronLeft,
  BookOpen,
  FileText,
  Users2,
  Shield,
  Github,
  Newspaper,
  History,
  Globe,
  Bot,
  Send,
  Database,
  Tag,
  Clock,
  Calendar,
  ClipboardList,
  ShoppingCart,
  Building2,
  Layers,
  Workflow,
  Sparkles,
  Keyboard,
  FileText as FileText2,
  Repeat,
  MousePointer,
  BarChart2,
  UserCheck,
  Gauge,
  Lightbulb,
  Puzzle,
  Megaphone,
  Briefcase,
  Facebook,
  Instagram,
  Twitter,
  Code,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuCategories = {
  "المميزات الرئيسية": {
    icon: Box,
    description: "تعرف على الميزات الأساسية لكرزون شات",
  },
  الإدارة: {
    icon: LayoutGrid,
    description: "إدارة سير العمل الخاص بك بسهولة",
  },
  التحليل: {
    icon: BarChart,
    description: "تحليل ومراقبة البيانات الخاصة بك",
  },
  الإنتاجية: {
    icon: Zap,
    description: "كن منتجًا للغاية",
  },
  التكامل: {
    icon: Puzzle,
    description: "الربط والتكامل مع منصاتك المفضلة",
  },
};

const resourcesCategories = {
  المصادر: {
    icon: BookOpen,
    description: "اكتشف مواردنا التعليمية",
  },
  المجتمع: {
    icon: Users2,
    description: "تواصل مع مجتمع كرزون",
  },
  التقنية: {
    icon: Globe,
    description: "موارد للمطورين والتكامل",
  },
};

const featureItems = {
  "المميزات الرئيسية": [
    {
      icon: MessageSquare,
      title: "محادثة مباشرة للموقع",
      description: "محادثة بسيطة وأنيقة لموقعك الإلكتروني",
      link: "#",
    },
    {
      icon: Boxes,
      title: "صندوق وارد متعدد القنوات",
      description: "اربط أي قناة وتواصل مع عملائك من مكان واحد",
      link: "#",
    },
    {
      icon: Brain,
      title: "الذكاء الإصطناعي",
      description: "قم بدعم عملك بالذكاء الاصطناعي لتحسين تجربة العملاء وزيادة الإنتاجية",
      link: "#",
    },
    {
      icon: Users2,
      title: "تعاون الفريق",
      description: "تعاون وإدارة المحادثات باستخدام صندوق وارد مشترك",
      link: "#",
    },
    {
      icon: Bot,
      title: "الرد الآلي (شات بوت)",
      description: "إنشاء روبوتات محادثة ذكية للرد على استفسارات العملاء تلقائياً",
      link: "#",
    },
    {
      icon: Workflow,
      title: "الأتمتة والتخصيص",
      description: "أتمتة المهام المتكررة وتخصيص سير العمل حسب احتياجاتك",
      link: "#",
    },
    {
      icon: Smartphone,
      title: "تطبيق كرزون شات للجوال",
      description: "إدارة محادثات العملاء من أي مكان باستخدام تطبيقات الجوال",
      link: "#",
    },
    {
      icon: BookOpen,
      title: "قاعدة المعرفة",
      description: "إنشاء قاعدة معرفية شاملة لمساعدة العملاء والفريق",
      link: "#",
    },
    {
      icon: ClipboardList,
      title: "ادارة المهام والتذاكر",
      description: "تنظيم وتتبع المهام والتذاكر لضمان حل مشاكل العملاء بكفاءة",
      link: "#",
    },
    {
      icon: ShoppingCart,
      title: "ادارة عمليات البيع والمبيعات",
      description:
        "ميزة مخصصة للشركات الخدمية، التجارية أو شركات المنتجات الرقمية SAAS التي تتطلب متابعة خاصة لكل عميل على حدى",
      link: "#",
    },
    {
      icon: Building2,
      title: "تنظيم الفريق وهيكل الشركة",
      description: "إنشاء هيكل تنظيمي للفريق وتحديد الأدوار والصلاحيات",
      link: "#",
    },
    {
      icon: Clock,
      title: "متابعة الدوام والحضور",
      description: "تتبع ساعات عمل الفريق وإدارة الحضور والانصراف",
      link: "#",
    },
    {
      icon: Database,
      title: "ادارة بيانات العملاء",
      description: "تنظيم وتحليل بيانات العملاء لتحسين استراتيجيات التسويق والمبيعات",
      link: "#",
    },
  ],
  الإدارة: [
    {
      icon: Bot,
      title: "روبوتات المحادثة",
      description: "دمج سهل مع منصات المحادثة الآلية لتقليل عبء العمل",
      link: "#",
    },
    {
      icon: Workflow,
      title: "التشغيل الآلي",
      description: "تجنب المهام المتكررة عن طريق أتمتة سير العمل",
      link: "#",
    },
    {
      icon: Tag,
      title: "الوسوم",
      description: "تصنيف المحادثات والعملاء باستخدام نظام وسوم مرن وقابل للتخصيص",
      link: "#",
    },
    {
      icon: Users2,
      title: "الفرق والأقسام",
      description: "تنظيم الفريق في مجموعات وأقسام لتحسين التعاون وتوزيع العمل",
      link: "#",
    },
    {
      icon: FileText,
      title: "ملاحظات العملاء",
      description: "إضافة ملاحظات مهمة لملفات العملاء لتحسين خدمة العملاء",
      link: "#",
    },
    {
      icon: MessageSquare,
      title: "ملاحظات المحادثة",
      description: "إضافة ملاحظات داخلية للمحادثات للتواصل مع أعضاء الفريق",
      link: "#",
    },
    {
      icon: Layers,
      title: "قوائم العملاء المتقدمة",
      description: "إنشاء وإدارة قوائم عملاء مخصصة بناءً على معايير متعددة",
      link: "#",
    },
    {
      icon: History,
      title: "سجل النشاطات",
      description: "تتبع جميع النشاطات والتغييرات في النظام للمراجعة والتدقيق",
      link: "#",
    },
    {
      icon: Calendar,
      title: "ادارة ساعات العمل",
      description: "تحديد ساعات العمل وجداول المناوبة للفريق",
      link: "#",
    },
    {
      icon: Shield,
      title: "سجلات التدقيق",
      description: "مراقبة وتتبع جميع الإجراءات في النظام لأغراض الأمان والامتثال",
      link: "#",
    },
  ],
  التحليل: [
    {
      icon: Gauge,
      title: "التحليلات الحية",
      description: "احصل على تحليلات حية حول وضع خدمة العملاء والضغط الحالي على الخدمة",
      link: "#",
    },
    {
      icon: BarChart2,
      title: "تحليلات متقدمة",
      description: "رؤى تفصيلية عن أداء خدمة العملاء",
      link: "#",
    },
    {
      icon: MessageSquare,
      title: "تقارير المحادثات",
      description: "تحليل شامل لحجم المحادثات وأوقات الاستجابة ومعدلات الرضا",
      link: "#",
    },
    {
      icon: UserCheck,
      title: "تقارير الموظفين",
      description: "قياس أداء الموظفين وإنتاجيتهم ومعدلات الاستجابة",
      link: "#",
    },
    {
      icon: Megaphone,
      title: "تقارير الحملات التسويقية",
      description: "تتبع أداء الحملات التسويقية ومعدلات التحويل",
      link: "#",
    },
    {
      icon: Tag,
      title: "تقارير الوسوم",
      description: "تحليل استخدام الوسوم وتوزيع المحادثات حسب التصنيفات",
      link: "#",
    },
    {
      icon: ClipboardList,
      title: "تذاكر الدعم والمهام",
      description: "متابعة حالة تذاكر الدعم وأوقات الحل ومستويات الأولوية",
      link: "#",
    },
    {
      icon: Lightbulb,
      title: "تقارير رضا العملاء",
      description: "قياس مستويات رضا العملاء وتحديد مجالات التحسين",
      comingsoon: true,
      link: "#",
    },
  ],
  الإنتاجية: [
    {
      icon: Keyboard,
      title: "اختصارات لوحة المفاتيح",
      description: "استخدام اختصارات لوحة المفاتيح لتسريع العمل وزيادة الإنتاجية",
      comingsoon: true,
      link: "#",
    },
    {
      icon: FileText2,
      title: "قوالب الردود السريعة",
      description: "إنشاء قوالب ردود جاهزة للاستخدام المتكرر وتوفير الوقت",
      link: "#",
    },
    {
      icon: Sparkles,
      title: "ماكروس",
      description: "قم بتخصيص تدفق مصغر لتنفيذ إجراءات سريعة داخل المحادثات مباشرة",
      link: "#",
    },
    {
      icon: Repeat,
      title: "تنفيذ إجراءات بالجملة",
      description: "قم بتغيير حالة أو حذف أو إضافة العملاء، المحادثات والكثير عبر تحديد الكل أو البعض",
      link: "#",
    },
    {
      icon: MousePointer,
      title: "أداة الوصول السريع",
      description: "تنقل بين الصفحات بخفة وسلاسة",
      link: "#",
    },
  ],
  التكامل: [
    {
      icon: Send,
      title: "واتساب",
      description: "ربط حساب واتساب الأعمال مع منصة كرزون لإدارة المحادثات",
      link: "#",
    },
    {
      icon: Instagram,
      title: "انستغرام",
      description: "دمج رسائل انستغرام مع صندوق الوارد الموحد",
      link: "#",
    },
    {
      icon: Send,
      title: "تيليغرام",
      description: "إدارة محادثات تيليغرام من خلال منصة كرزون",
      link: "#",
    },
    {
      icon: Facebook,
      title: "فيسبوك",
      description: "ربط صفحات فيسبوك ومسنجر مع نظام المراسلة الموحد",
      link: "#",
    },
    {
      icon: Briefcase,
      title: "تيك توك",
      comingsoon: true,
      description: "قريباً - إدارة رسائل تيك توك من خلال منصة كرزون",
      link: "#",
    },
    {
      icon: Twitter,
      title: "إكس (تويتر)",
      comingsoon: true,
      description: "قريباً - متابعة وإدارة الرسائل المباشرة على منصة إكس",
      link: "#",
    },
    {
      icon: ShoppingCart,
      title: "سلة",
      description: "تكامل مع منصة سلة للتجارة الإلكترونية لمتابعة الطلبات",
      link: "#",
    },
    {
      icon: ShoppingCart,
      title: "زد",
      description: "ربط متجرك على منصة زد مع نظام خدمة العملاء",
      link: "#",
    },
    {
      icon: FileText,
      title: "Google Sheets",
      comingsoon: true,
      description: "قريباً - استيراد وتصدير البيانات من وإلى جداول بيانات جوجل",
      link: "#",
    },
    {
      icon: Code,
      title: "واجهة برمجة التطبيقات API",
      description: "تكامل مخصص مع أنظمتك الحالية باستخدام API مرن وقوي",
      link: "#",
    },
  ],
};

const resourceItems = {
  المصادر: [
    {
      icon: Newspaper,
      title: "تكاليف الواتساب الرسمي",
      description: "حاسبة التكاليف وقائمة الأسعار",
      link: "/wabaCostCalculator",
    },
    {
      icon: Shield,
      title: "توكن الذكاء الإسطناعي",
      description: "تكاليف استخدام نماذج كرزون المغلقة للذكاء الإسطناعي",
      link: "/aiAssistantTokens",
    },
    {
      icon: Newspaper,
      title: "المدونة",
      description: "اكتشف أحدث الأخبار والتحديثات",
      link: "/blog",
    },
    {
      icon: History,
      title: "آخر الأخبار",
      description: "تعرف على آخر التحديثات والميزات الجديدة",
      link: "/changelog",
    },
  ],
  المجتمع: [
    {
      icon: Users2,
      title: "مجتمع كرزون",
      description: "انضم إلى مناقشات المجتمع وشارك خبراتك",
      link: "/community",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "استكشف مشاريعنا مفتوحة المصدر",
      link: "https://github.com/karzoun",
    },
  ],
  التقنية: [
    {
      icon: Shield,
      title: "الأمان",
      description: "تعرف على ممارسات الأمان لدينا",
      link: "/security",
    },
    {
      icon: Globe,
      title: "حالة النظام",
      description: "تحقق من حالة خدماتنا في الوقت الفعلي",
      link: "/status",
    },
  ],
};

export function MegaMenu() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [activeCategory, setActiveCategory] = useState("المميزات الرئيسية");
  const [activeResourceCategory, setActiveResourceCategory] = useState("المصادر");
  const pathname = usePathname();
  const location = {
    pathname,
  };
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img src="/icons/logo.webp" alt="كرزون" className="h-8 w-auto" />
            </Link>

            <div className="hidden md:block mr-10">
              <div className="flex space-x-4 space-x-reverse">
                <div
                  className="relative"
                  onMouseEnter={() => setShowFeatures(true)}
                  onMouseLeave={() => setShowFeatures(false)}
                >
                  <button className="px-3 py-2 text-gray-700 hover:text-google-blue">المميزات</button>

                  <AnimatePresence>
                    {showFeatures && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 w-screen max-w-screen-lg bg-white shadow-lg rounded-lg mt-2 z-50"
                        style={{
                          maxWidth: "calc(100vw - 20rem)",
                          right: "0",
                          transform: "translateX(0)",
                        }}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-64 bg-gray-50 p-4 rounded-t-lg md:rounded-r-lg md:rounded-t-none">
                            {Object.entries(menuCategories).map(([category, { icon: Icon, description }]) => (
                              <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`w-full text-right p-4 rounded-lg mb-2 transition-colors ${
                                  activeCategory === category
                                    ? "bg-white shadow-sm text-google-blue"
                                    : "hover:bg-white/50 text-gray-700"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <Icon
                                      className={`h-5 w-5 ${
                                        activeCategory === category ? "text-google-blue" : "text-gray-500"
                                      }`}
                                    />
                                    <span className="font-light">{category}</span>
                                  </div>
                                  <ChevronLeft
                                    className={`h-5 w-5 ${
                                      activeCategory === category ? "text-google-blue" : "text-gray-400"
                                    }`}
                                  />
                                </div>
                                <p className="text-sm text-gray-500 mt-1 pr-8">{description}</p>
                              </button>
                            ))}
                          </div>

                          <div className="flex-1 p-6 ">
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 ">
                              {featureItems[activeCategory as keyof typeof featureItems] &&
                                featureItems[activeCategory as keyof typeof featureItems].map((item, index) => (
                                  <a
                                    key={index}
                                    href={item.link}
                                    className="flex items-start space-x-4 space-x-reverse p-4 rounded-lg hover:bg-gray-50 transition-colors gap-1"
                                  >
                                    <div className="flex-shrink-0">
                                      <item.icon className="h-6 w-6 text-google-blue" />
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                                        {(item as { comingsoon: boolean }).comingsoon && (
                                          <span className="text-xs bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full">
                                            قريباً
                                          </span>
                                        )}
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </a>
                                ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/pricing"
                  className={`px-3 py-2 ${
                    location.pathname === "/pricing" ? "text-google-blue" : "text-gray-700 hover:text-google-blue"
                  }`}
                >
                  التسعير
                </Link>
                <Link
                  href="/partner"
                  className={`px-3 py-2 ${
                    location.pathname === "/partner" ? "text-google-blue" : "text-gray-700 hover:text-google-blue"
                  }`}
                >
                  كن شريكاً
                </Link>
                <Link
                  href="/help"
                  className={`px-3 py-2 ${
                    location.pathname === "/help" ? "text-google-blue" : "text-gray-700 hover:text-google-blue"
                  }`}
                >
                  مركز المساعدة
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => setShowResources(true)}
                  onMouseLeave={() => setShowResources(false)}
                >
                  <button className="px-3 py-2 text-gray-700 hover:text-google-blue">الموارد</button>

                  <AnimatePresence>
                    {showResources && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 w-screen max-w-screen-lg bg-white shadow-lg rounded-lg mt-2 z-50"
                        style={{
                          maxWidth: "calc(100vw - 45rem)",
                          right: "0",
                          transform: "translateX(0)",
                        }}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-64 bg-gray-50 p-4 rounded-t-lg md:rounded-r-lg md:rounded-t-none">
                            {Object.entries(resourcesCategories).map(([category, { icon: Icon, description }]) => (
                              <button
                                key={category}
                                onClick={() => setActiveResourceCategory(category)}
                                className={`w-full text-right p-4 rounded-lg mb-2 transition-colors ${
                                  activeResourceCategory === category
                                    ? "bg-white shadow-sm text-google-blue"
                                    : "hover:bg-white/50 text-gray-700"
                                }`}
                              >
                                <div className="flex items-center justify-between ">
                                  <div className="flex items-center gap-3">
                                    <Icon
                                      className={`h-5 w-5 ${
                                        activeResourceCategory === category ? "text-google-blue" : "text-gray-500"
                                      }`}
                                    />
                                    <span className="font-medium">{category}</span>
                                  </div>
                                  <ChevronLeft
                                    className={`h-5 w-5 ${
                                      activeResourceCategory === category ? "text-google-blue" : "text-gray-400"
                                    }`}
                                  />
                                </div>
                                <p className="text-sm text-gray-500 mt-1 pr-8">{description}</p>
                              </button>
                            ))}
                          </div>

                          <div className="flex-1 p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {resourceItems[activeResourceCategory as keyof typeof resourceItems] &&
                                resourceItems[activeResourceCategory as keyof typeof resourceItems].map(
                                  (item, index) => (
                                    <a
                                      key={index}
                                      href={item.link}
                                      className="flex items-start space-x-4 space-x-reverse p-4 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                      <div className="flex-shrink-0">
                                        <item.icon className="h-6 w-6 text-google-blue" />
                                      </div>
                                      <div>
                                        <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                      </div>
                                    </a>
                                  )
                                )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-10 space-x-reverse">
            <a href="#" className="text-gray-700 hover:text-google-blue mx-4">
              تسجيل الدخول
            </a>
            <a href="#" className="bg-google-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              إنشاء حساب
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

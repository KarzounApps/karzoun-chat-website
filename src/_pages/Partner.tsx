"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Rocket,
  Users,
  Globe2,
  Shield,
  Zap,
  ArrowRight,
  // BarChart,
  Settings,
  // Palette,
  Code2,
  Cloud,
  HeartHandshake,
  // Boxes,
  UserCheck,
  Megaphone,
  BrainCircuit,
  Target,
  Briefcase,
  BadgeCheck,
  TrendingUp,
  Layers,
  Store,
  Coins,
} from "lucide-react";
import { WhitelabelDemo } from "@/components/WhitelabelDemo";

const partnerTypes = [
  {
    icon: Briefcase,
    title: "وكالات التسويق",
    description: "قدم حلول CRM متكاملة لعملائك وأضف مصدر دخل جديد",
    benefits: ["دمج سلس مع خدمات وكالتك", "عمولات مجزية على المبيعات", "دعم تسويقي متخصص", "تدريب فريق المبيعات"],
  },
  {
    icon: Megaphone,
    title: "المؤثرون والمسوقون",
    description: "شارك خبرتك وانمِ دخلك مع برنامج التسويق بالعمولة",
    benefits: ["عمولات تنافسية", "مواد تسويقية جاهزة", "روابط تتبع خاصة", "لوحة تحكم تحليلية"],
  },
  {
    icon: Store,
    title: "موزعون وشركاء تجاريون",
    description: "وسّع محفظة منتجاتك مع حلول CRM المتطورة",
    benefits: ["هوامش ربح عالية", "دعم ما قبل وبعد البيع", "تدريب فني متخصص", "حماية المناطق الجغرافية"],
  },
  {
    icon: BrainCircuit,
    title: "مطورو التقنية",
    description: "ابنِ حلولاً مخصصة باستخدام منصتنا المرنة",
    benefits: ["API متطور", "وثائق تقنية شاملة", "بيئة تطوير للاختبار", "دعم فني متخصص"],
  },
];

const commissionProgram = {
  title: "برنامج العمولات",
  description: "برنامج مرن متاح للجميع، ابدأ فوراً وانمُ دخلك",
  icon: Coins,
  tiers: [
    {
      name: "المبتدئ",
      commission: "15%",
      minRevenue: "$0",
      features: ["نظام إحالة أساسي", "مواد تسويقية جاهزة", "دعم عبر البريد", "تدريب أساسي"],
    },
    {
      name: "الفضي",
      commission: "20%",
      minRevenue: "$1,000",
      features: ["نظام إحالة متقدم", "مواد تسويقية مخصصة", "دعم عبر الدردشة", "تدريب متقدم", "دعوات لفعاليات"],
    },
    {
      name: "الذهبي",
      commission: "25%",
      minRevenue: "$5,000",
      features: ["عمولات متميزة", "مواد تسويقية حصرية", "مدير حساب مشترك", "تدريب احترافي", "أولوية الدعم"],
    },
    {
      name: "البلاتيني",
      commission: "30%",
      minRevenue: "$10,000",
      features: ["أعلى نسبة عمولة", "حملات تسويقية مشتركة", "مدير حساب مخصص", "تدريب VIP", "دعم 24/7"],
    },
  ],
};

const whitelabelProgram = {
  title: "برنامج العلامة البيضاء",
  description: "حل متكامل تحت علامتك التجارية، متاح للشركاء المؤهلين",
  icon: Layers,
  requirements: [
    "خبرة لا تقل عن 3 سنوات في السوق",
    "فريق دعم فني داخلي",
    "القدرة على تحقيق الحد الأدنى للمبيعات السنوية",
    "خطة عمل واضحة للتوسع",
  ],
  tiers: [
    {
      name: "الأساسي",
      setupFee: "$5,000",
      revenue: "$50,000",
      features: ["تخصيص الواجهة الأساسي", "دعم فني 12/5", "تدريب الفريق", "API أساسي"],
    },
    {
      name: "المتقدم",
      setupFee: "$10,000",
      revenue: "$100,000",
      features: ["تخصيص كامل للواجهة", "دعم فني 24/7", "تدريب متقدم للفريق", "API متقدم", "تقارير مخصصة"],
    },
    {
      name: "المؤسسات",
      setupFee: "Custom",
      revenue: "$250,000+",
      features: ["تخصيص شامل للمنصة", "دعم VIP", "تدريب شامل", "API غير محدود", "تطويرات مخصصة", "خادم مخصص"],
    },
  ],
};

const benefits = [
  {
    icon: Building2,
    title: "هوية تجارية خاصة",
    description: "قم بتخصيص المنصة بعلامتك التجارية وألوانك وشعارك",
  },
  {
    icon: Cloud,
    title: "حل سحابي متكامل",
    description: "بنية تحتية موثوقة وقابلة للتطوير مع توافر عالي",
  },
  {
    icon: Shield,
    title: "أمان من الدرجة الأولى",
    description: "حماية البيانات وفقاً لأعلى المعايير العالمية",
  },
  {
    icon: Code2,
    title: "API مرن",
    description: "واجهة برمجة تطبيقات قوية لتكامل سلس",
  },
  {
    icon: Settings,
    title: "تخصيص متقدم",
    description: "خيارات تخصيص شاملة لتلبية احتياجات عملائك",
  },
  {
    icon: HeartHandshake,
    title: "دعم الشركاء",
    description: "فريق مخصص لدعم نجاح شركائنا",
  },
];

// const features = [
//   {
//     icon: Palette,
//     title: "تخصيص كامل للواجهة",
//     list: ["تخصيص الألوان والشعار", "تخصيص القوالب والرسائل", "تخصيص لوحة التحكم", "نطاق فرعي مخصص"],
//   },
//   {
//     icon: BarChart,
//     title: "تقارير وتحليلات",
//     list: ["لوحة تحكم تحليلية", "تقارير أداء العملاء", "تتبع الإيرادات", "تحليلات متقدمة"],
//   },
//   {
//     icon: Boxes,
//     title: "إدارة متعددة المستأجرين",
//     list: ["إدارة العملاء المتعددين", "فصل البيانات", "إدارة الصلاحيات", "مراقبة الاستخدام"],
//   },
// ];

export function Partner() {
  const [activeProgram, setActiveProgram] = useState<"commission" | "whitelabel">("commission");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-10"></div>
          <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              انضم إلى شبكة شركاء كرزون
              <span className="block text-google-blue mt-2">وانمُ معنا</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              اختر نموذج الشراكة المناسب لأعمالك. سواء كنت تبحث عن برنامج العمولات أو حل العلامة البيضاء المتكامل، نحن
              هنا لدعم نجاحك.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-google-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                ابدأ كشريك
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-white/20 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                تحدث مع فريق الشراكات
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {[
              { icon: Globe2, value: "50+", label: "دولة" },
              { icon: Users, value: "1000+", label: "شريك نشط" },
              { icon: Rocket, value: "95%", label: "معدل نمو سنوي" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <stat.icon className="h-8 w-8 mb-4 text-google-blue" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Types Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">برنامج شراكة لكل نوع من الأعمال</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              سواء كنت وكالة، مؤثر، موزع أو مطور، لدينا البرنامج المناسب لك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <type.icon className="h-8 w-8 text-google-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <BadgeCheck className="h-4 w-4 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Programs Toggle */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">اختر برنامج الشراكة المناسب</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">برنامجان مصممان لتلبية احتياجات مختلف الشركاء</p>

            <div className="inline-flex bg-white rounded-xl p-1 shadow-lg">
              <button
                onClick={() => setActiveProgram("commission")}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeProgram === "commission" ? "bg-google-blue text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                برنامج العمولات
              </button>
              <button
                onClick={() => setActiveProgram("whitelabel")}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeProgram === "whitelabel" ? "bg-google-blue text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                العلامة البيضاء
              </button>
            </div>
          </div>

          {/* Commission Program */}
          {activeProgram === "commission" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commissionProgram.tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-google-blue">{tier.commission}</span>
                    <span className="text-gray-500">عمولة</span>
                  </div>
                  <p className="text-gray-600 mb-4">الحد الأدنى للإيرادات: {tier.minRevenue}</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-google-blue" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {/* White Label Program */}
          {activeProgram === "whitelabel" && (
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold mb-4">متطلبات التأهل</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whitelabelProgram.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-google-blue" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whitelabelProgram.tiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                  >
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-xl font-bold text-google-blue">{tier.setupFee}</span>
                      <span className="text-gray-500">رسوم التأسيس</span>
                    </div>
                    <p className="text-gray-600 mb-6">الحد الأدنى للإيرادات السنوية: {tier.revenue}</p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Zap className="h-5 w-5 text-google-blue" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">مميزات الشراكة مع كرزون</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استفد من خبرتنا وتقنياتنا المتطورة لتقديم أفضل الحلول لعملائك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <benefit.icon className="h-8 w-8 text-google-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">قصص نجاح شركائنا</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">انضم إلى مئات الشركاء الناجحين في شبكتنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                value: "300%",
                label: "متوسط نمو إيرادات الشركاء",
              },
              {
                icon: Users,
                value: "10,000+",
                label: "عميل نشط عبر شبكة الشركاء",
              },
              {
                icon: Target,
                value: "95%",
                label: "معدل رضا العملاء",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
              >
                <stat.icon className="h-8 w-8 text-google-blue mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* White-label Demo Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">جرب تخصيص منصتك</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              شاهد كيف يمكنك تخصيص المنصة بهويتك التجارية في دقائق معدودة
            </p>
          </div>

          <WhitelabelDemo />
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز للانضمام إلى شبكة شركائنا؟</h2>
          <p className="text-xl text-gray-600 mb-8">ابدأ رحلتك معنا اليوم وكن جزءاً من مستقبل خدمة العملاء</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-google-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
              قدم طلبك الآن
            </button>
            <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              تحميل دليل الشركاء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

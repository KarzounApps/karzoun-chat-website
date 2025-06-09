"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Users, Building2, Building, Shield, Clock, Zap, MessageSquare, Bot, Users2, Crown } from "lucide-react";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { ComparisonTable } from "../components/ComparisonTable";

const plans = [
  {
    name: "الأساسية",
    icon: Users,
    price: "99",
    yearlyPrice: "948",
    description: "مثالية للشركات الناشئة والأعمال الصغيرة",
    features: [
      { title: "محادثة مباشرة للموقع", included: true },
      { title: "صندوق وارد متعدد القنوات", included: true },
      { title: "تعاون الفريق", value: "3 أعضاء", included: true },
      { title: "روبوتات المحادثة الأساسية", included: true },
      { title: "تحليلات أساسية", included: true },
      { title: "دعم عبر البريد الإلكتروني", included: true },
      { title: "روبوتات ذكاء اصطناعي", included: false },
      { title: "تكاملات متقدمة", included: false },
      { title: "API مخصص", included: false },
    ],
    stats: [
      { icon: MessageSquare, value: "1,000", label: "محادثة شهرياً" },
      { icon: Users2, value: "3", label: "أعضاء الفريق" },
      { icon: Bot, value: "2", label: "روبوتات محادثة" },
    ],
    color: "blue",
  },
  {
    name: "الاحترافية",
    icon: Building2,
    price: "299",
    yearlyPrice: "2,868",
    description: "للشركات المتوسطة التي تتطلع للنمو",
    features: [
      { title: "محادثة مباشرة للموقع", included: true },
      { title: "صندوق وارد متعدد القنوات", included: true },
      { title: "تعاون الفريق", value: "10 أعضاء", included: true },
      { title: "روبوتات المحادثة الأساسية", included: true },
      { title: "تحليلات متقدمة", included: true },
      { title: "دعم على مدار الساعة", included: true },
      { title: "روبوتات ذكاء اصطناعي", included: true },
      { title: "تكاملات متقدمة", included: true },
      { title: "API مخصص", included: false },
    ],
    stats: [
      { icon: MessageSquare, value: "10,000", label: "محادثة شهرياً" },
      { icon: Users2, value: "10", label: "أعضاء الفريق" },
      { icon: Bot, value: "5", label: "روبوتات محادثة" },
    ],
    popular: true,
    color: "indigo",
  },
  {
    name: "المؤسسات",
    icon: Building,
    price: "999",
    yearlyPrice: "9,588",
    description: "حلول مخصصة للمؤسسات الكبيرة",
    features: [
      { title: "محادثة مباشرة للموقع", included: true },
      { title: "صندوق وارد متعدد القنوات", included: true },
      { title: "تعاون الفريق", value: "غير محدود", included: true },
      { title: "روبوتات المحادثة الأساسية", included: true },
      { title: "تحليلات متقدمة", included: true },
      { title: "دعم VIP", included: true },
      { title: "روبوتات ذكاء اصطناعي", included: true },
      { title: "تكاملات متقدمة", included: true },
      { title: "API مخصص", included: true },
    ],
    stats: [
      { icon: MessageSquare, value: "غير محدود", label: "محادثة شهرياً" },
      { icon: Users2, value: "∞", label: "أعضاء الفريق" },
      { icon: Bot, value: "10+", label: "روبوتات محادثة" },
    ],
    enterprise: true,
    color: "purple",
  },
];

const features = [
  {
    icon: Shield,
    title: "أمان عالمي المستوى",
    description: "حماية بيانات متوافقة مع المعايير العالمية",
    stats: ["تشفير 256-bit", "SOC 2 Type II", "GDPR متوافق"],
  },
  {
    icon: Clock,
    title: "دعم لا مثيل له",
    description: "فريق دعم متخصص على مدار الساعة",
    stats: ["دعم 24/7", "وقت استجابة < 5 دقائق", "99.9% وقت تشغيل"],
  },
  {
    icon: Zap,
    title: "أداء فائق",
    description: "منصة سريعة وموثوقة لنمو أعمالك",
    stats: ["تحميل سريع", "API عالي الأداء", "مقياس تلقائي"],
  },
];

// const testimonials = [
//   {
//     name: "شركة التقنية المتقدمة",
//     role: "خدمات تقنية",
//     content: "زيادة رضا العملاء بنسبة 85% منذ استخدام كرزون",
//     stats: {
//       satisfaction: "85%",
//       response: "2.5 دقيقة",
//       retention: "95%",
//     },
//     rating: 5,
//   },
//   {
//     name: "متجر الأناقة",
//     role: "تجارة إلكترونية",
//     content: "تحسين معدل التحويل بنسبة 40% مع دعم عملاء أفضل",
//     stats: {
//       conversion: "40%",
//       sales: "2.5x",
//       support: "24/7",
//     },
//     rating: 5,
//   },
// ];

export function Pricing() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Interactive Elements */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              اختر خطتك المثالية
              <span className="block text-google-blue mt-2">لتنمية أعمالك</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              خطط مرنة تنمو مع احتياجات عملك. ابدأ مجاناً واختر الخطة المناسبة لك
            </p>
          </motion.div>

          {/* Interactive Billing Toggle */}
          <div className="inline-flex items-center justify-center bg-white rounded-full p-1 shadow-lg mb-16">
            <button
              onClick={() => setBillingInterval("monthly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billingInterval === "monthly" ? "bg-google-blue text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              شهري
            </button>
            <button
              onClick={() => setBillingInterval("yearly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billingInterval === "yearly" ? "bg-google-blue text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span className="flex items-center gap-2">
                سنوي
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">خصم 20%</span>
              </span>
            </button>
          </div>

          {/* Modern Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? "ring-3 ring-google-blue ring-opacity-20 shadow-xl transform hover:-translate-y-1"
                    : "ring-1 ring-gray-200 shadow-lg hover:shadow-xl"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 right-0 left-0 mx-auto w-fit">
                    <span className="inline-flex items-center gap-1 bg-google-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      <Crown className="h-4 w-4" />
                      الأكثر شعبية
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{plan.description}</p>
                  </div>
                  <plan.icon className={`h-10 w-10 text-${plan.color}-500`} />
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$</span>
                    <span className="text-4xl font-bold">
                      {billingInterval === "monthly" ? plan.price : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-500 mr-2">/ {billingInterval === "monthly" ? "شهرياً" : "سنوياً"}</span>
                  </div>
                </div>

                {/* Usage Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                  {plan.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <stat.icon className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                      <div className="font-semibold text-sm">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 ${feature.included ? "text-green-500" : "text-gray-300"}`} />
                      <span className={feature.included ? "text-gray-900" : "text-gray-400"}>
                        {feature.title}
                        {feature.value && <span className="text-sm text-gray-500 mr-1">({feature.value})</span>}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-xl py-4 px-6 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-google-blue text-white hover:bg-blue-600 shadow-lg hover:shadow-xl"
                      : plan.enterprise
                      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.enterprise ? "تواصل معنا" : "ابدأ الآن"}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Enterprise Features */}
          <div className="mt-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <feature.icon className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.stats.map((stat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="h-4 w-4 text-green-400" />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-6">مقارنة تفصيلية للخطط</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              اختر الخطة المناسبة لاحتياجات عملك. قارن بين الميزات والأسعار لاتخاذ القرار الأفضل.
            </p>
            <ComparisonTable />
          </div>

          {/* Testimonials Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-6">ماذا يقول عملاؤنا</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              اكتشف كيف ساعد كرزون الشركات في تحسين تجربة عملائها وتنمية أعمالها
            </p>
            <TestimonialsCarousel />
          </div>

          {/* Final CTA */}
          <div className="mt-24 bg-gradient-to-r from-google-blue to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">جاهز لتحسين تجربة عملائك؟</h2>
            <p className="text-xl mb-8 opacity-90">ابدأ تجربتك المجانية لمدة 14 يوماً. لا يلزم بطاقة ائتمان.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-google-blue px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                ابدأ الآن مجاناً
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                جدولة عرض توضيحي
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

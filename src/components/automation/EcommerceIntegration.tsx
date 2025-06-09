import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
  Package,
  Truck,
  Calendar,
  Bell,
  Tag,
  MessageSquare,
  Users,
  BarChart,
  Clock,
  Send,
  Mail,
  Smartphone,
  Database,
  Settings,
  Globe,
  Repeat,
  Filter,
  Zap,
  Link,
  Store,
  CreditCard,
  Box,
  DollarSign,
  Percent,
  Gift,
  UserPlus,
  Heart,
  Star,
  Share2,
  Trash2,
} from "lucide-react";

export function EcommerceIntegration() {
  const [activePlatform, setActivePlatform] = useState("shopify");

  const platforms = [
    { id: "shopify", name: "Shopify", icon: Store },
    { id: "woocommerce", name: "WooCommerce", icon: ShoppingCart },
    { id: "magento", name: "Magento", icon: Package },
    { id: "opencart", name: "OpenCart", icon: Box },
  ];

  const automationTypes = [
    {
      title: "أتمتة السلة المهجورة",
      description: "استرداد المبيعات المفقودة من خلال رسائل تذكير تلقائية",
      icon: ShoppingCart,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      benefits: [
        "زيادة معدل استرداد السلة بنسبة 40%",
        "رسائل مخصصة حسب محتوى السلة",
        "متابعة تلقائية متعددة المراحل",
        "عروض خاصة لتشجيع إتمام الشراء",
      ],
    },
    {
      title: "متابعة الطلبات",
      description: "إرسال تحديثات حالة الطلب والشحن تلقائياً",
      icon: Truck,
      color: "bg-green-100",
      textColor: "text-green-600",
      benefits: [
        "تحديثات فورية عن حالة الطلب",
        "إشعارات الشحن والتوصيل",
        "معالجة المشكلات والتأخيرات",
        "تقييم تجربة العملاء",
      ],
    },
    {
      title: "برنامج الولاء",
      description: "مكافأة العملاء تلقائياً على مشترياتهم وتفاعلاتهم",
      icon: Gift,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      benefits: [
        "تتبع نقاط الولاء تلقائياً",
        "إشعارات المكافآت والهدايا",
        "عروض خاصة للأعضاء",
        "تذكير بالنقاط المتراكمة",
      ],
    },
    {
      title: "استرداد العملاء",
      description: "إعادة جذب العملاء غير النشطين من خلال حملات مخصصة",
      icon: Repeat,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      benefits: ["تحديد العملاء غير النشطين", "حملات استرداد مخصصة", "عروض إعادة التفعيل", "تحليل سلوك العملاء"],
    },
    {
      title: "تقييمات المنتجات",
      description: "تشجيع وإدارة تقييمات العملاء للمنتجات",
      icon: Star,
      color: "bg-red-100",
      textColor: "text-red-600",
      benefits: ["طلب التقييمات تلقائياً", "متابعة التقييمات السلبية", "مكافآت على التقييمات", "تحليل رضا العملاء"],
    },
    {
      title: "إدارة المخزون",
      description: "إشعارات وتحديثات المخزون التلقائية",
      icon: Box,
      color: "bg-indigo-100",
      textColor: "text-indigo-600",
      benefits: ["تنبيهات انخفاض المخزون", "إشعارات إعادة التوفر", "تحديثات حالة المنتج", "تقارير المخزون الدورية"],
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">تكامل مع منصات التجارة الإلكترونية</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              أتمتة عمليات متجرك الإلكتروني وتحسين تجربة العملاء من خلال تكامل سلس مع أشهر منصات التجارة الإلكترونية
            </p>
          </motion.div>
        </div>

        {/* Platform Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActivePlatform(platform.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors ${
                activePlatform === platform.id
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 shadow-sm hover:bg-gray-50"
              }`}
            >
              <platform.icon className="h-5 w-5" />
              <span>{platform.name}</span>
            </button>
          ))}
        </div>

        {/* Automation Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className={`${type.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <type.icon className={`h-6 w-6 ${type.textColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>

              <ul className="space-y-2 mb-4">
                {type.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`inline-flex items-center gap-1 ${type.textColor} hover:underline text-sm font-medium`}
              >
                <span>إعداد الأتمتة</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "إعداد سريع",
              description: "تكامل سريع مع متجرك خلال دقائق معدودة",
            },
            {
              icon: Link,
              title: "تكامل ثنائي الاتجاه",
              description: "مزامنة البيانات في الوقت الفعلي بين المنصات",
            },
            {
              icon: Shield,
              title: "آمن وموثوق",
              description: "حماية كاملة لبيانات متجرك وعملائك",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Integration CTA */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">جاهز لأتمتة متجرك الإلكتروني؟</h3>
              <p className="text-gray-600 mb-6">
                ابدأ اليوم مع فترة تجريبية مجانية لمدة 14 يوماً واكتشف كيف يمكن لأتمتة المتجر أن تساعد في نمو مبيعاتك.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                  ابدأ الآن مجاناً
                </button>
                <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                  جدولة عرض توضيحي
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80"
                alt="E-commerce Integration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add Shield icon component since it's not imported
function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  ShoppingCart,
  MessageSquare,
  Calendar,
  User,
  Clock,
  Tag,
  Database,
  Globe,
  ArrowRight,
  CheckCircle2,
  Zap,
  Repeat,
  Filter,
  Mail,
  FileText,
  Users,
  Smartphone,
  Send,
  Heart,
  Layers,
  Workflow,
  BellRing,
  UserPlus,
  UserMinus,
} from "lucide-react";

export function TriggerTypes() {
  const [activeCategory, setActiveCategory] = useState("conversation");

  const categories = [
    { id: "conversation", name: "أحداث المحادثات", icon: MessageSquare },
    { id: "customer", name: "أحداث العملاء", icon: User },
    { id: "ecommerce", name: "التجارة الإلكترونية", icon: ShoppingCart },
    { id: "time", name: "أحداث زمنية", icon: Clock },
  ];

  const triggers = {
    conversation: [
      {
        icon: MessageSquare,
        title: "بدء محادثة جديدة",
        description: "يتم تشغيل التدفق عندما يبدأ العميل محادثة جديدة",
        color: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        icon: Send,
        title: "استلام رسالة",
        description: "يتم تشغيل التدفق عند استلام رسالة من العميل",
        color: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        icon: Clock,
        title: "عدم الرد",
        description: "يتم تشغيل التدفق عندما لا يرد العميل خلال فترة محددة",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        icon: Tag,
        title: "إضافة وسم للمحادثة",
        description: "يتم تشغيل التدفق عند إضافة وسم معين للمحادثة",
        color: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        icon: UserPlus,
        title: "تعيين محادثة لموظف",
        description: "يتم تشغيل التدفق عند تعيين محادثة لموظف معين",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
      {
        icon: BellRing,
        title: "تغيير حالة المحادثة",
        description: "يتم تشغيل التدفق عند تغيير حالة المحادثة (مفتوحة، مغلقة، معلقة)",
        color: "bg-red-100",
        textColor: "text-red-600",
      },
    ],
    customer: [
      {
        icon: UserPlus,
        title: "تسجيل عميل جديد",
        description: "يتم تشغيل التدفق عند تسجيل عميل جديد في النظام",
        color: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        icon: Tag,
        title: "تغيير تصنيف العميل",
        description: "يتم تشغيل التدفق عند تغيير تصنيف أو وسم العميل",
        color: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        icon: Calendar,
        title: "ذكرى سنوية",
        description: "يتم تشغيل التدفق في ذكرى تسجيل العميل أو مناسبة أخرى",
        color: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        icon: UserMinus,
        title: "عميل غير نشط",
        description: "يتم تشغيل التدفق عندما يصبح العميل غير نشط لفترة محددة",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        icon: Database,
        title: "تحديث بيانات العميل",
        description: "يتم تشغيل التدفق عند تحديث بيانات العميل",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
      {
        icon: Heart,
        title: "تغيير مستوى الولاء",
        description: "يتم تشغيل التدفق عند تغيير مستوى ولاء العميل",
        color: "bg-red-100",
        textColor: "text-red-600",
      },
    ],
    ecommerce: [
      {
        icon: ShoppingCart,
        title: "سلة مهجورة",
        description: "يتم تشغيل التدفق عندما يترك العميل سلة تسوق نشطة",
        color: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        icon: CheckCircle2,
        title: "إتمام طلب",
        description: "يتم تشغيل التدفق عند إتمام عملية شراء",
        color: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        icon: Repeat,
        title: "إرجاع منتج",
        description: "يتم تشغيل التدفق عند طلب إرجاع منتج",
        color: "bg-red-100",
        textColor: "text-red-600",
      },
      {
        icon: Heart,
        title: "إضافة منتج للمفضلة",
        description: "يتم تشغيل التدفق عند إضافة منتج لقائمة المفضلة",
        color: "bg-pink-100",
        textColor: "text-pink-600",
      },
      {
        icon: Smartphone,
        title: "زيارة صفحة منتج",
        description: "يتم تشغيل التدفق عند زيارة العميل لصفحة منتج معينة",
        color: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        icon: Tag,
        title: "تغيير حالة الطلب",
        description: "يتم تشغيل التدفق عند تغيير حالة الطلب (قيد المعالجة، تم الشحن، تم التسليم)",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
    ],
    time: [
      {
        icon: Clock,
        title: "جدولة زمنية",
        description: "يتم تشغيل التدفق في وقت محدد أو بشكل دوري",
        color: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        icon: Calendar,
        title: "قبل موعد محدد",
        description: "يتم تشغيل التدفق قبل موعد محدد (مثل موعد، حدث، تذكير)",
        color: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        icon: Bell,
        title: "تذكير دوري",
        description: "يتم تشغيل التدفق بشكل دوري (يومي، أسبوعي، شهري)",
        color: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        icon: Workflow,
        title: "بعد إكمال تدفق آخر",
        description: "يتم تشغيل التدفق بعد اكتمال تدفق أتمتة آخر",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
      {
        icon: Layers,
        title: "تسلسل زمني",
        description: "يتم تشغيل التدفق كجزء من سلسلة أحداث متتابعة",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        icon: Users,
        title: "ساعات العمل",
        description: "يتم تشغيل التدفق خلال أو خارج ساعات العمل المحددة",
        color: "bg-red-100",
        textColor: "text-red-600",
      },
    ],
  };

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">محفزات متنوعة لبدء تدفقات الأتمتة</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              اختر من بين عشرات المحفزات المختلفة لبدء تدفقات الأتمتة الخاصة بك، من أحداث المحادثات إلى أحداث التجارة
              الإلكترونية والمزيد
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors ${
                activeCategory === category.id
                  ? "bg-google-blue text-white"
                  : "bg-white text-gray-700 shadow-sm hover:bg-gray-50"
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Triggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {triggers[activeCategory as keyof typeof triggers].map((trigger, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className={`${trigger.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <trigger.icon className={`h-6 w-6 ${trigger.textColor}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{trigger.title}</h3>
              <p className="text-gray-600 mb-4">{trigger.description}</p>
              <a
                href="#"
                className={`inline-flex items-center gap-1 ${trigger.textColor} hover:underline text-sm font-medium`}
              >
                <span>استخدام هذا المحفز</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Trigger CTA */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-3">هل تحتاج إلى محفز مخصص؟</h3>
              <p className="text-gray-600 mb-4">
                يمكنك إنشاء محفزات مخصصة باستخدام واجهة برمجة التطبيقات (API) أو الاتصال بأنظمة خارجية لبدء تدفقات
                الأتمتة الخاصة بك.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center gap-2 text-google-blue hover:text-blue-700 font-medium">
                  <span>استكشف محفزات API</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-google-blue hover:text-blue-700 font-medium">
                  <span>تعرف على التكاملات المخصصة</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white p-4 rounded-xl shadow-md border border-blue-200">
                <Code className="h-16 w-16 text-blue-500 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Code icon component since it's not imported
function Code(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

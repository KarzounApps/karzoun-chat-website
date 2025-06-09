import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Split,
  Filter,
  ArrowRight,
  CheckCircle2,
  User,
  Calendar,
  Clock,
  Tag,
  MessageSquare,
  ShoppingCart,
  DollarSign,
  MapPin,
  Globe,
  Users,
  BarChart,
  Database,
  Layers,
  Workflow,
  Percent,
  Target,
  UserCheck,
  FileText,
  Mail,
  Send,
  Smartphone,
  Heart,
  Star,
  Package,
  Truck,
  CreditCard,
  Gift,
  Repeat,
  AlertCircle,
  Plus,
} from "lucide-react";

export function AdvancedConditions() {
  const [activeCondition, setActiveCondition] = useState("customer");

  const conditionTypes = {
    customer: {
      title: "شروط العملاء",
      icon: User,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      conditions: [
        {
          title: "نوع العميل",
          description: "تحقق من نوع العميل (جديد، قائم، VIP)",
          operators: ["يساوي", "لا يساوي"],
          values: ["عميل جديد", "عميل قائم", "عميل VIP"],
        },
        {
          title: "عمر العميل",
          description: "المدة منذ تسجيل العميل",
          operators: ["أقل من", "أكثر من", "يساوي"],
          values: ["يوم", "أسبوع", "شهر", "سنة"],
        },
        {
          title: "الوسوم",
          description: "التحقق من وسوم العميل",
          operators: ["يحتوي", "لا يحتوي"],
          values: ["مهتم بالعروض", "عميل نشط", "مشترك في النشرة"],
        },
        {
          title: "المنطقة",
          description: "موقع العميل الجغرافي",
          operators: ["في", "ليس في"],
          values: ["الرياض", "جدة", "الدمام", "مكة"],
        },
      ],
    },
    purchase: {
      title: "شروط المشتريات",
      icon: ShoppingCart,
      color: "bg-green-100",
      textColor: "text-green-600",
      conditions: [
        {
          title: "قيمة المشتريات",
          description: "إجمالي قيمة مشتريات العميل",
          operators: ["أكبر من", "أقل من", "يساوي"],
          values: ["100", "500", "1000", "5000"],
        },
        {
          title: "عدد الطلبات",
          description: "عدد الطلبات المكتملة",
          operators: ["أكبر من", "أقل من", "يساوي"],
          values: ["1", "5", "10", "20"],
        },
        {
          title: "آخر طلب",
          description: "الوقت منذ آخر طلب",
          operators: ["قبل", "بعد"],
          values: ["يوم", "أسبوع", "شهر"],
        },
        {
          title: "فئات المنتجات",
          description: "فئات المنتجات المشتراة",
          operators: ["يتضمن", "لا يتضمن"],
          values: ["إلكترونيات", "ملابس", "أثاث"],
        },
      ],
    },
    engagement: {
      title: "شروط التفاعل",
      icon: MessageSquare,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      conditions: [
        {
          title: "عدد المحادثات",
          description: "عدد المحادثات مع العميل",
          operators: ["أكثر من", "أقل من", "يساوي"],
          values: ["1", "5", "10"],
        },
        {
          title: "آخر تفاعل",
          description: "الوقت منذ آخر تفاعل",
          operators: ["قبل", "بعد"],
          values: ["ساعة", "يوم", "أسبوع"],
        },
        {
          title: "قنوات التواصل",
          description: "قنوات التواصل المستخدمة",
          operators: ["يستخدم", "لا يستخدم"],
          values: ["واتساب", "انستغرام", "فيسبوك"],
        },
        {
          title: "معدل الاستجابة",
          description: "معدل استجابة العميل للرسائل",
          operators: ["أعلى من", "أقل من"],
          values: ["50%", "75%", "90%"],
        },
      ],
    },
    time: {
      title: "شروط زمنية",
      icon: Clock,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      conditions: [
        {
          title: "وقت اليوم",
          description: "وقت محدد خلال اليوم",
          operators: ["قبل", "بعد", "بين"],
          values: ["صباحاً", "ظهراً", "مساءً"],
        },
        {
          title: "يوم الأسبوع",
          description: "يوم محدد من الأسبوع",
          operators: ["هو", "ليس"],
          values: ["السبت", "الأحد", "الاثنين"],
        },
        {
          title: "ساعات العمل",
          description: "خلال أو خارج ساعات العمل",
          operators: ["خلال", "خارج"],
          values: ["ساعات العمل"],
        },
        {
          title: "المناسبات",
          description: "مناسبات وتواريخ خاصة",
          operators: ["في", "قبل", "بعد"],
          values: ["رمضان", "العيد", "نهاية الأسبوع"],
        },
      ],
    },
  };

  // Get the current condition type's icon component
  const CurrentIcon = conditionTypes[activeCondition as keyof typeof conditionTypes].icon;

  return (
    <div className="py-24 bg-gradient-to-r from-yellow-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">شروط متقدمة للأتمتة الذكية</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              صمم تدفقات أتمتة ذكية باستخدام شروط متقدمة تستند إلى بيانات العملاء، المشتريات، التفاعلات، والتوقيت
            </p>
          </motion.div>
        </div>

        {/* Condition Type Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(conditionTypes).map(([key, type]) => (
            <button
              key={key}
              onClick={() => setActiveCondition(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors ${
                activeCondition === key
                  ? `${type.color} ${type.textColor} font-medium`
                  : "bg-white text-gray-700 shadow-sm hover:bg-gray-50"
              }`}
            >
              <type.icon className="h-5 w-5" />
              <span>{type.title}</span>
            </button>
          ))}
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Condition Builder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`${conditionTypes[activeCondition as keyof typeof conditionTypes].color} p-2 rounded-lg`}>
                <CurrentIcon
                  className={`h-5 w-5 ${conditionTypes[activeCondition as keyof typeof conditionTypes].textColor}`}
                />
              </div>
              <h3 className="text-xl font-bold">
                {conditionTypes[activeCondition as keyof typeof conditionTypes].title}
              </h3>
            </div>

            <div className="space-y-6">
              {conditionTypes[activeCondition as keyof typeof conditionTypes].conditions.map(
                (condition: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{condition.title}</h4>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{condition.description}</p>

                    <div className="flex flex-wrap gap-3">
                      <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
                        {condition.operators.map((op: any, i: number) => (
                          <option key={i}>{op}</option>
                        ))}
                      </select>

                      <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
                        {condition.values.map((val: any, i: number) => (
                          <option key={i}>{val}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="bg-google-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                إضافة شرط جديد
              </button>
            </div>
          </motion.div>

          {/* Condition Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
          >
            <h3 className="text-xl font-bold mb-6">معاينة الشروط</h3>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Workflow className="h-5 w-5 text-gray-600" />
                <span className="font-medium">الشروط المطبقة</span>
              </div>

              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-blue-600" />
                    <span>نوع العميل يساوي &quot;عميل VIP&quot;</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-sm">
                    <ShoppingCart className="h-4 w-4 text-green-600" />
                    <span>قيمة المشتريات أكبر من 1000 ريال</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <span>خلال ساعات العمل</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-blue-600" />
                <span className="font-medium">نتيجة التقييم</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">الشروط متوافقة مع 150 عميل</span>
                </div>

                <div className="flex items-center gap-2">
                  <Percent className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">15% من قاعدة العملاء</span>
                </div>

                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">توصية: إضافة شروط أكثر تحديداً</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Filter,
              title: "شروط متعددة",
              description: "دمج عدة شروط باستخدام العوامل المنطقية (و، أو، ليس)",
            },
            {
              icon: Database,
              title: "بيانات ديناميكية",
              description: "استخدام متغيرات وقيم ديناميكية في الشروط",
            },
            {
              icon: Layers,
              title: "شروط متداخلة",
              description: "إنشاء شروط معقدة ومتداخلة للحالات المتقدمة",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

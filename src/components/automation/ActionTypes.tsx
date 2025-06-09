import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  MessageSquare,
  Mail,
  Send,
  Tag,
  User,
  Database,
  FileText,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Users,
  Filter,
  Smartphone,
  Bell,
  Workflow,
  Layers,
  Settings,
  ShoppingCart,
  Repeat,
  Trash2,
  Edit,
  Plus,
  Clipboard,
  Download,
  Upload,
  RefreshCw,
  Globe,
  Code,
  Braces,
  Bot,
  Sparkles,
  Webhook,
  Link,
  FileCheck,
  UserCheck,
  MessagesSquare,
  BrainCircuit,
  GitBranch,
  Keyboard,
  Rocket,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export function ActionTypes() {
  const [activeCategory, setActiveCategory] = useState("messaging");

  const categories = [
    { id: "messaging", name: "إرسال الرسائل", icon: MessageSquare },
    { id: "customer", name: "إدارة العملاء", icon: User },
    { id: "data", name: "إدارة البيانات", icon: Database },
    { id: "workflow", name: "سير العمل", icon: Workflow },
    { id: "integration", name: "التكاملات", icon: Link },
  ];

  const actions = {
    messaging: [
      {
        icon: Send,
        title: "إرسال رسالة واتساب",
        description: "إرسال رسالة واتساب للعميل باستخدام القوالب المعتمدة",
        color: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        icon: Mail,
        title: "إرسال بريد إلكتروني",
        description: "إرسال بريد إلكتروني مخصص للعميل",
        color: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        icon: MessageSquare,
        title: "إرسال رسالة داخلية",
        description: "إرسال رسالة داخلية للعميل عبر الدردشة المباشرة",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
      {
        icon: Smartphone,
        title: "إرسال إشعار تطبيق",
        description: "إرسال إشعار للعميل عبر تطبيق الجوال",
        color: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        icon: Bell,
        title: "إرسال تذكير",
        description: "جدولة وإرسال تذكير للعميل في وقت محدد",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        icon: Clipboard,
        title: "استخدام قالب رسالة",
        description: "استخدام قالب رسالة محفوظ مسبقاً",
        color: "bg-red-100",
        textColor: "text-red-600",
      },
    ],
    customer: [
      {
        icon: Tag,
        title: "إضافة وسم للعميل",
        description: "إضافة وسم أو تصنيف للعميل",
        color: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        icon: User,
        title: "تحديث بيانات العميل",
        description: "تحديث معلومات العميل في قاعدة البيانات",
        color: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        icon: Users,
        title: "إضافة للقائمة",
        description: "إضافة العميل إلى قائمة أو شريحة محددة",
        color: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        icon: UserCheck,
        title: "تغيير حالة العميل",
        description: "تحديث حالة العميل (نشط، غير نشط، محظور)",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        icon: FileCheck,
        title: "تحديث التفضيلات",
        description: "تحديث تفضيلات العميل وإعداداته",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
      {
        icon: Trash2,
        title: "حذف العميل",
        description: "حذف حساب العميل وبياناته",
        color: "bg-red-100",
        textColor: "text-red-600",
      },
    ],
    data: [
      {
        icon: Database,
        title: "تحديث قاعدة البيانات",
        description: "تحديث أو إضافة بيانات في قاعدة البيانات",
        color: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        icon: Upload,
        title: "تصدير البيانات",
        description: "تصدير البيانات إلى ملف أو نظام خارجي",
        color: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        icon: Download,
        title: "استيراد البيانات",
        description: "استيراد البيانات من ملف أو نظام خارجي",
        color: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        icon: Filter,
        title: "تصفية البيانات",
        description: "تطبيق فلاتر وشروط على البيانات",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        icon: RefreshCw,
        title: "تحديث تلقائي",
        description: "تحديث البيانات بشكل دوري",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
      {
        icon: Layers,
        title: "نسخ احتياطي",
        description: "إنشاء نسخة احتياطية من البيانات",
        color: "bg-red-100",
        textColor: "text-red-600",
      },
    ],
    workflow: [
      {
        icon: GitBranch,
        title: "تشغيل تدفق آخر",
        description: "بدء تشغيل تدفق أتمتة آخر",
        color: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        icon: Clock,
        title: "تأخير",
        description: "انتظار فترة زمنية محددة قبل المتابعة",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        icon: Repeat,
        title: "تكرار",
        description: "تكرار مجموعة من الإجراءات",
        color: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        icon: Filter,
        title: "شرط",
        description: "تنفيذ إجراءات بناءً على شروط معينة",
        color: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        icon: Sparkles,
        title: "A/B اختبار",
        description: "اختبار مسارين مختلفين وتحليل النتائج",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
      {
        icon: BrainCircuit,
        title: "إجراء ذكاء اصطناعي",
        description: "تنفيذ عمليات ذكاء اصطناعي متقدمة",
        color: "bg-red-100",
        textColor: "text-red-600",
      },
    ],
    integration: [
      {
        icon: Code,
        title: "طلب HTTP",
        description: "إرسال طلب HTTP إلى نظام خارجي",
        color: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        icon: Webhook,
        title: "Webhook",
        description: "إرسال بيانات إلى webhook محدد",
        color: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        icon: ShoppingCart,
        title: "تكامل متجر إلكتروني",
        description: "التفاعل مع نظام المتجر الإلكتروني",
        color: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        icon: Globe,
        title: "تكامل CRM",
        description: "التكامل مع نظام إدارة علاقات العملاء",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
      {
        icon: Braces,
        title: "تنفيذ كود مخصص",
        description: "تنفيذ كود JavaScript مخصص",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        icon: Bot,
        title: "تكامل ChatGPT",
        description: "استخدام نماذج OpenAI للذكاء الاصطناعي",
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
            <h2 className="text-3xl font-bold mb-4">إجراءات متنوعة لأتمتة أي شيء</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              اختر من بين عشرات الإجراءات المختلفة لتنفيذ المهام المطلوبة في تدفقات الأتمتة الخاصة بك
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

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions[activeCategory as keyof typeof actions].map((action: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <action.icon className={`h-6 w-6 ${action.textColor}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <a
                href="#"
                className={`inline-flex items-center gap-1 ${action.textColor} hover:underline text-sm font-medium`}
              >
                <span>استخدام هذا الإجراء</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Action CTA */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-3">هل تحتاج إلى إجراء مخصص؟</h3>
              <p className="text-gray-600 mb-4">
                يمكنك إنشاء إجراءات مخصصة باستخدام واجهة برمجة التطبيقات (API) أو كتابة كود JavaScript مخصص لتنفيذ أي
                مهمة تحتاجها.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center gap-2 text-google-blue hover:text-blue-700 font-medium">
                  <span>استكشف API المخصص</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-google-blue hover:text-blue-700 font-medium">
                  <span>تعرف على JavaScript Actions</span>
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

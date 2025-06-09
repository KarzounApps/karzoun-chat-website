import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShoppingCart,
  Calendar,
  MessageSquare,
  Headphones,
  School,
  Landmark,
  Home,
  ArrowRight,
  CheckCircle2,
  Star,
  Copy,
  Download,
  Share2,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Smartphone,
  Send,
  Clock,
  User,
  Bot,
  Zap,
} from "lucide-react";

export function TemplateShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState<(typeof templates)[0] | null>(null);

  const categories = [
    { id: "all", name: "جميع القوالب" },
    { id: "ecommerce", name: "التجارة الإلكترونية", icon: ShoppingCart },
    { id: "appointments", name: "حجز المواعيد", icon: Calendar },
    { id: "support", name: "خدمة العملاء", icon: Headphones },
    { id: "education", name: "التعليم", icon: School },
    { id: "finance", name: "الخدمات المالية", icon: Landmark },
    { id: "realestate", name: "العقارات", icon: Home },
  ];

  const templates = [
    {
      id: 1,
      title: "روبوت استقبال العملاء",
      category: "ecommerce",
      description: "روبوت محادثة للترحيب بالعملاء الجدد وتوجيههم حسب احتياجاتهم",
      rating: 4.8,
      downloads: 2450,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      preview: {
        messages: [
          { type: "bot", text: "مرحباً بك في متجرنا! كيف يمكنني مساعدتك اليوم؟" },
          {
            type: "bot",
            text: "يمكنك اختيار أحد الخيارات التالية:",
            options: ["تصفح المنتجات", "عروض خاصة", "تتبع طلب", "التحدث مع موظف"],
          },
          { type: "user", text: "تصفح المنتجات" },
          {
            type: "bot",
            text: "رائع! ما هي فئة المنتجات التي تبحث عنها؟",
            options: ["ملابس", "إلكترونيات", "منزل وحديقة", "مستلزمات رياضية"],
          },
        ],
      },
    },
    {
      id: 2,
      title: "روبوت حجز المواعيد",
      category: "appointments",
      description: "روبوت محادثة لتسهيل حجز وإدارة المواعيد للعيادات والمراكز الخدمية",
      rating: 4.9,
      downloads: 1890,
      image:
        "https://images.unsplash.com/photo-1606202598125-e2077bb5186d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      preview: {
        messages: [
          { type: "bot", text: "مرحباً بك في عيادة الصحة! كيف يمكنني مساعدتك اليوم؟" },
          {
            type: "bot",
            text: "يمكنك اختيار أحد الخيارات التالية:",
            options: ["حجز موعد جديد", "تعديل موعد", "إلغاء موعد", "استفسار عام"],
          },
          { type: "user", text: "حجز موعد جديد" },
          { type: "bot", text: "ممتاز! يرجى اختيار التخصص المطلوب:", options: ["طب عام", "طب أسنان", "جلدية", "عظام"] },
        ],
      },
    },
    {
      id: 3,
      title: "روبوت الدعم الفني",
      category: "support",
      description: "روبوت محادثة لتقديم الدعم الفني وحل المشكلات التقنية للعملاء",
      rating: 4.7,
      downloads: 3200,
      image:
        "https://images.unsplash.com/photo-1581092921461-7d65ca45393a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      preview: {
        messages: [
          { type: "bot", text: "مرحباً بك في مركز الدعم الفني! كيف يمكنني مساعدتك اليوم؟" },
          {
            type: "bot",
            text: "يرجى اختيار نوع المشكلة التي تواجهها:",
            options: ["مشكلة في تسجيل الدخول", "مشكلة في الدفع", "مشكلة في المنتج", "استفسار آخر"],
          },
          { type: "user", text: "مشكلة في تسجيل الدخول" },
          { type: "bot", text: "آسف لسماع ذلك. هل يمكنك إخباري بالرسالة الخطأ التي تظهر لك عند محاولة تسجيل الدخول؟" },
        ],
      },
    },
    {
      id: 4,
      title: "روبوت المساعد التعليمي",
      category: "education",
      description: "روبوت محادثة لمساعدة الطلاب في الدراسة وتقديم الموارد التعليمية",
      rating: 4.6,
      downloads: 1560,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      preview: {
        messages: [
          { type: "bot", text: "مرحباً بك في المساعد التعليمي! كيف يمكنني مساعدتك اليوم؟" },
          {
            type: "bot",
            text: "يمكنك اختيار أحد الخيارات التالية:",
            options: ["مراجعة دروس", "حل تمارين", "اختبارات تجريبية", "موارد إضافية"],
          },
          { type: "user", text: "مراجعة دروس" },
          {
            type: "bot",
            text: "ممتاز! يرجى اختيار المادة التي ترغب في مراجعتها:",
            options: ["الرياضيات", "العلوم", "اللغة العربية", "اللغة الإنجليزية"],
          },
        ],
      },
    },
    {
      id: 5,
      title: "روبوت الخدمات المصرفية",
      category: "finance",
      description: "روبوت محادثة للاستعلام عن الخدمات المصرفية وإجراء المعاملات البسيطة",
      rating: 4.5,
      downloads: 980,
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      preview: {
        messages: [
          { type: "bot", text: "مرحباً بك في الخدمات المصرفية! كيف يمكنني مساعدتك اليوم؟" },
          {
            type: "bot",
            text: "يمكنك اختيار أحد الخيارات التالية:",
            options: ["الاستعلام عن الرصيد", "تحويل أموال", "كشف حساب", "خدمات أخرى"],
          },
          { type: "user", text: "الاستعلام عن الرصيد" },
          {
            type: "bot",
            text: "للتحقق من رصيدك، يرجى تأكيد هويتك. هل ترغب في إرسال رمز التحقق إلى رقم هاتفك المسجل؟",
            options: ["نعم", "لا"],
          },
        ],
      },
    },
    {
      id: 6,
      title: "روبوت العقارات",
      category: "realestate",
      description: "روبوت محادثة للبحث عن العقارات وتقديم المعلومات للعملاء المحتملين",
      rating: 4.4,
      downloads: 750,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      preview: {
        messages: [
          { type: "bot", text: "مرحباً بك في الوكالة العقارية! كيف يمكنني مساعدتك اليوم؟" },
          {
            type: "bot",
            text: "يمكنك اختيار أحد الخيارات التالية:",
            options: ["شراء عقار", "إيجار عقار", "بيع عقار", "استفسار عام"],
          },
          { type: "user", text: "شراء عقار" },
          {
            type: "bot",
            text: "رائع! يرجى تحديد نوع العقار الذي تبحث عنه:",
            options: ["شقة", "فيلا", "أرض", "مكتب تجاري"],
          },
        ],
      },
    },
  ];

  // Filter templates by category
  const filteredTemplates =
    activeCategory === "all" ? templates : templates.filter((template) => template.category === activeCategory);

  // Pagination
  const templatesPerPage = 3;
  const pageCount = Math.ceil(filteredTemplates.length / templatesPerPage);
  const displayedTemplates = filteredTemplates.slice(
    currentPage * templatesPerPage,
    (currentPage + 1) * templatesPerPage
  );

  // Navigation
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pageCount - 1));
  };

  // Template selection
  const handleTemplateClick = (template: any) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">قوالب جاهزة للاستخدام</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ابدأ بسرعة مع مجموعة متنوعة من قوالب روبوتات المحادثة الجاهزة والمصممة خصيصاً لمختلف الصناعات والاحتياجات
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? "bg-indigo-100 text-indigo-700 font-medium"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.icon && <category.icon className="h-5 w-5" />}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {displayedTemplates.map((template) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all ${
                selectedTemplate?.id === template.id ? "ring-2 ring-indigo-500" : "hover:shadow-xl"
              }`}
              onClick={() => handleTemplateClick(template)}
            >
              <img src={template.image} alt={template.title} className="w-full h-48 object-cover" />

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{template.title}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(template.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{template.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{template.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    <Download className="h-4 w-4 inline mr-1" />
                    {template.downloads} تنزيل
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <Copy className="h-4 w-4 text-gray-500" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <Share2 className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={prevPage}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-50 transition-colors"
            disabled={pageCount <= 1}
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          <div className="flex gap-2">
            {[...Array(pageCount)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentPage ? "bg-indigo-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-50 transition-colors"
            disabled={pageCount <= 1}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Template Preview */}
        {selectedTemplate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">{selectedTemplate.title}</h3>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                استخدام هذا القالب
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">معاينة المحادثة</h4>
                <div className="bg-gray-100 rounded-xl p-4 h-80 overflow-y-auto">
                  <div className="space-y-4">
                    {selectedTemplate.preview.messages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === "user" ? "justify-start" : "justify-end"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.type === "user"
                              ? "bg-indigo-100 text-indigo-900"
                              : "bg-white border border-gray-200"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>

                          {message.options && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {message.options.map((option, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-white px-2 py-1 rounded-full border border-gray-200 shadow-sm"
                                >
                                  {option}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">مميزات القالب</h4>
                <ul className="space-y-3 mb-6">
                  {[
                    "قالب جاهز للاستخدام مباشرة",
                    "سهل التخصيص والتعديل",
                    "متوافق مع جميع منصات التواصل",
                    "مصمم وفقاً لأفضل الممارسات",
                    "يتضمن تدفقات محادثة متكاملة",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-lg mb-4">كيفية الاستخدام</h4>
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>انقر على زر &quot;استخدام هذا القالب&quot;</li>
                  <li>قم بتخصيص النصوص والخيارات حسب احتياجاتك</li>
                  <li>أضف المزيد من الخطوات والمسارات إذا لزم الأمر</li>
                  <li>اختبر الروبوت قبل نشره</li>
                  <li>قم بنشر الروبوت على القنوات المطلوبة</li>
                </ol>
              </div>
            </div>
          </motion.div>
        )}

        {/* Browse All Templates Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            <span>استعرض جميع القوالب</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

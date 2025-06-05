import React from 'react';
import { motion } from 'framer-motion';
import { 
  Book, Code2, Users, MessageCircleQuestion,
  Search, ArrowRight, BookOpen, FileText,
  Video, Headphones, Bot, Blocks,
  GraduationCap, MessagesSquare, Rocket,
  BookMarked, Terminal, GitPullRequest
} from 'lucide-react';

const categories = [
  {
    icon: Book,
    title: "مركز المساعدة",
    description: "دليل شامل للمستخدمين وإجابات على الأسئلة الشائعة",
    link: "/help/docs",
    items: [
      "دليل البدء السريع",
      "الأسئلة الشائعة",
      "أدلة المستخدم",
      "حل المشكلات"
    ]
  },
  {
    icon: Code2,
    title: "وثائق API",
    description: "وثائق تقنية شاملة للمطورين",
    link: "/help/api",
    items: [
      "مقدمة API",
      "المصادقة والتفويض",
      "نقاط النهاية",
      "أمثلة التكامل"
    ]
  },
  {
    icon: Users,
    title: "وثائق الشركاء",
    description: "موارد حصرية لشركاء كرزون",
    link: "/help/partners",
    items: [
      "دليل الشركاء",
      "أفضل الممارسات",
      "أدوات التسويق",
      "برنامج العمولات"
    ]
  },
  {
    icon: MessageCircleQuestion,
    title: "منتدى المجتمع",
    description: "تواصل مع مجتمع كرزون وشارك خبراتك",
    link: "/help/community",
    items: [
      "النقاشات العامة",
      "مشاركة الحلول",
      "طلبات الميزات",
      "قصص النجاح"
    ]
  }
];

const popularTopics = [
  {
    icon: BookOpen,
    title: "البدء مع كرزون",
    description: "دليل خطوة بخطوة لإعداد حسابك"
  },
  {
    icon: Bot,
    title: "إعداد الروبوتات",
    description: "كيفية إنشاء وتخصيص روبوتات المحادثة"
  },
  {
    icon: Terminal,
    title: "دمج API",
    description: "دليل التكامل التقني مع أنظمتك"
  },
  {
    icon: Blocks,
    title: "التخصيص المتقدم",
    description: "تخصيص المنصة حسب احتياجاتك"
  },
  {
    icon: MessagesSquare,
    title: "إدارة المحادثات",
    description: "أفضل ممارسات إدارة محادثات العملاء"
  },
  {
    icon: GitPullRequest,
    title: "الأتمتة والتدفقات",
    description: "إنشاء تدفقات عمل آلية متقدمة"
  }
];

const resources = [
  {
    icon: Video,
    title: "فيديوهات تعليمية",
    description: "شاهد دروس مرئية حول استخدام المنصة",
    count: "50+ فيديو"
  },
  {
    icon: FileText,
    title: "المقالات التقنية",
    description: "مقالات تفصيلية حول الميزات المتقدمة",
    count: "200+ مقال"
  },
  {
    icon: GraduationCap,
    title: "أكاديمية كرزون",
    description: "دورات تدريبية معتمدة للمستخدمين",
    count: "12 دورة"
  },
  {
    icon: Rocket,
    title: "دراسات الحالة",
    description: "قصص نجاح عملائنا وكيفية استخدامهم للمنصة",
    count: "30+ دراسة"
  }
];

export function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              كيف يمكننا مساعدتك؟
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              اكتشف موارد المساعدة والوثائق التقنية وتواصل مع مجتمعنا
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث في مركز المساعدة..."
                className="w-full pl-4 pr-12 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Categories */}
      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <category.icon className="h-6 w-6 text-google-blue" />
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2 mb-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="h-4 w-4 text-google-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={category.link}
                className="text-google-blue hover:underline flex items-center gap-1"
              >
                استكشف المزيد
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Topics */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            المواضيع الأكثر شيوعاً
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTopics.map((topic, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <topic.icon className="h-8 w-8 text-google-blue mb-4" />
                <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            موارد تعليمية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="h-8 w-8 text-google-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-2">{resource.description}</p>
                <span className="text-sm text-google-blue">{resource.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-google-blue to-blue-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Headphones className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              لم تجد ما تبحث عنه؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              فريق الدعم الفني متواجد على مدار الساعة لمساعدتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-google-blue px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                تواصل مع الدعم
              </button>
              <button className="border border-white bg-transparent px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                جدولة مكالمة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
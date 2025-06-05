import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Search, Bot, Users, FileText, 
  ArrowRight, Globe, Lock, Zap, Sparkles
} from 'lucide-react';

export function KnowledgeBaseHero() {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2ca24c,#f1b500)] opacity-10"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(#2ca24c_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              قاعدة معرفة ذكية
              <span className="block text-[#2ca24c] mt-2">مدعومة بالذكاء الاصطناعي</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              أنشئ قاعدة معرفة شاملة لعملائك وفريقك. استفد من قوة الذكاء الاصطناعي للإجابة على الاستفسارات تلقائياً وتحسين الإنتاجية.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#2ca24c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#239a41] transition-colors">
                ابدأ الآن مجاناً
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                عرض توضيحي
              </button>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Globe,
              title: "قاعدة معرفة عامة",
              description: "وثق منتجاتك وخدماتك للعملاء"
            },
            {
              icon: Lock,
              title: "قاعدة معرفة خاصة",
              description: "وثائق داخلية لفريق العمل"
            },
            {
              icon: Bot,
              title: "مساعد ذكي",
              description: "إجابات فورية مدعومة بالذكاء الاصطناعي"
            },
            {
              icon: Search,
              title: "بحث متقدم",
              description: "بحث سريع في كل المحتوى"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <feature.icon className="h-8 w-8 text-[#2ca24c] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10"
        >
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            {/* Demo Header */}
            <div className="bg-gray-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-[#2ca24c]" />
                <h3 className="text-lg font-medium text-white">قاعدة المعرفة</h3>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-gray-700 p-2 rounded-lg text-gray-300 hover:text-white transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                <button className="bg-gray-700 p-2 rounded-lg text-gray-300 hover:text-white transition-colors">
                  <Users className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#2ca24c]" />
                    المقالات الشائعة
                  </h4>
                  <div className="space-y-3">
                    {[
                      "كيفية إعداد الحساب",
                      "ربط قنوات التواصل",
                      "إنشاء روبوت محادثة",
                      "إعداد التقارير"
                    ].map((article, i) => (
                      <div key={i} className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg">
                        <span className="text-gray-300">{article}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <Bot className="h-5 w-5 text-[#2ca24c]" />
                    المساعد الذكي
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-[#f1b500]" />
                        <span className="text-gray-300">كيف يمكنني مساعدتك؟</span>
                      </div>
                      <div className="flex gap-2">
                        {["البدء السريع", "الإعدادات", "التكامل"].map((tag, i) => (
                          <span key={i} className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
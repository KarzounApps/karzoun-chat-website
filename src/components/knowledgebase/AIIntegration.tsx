import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, MessageSquare, Search, Zap, 
  Brain, Sparkles, ArrowRight, CheckCircle2,
  FileText, Users, Database, Settings,
  BrainCircuit, Lightbulb, Target, Rocket,
  Send, User
} from 'lucide-react';

export function AIIntegration() {
  const [activeDemo, setActiveDemo] = useState('copilot');
  const [demoStep, setDemoStep] = useState(0);

  // Auto advance demo steps
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (demoStep < 3) {
        setDemoStep(demoStep + 1);
      } else {
        setDemoStep(0);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [demoStep]);

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
            <h2 className="text-3xl font-bold mb-4">
              قاعدة معرفة ذكية
              <span className="block text-[#2ca24c]">مدعومة بالذكاء الاصطناعي</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              استفد من قوة الذكاء الاصطناعي لتحسين تجربة العملاء والموظفين. مساعد ذكي يتعلم من محتوى قاعدة المعرفة ويقدم إجابات دقيقة.
            </p>
          </motion.div>
        </div>

        {/* AI Features Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveDemo('copilot')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                activeDemo === 'copilot'
                  ? 'bg-white text-[#2ca24c] shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Brain className="h-5 w-5" />
              <span>مساعد الموظفين</span>
            </button>
            <button
              onClick={() => setActiveDemo('customer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                activeDemo === 'customer'
                  ? 'bg-white text-[#2ca24c] shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              <span>مساعد العملاء</span>
            </button>
          </div>
        </div>

        {/* AI Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {activeDemo === 'copilot' ? (
                    <Brain className="h-5 w-5 text-[#2ca24c]" />
                  ) : (
                    <Bot className="h-5 w-5 text-[#2ca24c]" />
                  )}
                  <h3 className="font-medium">
                    {activeDemo === 'copilot' ? 'مساعد الموظفين' : 'مساعد العملاء'}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    متصل
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6 h-[400px] flex flex-col">
              <div className="flex-1 space-y-4">
                {activeDemo === 'copilot' ? (
                  // Copilot Demo
                  <>
                    {demoStep >= 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3 text-sm max-w-[80%]">
                          كيف يمكنني إعداد روبوت محادثة جديد للعملاء؟
                        </div>
                      </motion.div>
                    )}

                    {demoStep >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <Brain className="h-4 w-4 text-[#2ca24c]" />
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 text-sm max-w-[80%]">
                          <p className="mb-2">بناءً على الوثائق المتوفرة، إليك خطوات إعداد روبوت محادثة جديد:</p>
                          <ol className="list-decimal list-inside space-y-1">
                            <li>انتقل إلى قسم "الروبوتات" في لوحة التحكم</li>
                            <li>انقر على "إنشاء روبوت جديد"</li>
                            <li>اختر قالب الروبوت المناسب</li>
                            <li>قم بتخصيص الردود والتدفقات</li>
                            <li>اختبر الروبوت قبل نشره</li>
                          </ol>
                          <p className="mt-2">هل تريد مزيداً من التفاصيل عن أي خطوة؟</p>
                        </div>
                      </motion.div>
                    )}
                  </>
                ) : (
                  // Customer Assistant Demo
                  <>
                    {demoStep >= 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3 text-sm max-w-[80%]">
                          كيف يمكنني استرجاع مبلغ طلبي؟
                        </div>
                      </motion.div>
                    )}

                    {demoStep >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-[#2ca24c]" />
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 text-sm max-w-[80%]">
                          <p>يمكنك طلب استرجاع المبلغ خلال 14 يوماً من تاريخ الشراء. إليك الخطوات:</p>
                          <ol className="list-decimal list-inside mt-2 space-y-1">
                            <li>ادخل إلى حسابك</li>
                            <li>اختر الطلب المراد استرجاعه</li>
                            <li>اضغط على "طلب استرجاع"</li>
                            <li>اتبع التعليمات لإكمال الطلب</li>
                          </ol>
                          <p className="mt-2">هل تريد المساعدة في تقديم طلب الاسترجاع؟</p>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </div>

              {/* Chat Input */}
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="اكتب سؤالك هنا..."
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2ca24c] focus:border-transparent"
                />
                <button className="bg-[#2ca24c] text-white p-2 rounded-lg">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Features Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              ذكاء اصطناعي متقدم
              <span className="block text-[#2ca24c]">لتجربة مستخدم أفضل</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              مساعد ذكي يتعلم من محتوى قاعدة المعرفة ويقدم إجابات دقيقة وشخصية لكل من العملاء والموظفين.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: BrainCircuit,
                  title: "تعلم مستمر",
                  description: "يتعلم المساعد تلقائياً من المحتوى الجديد والتفاعلات"
                },
                {
                  icon: Target,
                  title: "إجابات دقيقة",
                  description: "يقدم إجابات مخصصة بناءً على سياق السؤال"
                },
                {
                  icon: Lightbulb,
                  title: "اقتراحات ذكية",
                  description: "يقترح مقالات وحلول ذات صلة بشكل تلقائي"
                },
                {
                  icon: Rocket,
                  title: "تحسين مستمر",
                  description: "يتحسن أداء المساعد مع كل تفاعل جديد"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-green-100 p-2 rounded-lg">
                    <feature.icon className="h-6 w-6 text-[#2ca24c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#2ca24c]" />
                <span>مميزات الذكاء الاصطناعي</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "فهم اللغة الطبيعية بدقة عالية",
                  "التعلم المستمر من التفاعلات السابقة",
                  "تخصيص الإجابات حسب سياق المحادثة",
                  "دعم كامل للغة العربية",
                  "تكامل مع أنظمة إدارة المعرفة"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#2ca24c] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Integration Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "تحسين الإنتاجية",
              description: "وفر وقت الموظفين مع إجابات فورية ودقيقة",
              stats: ["50% وقت أقل في البحث", "30% تحسن في الإنتاجية"]
            },
            {
              icon: Users,
              title: "تحسين تجربة العملاء",
              description: "إجابات فورية على مدار الساعة لجميع الاستفسارات",
              stats: ["85% رضا العملاء", "24/7 دعم متواصل"]
            },
            {
              icon: Database,
              title: "إدارة المعرفة الذكية",
              description: "تحسين مستمر لقاعدة المعرفة بناءً على التفاعلات",
              stats: ["90% دقة في الإجابات", "تحديث تلقائي للمحتوى"]
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <benefit.icon className="h-8 w-8 text-[#2ca24c] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="space-y-2">
                {benefit.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2ca24c]" />
                    <span className="text-sm text-gray-700">{stat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
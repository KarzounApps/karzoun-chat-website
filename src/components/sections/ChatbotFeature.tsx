import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, ArrowRight, MessageSquare, User, 
  Sparkles, Zap, Brain, Settings, 
  CheckCircle2, Clock, Lightbulb
} from 'lucide-react';

// Mock conversation for the interactive demo
const mockConversation = [
  { 
    type: 'bot', 
    message: 'مرحباً! كيف يمكنني مساعدتك اليوم؟',
    options: ['استفسار عن المنتجات', 'حالة الطلب', 'الدعم الفني']
  },
  { 
    type: 'user', 
    message: 'أريد معرفة حالة طلبي رقم #45678' 
  },
  { 
    type: 'bot', 
    message: 'بالتأكيد! طلبك رقم #45678 في مرحلة الشحن وسيصل خلال يومين. هل تحتاج إلى مساعدة أخرى؟',
    options: ['تتبع الشحنة', 'تعديل الطلب', 'لا شكراً']
  }
];

export function ChatbotFeature() {
  const [activeTab, setActiveTab] = useState('visual');
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Simulate typing effect when moving to next message
  const handleNextStep = () => {
    if (currentStep < mockConversation.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTyping(false);
      }, 1000);
    } else {
      setCurrentStep(0); // Reset to beginning
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main content */}
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  روبوتات محادثة ذكية
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                صمم روبوت محادثة متطور في دقائق معدودة، بدون أي خبرة برمجية
              </p>
            </motion.div>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Interactive chatbot demo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                {/* Chat header */}
                <div className="bg-gray-700 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-blue-400" />
                    <span className="font-medium">مساعد كرزون</span>
                  </div>
                  <div className="w-6"></div> {/* Empty div for flex alignment */}
                </div>

                {/* Chat messages */}
                <div className="p-6 h-96 overflow-y-auto flex flex-col space-y-4">
                  {mockConversation.slice(0, currentStep + 1).map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] rounded-2xl p-4 ${
                        msg.type === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-gray-700 text-white rounded-tl-none'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          {msg.type === 'user' ? (
                            <>
                              <span className="font-medium">أنت</span>
                              <User className="h-4 w-4" />
                            </>
                          ) : (
                            <>
                              <Bot className="h-4 w-4 text-blue-400" />
                              <span className="font-medium">مساعد كرزون</span>
                            </>
                          )}
                        </div>
                        <p>{msg.message}</p>
                        
                        {/* Quick reply options */}
                        {msg.options && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {msg.options.map((option, i) => (
                              <button 
                                key={i}
                                onClick={handleNextStep}
                                className="text-xs bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded-full transition-colors"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-700 rounded-2xl rounded-tl-none p-4">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat input */}
                <div className="p-4 border-t border-gray-700 flex gap-2">
                  <input 
                    type="text" 
                    placeholder="اكتب رسالتك هنا..."
                    className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    onClick={handleNextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right side: Features and tabs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              {/* Tabs */}
              <div className="flex mb-8 bg-gray-800 rounded-lg p-1 max-w-md mx-auto">
                {[
                  { id: 'visual', label: 'بناء بصري', icon: Sparkles },
                  { id: 'ai', label: 'ذكاء اصطناعي', icon: Brain },
                  { id: 'templates', label: 'قوالب جاهزة', icon: Zap }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 flex-1 py-2 px-4 rounded-lg transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="space-y-6">
                {activeTab === 'visual' && (
                  <>
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-semibold">بناء بصري سهل</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        صمم روبوت المحادثة الخاص بك باستخدام واجهة السحب والإفلات البسيطة. لا حاجة لأي خبرة برمجية.
                      </p>
                      <ul className="space-y-2">
                        {[
                          'إنشاء مسارات محادثة متعددة',
                          'إضافة أزرار وخيارات سريعة',
                          'تخصيص الردود حسب سيناريوهات مختلفة'
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <Settings className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-semibold">تخصيص كامل</h3>
                      </div>
                      <p className="text-gray-300">
                        خصص مظهر وسلوك الروبوت ليتناسب مع هوية علامتك التجارية وأهدافك.
                      </p>
                    </div>
                  </>
                )}

                {activeTab === 'ai' && (
                  <>
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <Brain className="h-6 w-6 text-purple-400" />
                        <h3 className="text-xl font-semibold">قوة الذكاء الاصطناعي</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        استخدم قوة OpenAI مع كرزون للتعرف على نوع استفسارات العملاء وتوجيههم للمسار
                        الصحيح أو الرد على استفساراتهم بشكل مباشر.
                      </p>
                      <div className="bg-gray-700 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">
                          <Lightbulb className="h-5 w-5 text-yellow-400 inline mr-2" />
                          <span className="font-medium">نصيحة:</span> درّب الروبوت على معلومات شركتك للحصول على أفضل النتائج.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <MessageSquare className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-semibold">فهم اللغة الطبيعية</h3>
                      </div>
                      <p className="text-gray-300">
                        يفهم الروبوت اللغة العربية بشكل طبيعي ويستطيع التعامل مع مختلف الاستفسارات والطلبات.
                      </p>
                    </div>
                  </>
                )}

                {activeTab === 'templates' && (
                  <>
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <Zap className="h-6 w-6 text-yellow-400" />
                        <h3 className="text-xl font-semibold">قوالب جاهزة للاستخدام</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        ابدأ بسرعة باستخدام عشرات القوالب الجاهزة المصممة لمختلف الصناعات والاستخدامات.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          'خدمة العملاء',
                          'المبيعات',
                          'حجز المواعيد',
                          'الأسئلة الشائعة'
                        ].map((template, i) => (
                          <div key={i} className="bg-gray-700 p-3 rounded-lg text-center hover:bg-gray-600 cursor-pointer transition-colors">
                            <span className="text-sm">{template}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-semibold">توفير الوقت</h3>
                      </div>
                      <p className="text-gray-300">
                        لا يوجد لديك وقت؟ يمكنك طلب المساعدة من فريق دعم كرزون أو أحد شركائنا ليقوموا بالمهمة بدلاً عنك.
                      </p>
                      <div className="mt-4">
                        <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                          تواصل مع الدعم للحصول على المساعدة
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all"
                >
                  ابدأ بناء روبوت المحادثة الآن
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Clock, Gauge, MessagesSquare, 
  MessageSquare, Bot, BarChart, Users, 
  Facebook, Instagram, Mail, Send, 
  Smartphone, LineChart, PieChart, AreaChart,
  CheckCircle2, ArrowRight, Zap, Globe
} from 'lucide-react';

export function Details() {
  const [activeFeature, setActiveFeature] = useState('omnichannel');

  // Feature data
  const features = {
    omnichannel: {
      icon: MessageSquare,
      title: 'صندوق وارد متعدد المنصات',
      description: 'استقبل رسائل عملائك من خلال أشهر المنصات في لوحة واحدة',
      content: (
        <div className="bg-white rounded-xl h-full p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
              <MessageSquare className="h-8 w-8 text-google-blue" />
              <h3 className="text-xl font-semibold">صندوق وارد موحد</h3>
            </div>
            
            <div className="space-y-4 flex-grow">
              {/* Platform Icons */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm">
                  <MessageSquare className="h-4 w-4" />
                  <span>دردشة الموقع</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-sm">
                  <Send className="h-4 w-4" />
                  <span>واتساب</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm">
                  <Facebook className="h-4 w-4" />
                  <span>فيسبوك</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 text-purple-600 px-3 py-1.5 rounded-full text-sm">
                  <Instagram className="h-4 w-4" />
                  <span>انستغرام</span>
                </div>
                <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-sm">
                  <Mail className="h-4 w-4" />
                  <span>البريد الإلكتروني</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full text-sm">
                  <Globe className="h-4 w-4" />
                  <span>منصات أخرى</span>
                </div>
              </div>
              
              {/* Conversation Preview */}
              <div className="border border-gray-100 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">محادثة واتساب</span>
                  </div>
                  <div className="text-xs text-gray-500">قبل 5 دقائق</div>
                </div>
                
                <div className="p-4 space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm max-w-[80%] rounded-tr-none">
                      مرحباً، أريد الاستفسار عن المنتج الجديد الذي أعلنتم عنه
                    </div>
                  </div>
                  
                  <div className="flex gap-3 justify-end">
                    <div className="bg-blue-50 rounded-lg p-3 text-sm max-w-[80%] rounded-tl-none">
                      أهلاً بك! يسعدني تقديم كافة المعلومات عن المنتج الجديد. هل هناك جانب معين تود معرفة المزيد عنه؟
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs">
                      أنت
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>تواصل مع عملائك عبر جميع القنوات من مكان واحد، مع إمكانية تتبع المحادثات وتحويلها بين أعضاء الفريق بسهولة.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    monitoring: {
      icon: Clock,
      title: "متابعة على مدار الساعة",
      description: "استجابة فورية لاستفسارات العملاء في أي وقت مع نظام المراقبة المستمر",
      content: (
        <div className="bg-white rounded-xl h-full p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
              <Clock className="h-8 w-8 text-google-blue" />
              <h3 className="text-xl font-semibold">مراقبة المحادثات</h3>
            </div>
            
            <div className="space-y-4 flex-grow">
              {/* Monitoring Dashboard */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">لوحة المراقبة</h4>
                  <div className="text-xs text-gray-500">تحديث مباشر</div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">محادثات نشطة</div>
                    <div className="text-xl font-bold text-google-blue">24</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">في الانتظار</div>
                    <div className="text-xl font-bold text-yellow-500">7</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">وقت الاستجابة</div>
                    <div className="text-xl font-bold text-green-500">1.2 د</div>
                  </div>
                </div>
                
                {/* Agent Status */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 px-3 py-2 text-xs font-medium">حالة الوكلاء</div>
                  <div className="divide-y divide-gray-100">
                    <div className="flex items-center justify-between p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">أحمد محمد</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-500 text-xs">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        متصل
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">سارة أحمد</span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500 text-xs">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        مشغول
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">محمد علي</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                        غير متصل
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>راقب أداء فريقك وجودة خدمة العملاء في الوقت الفعلي، مع تنبيهات فورية للمحادثات التي تحتاج إلى اهتمام عاجل.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    ai: {
      icon: Brain,
      title: "ذكاء اصطناعي متقدم",
      description: "يتعلم النظام من كل تفاعل لتحسين الردود وتقديم تجربة أفضل للعملاء",
      content: (
        <div className="bg-white rounded-xl h-full p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
              <Brain className="h-8 w-8 text-google-blue" />
              <h3 className="text-xl font-semibold">مساعد ذكي</h3>
            </div>
            
            <div className="space-y-4 flex-grow">
              {/* AI Chat Interface */}
              <div className="border border-gray-100 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex items-center gap-2">
                  <Bot className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">مساعد كرزون الذكي</span>
                </div>
                
                <div className="p-4 space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm max-w-[80%] rounded-tr-none">
                      أريد معرفة كيفية إعداد حملة تسويقية فعالة لمنتجنا الجديد
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-sm max-w-[80%] rounded-tl-none">
                      <p className="mb-2">بالتأكيد! لإعداد حملة تسويقية فعالة، أنصح باتباع هذه الخطوات:</p>
                      <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>تحديد الجمهور المستهدف بدقة</li>
                        <li>وضع أهداف واضحة وقابلة للقياس</li>
                        <li>اختيار القنوات المناسبة للوصول إلى جمهورك</li>
                        <li>إعداد محتوى جذاب يركز على فوائد المنتج</li>
                        <li>تحديد ميزانية مناسبة وتوزيعها بشكل استراتيجي</li>
                      </ol>
                      <p className="mt-2">هل تريد مساعدة في أي من هذه الخطوات تحديداً؟</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Features */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium">فهم اللغة الطبيعية</span>
                  </div>
                  <p className="text-xs text-gray-600">يفهم استفسارات العملاء بلغتهم الطبيعية</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">ردود مخصصة</span>
                  </div>
                  <p className="text-xs text-gray-600">يتعلم من التفاعلات السابقة لتحسين الردود</p>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>استفد من قوة الذكاء الاصطناعي لتقديم تجربة مخصصة لكل عميل، مع تحسين مستمر للردود بناءً على التفاعلات السابقة.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    analytics: {
      icon: Gauge,
      title: "تحليلات متقدمة",
      description: "رؤى تفصيلية عن أداء خدمة العملاء وتحليل اتجاهات التواصل",
      content: (
        <div className="bg-white rounded-xl h-full p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
              <BarChart className="h-8 w-8 text-google-blue" />
              <h3 className="text-xl font-semibold">تحليلات متقدمة</h3>
            </div>
            
            <div className="space-y-4 flex-grow">
              {/* Analytics Dashboard */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">لوحة التحليلات</h4>
                  <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    آخر 30 يوم
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">رضا العملاء</div>
                    <div className="text-xl font-bold text-green-500">94%</div>
                    <div className="text-xs text-green-600">↑ 3.2%</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">وقت الحل</div>
                    <div className="text-xl font-bold text-google-blue">4.5 د</div>
                    <div className="text-xs text-green-600">↓ 12%</div>
                  </div>
                </div>
                
                {/* Charts */}
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-medium">توزيع المحادثات حسب القناة</div>
                      <PieChart className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-16 flex items-end gap-1">
                      <div className="h-full w-1/5 bg-green-500 rounded-t"></div>
                      <div className="h-[80%] w-1/5 bg-blue-500 rounded-t"></div>
                      <div className="h-[60%] w-1/5 bg-purple-500 rounded-t"></div>
                      <div className="h-[40%] w-1/5 bg-yellow-500 rounded-t"></div>
                      <div className="h-[20%] w-1/5 bg-red-500 rounded-t"></div>
                    </div>
                    <div className="flex text-xs text-gray-500 justify-between mt-1">
                      <span>واتساب</span>
                      <span>فيسبوك</span>
                      <span>انستغرام</span>
                      <span>دردشة</span>
                      <span>بريد</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-medium">اتجاهات المحادثات</div>
                      <LineChart className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-16 relative">
                      <div className="absolute inset-0 flex items-end">
                        <div className="flex-1 h-[30%] bg-blue-100"></div>
                        <div className="flex-1 h-[50%] bg-blue-100"></div>
                        <div className="flex-1 h-[40%] bg-blue-100"></div>
                        <div className="flex-1 h-[70%] bg-blue-100"></div>
                        <div className="flex-1 h-[60%] bg-blue-100"></div>
                        <div className="flex-1 h-[80%] bg-blue-100"></div>
                        <div className="flex-1 h-[90%] bg-blue-100"></div>
                      </div>
                      <div className="absolute inset-0 flex items-end">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                          <path 
                            d="M0,70 L14.28,50 L28.57,60 L42.85,30 L57.14,40 L71.42,20 L100,10" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>احصل على رؤى تفصيلية عن أداء خدمة العملاء، مع تقارير قابلة للتخصيص ولوحات تحكم تفاعلية لاتخاذ قرارات مدروسة.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  // Map feature keys to their respective IDs
  const featureMap = {
    'صندوق وارد متعدد المنصات': 'omnichannel',
    'متابعة على مدار الساعة': 'monitoring',
    'ذكاء اصطناعي متقدم': 'ai',
    'تحليلات متقدمة': 'analytics'
  };

  // Handle feature click
  const handleFeatureClick = (title) => {
    const featureId = featureMap[title];
    if (featureId) {
      setActiveFeature(featureId);
    }
  };

  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            تجربة متكاملة لإدارة التواصل مع العملاء
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            نظام متطور يجمع بين الذكاء الاصطناعي وسهولة الاستخدام لتحسين تجربة عملائك
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
                <div className="h-full w-full object-cover p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {features[activeFeature].content}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 gap-8"
            >
              {Object.values(features).map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  onClick={() => handleFeatureClick(feature.title)}
                  className={`relative rounded-2xl p-6 shadow-sm border transition-all cursor-pointer ${
                    activeFeature === Object.keys(features)[index]
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-white border-gray-100 hover:border-blue-100 hover:bg-blue-50/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <feature.icon className={`h-8 w-8 ${
                      activeFeature === Object.keys(features)[index]
                        ? 'text-google-blue'
                        : 'text-gray-400'
                    }`} />
                    <h3 className={`text-lg font-semibold ${
                      activeFeature === Object.keys(features)[index]
                        ? 'text-google-blue'
                        : 'text-gray-900'
                    }`}>{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                  
                  {activeFeature === Object.keys(features)[index] && (
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-50 border-l border-t border-blue-200 transform rotate-45"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
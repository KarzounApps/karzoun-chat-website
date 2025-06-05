import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Users, Bot, Zap, Settings, 
  Globe, Shield, Clock, CheckCircle2, ArrowRight,
  Smartphone, Laptop, Headphones, BarChart, Code,
  PieChart, BellRing, Sparkles, Palette, Layout,
  Layers, Lock, Key, Database, RefreshCw
} from 'lucide-react';

// Sample chat messages for the demo
const demoMessages = [
  { type: 'visitor', message: 'مرحباً، لدي استفسار عن خدماتكم' },
  { type: 'agent', message: 'أهلاً بك! كيف يمكنني مساعدتك اليوم؟' },
  { type: 'visitor', message: 'ما هي باقات الاشتراك المتوفرة لديكم؟' },
  { type: 'agent', message: 'لدينا عدة باقات تناسب مختلف احتياجات العملاء. هل تود معرفة المزيد عن باقة معينة؟' }
];

export function LiveChat() {
  const [activeTab, setActiveTab] = useState('overview');
  const [demoMessageIndex, setDemoMessageIndex] = useState(0);

  // Auto-advance demo messages
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDemoMessageIndex((prev) => (prev + 1) % demoMessages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-10"></div>
          <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                محادثة مباشرة للموقع
                <span className="block text-google-blue mt-2">تجربة دردشة متطورة</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                قدم تجربة دردشة مباشرة متميزة لزوار موقعك مع ميزات متقدمة وتخصيص كامل
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-google-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                  ابدأ الآن مجاناً
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                  عرض توضيحي
                </button>
              </div>
            </motion.div>
          </div>

          {/* Live Chat Demo */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-medium">متصل الآن</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>وقت الرد: 30 ثانية</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 h-80 overflow-y-auto">
                <div className="space-y-4">
                  {demoMessages.slice(0, demoMessageIndex + 1).map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.type === 'visitor' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] rounded-2xl p-4 ${
                        msg.type === 'visitor' 
                          ? 'bg-google-blue text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {msg.message}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="اكتب رسالتك هنا..."
                    className="flex-1 bg-gray-100 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-google-blue"
                  />
                  <button className="bg-google-blue text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              ميزات متقدمة لتجربة دردشة مثالية
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              كل ما تحتاجه لتقديم تجربة دردشة احترافية لعملائك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "تعدد المشغلين",
                description: "دعم لعدة مشغلين في نفس الوقت مع إدارة الصلاحيات"
              },
              {
                icon: Bot,
                title: "الرد الآلي",
                description: "روبوتات ذكية للرد على الاستفسارات الشائعة"
              },
              {
                icon: Globe,
                title: "دعم متعدد اللغات",
                description: "واجهة متعددة اللغات لدعم عملاء عالميين"
              },
              {
                icon: Shield,
                title: "حماية متقدمة",
                description: "تشفير من طرف إلى طرف وحماية ضد البريد المزعج"
              },
              {
                icon: BarChart,
                title: "تحليلات شاملة",
                description: "تقارير تفصيلية عن أداء خدمة العملاء"
              },
              {
                icon: Smartphone,
                title: "تطبيق جوال",
                description: "تطبيقات iOS وAndroid للرد من أي مكان"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <feature.icon className="h-8 w-8 text-google-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Features */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Feature Tabs */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            {[
              { id: 'overview', label: 'نظرة عامة', icon: Layout },
              { id: 'customization', label: 'تخصيص', icon: Palette },
              { id: 'automation', label: 'أتمتة', icon: Zap },
              { id: 'security', label: 'الأمان', icon: Shield },
              { id: 'analytics', label: 'التحليلات', icon: BarChart }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-google-blue text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6">
                    محادثة مباشرة متطورة لموقعك
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      قدم تجربة دردشة احترافية لزوار موقعك مع ميزات متقدمة تساعدك على تحسين خدمة العملاء وزيادة المبيعات.
                    </p>
                    <div className="space-y-4">
                      {[
                        "واجهة سهلة الاستخدام ومتجاوبة مع جميع الأجهزة",
                        "دعم للمحادثات الجماعية وتحويل المحادثات",
                        "تكامل مع أنظمة CRM وأدوات الأعمال",
                        "إعدادات متقدمة للتخصيص والمظهر"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-6"
                >
                  {/* Overview visualization */}
                  <div className="aspect-video bg-gray-50 rounded-lg"></div>
                </motion.div>
              </>
            )}

            {/* Customization Tab */}
            {activeTab === 'customization' && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6">
                    خيارات تخصيص شاملة
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      خصص شكل ومظهر المحادثة المباشرة لتتناسب مع هوية علامتك التجارية.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Palette, title: "تخصيص الألوان" },
                        { icon: Layout, title: "تخطيطات متعددة" },
                        { icon: Layers, title: "قوالب جاهزة" },
                        { icon: Settings, title: "إعدادات متقدمة" }
                      ].map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                          <item.icon className="h-6 w-6 text-google-blue mb-2" />
                          <h4 className="font-medium">{item.title}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-6"
                >
                  {/* Customization preview */}
                  <div className="aspect-video bg-gray-50 rounded-lg"></div>
                </motion.div>
              </>
            )}

            {/* Automation Tab */}
            {activeTab === 'automation' && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6">
                    أتمتة ذكية للمحادثات
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      استخدم الذكاء الاصطناعي والأتمتة لتحسين كفاءة خدمة العملاء.
                    </p>
                    <div className="space-y-4">
                      {[
                        { icon: Bot, title: "روبوتات محادثة ذكية" },
                        { icon: Zap, title: "ردود تلقائية" },
                        { icon: RefreshCw, title: "توجيه تلقائي" },
                        { icon: Clock, title: "جدولة الرسائل" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <item.icon className="h-5 w-5 text-google-blue" />
                          </div>
                          <span className="font-medium">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-6"
                >
                  {/* Automation visualization */}
                  <div className="aspect-video bg-gray-50 rounded-lg"></div>
                </motion.div>
              </>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6">
                    حماية وأمان متقدم
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      حماية قوية لبيانات المحادثات وخصوصية المستخدمين.
                    </p>
                    <div className="space-y-4">
                      {[
                        { icon: Lock, title: "تشفير من طرف إلى طرف" },
                        { icon: Key, title: "مصادقة متعددة العوامل" },
                        { icon: Database, title: "نسخ احتياطي آمن" },
                        { icon: Shield, title: "حماية ضد التهديدات" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <item.icon className="h-5 w-5 text-green-600" />
                          </div>
                          <span className="font-medium">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-6"
                >
                  {/* Security visualization */}
                  <div className="aspect-video bg-gray-50 rounded-lg"></div>
                </motion.div>
              </>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6">
                    تحليلات وتقارير متقدمة
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      تحليلات شاملة لفهم أداء خدمة العملاء وتحسين تجربة المستخدم.
                    </p>
                    <div className="space-y-4">
                      {[
                        { icon: BarChart, title: "تقارير الأداء" },
                        { icon: PieChart, title: "تحليل المحادثات" },
                        { icon: Users, title: "تقييم المشغلين" },
                        { icon: BellRing, title: "تنبيهات مخصصة" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <item.icon className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="font-medium">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-6"
                >
                  {/* Analytics visualization */}
                  <div className="aspect-video bg-gray-50 rounded-lg"></div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              تكامل سلس مع أدواتك المفضلة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ربط سهل مع مختلف الأنظمة والتطبيقات لتحسين سير العمل
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Salesforce", "HubSpot", "Zendesk", "Slack",
              "Microsoft Teams", "Shopify", "WooCommerce", "Intercom"
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center"
              >
                <span className="font-medium text-gray-700">{platform}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="text-google-blue hover:text-blue-700 font-medium inline-flex items-center">
              اكتشف المزيد من التكاملات
              <ArrowRight className="h-4 w-4 mr-1" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            جاهز لتحسين تواصلك مع العملاء؟
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            ابدأ الآن مع فترة تجريبية مجانية لمدة 14 يوماً. لا يلزم بطاقة ائتمان.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
              جدولة عرض توضيحي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
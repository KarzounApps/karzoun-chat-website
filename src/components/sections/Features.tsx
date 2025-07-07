import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  GitBranch,
  MessageSquare,
  Settings,
  Users,
  Zap,
  Send,
  Smartphone,
  Mail,
  Facebook,
  Instagram,
  Calendar,
  Clock,
  BarChart,
  PieChart,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Globe,
  Database,
  Layers,
  BrainCircuit,
  Workflow,
  Sparkles,
  Lightbulb,
  Rocket,
} from "lucide-react";

export function Features() {
  const [activeFeature, setActiveFeature] = useState("campaigns");

  // Feature data
  const features = {
    integrations: {
      icon: Globe,
      title: "متجر التطبيقات والتكامل",
      description: "قم بالتكامل مع منصاتك المفضلة بنقرة زر، احصل على تجربة تكامل ديناميكي ومتقدمة",
      content: (
        <div className="bg-white rounded-xl h-full p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
              <Globe className="h-8 w-8 text-google-blue" />
              <h3 className="text-xl font-semibold">متجر التطبيقات والتكامل</h3>
            </div>

            <div className="space-y-6 flex-grow">
              {/* App Store Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">التطبيقات المتاحة</h4>
                  <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">100+ تطبيق</div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {/* Integration Cards */}
                  {[
                    {
                      name: "Shopify",
                      icon: "/brands/features/shopify.png",
                      category: "متاجر إلكترونية",
                    },
                    {
                      name: "Salesforce",
                      icon: "/brands/features/salesforce.webp",
                      category: "CRM",
                    },
                    { name: "HubSpot", icon: "/brands/features/hubSpot.svg", category: "تسويق" },
                    { name: "Stripe", icon: "/brands/features/stripe.jpeg", category: "مدفوعات" },
                    {
                      name: "Slack",
                      icon: "/brands/features/slack.webp",
                      category: "تواصل",
                    },
                    {
                      name: "Google Analytics",
                      icon: "/brands/features/Google-analytics.png",
                      category: "تحليلات",
                    },
                  ].map((app, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-100 rounded-lg p-3 flex flex-col items-center shadow-sm"
                    >
                      <img src={app.icon} alt={app.name} className="h-12 mb-0" />
                      <div className="text-xs font-medium text-center">{app.name}</div>
                      <div className="text-[10px] text-gray-500">{app.category}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration Features */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">تكامل بنقرة واحدة</span>
                  </div>
                  <p className="text-xs text-gray-600">ربط سريع مع التطبيقات الشائعة</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">API مرن</span>
                  </div>
                  <p className="text-xs text-gray-600">واجهة برمجية قوية للتكاملات المخصصة</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">مزامنة فورية</span>
                  </div>
                  <p className="text-xs text-gray-600">مزامنة البيانات في الوقت الفعلي</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">تكامل ثنائي الاتجاه</span>
                  </div>
                  <p className="text-xs text-gray-600">تبادل البيانات في كلا الاتجاهين</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>
                  قم بالتكامل مع منصاتك المفضلة بنقرة زر. احصل على تجربة تكامل ديناميكي ومتقدمة لم ترى لها مثيل من قبل.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    campaigns: {
      icon: MessageSquare,
      title: "الحملات التسويقية المباشرة",
      description: "استهدف عملائك برسائل تسويقية مباشرة بهدف التأثير على التفاعل وزيادة المبيعات",
      content: (
        <div className="bg-white rounded-xl h-full p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
              <MessageSquare className="h-8 w-8 text-google-blue" />
              <h3 className="text-xl font-semibold">حملات تسويقية متعددة القنوات</h3>
            </div>

            <div className="space-y-6 flex-grow">
              {/* Campaign Builder Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">منشئ الحملات</h4>
                  <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">جديد</div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-white p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Send className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">حملة العروض الأسبوعية</div>
                        <div className="text-xs text-gray-500">آخر تحديث: قبل 2 ساعة</div>
                      </div>
                      <div className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">نشطة</div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <div className="text-xs text-gray-500">المستلمون</div>
                        <div className="font-medium">1,245</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <div className="text-xs text-gray-500">معدل الفتح</div>
                        <div className="font-medium">42%</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <div className="text-xs text-gray-500">معدل النقر</div>
                        <div className="font-medium">18%</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4">
                    <div className="text-sm font-medium mb-2">قنوات الإرسال</div>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                        <Send className="h-3 w-3" />
                        <span>واتساب</span>
                      </div>
                      <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        <Mail className="h-3 w-3" />
                        <span>بريد إلكتروني</span>
                      </div>
                      <div className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs">
                        <Smartphone className="h-3 w-3" />
                        <span>رسائل SMS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campaign Features */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">استهداف دقيق</span>
                  </div>
                  <p className="text-xs text-gray-600">استهدف العملاء بناءً على سلوكهم وتفضيلاتهم</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">جدولة ذكية</span>
                  </div>
                  <p className="text-xs text-gray-600">جدولة الحملات في أوقات التفاعل المثالية</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">تحليلات متقدمة</span>
                  </div>
                  <p className="text-xs text-gray-600">قياس أداء الحملات بتقارير تفصيلية</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">ردود آلية</span>
                  </div>
                  <p className="text-xs text-gray-600">إعداد ردود آلية على استجابات العملاء</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>
                  أنشئ حملات تسويقية مستهدفة عبر قنوات متعددة وتتبع أدائها في الوقت الفعلي. حدد العملاء المستهدفين
                  وانطلق ببساطة.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    journeys: {
      icon: Workflow,
      title: "رحلات الإستهداف المؤتمتة",
      description: "قم بأتمتة رحلات تسويقية لعملائك واترك الباقي لكرزون شات ليقوم بإدراج العملاء ضمن الحملات تلقائياً",
      content: (
        <div className="bg-white rounded-xl h-full p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
              <Workflow className="h-8 w-8 text-google-blue" />
              <h3 className="text-xl font-semibold">رحلات العملاء الآلية</h3>
            </div>

            <div className="space-y-6 flex-grow">
              {/* Journey Flow Visualization */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">مخطط رحلة العميل</h4>
                  <div className="text-xs text-gray-500">عرض توضيحي</div>
                </div>

                <div className="relative h-64 border border-gray-200 rounded-lg bg-white p-4">
                  {/* Start Node */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-100 border border-green-200 rounded-lg p-3 w-40 text-center">
                      <div className="text-xs font-medium text-green-800 mb-1">بداية الرحلة</div>
                      <div className="text-xs text-green-700">تسجيل عميل جديد</div>
                    </div>
                    <div className="h-8 w-0.5 bg-gray-300 mx-auto"></div>
                  </div>

                  {/* Decision Node */}
                  <div className="absolute top-24 right-4">
                    <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-3 w-40 text-center">
                      <div className="text-xs font-medium text-yellow-800 mb-1">شرط</div>
                      <div className="text-xs text-yellow-700">هل أكمل الملف الشخصي؟</div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="text-xs text-gray-500">لا</div>
                      <div className="text-xs text-gray-500">نعم</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-8 w-0.5 bg-gray-300 mr-8"></div>
                      <div className="h-8 w-0.5 bg-gray-300 ml-8"></div>
                    </div>
                  </div>

                  {/* Action Nodes */}
                  <div className="absolute bottom-4 right-24">
                    <div className="bg-blue-100 border border-blue-200 rounded-lg p-3 w-40 text-center">
                      <div className="text-xs font-medium text-blue-800 mb-1">إجراء</div>
                      <div className="text-xs text-blue-700">إرسال رسالة ترحيب</div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-[280px]">
                    <div className="bg-purple-100 border border-purple-200 rounded-lg p-3 w-40 text-center">
                      <div className="text-xs font-medium text-purple-800 mb-1">إجراء</div>
                      <div className="text-xs text-purple-700">تذكير بإكمال الملف</div>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                    <path d="M180,80 L180,100" stroke="#D1D5DB" strokeWidth="2" fill="none" />
                    <path d="M160,140 L120,180" stroke="#D1D5DB" strokeWidth="2" fill="none" />
                    <path d="M200,140 L240,180" stroke="#D1D5DB" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Journey Features */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">شروط ذكية</span>
                  </div>
                  <p className="text-xs text-gray-600">تحديد مسارات مختلفة بناءً على سلوك العميل</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">تأخير زمني</span>
                  </div>
                  <p className="text-xs text-gray-600">إضافة فترات انتظار بين الخطوات</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">رحلات متداخلة</span>
                  </div>
                  <p className="text-xs text-gray-600">إنشاء رحلات معقدة متعددة المستويات</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">تحديث البيانات</span>
                  </div>
                  <p className="text-xs text-gray-600">تحديث بيانات العملاء تلقائياً خلال الرحلة</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>
                  قم بأتمتة رحلات تسويقية لعملائك واترك الباقي لكرزون شات ليقوم بإدراج العملاء ضمن الحملات تلقائياً
                  بإستخدام الذكاء الصناعي حسب شروطك الخاصة.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    copilot: {
      icon: BrainCircuit,
      title: "المساعد الخاص copilot",
      description: "خصصنا لكم مساعد ذكي خاص ليقوم بمساعدتكم مع مختلف مميزات كرزون شات",
      content: (
        <div className="bg-white rounded-xl h-full p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
              <BrainCircuit className="h-8 w-8 text-google-blue" />
              <h3 className="text-xl font-semibold">المساعد الذكي Copilot</h3>
            </div>

            <div className="space-y-6 flex-grow">
              {/* Copilot Chat Interface */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">مساعدك الشخصي</h4>
                  <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">مدعوم بالذكاء الاصطناعي</div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex items-center gap-2">
                    <Bot className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">كرزون كوبايلوت</span>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 text-sm max-w-[80%] rounded-tl-none">
                        <p>مرحباً! أنا مساعدك الشخصي. كيف يمكنني مساعدتك اليوم؟</p>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <div className="bg-blue-50 rounded-lg p-3 text-sm max-w-[80%] rounded-tr-none">
                        <p>كيف يمكنني إنشاء حملة تسويقية جديدة؟</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs">
                        أنت
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 text-sm max-w-[80%] rounded-tl-none">
                        <p>بالتأكيد! لإنشاء حملة تسويقية جديدة، اتبع هذه الخطوات:</p>
                        <ol className="list-decimal list-inside mt-2 space-y-1">
                          <li>انتقل إلى قسم &quot;الحملات&quot; من القائمة الرئيسية</li>
                          <li>انقر على زر &quot;إنشاء حملة جديدة&quot;</li>
                          <li>اختر نوع الحملة (بريد إلكتروني، رسائل نصية، إلخ)</li>
                          <li>حدد الجمهور المستهدف</li>
                          <li>قم بإعداد محتوى الحملة</li>
                        </ol>
                        <p className="mt-2">هل تريد مني إنشاء حملة نموذجية لك؟</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border-t border-gray-100 flex gap-2">
                    <input
                      type="text"
                      placeholder="اكتب سؤالك هنا..."
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                    <button className="bg-google-blue text-white p-2 rounded-lg">
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Copilot Features */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">مساعدة ذكية</span>
                  </div>
                  <p className="text-xs text-gray-600">إرشادات وتوصيات مخصصة لاحتياجاتك</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">اقتراحات تلقائية</span>
                  </div>
                  <p className="text-xs text-gray-600">اقتراحات ذكية بناءً على بياناتك</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">تخصيص المساعد</span>
                  </div>
                  <p className="text-xs text-gray-600">تدريب المساعد على بيانات شركتك</p>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="h-4 w-4 text-google-blue" />
                    <span className="text-sm font-medium">إجراءات سريعة</span>
                  </div>
                  <p className="text-xs text-gray-600">تنفيذ المهام مباشرة من المحادثة</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>
                  خصصنا لكم مساعد ذكي خاص ليقوم بمساعدتكم مع مختلف مميزات كرزون شات. يمكنك أيضاً خلق وتدريب المساعد
                  الافتراضي الخاص بك وموظفيك حسب بنك معلوماتك.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  // Map feature keys to their respective IDs
  const featureMap = {
    "متجر التطبيقات والتكامل": "integrations",
    "الحملات التسويقية المباشرة": "campaigns",
    "رحلات الإستهداف المؤتمتة": "journeys",
    "المساعد الخاص copilot": "copilot",
  };

  // Handle feature click
  const handleFeatureClick = (title: string) => {
    const featureId = featureMap[title as keyof typeof featureMap];
    if (featureId) {
      setActiveFeature(featureId);
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            أتمتة ذكية لتجربة عملاء استثنائية
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            صمم تدفقات أتمتة متقدمة بسهولة مع محرك الأتمتة المرئي. أرسل رسائل مخصصة، أتمم المهام المتكررة، وقدم تجربة
            شخصية لكل عميل.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="p-8">
              <div className="flex gap-4 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div whileHover={{ scale: 1.02 }} className="col-span-2 rounded-xl bg-gray-50 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <GitBranch className="h-6 w-6 text-google-blue" />
                    <h3 className="text-lg font-semibold">لوحة التدفق</h3>
                  </div>

                  <div className="aspect-video bg-white rounded-lg shadow-inner border border-gray-100 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full"
                      >
                        {features[activeFeature as keyof typeof features].content}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {Object.values(features).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => handleFeatureClick(feature.title)}
                      className={`rounded-lg p-4 cursor-pointer transition-all ${
                        activeFeature === Object.keys(features)[index]
                          ? "bg-blue-50 border border-blue-200 shadow-sm"
                          : "bg-white border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30"
                      }`}
                    >
                      <feature.icon
                        className={`h-5 w-5 mb-2 ${
                          activeFeature === Object.keys(features)[index] ? "text-google-blue" : "text-gray-400"
                        }`}
                      />
                      <h4
                        className={`font-medium ${
                          activeFeature === Object.keys(features)[index] ? "text-google-blue" : "text-gray-900"
                        }`}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

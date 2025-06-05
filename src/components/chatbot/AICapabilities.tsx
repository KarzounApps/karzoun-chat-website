import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, MessageSquare, Zap, FileText, ArrowRight, CheckCircle2, Sparkles, Settings, Play, Braces, Users, Database, Lock, Shield, Code, Search, BookOpen, PenTool, Lightbulb, Star, BarChart, Layers, RefreshCw, Gauge, AlertCircle, FileCheck, UserCheck, MessagesSquare, BrainCircuit, Workflow, Cpu, GitBranch, Keyboard, Rocket, ChevronRight, ChevronLeft, Send, Clock, User, Wand2, Repeat, Fingerprint, Eye, Network, Target, Blocks, Loader2, Maximize2, Minimize2, Expand, Shrink, Info, Waves, Orbit, Atom, Infinity, Radar, Printer as Prism, Tag } from 'lucide-react';

export function AICapabilities() {
  const [activeFeature, setActiveFeature] = useState('intent');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  
  // Auto-advance animation steps
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        if (animationStep < 3) {
          setAnimationStep(prev => prev + 1);
        } else {
          setIsAnimating(false);
          setAnimationStep(0);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, animationStep]);

  // AI features data
  const features = {
    intent: {
      title: "تحليل النوايا",
      icon: Target,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      description: "يحدد نوايا العملاء ويوجههم للمسار المناسب تلقائياً",
      benefits: [
        "فهم دقيق لاحتياجات العملاء",
        "توجيه المحادثة للمسار الصحيح",
        "تقليل وقت الانتظار",
        "تحسين تجربة العملاء"
      ],
      animation: (step) => (
        <div className="h-full flex flex-col justify-center items-center">
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <p className="text-sm">أريد معرفة حالة طلبي رقم #45678</p>
            </motion.div>
          )}
          
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-blue-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">تحليل النية</span>
              </div>
              <p className="text-xs text-blue-700">تم تحديد النية: استعلام عن حالة طلب</p>
              <p className="text-xs text-blue-700">الثقة: 95%</p>
            </motion.div>
          )}
          
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Workflow className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">توجيه المسار</span>
              </div>
              <p className="text-xs text-green-700">تم توجيه المحادثة إلى: مسار متابعة الطلبات</p>
            </motion.div>
          )}
          
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-purple-100 rounded-lg p-3 max-w-[80%]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Bot className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">الرد الآلي</span>
              </div>
              <p className="text-xs text-purple-700">طلبك رقم #45678 في مرحلة الشحن وسيصل خلال 24-48 ساعة. هل تحتاج إلى مساعدة أخرى؟</p>
            </motion.div>
          )}
        </div>
      )
    },
    sentiment: {
      title: "تحليل المشاعر",
      icon: Heart,
      color: "bg-red-100",
      textColor: "text-red-600",
      description: "يحلل مشاعر العملاء ويكيف الردود وفقاً لحالتهم العاطفية",
      benefits: [
        "فهم مشاعر العملاء",
        "تكييف نبرة الرد حسب الحالة",
        "تحديد العملاء المحبطين",
        "تحسين رضا العملاء"
      ],
      animation: (step) => (
        <div className="h-full flex flex-col justify-center items-center">
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <p className="text-sm">للأسف لم يصل طلبي حتى الآن رغم مرور أسبوع على الموعد المحدد! هذه تجربة سيئة جداً.</p>
            </motion.div>
          )}
          
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium text-red-800">تحليل المشاعر</span>
              </div>
              <p className="text-xs text-red-700">المشاعر المكتشفة: إحباط/غضب</p>
              <p className="text-xs text-red-700">مستوى السلبية: مرتفع (85%)</p>
            </motion.div>
          )}
          
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-yellow-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">تنبيه أولوية</span>
              </div>
              <p className="text-xs text-yellow-700">تم رفع أولوية المحادثة: عالية</p>
              <p className="text-xs text-yellow-700">إجراء: تعويض العميل + اعتذار</p>
            </motion.div>
          )}
          
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-purple-100 rounded-lg p-3 max-w-[80%]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Bot className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">الرد المخصص</span>
              </div>
              <p className="text-xs text-purple-700">نعتذر بشدة عن هذا التأخير غير المقبول. سنقوم بتعويضك بقسيمة خصم بقيمة 20% على طلبك القادم. سيتم إرسال الطلب بشكل عاجل خلال 24 ساعة. هل يمكنني مساعدتك بأي شيء آخر؟</p>
            </motion.div>
          )}
        </div>
      )
    },
    completion: {
      title: "إكمال تلقائي",
      icon: Sparkles,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      description: "يقترح ويكمل الردود أثناء الكتابة لتوفير الوقت",
      benefits: [
        "توفير وقت الموظفين",
        "ضمان اتساق الردود",
        "تقليل الأخطاء الكتابية",
        "زيادة سرعة الاستجابة"
      ],
      animation: (step) => (
        <div className="h-full flex flex-col justify-center items-center">
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <p className="text-sm">كيف يمكنني إرجاع منتج تالف؟</p>
            </motion.div>
          )}
          
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white border border-gray-200 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-800">الموظف يكتب...</span>
              </div>
              <p className="text-xs text-gray-700">يمكنك إرجاع المنتج</p>
            </motion.div>
          )}
          
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-purple-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">اقتراح الإكمال</span>
              </div>
              <p className="text-xs text-purple-700">
                <span className="text-gray-700">يمكنك إرجاع المنتج</span>
                <span className="text-purple-700"> التالف خلال 14 يوماً من تاريخ الاستلام. يرجى اتباع الخطوات التالية:
                1. تصوير المنتج التالف
                2. تعبئة نموذج الإرجاع من حسابك
                3. التواصل مع خدمة التوصيل لاستلام المنتج</span>
              </p>
            </motion.div>
          )}
          
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-100 rounded-lg p-3 max-w-[80%]"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">تم قبول الاقتراح</span>
              </div>
              <p className="text-xs text-green-700">تم إرسال الرد المقترح بنجاح</p>
            </motion.div>
          )}
        </div>
      )
    },
    summary: {
      title: "تلخيص المحادثات",
      icon: FileText,
      color: "bg-green-100",
      textColor: "text-green-600",
      description: "يلخص المحادثات ويضيف ملاحظات لملف العميل",
      benefits: [
        "توفير وقت مراجعة المحادثات",
        "استخلاص النقاط المهمة",
        "تحديث ملف العميل تلقائياً",
        "تسهيل متابعة المحادثات السابقة"
      ],
      animation: (step) => (
        <div className="h-full flex flex-col justify-center items-center">
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-800">محادثة طويلة (25+ رسالة)</span>
              </div>
              <p className="text-xs text-gray-700">العميل: استفسر عن المنتج الجديد...</p>
              <p className="text-xs text-gray-700">الموظف: شرح مواصفات المنتج...</p>
              <p className="text-xs text-gray-700">العميل: سأل عن الألوان المتوفرة...</p>
              <p className="text-xs text-gray-700">الموظف: أوضح الألوان والأحجام...</p>
              <p className="text-xs text-gray-700">العميل: طلب معلومات عن التوصيل...</p>
              <p className="text-xs text-gray-700">...</p>
            </motion.div>
          )}
          
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">تلخيص المحادثة</span>
              </div>
              <p className="text-xs text-green-700 font-medium">ملخص المحادثة:</p>
              <ul className="text-xs text-green-700 list-disc list-inside space-y-1 mt-1">
                <li>استفسر العميل عن المنتج الجديد ومواصفاته</li>
                <li>أبدى اهتماماً باللون الأزرق مقاس XL</li>
                <li>طلب معلومات عن التوصيل للرياض</li>
                <li>استفسر عن إمكانية الدفع عند الاستلام</li>
                <li>وعد بالتفكير واتخاذ قرار الشراء خلال يومين</li>
              </ul>
            </motion.div>
          )}
          
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-blue-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Tag className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">تصنيف العميل</span>
              </div>
              <p className="text-xs text-blue-700">تصنيفات مقترحة:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full">عميل محتمل</span>
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full">مهتم بالملابس الرياضية</span>
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full">يفضل اللون الأزرق</span>
              </div>
            </motion.div>
          )}
          
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-yellow-100 rounded-lg p-3 max-w-[80%]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">إجراءات المتابعة</span>
              </div>
              <p className="text-xs text-yellow-700">إجراءات مقترحة:</p>
              <ul className="text-xs text-yellow-700 list-disc list-inside space-y-1 mt-1">
                <li>متابعة العميل بعد يومين</li>
                <li>إرسال عرض خاص على الملابس الرياضية</li>
                <li>تقديم خصم 10% على الطلب الأول</li>
              </ul>
            </motion.div>
          )}
        </div>
      )
    },
    evaluation: {
      title: "تقييم الخدمة",
      icon: Star,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      description: "يحلل جودة الخدمة المقدمة في المحادثات تلقائياً",
      benefits: [
        "تقييم موضوعي لجودة الخدمة",
        "تحديد نقاط القوة والضعف",
        "توجيه الموظفين للتحسين",
        "تحسين مستمر لتجربة العملاء"
      ],
      animation: (step) => (
        <div className="h-full flex flex-col justify-center items-center">
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-800">محادثة مكتملة</span>
              </div>
              <p className="text-xs text-gray-700">العميل: لدي مشكلة في تفعيل الحساب</p>
              <p className="text-xs text-gray-700">الموظف: أهلاً بك، يمكنني مساعدتك. ما هي المشكلة التي تواجهها؟</p>
              <p className="text-xs text-gray-700">العميل: أدخل رمز التفعيل لكنه لا يعمل</p>
              <p className="text-xs text-gray-700">الموظف: سأتحقق من ذلك. هل يمكنك إخباري برقم الهاتف المسجل؟</p>
              <p className="text-xs text-gray-700">...</p>
            </motion.div>
          )}
          
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-yellow-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">تقييم الخدمة</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-yellow-700 min-w-[100px]">وقت الاستجابة:</span>
                <div className="h-2 bg-gray-200 rounded-full flex-1">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="text-xs text-green-700 font-medium">ممتاز (90%)</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-yellow-700 min-w-[100px]">دقة المعلومات:</span>
                <div className="h-2 bg-gray-200 rounded-full flex-1">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="text-xs text-green-700 font-medium">جيد جداً (85%)</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-yellow-700 min-w-[100px]">التعاطف:</span>
                <div className="h-2 bg-gray-200 rounded-full flex-1">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <span className="text-xs text-yellow-700 font-medium">جيد (70%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-yellow-700 min-w-[100px]">حل المشكلة:</span>
                <div className="h-2 bg-gray-200 rounded-full flex-1">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <span className="text-xs text-green-700 font-medium">ممتاز (100%)</span>
              </div>
            </motion.div>
          )}
          
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-blue-100 rounded-lg p-3 max-w-[80%] mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">توصيات للتحسين</span>
              </div>
              <ul className="text-xs text-blue-700 list-disc list-inside space-y-1">
                <li>استخدام عبارات أكثر تعاطفاً مع العميل</li>
                <li>تقديم بدائل متعددة لحل المشكلة</li>
                <li>متابعة العميل بعد حل المشكلة للتأكد من رضاه</li>
              </ul>
            </motion.div>
          )}
          
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-100 rounded-lg p-3 max-w-[80%]"
            >
              <div className="flex items-center gap-2 mb-2">
                <BarChart className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">التقييم العام</span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-green-700">التقييم العام:</span>
                <div className="flex">
                  {[1, 2, 3, 4].map(i => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="h-4 w-4 text-yellow-200 fill-current" />
                </div>
              </div>
              <p className="text-xs text-green-700">
                تقييم ممتاز (4.2/5). تم حل مشكلة العميل بنجاح مع وجود مجال للتحسين في جانب التعاطف.
              </p>
            </motion.div>
          )}
        </div>
      )
    }
  };

  // Function to start animation
  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationStep(0);
  };

  return (
    <div className="py-24 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              قدرات الذكاء الاصطناعي المتقدمة
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              تعزيز روبوتات المحادثة بقدرات ذكاء اصطناعي متطورة لفهم العملاء بشكل أفضل وتقديم تجربة استثنائية
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* AI Feature Demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`absolute -top-6 -right-6 ${features[activeFeature].color} w-24 h-24 rounded-full opacity-60`}></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-[400px]">
                {/* Header */}
                <div className="bg-gray-50 border-b border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Fixed: Using the correct icon component dynamically */}
                      {React.createElement(features[activeFeature].icon, { 
                        className: `h-5 w-5 ${features[activeFeature].textColor}` 
                      })}
                      <h3 className="font-medium">{features[activeFeature].title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={startAnimation}
                        className={`${features[activeFeature].color} ${features[activeFeature].textColor} p-1 rounded hover:opacity-80 transition-opacity`}
                        disabled={isAnimating}
                      >
                        <Play className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Animation Area */}
                <div className="p-6 h-[344px]">
                  {features[activeFeature].animation(animationStep)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              ذكاء اصطناعي متقدم
              <span className="block text-indigo-600">لتجربة عملاء استثنائية</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              استفد من أحدث تقنيات الذكاء الاصطناعي لتعزيز قدرات روبوتات المحادثة وتقديم تجربة شخصية وفعالة لعملائك.
            </p>

            {/* AI Features */}
            <div className="space-y-4 mb-8">
              {Object.entries(features).map(([key, feature]) => (
                <div 
                  key={key}
                  className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-colors ${
                    activeFeature === key ? `${feature.color} border border-${feature.textColor.replace('text-', '')}` : 'hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setActiveFeature(key);
                    setIsAnimating(false);
                    setAnimationStep(0);
                  }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeFeature === key ? feature.textColor : feature.color
                  }`}>
                    {React.createElement(feature.icon, { 
                      className: `h-5 w-5 ${activeFeature === key ? 'text-white' : feature.textColor}` 
                    })}
                  </div>
                  <div>
                    <h4 className={`font-medium ${
                      activeFeature === key ? feature.textColor : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600" />
                <span>مميزات الذكاء الاصطناعي</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "فهم اللغة الطبيعية بدقة عالية",
                  "التعلم المستمر من التفاعلات السابقة",
                  "تخصيص التجربة حسب سلوك وتفضيلات كل عميل",
                  "تحليل البيانات واستخراج الرؤى القيمة",
                  "تكامل سلس مع أنظمة إدارة علاقات العملاء"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                  <span>اكتشف المزيد عن قدرات الذكاء الاصطناعي</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Heart icon component since it's not imported
function Heart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, Plus, MessageSquare, Bot, Zap, 
  Settings, Play, ArrowRight, ChevronRight, 
  ChevronLeft, Check, X, AlertCircle, Code,
  Braces, Database, Workflow, Layers, Bell,
  ShoppingCart, Split, Filter, Tag, Mail,
  Calendar, Clock, FileText, Users, Repeat
} from 'lucide-react';

export function VisualBuilder() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "إنشاء التدفق",
      description: "بناء تدفق الأتمتة باستخدام السحب والإفلات",
      icon: GitBranch
    },
    {
      title: "إضافة المحفزات",
      description: "تحديد الأحداث التي تبدأ تدفق الأتمتة",
      icon: Bell
    },
    {
      title: "إضافة الشروط",
      description: "إنشاء مسارات متعددة بناءً على شروط مختلفة",
      icon: Split
    },
    {
      title: "إضافة الإجراءات",
      description: "تحديد الإجراءات التي سيتم تنفيذها تلقائياً",
      icon: Zap
    }
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              منشئ تدفقات أتمتة مرئي سهل الاستخدام
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              صمم تدفقات أتمتة متطورة بسهولة باستخدام واجهة السحب والإفلات البديهية، دون الحاجة لأي خبرة برمجية
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Builder Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitBranch className="h-5 w-5 text-google-blue" />
                  <h3 className="font-medium">منشئ تدفقات الأتمتة</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Settings className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Play className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6 h-[400px] bg-gray-50 relative">
              {/* Builder Canvas */}
              <div className="absolute inset-0 p-4">
                {activeStep === 0 && (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <GitBranch className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">اسحب العناصر من القائمة الجانبية لبدء بناء تدفق الأتمتة</p>
                      <button className="bg-google-blue text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto">
                        <Plus className="h-4 w-4" />
                        <span>إضافة عنصر بداية</span>
                      </button>
                    </div>
                  </div>
                )}
                
                {activeStep === 1 && (
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 w-64 mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <Bell className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="font-medium">محفز: سلة مهجورة</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm">
                        <p className="text-xs font-medium text-gray-700 mb-1">الشروط:</p>
                        <ul className="text-xs text-gray-600 list-disc list-inside">
                          <li>العميل ترك سلة نشطة</li>
                          <li>مرت أكثر من 30 دقيقة</li>
                          <li>قيمة السلة أكبر من 100 ريال</li>
                        </ul>
                      </div>
                    </div>
                    
                    <svg width="40" height="40" viewBox="0 0 40 40">
                      <path d="M20 0 L20 40" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4" />
                      <path d="M20 40 L15 35" stroke="#e5e7eb" strokeWidth="2" />
                      <path d="M20 40 L25 35" stroke="#e5e7eb" strokeWidth="2" />
                    </svg>
                    
                    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 w-64 mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Workflow className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium">الخطوة التالية...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="h-full flex items-center justify-center">
                    <div className="flex gap-8">
                      <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 w-64">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                            <Split className="h-4 w-4 text-yellow-600" />
                          </div>
                          <span className="font-medium">شرط: نوع العميل</span>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded border border-yellow-200 text-sm">
                          <p className="text-xs font-medium text-gray-700 mb-1">إذا كان:</p>
                          <ul className="text-xs text-gray-600 list-disc list-inside">
                            <li>عميل جديد</li>
                            <li>عميل قائم</li>
                            <li>عميل VIP</li>
                          </ul>
                        </div>
                        <div className="flex justify-between mt-3">
                          <div className="text-xs text-gray-500">عميل جديد</div>
                          <div className="text-xs text-gray-500">عميل قائم</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <svg width="40" height="100" viewBox="0 0 40 100">
                          <path d="M0 50 L40 50" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4" />
                          <path d="M40 50 L35 45" stroke="#e5e7eb" strokeWidth="2" />
                          <path d="M40 50 L35 55" stroke="#e5e7eb" strokeWidth="2" />
                        </svg>
                        
                        <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 w-64">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                              <Zap className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="font-medium">إجراء: عرض خاص</span>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm">
                            <p className="text-xs">إرسال رسالة واتساب مع عرض خصم 15% لاسترداد السلة المهجورة</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="h-full flex items-center justify-center">
                    <div className="flex flex-col gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 w-64 mx-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <Zap className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="font-medium">إجراء: إرسال رسالة</span>
                        </div>
                        <div className="bg-green-50 p-3 rounded border border-green-200 text-sm">
                          <p className="text-xs font-medium text-gray-700 mb-1">نوع الرسالة:</p>
                          <select className="w-full text-xs p-1 border border-gray-200 rounded mt-1 mb-2">
                            <option>قالب واتساب</option>
                            <option>رسالة بريد إلكتروني</option>
                            <option>إشعار تطبيق</option>
                          </select>
                          <p className="text-xs">مرحباً {'{name}'}, لاحظنا أنك تركت بعض المنتجات في سلتك. استخدم الكود {'{code}'} للحصول على خصم 15%!</p>
                        </div>
                      </div>
                      
                      <svg width="40" height="40" viewBox="0 0 40 40" className="mx-auto">
                        <path d="M20 0 L20 40" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4" />
                        <path d="M20 40 L15 35" stroke="#e5e7eb" strokeWidth="2" />
                        <path d="M20 40 L25 35" stroke="#e5e7eb" strokeWidth="2" />
                      </svg>
                      
                      <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 w-64 mx-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <Clock className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="font-medium">إجراء: انتظار</span>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border border-blue-200 text-sm">
                          <p className="text-xs">انتظار 24 ساعة قبل المتابعة</p>
                        </div>
                      </div>
                      
                      <svg width="40" height="40" viewBox="0 0 40 40" className="mx-auto">
                        <path d="M20 0 L20 40" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4" />
                        <path d="M20 40 L15 35" stroke="#e5e7eb" strokeWidth="2" />
                        <path d="M20 40 L25 35" stroke="#e5e7eb" strokeWidth="2" />
                      </svg>
                      
                      <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 w-64 mx-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <Tag className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="font-medium">إجراء: تحديث العميل</span>
                        </div>
                        <div className="bg-purple-50 p-3 rounded border border-purple-200 text-sm">
                          <p className="text-xs">إضافة وسم "سلة مهجورة" للعميل وتحديث حالة العميل</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Elements Sidebar */}
            <div className="absolute top-24 left-6 bottom-24 w-16 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center py-4 gap-4">
              <button className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Bell className="h-5 w-5 text-purple-600" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                <Split className="h-5 w-5 text-yellow-600" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Zap className="h-5 w-5 text-green-600" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <Mail className="h-5 w-5 text-red-600" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                <Code className="h-5 w-5 text-indigo-600" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <Plus className="h-5 w-5 text-gray-600" />
              </button>
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
              صمم تدفقات أتمتة معقدة
              <span className="block text-google-blue">بسهولة ودون برمجة</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              منشئ التدفقات المرئي يتيح لك تصميم تدفقات أتمتة متطورة باستخدام واجهة السحب والإفلات البديهية، دون الحاجة لأي خبرة برمجية.
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                    activeStep === index ? 'bg-blue-50 border border-blue-100' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeStep === index ? 'bg-google-blue text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${activeStep === index ? 'text-google-blue' : 'text-gray-900'}`}>
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button 
                onClick={prevStep}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ChevronRight className="h-5 w-5" />
                <span>السابق</span>
              </button>
              <button 
                onClick={nextStep}
                className="flex items-center gap-2 text-google-blue hover:text-blue-700"
              >
                <span>التالي</span>
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
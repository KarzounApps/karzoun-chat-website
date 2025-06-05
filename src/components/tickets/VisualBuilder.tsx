import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, Plus, Ticket, Settings, Play,
  ChevronRight, ChevronLeft, Tag, Filter,
  Users, Clock, Calendar, MessageSquare,
  ArrowRight, CheckCircle2, AlertCircle,
  Flag, User, MoreHorizontal
} from 'lucide-react';

export function VisualBuilder() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "إنشاء المرحلة",
      description: "إضافة مراحل معالجة التذاكر",
      icon: GitBranch
    },
    {
      title: "إعداد الشروط",
      description: "تحديد شروط الانتقال بين المراحل",
      icon: Filter
    },
    {
      title: "تعيين المسؤولين",
      description: "تحديد المسؤولين عن كل مرحلة",
      icon: Users
    },
    {
      title: "إعداد الأتمتة",
      description: "إعداد الإجراءات التلقائية",
      icon: Settings
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
              منشئ تدفقات العمل المرئي
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              صمم تدفقات معالجة التذاكر والمهام بسهولة باستخدام واجهة السحب والإفلات البديهية
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
                  <GitBranch className="h-5 w-5 text-[#2ca24c]" />
                  <h3 className="font-medium">منشئ تدفقات العمل</h3>
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
            
            <div className="p-6 h-[400px] bg-gray-50">
              {/* Pipeline Builder Interface */}
              <div className="h-full flex items-center justify-center">
                {activeStep === 0 && (
                  <div className="flex gap-6">
                    {['جديدة', 'قيد المعالجة', 'مكتملة'].map((stage, index) => (
                      <div key={index} className="w-64 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium">{stage}</h4>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="bg-gray-50 rounded p-3 border border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">TK-1001</span>
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                عالية
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">مشكلة في تسجيل الدخول</p>
                          </div>
                        </div>
                        
                        <button className="w-full mt-3 flex items-center justify-center gap-1 p-2 text-sm text-gray-500 hover:bg-gray-50 rounded border border-dashed border-gray-300">
                          <Plus className="h-4 w-4" />
                          <span>إضافة تذكرة</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <h4 className="font-medium mb-4">شروط الانتقال</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <Filter className="h-4 w-4 text-[#2ca24c]" />
                        <span className="text-sm">إذا تم الرد على العميل</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <Clock className="h-4 w-4 text-[#2ca24c]" />
                        <span className="text-sm">بعد 24 ساعة من آخر تحديث</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <h4 className="font-medium mb-4">تعيين المسؤولين</h4>
                    <div className="space-y-3">
                      {['أحمد محمد', 'سارة أحمد', 'محمد علي'].map((user, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{user}</span>
                          </div>
                          <button className="text-[#2ca24c]">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <h4 className="font-medium mb-4">الإجراءات التلقائية</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="h-4 w-4 text-[#2ca24c]" />
                          <span className="text-sm font-medium">إرسال إشعار</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          إرسال إشعار للعميل عند تغيير حالة التذكرة
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="h-4 w-4 text-[#2ca24c]" />
                          <span className="text-sm font-medium">إضافة وسم</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          إضافة وسم تلقائي حسب نوع التذكرة
                        </p>
                      </div>
                    </div>
                  </div>
                )}
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
              صمم تدفقات عمل معقدة
              <span className="block text-[#2ca24c]">بسهولة ودون برمجة</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              منشئ التدفقات المرئي يتيح لك تصميم تدفقات معالجة التذاكر والمهام باستخدام واجهة السحب والإفلات البديهية، دون الحاجة لأي خبرة برمجية.
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                    activeStep === index ? 'bg-green-50 border border-green-100' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeStep === index ? 'bg-[#2ca24c] text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${activeStep === index ? 'text-[#2ca24c]' : 'text-gray-900'}`}>
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
                className="flex items-center gap-2 text-[#2ca24c] hover:text-[#239a41]"
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
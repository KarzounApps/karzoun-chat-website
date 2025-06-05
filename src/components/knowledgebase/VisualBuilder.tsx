import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, Plus, FileText, Settings, Play,
  ChevronRight, ChevronLeft, Code, Image,
  Link, List, Bold, Italic, Heading,
  Eye, Save, Share2, Globe, Lock
} from 'lucide-react';

export function VisualBuilder() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "إنشاء المقال",
      description: "إنشاء وتحرير محتوى المقال بسهولة",
      icon: FileText
    },
    {
      title: "تنسيق المحتوى",
      description: "تنسيق النص والصور والوسائط المتعددة",
      icon: Layout
    },
    {
      title: "إعدادات النشر",
      description: "تحديد إعدادات الظهور والوصول",
      icon: Settings
    },
    {
      title: "المعاينة والنشر",
      description: "معاينة المقال قبل النشر",
      icon: Eye
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
              محرر متقدم سهل الاستخدام
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              أنشئ وحرر محتوى قاعدة المعرفة بسهولة باستخدام محررنا المتقدم. لا حاجة لمعرفة البرمجة.
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
                  <FileText className="h-5 w-5 text-[#2ca24c]" />
                  <h3 className="font-medium">محرر المحتوى</h3>
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
            
            <div className="p-6 h-[400px] bg-white">
              {/* Editor Interface */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Toolbar */}
                <div className="bg-gray-50 border-b border-gray-200 p-2 flex items-center gap-2">
                  <button className="p-1.5 hover:bg-gray-200 rounded">
                    <Heading className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded">
                    <Bold className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded">
                    <Italic className="h-4 w-4 text-gray-600" />
                  </button>
                  <div className="w-px h-4 bg-gray-300 mx-1"></div>
                  <button className="p-1.5 hover:bg-gray-200 rounded">
                    <List className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded">
                    <Link className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded">
                    <Image className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded">
                    <Code className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                {/* Content Area */}
                <div className="p-4">
                  <input
                    type="text"
                    placeholder="عنوان المقال..."
                    className="w-full text-2xl font-bold border-none focus:ring-0 mb-4"
                  />
                  <div className="prose prose-lg">
                    <p className="text-gray-600">
                      ابدأ بكتابة محتوى المقال هنا...
                    </p>
                  </div>
                </div>
              </div>

              {/* Publishing Options */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg text-sm">
                    <Globe className="h-4 w-4 text-gray-600" />
                    <span>عام</span>
                  </button>
                  <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg text-sm">
                    <Lock className="h-4 w-4 text-gray-600" />
                    <span>خاص</span>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-lg text-sm">
                    <Save className="h-4 w-4" />
                    <span>حفظ كمسودة</span>
                  </button>
                  <button className="flex items-center gap-1 bg-[#2ca24c] text-white px-3 py-1.5 rounded-lg text-sm">
                    <Share2 className="h-4 w-4" />
                    <span>نشر</span>
                  </button>
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
              محرر متطور
              <span className="block text-[#2ca24c]">سهل الاستخدام</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              محرر قوي يجمع بين السهولة والمرونة. أنشئ محتوى احترافي بسرعة وسهولة، مع دعم كامل للغة العربية والتنسيق المتقدم.
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
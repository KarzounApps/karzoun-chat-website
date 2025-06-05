import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, GitBranch, Zap, ArrowRight, 
  ShoppingCart, Calendar, MessageSquare, 
  Bell, Database, Globe
} from 'lucide-react';
import { AutomationFlowDemo } from '../AutomationFlowDemo';

export function AutomationHero() {
  const [activeTab, setActiveTab] = useState('internal');

  const triggerTypes = [
    { id: 'internal', name: 'محفزات داخلية', icon: Bell, color: 'bg-purple-500' },
    { id: 'ecommerce', name: 'متاجر إلكترونية', icon: ShoppingCart, color: 'bg-green-500' },
    { id: 'crm', name: 'إدارة العملاء', icon: Database, color: 'bg-blue-600' },
    { id: 'external', name: 'تكاملات خارجية', icon: Globe, color: 'bg-orange-500' },
  ];

  return (
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
              أتمتة ذكية
              <span className="block text-google-blue mt-2">لتدفقات العمل المعقدة</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              صمم تدفقات عمل متطورة بسهولة باستخدام منشئ التدفقات المرئي، وأتمت التواصل مع عملائك وعملياتك الداخلية
            </p>
            
            {/* Trigger Type Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {triggerTypes.map((trigger) => (
                <button
                  key={trigger.id}
                  onClick={() => setActiveTab(trigger.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === trigger.id
                      ? `${trigger.color} text-white`
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <trigger.icon className="h-5 w-5" />
                  <span>{trigger.name}</span>
                </button>
              ))}
            </div>
            
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

        {/* Flow Builder Demo */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            منشئ تدفقات الأتمتة المرئي
          </h2>
          <div className="bg-white/5 rounded-xl overflow-hidden">
            <AutomationFlowDemo />
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-google-blue bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
              <span>استكشف المزيد من إمكانيات المنشئ المرئي</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
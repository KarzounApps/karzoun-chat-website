import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, Plus, Settings, Filter, 
  ChevronDown, MoreHorizontal, Edit,
  Trash2, ArrowRight, CheckCircle2,
  Users, Clock, Calendar, MessageSquare,
  Flag, User, Tag, Lock, Eye, Copy,
  Workflow, Layers, Database, Share2,
  Zap, RefreshCw
} from 'lucide-react';

export function PipelineManagement() {
  const [activePipeline, setActivePipeline] = useState('support');
  
  const pipelines = {
    support: {
      name: "خدمة العملاء",
      stages: [
        { name: "جديدة", color: "bg-blue-500", count: 12 },
        { name: "قيد المعالجة", color: "bg-yellow-500", count: 8 },
        { name: "بانتظار العميل", color: "bg-purple-500", count: 5 },
        { name: "مكتملة", color: "bg-green-500", count: 25 }
      ]
    },
    sales: {
      name: "المبيعات",
      stages: [
        { name: "عملاء محتملون", color: "bg-blue-500", count: 15 },
        { name: "اتصال أولي", color: "bg-yellow-500", count: 10 },
        { name: "متابعة", color: "bg-purple-500", count: 7 },
        { name: "مفاوضات", color: "bg-orange-500", count: 4 },
        { name: "صفقات مغلقة", color: "bg-green-500", count: 18 }
      ]
    },
    projects: {
      name: "المشاريع",
      stages: [
        { name: "التخطيط", color: "bg-blue-500", count: 6 },
        { name: "قيد التنفيذ", color: "bg-yellow-500", count: 9 },
        { name: "المراجعة", color: "bg-purple-500", count: 3 },
        { name: "مكتملة", color: "bg-green-500", count: 12 }
      ]
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              إدارة مرنة للتدفقات
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              صمم وخصص تدفقات العمل حسب احتياجات فريقك. أنشئ مراحل مخصصة وحدد الشروط والإجراءات لكل مرحلة.
            </p>
          </motion.div>
        </div>

        {/* Pipeline Builder Interface */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-16">
          {/* Header */}
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="font-medium">تدفقات العمل</h3>
                <div className="flex gap-2">
                  {Object.entries(pipelines).map(([key, pipeline]) => (
                    <button
                      key={key}
                      onClick={() => setActivePipeline(key)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        activePipeline === key
                          ? 'bg-[#2ca24c] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pipeline.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-sm">
                  <Filter className="h-4 w-4" />
                  <span>تصفية</span>
                </button>
                <button className="flex items-center gap-2 bg-[#2ca24c] text-white px-4 py-2 rounded-lg text-sm">
                  <Plus className="h-4 w-4" />
                  <span>تدفق جديد</span>
                </button>
              </div>
            </div>
          </div>

          {/* Pipeline Stages */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {pipelines[activePipeline as keyof typeof pipelines].stages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                        <h4 className="font-medium">{stage.name}</h4>
                      </div>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                        {stage.count}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Settings className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Stage Settings */}
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>المسؤولون: فريق المبيعات</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>مهلة المعالجة: 24 ساعة</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Tag className="h-4 w-4" />
                        <span>الوسوم التلقائية: عالية الأولوية</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="w-full flex items-center justify-center gap-1 p-2 text-sm text-gray-500 hover:bg-gray-50 rounded border border-dashed border-gray-300">
                        <Plus className="h-4 w-4" />
                        <span>إضافة إجراء</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Workflow,
              title: "تدفقات مخصصة",
              description: "صمم تدفقات عمل تناسب احتياجات فريقك",
              features: [
                "مراحل مخصصة",
                "شروط انتقال مرنة",
                "إجراءات تلقائية"
              ]
            },
            {
              icon: Layers,
              title: "إدارة متعددة المستويات",
              description: "إدارة مرنة للتذاكر والمهام على مختلف المستويات",
              features: [
                "تسلسل هرمي للمهام",
                "ربط المهام المترابطة",
                "تتبع التبعيات"
              ]
            },
            {
              icon: Database,
              title: "تكامل البيانات",
              description: "تكامل سلس مع مختلف مصادر البيانات",
              features: [
                "استيراد تلقائي",
                "تزامن البيانات",
                "تصدير التقارير"
              ]
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <feature.icon className="h-8 w-8 text-[#2ca24c] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#2ca24c]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pipeline Templates */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold mb-2">قوالب جاهزة</h3>
              <p className="text-gray-600">ابدأ بسرعة مع قوالب تدفق العمل الجاهزة</p>
            </div>
            <button className="flex items-center gap-2 bg-[#2ca24c] text-white px-4 py-2 rounded-lg text-sm">
              <Plus className="h-4 w-4" />
              <span>إنشاء قالب</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "خدمة العملاء",
                description: "تدفق عمل لمعالجة طلبات الدعم",
                stages: 4,
                automations: 6
              },
              {
                title: "المبيعات",
                description: "تتبع وإدارة الفرص البيعية",
                stages: 5,
                automations: 8
              },
              {
                title: "إدارة المشاريع",
                description: "تدفق عمل لإدارة المشاريع والمهام",
                stages: 6,
                automations: 10
              }
            ].map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold mb-2">{template.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{template.stages} مراحل</span>
                  <span>{template.automations} إجراءات تلقائية</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end gap-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
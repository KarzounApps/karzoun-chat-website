import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Filter, ArrowRight, CheckCircle2, 
  User, Calendar, Clock, Tag, MessageSquare,
  ShoppingCart, DollarSign, MapPin, Globe,
  BarChart, Database, Layers, Workflow,
  Percent, Target, UserCheck, FileText, Mail,
  Send, Smartphone, Heart, Star, Package, Truck,
  CreditCard, Gift, Repeat, AlertCircle, Plus,
  Search, ChevronDown, Settings, MoreHorizontal,
  Edit, Trash2, Download, Share2
} from 'lucide-react';

export function CustomerSegmentation() {
  const [activeSegment, setActiveSegment] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample segments data
  const segments = [
    {
      id: 1,
      name: "العملاء النشطون",
      description: "عملاء قاموا بالشراء خلال آخر 30 يوم",
      count: 1245,
      growth: "+15%",
      color: "bg-green-500",
      conditions: [
        { field: "آخر عملية شراء", operator: "أقل من", value: "30 يوم" },
        { field: "عدد المشتريات", operator: "أكبر من", value: "1" }
      ],
      actions: [
        "إرسال عروض خاصة",
        "دعوة لبرنامج الولاء",
        "استطلاع رضا العملاء"
      ]
    },
    {
      id: 2,
      name: "العملاء المحتملون",
      description: "زوار تفاعلوا مع المتجر لكن لم يشتروا بعد",
      count: 876,
      growth: "+8%",
      color: "bg-blue-500",
      conditions: [
        { field: "عدد الزيارات", operator: "أكبر من", value: "3" },
        { field: "عدد المشتريات", operator: "يساوي", value: "0" }
      ],
      actions: [
        "إرسال رمز خصم ترحيبي",
        "دعوة لمتابعة وسائل التواصل",
        "عرض المنتجات المشابهة"
      ]
    },
    {
      id: 3,
      name: "العملاء غير النشطين",
      description: "عملاء لم يتفاعلوا منذ أكثر من 90 يوم",
      count: 432,
      growth: "-5%",
      color: "bg-yellow-500",
      conditions: [
        { field: "آخر تفاعل", operator: "أكبر من", value: "90 يوم" },
        { field: "حالة العضوية", operator: "يساوي", value: "نشط" }
      ],
      actions: [
        "حملة إعادة تنشيط",
        "استطلاع رأي",
        "عرض خاص للعودة"
      ]
    },
    {
      id: 4,
      name: "كبار المشترين",
      description: "عملاء بمتوسط قيمة طلب أعلى من 1000 ريال",
      count: 198,
      growth: "+25%",
      color: "bg-purple-500",
      conditions: [
        { field: "متوسط قيمة الطلب", operator: "أكبر من", value: "1000 ريال" },
        { field: "عدد المشتريات", operator: "أكبر من", value: "3" }
      ],
      actions: [
        "دعوة لبرنامج VIP",
        "عروض حصرية",
        "خدمة عملاء مميزة"
      ]
    }
  ];

  // Sample filter options
  const filterOptions = {
    behavior: [
      "نشط",
      "غير نشط",
      "محتمل",
      "متكرر",
      "جديد"
    ],
    source: [
      "موقع إلكتروني",
      "تطبيق جوال",
      "متجر فعلي",
      "وسائل تواصل"
    ],
    location: [
      "الرياض",
      "جدة",
      "الدمام",
      "مكة",
      "المدينة"
    ],
    value: [
      "عالي القيمة",
      "متوسط القيمة",
      "منخفض القيمة"
    ]
  };

  return (
    <div className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              تقسيم العملاء الذكي
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              قم بتقسيم عملائك إلى شرائح ذكية بناءً على سلوكهم وتفضيلاتهم، وأرسل رسائل مخصصة لكل شريحة
            </p>
          </motion.div>
        </div>

        {/* Segments Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 cursor-pointer transition-all ${
                activeSegment?.id === segment.id ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setActiveSegment(segment)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${segment.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                  <Users className={`h-6 w-6 ${segment.color.replace('bg-', 'text-')}`} />
                </div>
                <div className={`text-sm px-2 py-1 rounded-full ${
                  segment.growth.startsWith('+') 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {segment.growth}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-1">{segment.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{segment.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{segment.count.toLocaleString('ar-SA')}</div>
                <button className="text-purple-600 hover:text-purple-700">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Segment Builder */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 mb-12">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">منشئ الشرائح</h3>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <Filter className="h-4 w-4" />
                  <span>تصفية</span>
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  <span>شريحة جديدة</span>
                </button>
              </div>
            </div>
            
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-50 rounded-lg p-4 mb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(filterOptions).map(([category, options]) => (
                    <div key={category}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {category === 'behavior' ? 'السلوك' :
                         category === 'source' ? 'المصدر' :
                         category === 'location' ? 'الموقع' :
                         'القيمة'}
                      </label>
                      <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm">
                        <option value="">اختر {category}</option>
                        {options.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="بحث في الشرائح..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Download className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Share2 className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Segment Details */}
          {activeSegment && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Conditions */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Filter className="h-5 w-5 text-purple-600" />
                    <span>شروط الشريحة</span>
                  </h4>
                  
                  <div className="space-y-4">
                    {activeSegment.conditions.map((condition, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <Filter className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium">{condition.field}</div>
                            <div className="text-sm text-gray-600">
                              {condition.operator} {condition.value}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-1 hover:bg-gray-200 rounded">
                            <Edit className="h-4 w-4 text-gray-500" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 rounded">
                            <Trash2 className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    <button className="w-full flex items-center justify-center gap-2 p-3 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                      <Plus className="h-4 w-4" />
                      <span>إضافة شرط جديد</span>
                    </button>
                  </div>
                </div>
                
                {/* Actions */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-600" />
                    <span>الإجراءات التلقائية</span>
                  </h4>
                  
                  <div className="space-y-4">
                    {activeSegment.actions.map((action, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <Zap className="h-4 w-4 text-purple-600" />
                          </div>
                          <div className="font-medium">{action}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-1 hover:bg-gray-200 rounded">
                            <Edit className="h-4 w-4 text-gray-500" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 rounded">
                            <Trash2 className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    <button className="w-full flex items-center justify-center gap-2 p-3 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                      <Plus className="h-4 w-4" />
                      <span>إضافة إجراء جديد</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Analytics */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-purple-600" />
                  <span>تحليلات الشريحة</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">معدل التفاعل</div>
                    <div className="text-2xl font-bold text-purple-600">85%</div>
                    <div className="text-sm text-green-600">↑ 12% من الشهر الماضي</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">متوسط قيمة الطلب</div>
                    <div className="text-2xl font-bold text-purple-600">750 ريال</div>
                    <div className="text-sm text-green-600">↑ 8% من الشهر الماضي</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">معدل الاحتفاظ</div>
                    <div className="text-2xl font-bold text-purple-600">92%</div>
                    <div className="text-sm text-green-600">↑ 5% من الشهر الماضي</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "استهداف دقيق",
              description: "تقسيم العملاء بناءً على عشرات المعايير المختلفة"
            },
            {
              icon: Workflow,
              title: "أتمتة ذكية",
              description: "تنفيذ إجراءات تلقائية لكل شريحة من العملاء"
            },
            {
              icon: BarChart,
              title: "تحليلات متقدمة",
              description: "تحليل أداء كل شريحة وتحسين الاستهداف"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
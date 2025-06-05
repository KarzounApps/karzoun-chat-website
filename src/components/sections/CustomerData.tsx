import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Search, Filter, Plus, MoreHorizontal, Star, 
  Mail, Phone, Calendar, Tag, ChevronDown, ArrowUpRight,
  MessageSquare, Clock, CheckCircle2, BarChart2, UserPlus,
  FileText, Zap, Database, RefreshCw, DollarSign, Upload, Download,
  Layers, Settings, Shield, PieChart
} from 'lucide-react';

// Sample customer data
const customers = [
  {
    id: 1,
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    phone: '+966 50 123 4567',
    company: 'شركة الأفق للتقنية',
    status: 'عميل نشط',
    tags: ['مهتم بالباقة المتقدمة', 'عميل VIP'],
    lastContact: '2025-02-10',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    activity: [
      { type: 'message', date: '2025-02-10', content: 'استفسار عن ميزات الباقة المتقدمة' },
      { type: 'purchase', date: '2025-01-15', content: 'تجديد الاشتراك السنوي' }
    ]
  },
  {
    id: 2,
    name: 'سارة العتيبي',
    email: 'sara@example.com',
    phone: '+966 55 987 6543',
    company: 'مؤسسة النجاح',
    status: 'محادثة جارية',
    tags: ['مهتم بالتكامل مع API', 'تجربة مجانية'],
    lastContact: '2025-02-09',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    activity: [
      { type: 'message', date: '2025-02-09', content: 'طلب عرض توضيحي للمنصة' },
      { type: 'email', date: '2025-02-05', content: 'إرسال معلومات عن الباقات' }
    ]
  },
  {
    id: 3,
    name: 'خالد الشمري',
    email: 'khalid@example.com',
    phone: '+966 54 456 7890',
    company: 'مجموعة الخليج',
    status: 'عميل محتمل',
    tags: ['مهتم بروبوتات المحادثة', 'قطاع التجزئة'],
    lastContact: '2025-02-08',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    activity: [
      { type: 'meeting', date: '2025-02-08', content: 'اجتماع تعريفي بالمنصة' },
      { type: 'email', date: '2025-02-01', content: 'طلب معلومات عن الأسعار' }
    ]
  },
  {
    id: 4,
    name: 'نورة الغامدي',
    email: 'noura@example.com',
    phone: '+966 56 789 0123',
    company: 'مؤسسة الإبداع',
    status: 'عميل نشط',
    tags: ['باقة المؤسسات', 'دعم VIP'],
    lastContact: '2025-02-07',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    activity: [
      { type: 'support', date: '2025-02-07', content: 'حل مشكلة في إعدادات الحساب' },
      { type: 'purchase', date: '2024-12-20', content: 'ترقية إلى باقة المؤسسات' }
    ]
  }
];

// Customer segments for the segmentation demo
const customerSegments = [
  { name: 'العملاء النشطون', count: 1245, percentage: 45, color: 'bg-green-500' },
  { name: 'العملاء المحتملون', count: 876, percentage: 32, color: 'bg-blue-500' },
  { name: 'العملاء غير النشطين', count: 432, percentage: 16, color: 'bg-yellow-500' },
  { name: 'العملاء المتسربون', count: 198, percentage: 7, color: 'bg-red-500' }
];

// Activity types with icons
const activityIcons = {
  message: MessageSquare,
  email: Mail,
  meeting: Calendar,
  purchase: CheckCircle2,
  support: Zap
};

export function CustomerData() {
  const [activeTab, setActiveTab] = useState('contacts');
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);
  const [viewMode, setViewMode] = useState('list');

  return (
    <div className="bg-gradient-to-r from-google-blue to-blue-600 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              إدارة بيانات وعلاقات العملاء!
            </h2>
            <p className="text-white/90 text-lg">
              تنظيم وتصنيف وتحليل قوائم العملاء
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200">
            {[
              { id: 'contacts', label: 'جهات الاتصال', icon: Users },
              { id: 'segments', label: 'التصنيفات', icon: Tag },
              { id: 'activity', label: 'النشاطات', icon: Clock },
              { id: 'analytics', label: 'التحليلات', icon: BarChart2 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-google-blue text-google-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div className="p-6">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="بحث عن عميل..."
                      className="bg-gray-100 border-none rounded-lg pl-3 pr-10 py-2 text-sm w-64 focus:ring-2 focus:ring-google-blue"
                    />
                  </div>
                  <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm">
                    <Filter className="h-4 w-4" />
                    <span>تصفية</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${
                        viewMode === 'list' ? 'bg-gray-100' : 'bg-white'
                      }`}
                    >
                      <FileText className="h-4 w-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${
                        viewMode === 'grid' ? 'bg-gray-100' : 'bg-white'
                      }`}
                    >
                      <Layers className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 bg-google-blue text-white px-4 py-2 rounded-lg text-sm">
                    <UserPlus className="h-4 w-4" />
                    <span>إضافة عميل</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Customers List */}
                <div className="lg:col-span-1 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-medium">العملاء</h3>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                      {customers.length} عميل
                    </span>
                  </div>
                  
                  <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
                    {customers.map((customer) => (
                      <div
                        key={customer.id}
                        onClick={() => setSelectedCustomer(customer)}
                        className={`p-4 cursor-pointer transition-colors ${
                          selectedCustomer.id === customer.id
                            ? 'bg-blue-50'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={customer.avatar}
                            alt={customer.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-gray-900 truncate">
                                {customer.name}
                              </h4>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                customer.status === 'عميل نشط'
                                  ? 'bg-green-100 text-green-800'
                                  : customer.status === 'محادثة جارية'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {customer.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 truncate">
                              {customer.company}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Mail className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-500 truncate">
                                {customer.email}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Details */}
                <div className="lg:col-span-2 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-medium">تفاصيل العميل</h3>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={selectedCustomer.avatar}
                        alt={selectedCustomer.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                          {selectedCustomer.name}
                        </h2>
                        <p className="text-gray-600">{selectedCustomer.company}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedCustomer.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="mr-auto bg-gray-100 hover:bg-gray-200 p-2 rounded-lg">
                        <Star className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            معلومات الاتصال
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{selectedCustomer.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{selectedCustomer.phone}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            الحالة
                          </h4>
                          <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                            selectedCustomer.status === 'عميل نشط'
                              ? 'bg-green-100 text-green-800'
                              : selectedCustomer.status === 'محادثة جارية'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            <span>{selectedCustomer.status}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          آخر النشاطات
                        </h4>
                        <div className="space-y-3">
                          {selectedCustomer.activity.map((activity, index) => {
                            const ActivityIcon = activityIcons[activity.type as keyof typeof activityIcons];
                            return (
                              <div key={index} className="flex items-start gap-2">
                                <div className={`p-1.5 rounded-full ${
                                  activity.type === 'message' ? 'bg-blue-100' :
                                  activity.type === 'email' ? 'bg-indigo-100' :
                                  activity.type === 'meeting' ? 'bg-purple-100' :
                                  activity.type === 'purchase' ? 'bg-green-100' :
                                  'bg-orange-100'
                                }`}>
                                  <ActivityIcon className={`h-3 w-3 ${
                                    activity.type === 'message' ? 'text-blue-600' :
                                    activity.type === 'email' ? 'text-indigo-600' :
                                    activity.type === 'meeting' ? 'text-purple-600' :
                                    activity.type === 'purchase' ? 'text-green-600' :
                                    'text-orange-600'
                                  }`} />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm">{activity.content}</p>
                                  <p className="text-xs text-gray-500">{activity.date}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-3">
                        الإجراءات السريعة
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <button className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm hover:bg-blue-100 transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span>إرسال رسالة</span>
                        </button>
                        <button className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm hover:bg-purple-100 transition-colors">
                          <Calendar className="h-4 w-4" />
                          <span>جدولة اجتماع</span>
                        </button>
                        <button className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm hover:bg-green-100 transition-colors">
                          <Tag className="h-4 w-4" />
                          <span>إضافة تصنيف</span>
                        </button>
                        <button className="flex items-center gap-1 bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                          <MoreHorizontal className="h-4 w-4" />
                          <span>المزيد</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Segments Tab */}
          {activeTab === 'segments' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-lg">تصنيفات العملاء</h3>
                <button className="flex items-center gap-2 bg-google-blue text-white px-4 py-2 rounded-lg text-sm">
                  <Plus className="h-4 w-4" />
                  <span>إنشاء تصنيف جديد</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium mb-4">توزيع العملاء حسب التصنيف</h4>
                  <div className="relative h-64">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border-8 border-gray-100 flex items-center justify-center">
                        <span className="text-xl font-bold">2,751</span>
                      </div>
                    </div>
                    
                    {customerSegments.map((segment, index) => {
                      const rotation = index * 90;
                      return (
                        <div 
                          key={segment.name}
                          className="absolute top-1/2 left-1/2 w-full h-full"
                          style={{ transform: `rotate(${rotation}deg)` }}
                        >
                          <div 
                            className={`absolute top-0 left-1/2 w-20 h-20 -ml-10 -mt-10 ${segment.color} rounded-full opacity-80`}
                            style={{ 
                              transform: `translateY(-60px) scale(${segment.percentage / 30})`,
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium mb-4">التصنيفات النشطة</h4>
                  <div className="space-y-4">
                    {customerSegments.map((segment) => (
                      <div key={segment.name} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${segment.color} mr-3`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium">{segment.name}</span>
                            <span className="text-sm text-gray-500">{segment.count} عميل</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${segment.color}`}
                              style={{ width: `${segment.percentage}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium ml-3">{segment.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-medium">التصنيفات المخصصة</h3>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Filter className="h-4 w-4" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {[
                    { name: 'العملاء الجدد', count: 156, criteria: 'تم التسجيل خلال آخر 30 يوم', color: 'bg-blue-500' },
                    { name: 'المشتركون في الباقة المتقدمة', count: 423, criteria: 'مشتركون في الباقة المتقدمة', color: 'bg-purple-500' },
                    { name: 'العملاء المهتمون بالتكامل', count: 89, criteria: 'أبدوا اهتماماً بخدمات التكامل', color: 'bg-green-500' },
                    { name: 'العملاء غير النشطين', count: 217, criteria: 'لم يسجلوا دخول خلال 60 يوم', color: 'bg-yellow-500' }
                  ].map((segment, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${segment.color}`} />
                          <div>
                            <h4 className="font-medium">{segment.name}</h4>
                            <p className="text-sm text-gray-500">{segment.criteria}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium">{segment.count} عميل</span>
                          <button className="text-google-blue hover:text-blue-700">
                            <ArrowUpRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-lg">نشاطات العملاء</h3>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm">
                    <Filter className="h-4 w-4" />
                    <span>تصفية</span>
                  </button>
                  <button className="flex items-center gap-2 bg-google-blue text-white px-4 py-2 rounded-lg text-sm">
                    <Plus className="h-4 w-4" />
                    <span>إضافة نشاط</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden sticky top-6">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-medium">تصفية النشاطات</h3>
                    </div>
                    
                    <div className="p-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">نوع النشاط</h4>
                        <div className="space-y-2">
                          {Object.entries(activityIcons).map(([type, Icon]) => (
                            <label key={type} className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="rounded text-google-blue focus:ring-google-blue" />
                              <Icon className="h-4 w-4 text-gray-500" />
                              <span className="text-sm">{
                                type === 'message' ? 'رسائل' :
                                type === 'email' ? 'بريد إلكتروني' :
                                type === 'meeting' ? 'اجتماعات' :
                                type === 'purchase' ? 'مشتريات' :
                                'دعم فني'
                              }</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">الفترة الزمنية</h4>
                        <div className="space-y-2">
                          {['اليوم', 'آخر 7 أيام', 'آخر 30 يوم', 'آخر 90 يوم', 'مخصص'].map((period) => (
                            <label key={period} className="flex items-center gap-2 cursor-pointer">
                              <input 
                                type="radio" 
                                name="period" 
                                className="text-google-blue focus:ring-google-blue" 
                                defaultChecked={period === 'آخر 7 أيام'}
                              />
                              <span className="text-sm">{period}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <button className="w-full bg-google-blue text-white px-4 py-2 rounded-lg text-sm">
                          تطبيق التصفية
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                      <h3 className="font-medium">سجل النشاطات</h3>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                        156 نشاط
                      </span>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                      {[
                        { 
                          type: 'message', 
                          customer: 'أحمد محمد', 
                          content: 'استفسار عن ميزات الباقة المتقدمة', 
                          date: '2025-02-10 10:45', 
                          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                        },
                        { 
                          type: 'email', 
                          customer: 'سارة العتيبي', 
                          content: 'إرسال معلومات عن الباقات', 
                          date: '2025-02-09 14:30', 
                          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                        },
                        { 
                          type: 'meeting', 
                          customer: 'خالد الشمري', 
                          content: 'اجتماع تعريفي بالمنصة', 
                          date: '2025-02-08 11:00', 
                          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                        },
                        { 
                          type: 'purchase', 
                          customer: 'نورة الغامدي', 
                          content: 'ترقية إلى باقة المؤسسات', 
                          date: '2025-02-07 09:15', 
                          avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                        },
                        { 
                          type: 'support', 
                          customer: 'فهد القحطاني', 
                          content: 'حل مشكلة في إعدادات الحساب', 
                          date: '2025-02-06 16:20', 
                          avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                        }
                      ].map((activity, index) => {
                        const ActivityIcon = activityIcons[activity.type as keyof typeof activityIcons];
                        return (
                          <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start gap-4">
                              <div className={`p-2 rounded-full ${
                                activity.type === 'message' ? 'bg-blue-100' :
                                activity.type === 'email' ? 'bg-indigo-100' :
                                activity.type === 'meeting' ? 'bg-purple-100' :
                                activity.type === 'purchase' ? 'bg-green-100' :
                                'bg-orange-100'
                              }`}>
                                <ActivityIcon className={`h-5 w-5 ${
                                  activity.type === 'message' ? 'text-blue-600' :
                                  activity.type === 'email' ? 'text-indigo-600' :
                                  activity.type === 'meeting' ? 'text-purple-600' :
                                  activity.type === 'purchase' ? 'text-green-600' :
                                  'text-orange-600'
                                }`} />
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <img
                                    src={activity.avatar}
                                    alt={activity.customer}
                                    className="w-6 h-6 rounded-full object-cover"
                                  />
                                  <span className="font-medium">{activity.customer}</span>
                                </div>
                                <p className="text-gray-700">{activity.content}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Clock className="h-3 w-3 text-gray-400" />
                                  <span className="text-xs text-gray-500">{activity.date}</span>
                                </div>
                              </div>
                              
                              <button className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-center">
                      <button className="text-google-blue hover:text-blue-700 text-sm font-medium">
                        تحميل المزيد
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-lg">تحليلات العملاء</h3>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm">
                      <span>آخر 30 يوم</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm">
                    <Download className="h-4 w-4" />
                    <span>تصدير</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  { label: 'إجمالي العملاء', value: '2,751', change: '+12%', icon: Users, color: 'bg-blue-500' },
                  { label: 'معدل الاحتفاظ', value: '87%', change: '+3%', icon: RefreshCw, color: 'bg-green-500' },
                  { label: 'متوسط قيمة العميل', value: '$1,250', change: '+8%', icon: DollarSign, color: 'bg-purple-500' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                        <span className="text-xs text-green-600">{stat.change} من الشهر الماضي</span>
                      </div>
                      <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                        <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-medium">نمو العملاء</h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="h-64 relative">
                    {/* Simplified chart visualization */}
                    <div className="absolute inset-x-0 bottom-0 h-full flex items-end">
                      {[35, 45, 30, 50, 40, 60, 55, 65, 75, 70, 80, 85].map((height, index) => (
                        <div key={index} className="flex-1 mx-0.5 flex flex-col items-center">
                          <div 
                            className="w-full bg-blue-100 rounded-t"
                            style={{ height: `${height}%` }}
                          >
                            <div 
                              className="w-full bg-google-blue rounded-t"
                              style={{ height: `${height * 0.7}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 mt-1">
                            {index + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-google-blue rounded-full" />
                      <span className="text-xs text-gray-500">عملاء جدد</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-100 rounded-full" />
                      <span className="text-xs text-gray-500">إجمالي العملاء</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-medium">مصادر العملاء</h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="h-64 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border-[16px] border-blue-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full border-[16px] border-green-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)' }} />
                        <div className="absolute top-0 right-0 w-full h-full border-[16px] border-yellow-500" style={{ clipPath: 'polygon(0 35%, 100% 35%, 100% 60%, 0 60%)' }} />
                        <div className="absolute top-0 right-0 w-full h-full border-[16px] border-red-500" style={{ clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)' }} />
                        <div className="absolute top-0 right-0 w-full h-full border-[16px] border-purple-500" style={{ clipPath: 'polygon(0 80%, 100% 80%, 100% 100%, 0 100%)' }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {[
                      { label: 'وسائل التواصل', value: '35%', color: 'bg-blue-500' },
                      { label: 'البحث العضوي', value: '25%', color: 'bg-green-500' },
                      { label: 'الإعلانات المدفوعة', value: '20%', color: 'bg-yellow-500' },
                      { label: 'الإحالات', value: '15%', color: 'bg-red-500' },
                      { label: 'أخرى', value: '5%', color: 'bg-purple-500' }
                    ].map((source, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${source.color}`} />
                        <div>
                          <span className="text-xs text-gray-500">{source.label}</span>
                          <span className="text-xs font-medium block">{source.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-medium">أداء التصنيفات</h3>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Filter className="h-4  w-4" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">التصنيف</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">عدد العملاء</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">معدل التحويل</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">متوسط القيمة</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">معدل الاحتفاظ</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { name: 'العملاء الجدد', count: 156, conversion: '35%', value: '$950', retention: '78%', color: 'bg-blue-500' },
                        { name: 'المشتركون في الباقة المتقدمة', count: 423, conversion: '65%', value: '$1,850', retention: '92%', color: 'bg-purple-500' },
                        { name: 'العملاء المهتمون بالتكامل', count: 89, conversion: '42%', value: '$1,250', retention: '85%', color: 'bg-green-500' },
                        { name: 'العملاء غير النشطين', count: 217, conversion: '12%', value: '$450', retention: '35%', color: 'bg-yellow-500' }
                      ].map((segment, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${segment.color}`} />
                              <span className="font-medium">{segment.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">{segment.count}</td>
                          <td className="px-4 py-3 text-sm">{segment.conversion}</td>
                          <td className="px-4 py-3 text-sm">{segment.value}</td>
                          <td className="px-4 py-3 text-sm">{segment.retention}</td>
                          <td className="px-4 py-3">
                            <button className="text-google-blue hover:text-blue-700">
                              <ArrowUpRight className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Tag className="h-6 w-6 text-google-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">نظام تصنيفات وتذاكر ذكي</h3>
                <p className="text-sm text-gray-600">
                  يمكن لأعضاء الفريق تصنيف العملاء او المحادثات حسب حالتها لمتابعتها ومراقبتها لاحقاً
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              أو يمكنكك ببساطة تعيين شروط مؤتمتة لتصنيفاتك وترك العملاء والمحادثات تنصف تلقائياً من نفسها حسب سلوك عملائك
            </p>
            <a href="#" className="text-google-blue text-sm hover:underline flex items-center gap-1">
              اقرأ أكثر
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-google-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">التنسيق بين الموظفين باستخدام الملاحظات الخاصة بالفريق</h3>
                <p className="text-sm text-gray-600">
                  تواصل مع زملائك في الفريق دون مغادرة كرزون تشات
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              ببساطة، استخدم الملاحظات الخاصة للإشارة إلى زملائك وتنبيههم حول محادثات العملاء
            </p>
            <a href="#" className="text-google-blue text-sm hover:underline flex items-center gap-1">
              اقرأ أكثر
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-google-blue border border-google-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            استكشف المزيد من ميزات إدارة العملاء
          </motion.button>
        </div>
      </div>
    </div>
  );
}
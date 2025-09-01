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
    avatar: '/images/saudi-man-ahmed.jpg',
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
    avatar: '/images/saudi-woman-sara.jpg',
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
    avatar: '/images/saudi-man-khalid.jpg',
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
    avatar: '/images/saudi-woman-noura.jpg',
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

// Customer Management Demo Component
const CustomerManagementDemo = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);
  const [viewMode, setViewMode] = useState('list');

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 max-w-5xl mx-auto">
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
                  ? 'border-blue-600 text-blue-600'
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
                    className="bg-gray-100 border-none rounded-lg pl-3 pr-10 py-2 text-sm w-64 focus:ring-2 focus:ring-blue-600"
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
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
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
                
                <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        {selectedCustomer.activity.slice(0, 3).map((activity, index) => {
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
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs content would go here */}
        {activeTab !== 'contacts' && (
          <div className="p-6 text-center text-gray-500">
            محتوى تبويب {activeTab === 'segments' ? 'التصنيفات' : activeTab === 'activity' ? 'النشاطات' : 'التحليلات'}
          </div>
        )}
      </div>
    </div>
  );
};

export function CustomerData() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-6 lg:pt-8 xl:pt-10 overflow-hidden" 
             style={{ background: 'linear-gradient(135deg, #06142E 0%, #0B2A52 100%)' }} dir="rtl">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142E]/80 via-transparent to-[#06142E]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06142E]/60 via-transparent to-[#06142E]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-center">
            قوائم العملاء المتقدمة
          </h1>
          
          <div className="text-center flex flex-col items-center justify-center mb-4">
            <div className="w-full flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 leading-relaxed text-center w-full max-w-4xl mx-auto">
                إدارة وتنظيم وتحليل بيانات العملاء بذكاء
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            نظام متقدم لإدارة قوائم العملاء مع إمكانيات التصنيف الذكي وتتبع النشاطات وتحليل البيانات لتحسين علاقاتك مع العملاء
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Customer Management Demo */}
          <div className="relative max-w-6xl mx-auto">
            <CustomerManagementDemo />
          </div>
        </div>
      </div>
    </section>
  );
}


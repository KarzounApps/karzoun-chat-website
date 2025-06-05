import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, FolderTree, Tags, Search,
  Settings, Plus, Edit, Trash2, MoreHorizontal,
  Eye, Clock, User, Filter, ArrowUpRight,
  Layout, Layers, Share2, Lock, Globe,
  FileCheck, Users, Shield, Database
} from 'lucide-react';

export function ContentManagement() {
  const [activeView, setActiveView] = useState('list');
  
  const categories = [
    { id: 1, name: "دليل المستخدم", articles: 15, status: "منشور" },
    { id: 2, name: "الأسئلة الشائعة", articles: 25, status: "منشور" },
    { id: 3, name: "إرشادات التثبيت", articles: 8, status: "مسودة" },
    { id: 4, name: "حل المشكلات", articles: 12, status: "منشور" }
  ];

  const articles = [
    {
      id: 1,
      title: "كيفية إعداد الحساب",
      category: "دليل المستخدم",
      author: "أحمد محمد",
      status: "منشور",
      views: 1250,
      lastUpdated: "2025-02-10"
    },
    {
      id: 2,
      title: "استكشاف الأخطاء وإصلاحها",
      category: "حل المشكلات",
      author: "سارة أحمد",
      status: "مسودة",
      views: 850,
      lastUpdated: "2025-02-09"
    },
    {
      id: 3,
      title: "إعداد التكامل مع API",
      category: "إرشادات التثبيت",
      author: "محمد علي",
      status: "منشور",
      views: 2100,
      lastUpdated: "2025-02-08"
    }
  ];

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
              إدارة محتوى متطورة
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نظام إدارة محتوى قوي يتيح لك تنظيم وتحرير ونشر المحتوى بسهولة، مع دعم كامل للتصنيفات والبحث المتقدم.
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="font-medium">إدارة المحتوى</h3>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveView('list')}
                    className={`p-2 ${
                      activeView === 'list' ? 'bg-gray-100' : 'bg-white'
                    }`}
                  >
                    <Layout className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setActiveView('grid')}
                    className={`p-2 ${
                      activeView === 'grid' ? 'bg-gray-100' : 'bg-white'
                    }`}
                  >
                    <Layers className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="بحث في المحتوى..."
                    className="pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-sm w-64"
                  />
                </div>
                <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-sm">
                  <Filter className="h-4 w-4" />
                  <span>تصفية</span>
                </button>
                <button className="flex items-center gap-2 bg-[#2ca24c] text-white px-4 py-2 rounded-lg text-sm">
                  <Plus className="h-4 w-4" />
                  <span>مقال جديد</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">التصنيفات</h4>
                    <button className="text-[#2ca24c] hover:text-[#239a41]">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center justify-between p-2 hover:bg-white rounded-lg cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <FolderTree className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                          {category.articles}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Articles List */}
              <div className="lg:col-span-3">
                <div className="space-y-4">
                  {articles.map((article) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-[#2ca24c]" />
                          <h4 className="font-medium">{article.title}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            article.status === 'منشور'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {article.status}
                          </span>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <MoreHorizontal className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.lastUpdated}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                            <Edit className="h-4 w-4" />
                            <span>تحرير</span>
                          </button>
                          <button className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                            <span>حذف</span>
                          </button>
                        </div>
                        <button className="flex items-center gap-1 text-sm text-[#2ca24c] hover:text-[#239a41]">
                          <Eye className="h-4 w-4" />
                          <span>معاينة</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FileCheck,
              title: "تنظيم محتوى متقدم",
              description: "نظام تصنيف مرن مع دعم للوسوم والفئات المتداخلة"
            },
            {
              icon: Users,
              title: "إدارة الصلاحيات",
              description: "تحكم دقيق في صلاحيات الوصول والتحرير لكل مستخدم"
            },
            {
              icon: Database,
              title: "نسخ احتياطي تلقائي",
              description: "حماية المحتوى مع نسخ احتياطي تلقائي ومنتظم"
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
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
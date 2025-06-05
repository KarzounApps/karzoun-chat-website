import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, PieChart, TrendingUp, Users,
  Search, ArrowUpRight, ArrowDownRight,
  Eye, Clock, ThumbsUp, ThumbsDown,
  FileText, Bot, MessageSquare, Filter,
  Download, Share2, RefreshCw, Settings2,
  ChevronDown, Calendar, ArrowRight,
  CheckCircle2
} from 'lucide-react';

export function Analytics() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              تحليلات شاملة
              <span className="block text-[#2ca24c]">لتحسين قاعدة المعرفة</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              تحليلات متقدمة تساعدك على فهم كيفية استخدام قاعدة المعرفة وتحسين المحتوى بناءً على البيانات
            </p>
          </motion.div>
        </div>

        {/* Analytics Dashboard */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-16">
          {/* Dashboard Header */}
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="font-medium">لوحة التحليلات</h3>
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>آخر 30 يوم</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Download className="h-4 w-4 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Share2 className="h-4 w-4 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <RefreshCw className="h-4 w-4 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Settings2 className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "إجمالي المشاهدات",
                  value: "45,678",
                  change: "+12.5%",
                  trend: "up",
                  icon: Eye
                },
                {
                  title: "متوسط وقت القراءة",
                  value: "3.5 دقيقة",
                  change: "+8.2%",
                  trend: "up",
                  icon: Clock
                },
                {
                  title: "معدل الرضا",
                  value: "92%",
                  change: "+5.4%",
                  trend: "up",
                  icon: ThumbsUp
                },
                {
                  title: "معدل الارتداد",
                  value: "15%",
                  change: "-3.2%",
                  trend: "down",
                  icon: ThumbsDown
                }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="h-6 w-6 text-[#2ca24c]" />
                    <span className={`text-sm ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <h4 className="text-sm text-gray-600 mb-1">{metric.title}</h4>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pageviews Chart */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-medium">مشاهدات الصفحات</h4>
                  <button className="text-sm text-[#2ca24c]">تفاصيل أكثر</button>
                </div>
                <div className="h-64 relative">
                  {/* Simplified Chart Visualization */}
                  <div className="absolute inset-0 flex items-end">
                    {[35, 45, 30, 50, 40, 60, 55, 65, 75, 70, 80, 85].map((height, index) => (
                      <div key={index} className="flex-1 mx-0.5">
                        <div 
                          className="w-full bg-[#2ca24c] bg-opacity-20 rounded-t"
                          style={{ height: `${height}%` }}
                        >
                          <div 
                            className="w-full bg-[#2ca24c] rounded-t"
                            style={{ height: `${height * 0.7}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Popular Articles */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-medium">المقالات الأكثر مشاهدة</h4>
                  <button className="text-sm text-[#2ca24c]">عرض الكل</button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "كيفية إعداد الحساب", views: 1250, trend: "up" },
                    { title: "استكشاف الأخطاء وإصلاحها", views: 980, trend: "up" },
                    { title: "دليل المستخدم الأساسي", views: 850, trend: "down" },
                    { title: "إعداد التكامل مع API", views: 720, trend: "up" }
                  ].map((article, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <span className="text-sm">{article.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{article.views}</span>
                        {article.trend === 'up' ? (
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: "تحليل البحث",
              description: "فهم ما يبحث عنه المستخدمون وتحسين المحتوى",
              metrics: [
                "الكلمات المفتاحية الأكثر بحثاً",
                "نتائج غير موجودة",
                "معدل نجاح البحث"
              ]
            },
            {
              icon: Bot,
              title: "أداء المساعد الذكي",
              description: "تحليل دقيق لأداء المساعد الذكي وتحسين الردود",
              metrics: [
                "دقة الإجابات",
                "معدل حل المشكلات",
                "وقت الاستجابة"
              ]
            },
            {
              icon: Users,
              title: "تحليل سلوك المستخدم",
              description: "فهم كيفية تفاعل المستخدمين مع المحتوى",
              metrics: [
                "مسارات التصفح",
                "وقت القراءة",
                "معدلات التحويل"
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
                {feature.metrics.map((metric, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#2ca24c]" />
                    {metric}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Export Options */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">تصدير التقارير</h3>
              <p className="text-gray-600">صدّر تقارير مخصصة بتنسيقات متعددة</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                <Download className="h-4 w-4" />
                <span>PDF</span>
              </button>
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                <Download className="h-4 w-4" />
                <span>Excel</span>
              </button>
              <button className="flex items-center gap-2 bg-[#2ca24c] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#239a41]">
                <Share2 className="h-4 w-4" />
                <span>مشاركة التقرير</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
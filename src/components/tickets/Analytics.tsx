import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, PieChart, TrendingUp, Users,
  Search, ArrowUpRight, ArrowDownRight,
  Eye, Clock, ThumbsUp, ThumbsDown,
  FileText, Bot, MessageSquare, Filter,
  Download, Share2, RefreshCw, Settings2,
  ChevronDown, Calendar, ArrowRight,
  CheckCircle2, Ticket, Flag, User,
  MoreHorizontal, Plus, Tag, Bell
} from 'lucide-react';

export function Analytics() {
  const [dateRange, setDateRange] = useState('30d');
  const [activeView, setActiveView] = useState('overview');

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
              <span className="block text-[#2ca24c]">لتحسين الأداء</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              تحليلات متقدمة تساعدك على فهم أداء فريقك وتحسين معالجة التذاكر والمهام
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
                  title: "إجمالي التذاكر",
                  value: "1,234",
                  change: "+12.5%",
                  trend: "up",
                  icon: Ticket
                },
                {
                  title: "متوسط وقت الحل",
                  value: "2.5 ساعة",
                  change: "-8.2%",
                  trend: "down",
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
                  title: "التذاكر المفتوحة",
                  value: "45",
                  change: "-3.2%",
                  trend: "down",
                  icon: Eye
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
              {/* Tickets Volume Chart */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-medium">حجم التذاكر</h4>
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

              {/* Team Performance */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-medium">أداء الفريق</h4>
                  <button className="text-sm text-[#2ca24c]">عرض الكل</button>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "أحمد محمد", tickets: 45, completion: 92 },
                    { name: "سارة أحمد", tickets: 38, completion: 88 },
                    { name: "محمد علي", tickets: 42, completion: 95 },
                    { name: "نورة خالد", tickets: 36, completion: 87 }
                  ].map((member, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{member.name}</span>
                          <span className="text-sm text-gray-500">{member.tickets} تذكرة</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div 
                            className="h-2 bg-[#2ca24c] rounded-full"
                            style={{ width: `${member.completion}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-medium">{member.completion}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ticket Categories */}
            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-medium">تصنيفات التذاكر</h4>
                <button className="text-sm text-[#2ca24c]">تحليل مفصل</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "دعم فني", count: 450, percentage: 45 },
                  { name: "استفسارات", count: 320, percentage: 32 },
                  { name: "مشاكل", count: 180, percentage: 18 },
                  { name: "اقتراحات", count: 50, percentage: 5 }
                ].map((category, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-[#2ca24c] rounded-full"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 mt-1 block">
                      {category.percentage}% من الإجمالي
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "تحليل الأداء",
              description: "قياس وتحليل مؤشرات الأداء الرئيسية",
              metrics: [
                "وقت الاستجابة",
                "معدل الإنجاز",
                "جودة الحلول"
              ]
            },
            {
              icon: Users,
              title: "أداء الفريق",
              description: "تحليل أداء أعضاء الفريق وتوزيع العمل",
              metrics: [
                "إنتاجية الموظفين",
                "توزيع المهام",
                "معدلات الإنجاز"
              ]
            },
            {
              icon: TrendingUp,
              title: "تحليل الاتجاهات",
              description: "تحليل اتجاهات التذاكر والمشكلات الشائعة",
              metrics: [
                "المشكلات المتكررة",
                "أوقات الذروة",
                "تحليل الأسباب"
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
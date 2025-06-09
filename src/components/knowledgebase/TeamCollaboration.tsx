import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  FileText,
  Clock,
  User,
  Edit,
  CheckCircle2,
  Lock,
  Globe,
  Share2,
  UserPlus,
  Settings2,
  History,
  Bell,
  Calendar,
  ArrowRight,
  Shield,
  Plus,
} from "lucide-react";

export function TeamCollaboration() {
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
            <h2 className="text-3xl font-bold mb-4">تعاون فريق فعال</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              أدوات متكاملة لتمكين فريقك من العمل معاً بكفاءة على إنشاء وتحديث محتوى قاعدة المعرفة
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Collaboration Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#2ca24c]" />
                  <h3 className="font-medium">تعاون الفريق</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <UserPlus className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Settings2 className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Activity Feed */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Edit className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">أحمد محمد</span>
                      <span className="text-sm text-gray-500">قام بتحديث مقال</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      &quot;إعداد روبوت المحادثة&quot; - تحديث إرشادات التكوين
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        قبل 5 دقائق
                      </span>
                      <button className="text-blue-600 hover:text-blue-700">عرض التغييرات</button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">سارة أحمد</span>
                      <span className="text-sm text-gray-500">راجعت واعتمدت التغييرات</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">&quot;دليل المستخدم الأساسي&quot; - جاهز للنشر</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        قبل 15 دقيقة
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">محمد علي</span>
                      <span className="text-sm text-gray-500">أضاف تعليقاً</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      &quot;يجب إضافة المزيد من الأمثلة التوضيحية في قسم التكامل مع API&quot;
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        قبل ساعة
                      </span>
                      <button className="text-blue-600 hover:text-blue-700">رد</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 bg-[#2ca24c] text-white px-4 py-2 rounded-lg text-sm">
                    <Plus className="h-4 w-4" />
                    <span>مقال جديد</span>
                  </button>
                  <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm">
                    <History className="h-4 w-4" />
                    <span>سجل التغييرات</span>
                  </button>
                  <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm">
                    <Bell className="h-4 w-4" />
                    <span>التنبيهات</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              أدوات تعاون متكاملة
              <span className="block text-[#2ca24c]">لفريق أكثر إنتاجية</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              مجموعة شاملة من الأدوات التي تمكن فريقك من العمل معاً بكفاءة على إنشاء وتحديث محتوى قاعدة المعرفة.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "إدارة الأدوار والصلاحيات",
                  description: "تحكم دقيق في صلاحيات كل عضو في الفريق",
                },
                {
                  icon: History,
                  title: "سجل التغييرات",
                  description: "تتبع كامل لجميع التعديلات مع إمكانية التراجع",
                },
                {
                  icon: MessageSquare,
                  title: "تعليقات وملاحظات",
                  description: "نظام تعليقات متكامل للمناقشة والمراجعة",
                },
                {
                  icon: Bell,
                  title: "إشعارات مخصصة",
                  description: "تنبيهات فورية للتغييرات والمهام الجديدة",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-green-100 p-2 rounded-lg">
                    <feature.icon className="h-6 w-6 text-[#2ca24c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text- [#2ca24c]" />
                <span>الأمان والخصوصية</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "تحكم كامل في صلاحيات الوصول",
                  "تشفير المحتوى والبيانات",
                  "سجل تدقيق شامل",
                  "نسخ احتياطي تلقائي",
                  "حماية ضد التعديلات غير المصرح بها",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#2ca24c] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Calendar,
              title: "جدولة المراجعات",
              description: "جدولة مراجعات دورية للمحتوى لضمان دقته وحداثته",
              features: ["تذكيرات تلقائية", "تعيين مراجعين", "متابعة حالة المراجعة"],
            },
            {
              icon: Share2,
              title: "مشاركة المعرفة",
              description: "أدوات متقدمة لمشاركة المحتوى داخلياً وخارجياً",
              features: ["روابط مشاركة مخصصة", "تحكم في صلاحيات المشاركة", "تتبع المشاهدات"],
            },
            {
              icon: ArrowRight,
              title: "تدفق العمل المخصص",
              description: "إنشاء وتخصيص تدفقات عمل لإدارة المحتوى",
              features: ["خطوات موافقة مخصصة", "قواعد نشر تلقائية", "إشعارات مخصصة"],
            },
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
      </div>
    </div>
  );
}

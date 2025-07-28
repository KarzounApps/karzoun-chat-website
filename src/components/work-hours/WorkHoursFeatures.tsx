import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  Users, 
  Settings, 
  Bell, 
  BarChart3,
  UserCheck,
  Timer,
  Zap
} from 'lucide-react';

export function WorkHoursFeatures() {
  const features = [
    {
      icon: Clock,
      title: 'تحديد ساعات العمل',
      description: 'حدد ساعات العمل الرسمية لكل يوم من أيام الأسبوع مع إمكانية التخصيص حسب الحاجة',
      color: 'bg-blue-500'
    },
    {
      icon: Calendar,
      title: 'جداول المناوبة',
      description: 'أنشئ وإدارة جداول المناوبة للفريق مع توزيع عادل للمهام والأوقات',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'إدارة الفريق',
      description: 'تتبع حضور وغياب أعضاء الفريق وإدارة الإجازات والعطل الرسمية',
      color: 'bg-purple-500'
    },
    {
      icon: Bell,
      title: 'تنبيهات ذكية',
      description: 'احصل على تنبيهات عند بداية ونهاية المناوبة وعند تغيير الجداول',
      color: 'bg-orange-500'
    },
    {
      icon: BarChart3,
      title: 'تقارير الأداء',
      description: 'تقارير مفصلة عن ساعات العمل والإنتاجية ومعدلات الحضور',
      color: 'bg-red-500'
    },
    {
      icon: Settings,
      title: 'إعدادات مرنة',
      description: 'خيارات متقدمة لتخصيص أوقات العمل حسب المناطق الزمنية والمتطلبات الخاصة',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ميزات إدارة ساعات العمل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              كل ما تحتاجه لإدارة أوقات عمل فريقك بكفاءة وفعالية
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              لماذا تختار نظام إدارة ساعات العمل؟
            </h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              حلول متكاملة لتنظيم أوقات العمل وزيادة الإنتاجية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">توفير الوقت</h4>
              <p className="text-blue-100 text-sm">
                أتمتة إدارة الجداول يوفر ساعات من العمل اليدوي
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">رضا الموظفين</h4>
              <p className="text-blue-100 text-sm">
                جداول عادلة ومرنة تحسن من رضا أعضاء الفريق
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">زيادة الإنتاجية</h4>
              <p className="text-blue-100 text-sm">
                تنظيم أفضل للأوقات يؤدي إلى إنتاجية أعلى
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


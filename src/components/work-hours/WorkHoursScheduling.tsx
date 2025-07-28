import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  User,
  CheckCircle2
} from 'lucide-react';

export function WorkHoursScheduling() {
  const [currentWeek, setCurrentWeek] = useState(0);

  const weekDays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  
  const scheduleData = [
    {
      day: 'الأحد',
      shifts: [
        { name: 'أحمد محمد', time: '9:00 - 17:00', type: 'صباحي', status: 'active' },
        { name: 'فاطمة علي', time: '17:00 - 1:00', type: 'مسائي', status: 'active' }
      ]
    },
    {
      day: 'الاثنين',
      shifts: [
        { name: 'محمد سالم', time: '9:00 - 17:00', type: 'صباحي', status: 'active' },
        { name: 'سارة أحمد', time: '17:00 - 1:00', type: 'مسائي', status: 'active' }
      ]
    },
    {
      day: 'الثلاثاء',
      shifts: [
        { name: 'علي حسن', time: '9:00 - 17:00', type: 'صباحي', status: 'active' },
        { name: 'نور الدين', time: '17:00 - 1:00', type: 'مسائي', status: 'pending' }
      ]
    },
    {
      day: 'الأربعاء',
      shifts: [
        { name: 'ليلى محمود', time: '9:00 - 17:00', type: 'صباحي', status: 'active' },
        { name: 'خالد عبدالله', time: '17:00 - 1:00', type: 'مسائي', status: 'active' }
      ]
    },
    {
      day: 'الخميس',
      shifts: [
        { name: 'مريم سعد', time: '9:00 - 17:00', type: 'صباحي', status: 'active' },
        { name: 'يوسف كريم', time: '17:00 - 1:00', type: 'مسائي', status: 'active' }
      ]
    },
    {
      day: 'الجمعة',
      shifts: [
        { name: 'هدى عمر', time: '10:00 - 16:00', type: 'مخفف', status: 'active' }
      ]
    },
    {
      day: 'السبت',
      shifts: [
        { name: 'عمر فاروق', time: '10:00 - 16:00', type: 'مخفف', status: 'active' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'مؤكد';
      case 'pending':
        return 'في الانتظار';
      default:
        return 'غير محدد';
    }
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              جدولة المناوبات الذكية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نظام متقدم لإدارة جداول العمل مع واجهة سهلة الاستخدام
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Schedule Interface */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">جدول هذا الأسبوع</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {scheduleData.map((dayData, index) => (
                <motion.div
                  key={dayData.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{dayData.day}</h4>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <div className="space-y-2">
                    {dayData.shifts.map((shift, shiftIndex) => (
                      <div key={shiftIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-sm text-gray-900">{shift.name}</div>
                            <div className="text-xs text-gray-500">{shift.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(shift.status)}`}>
                            {getStatusText(shift.status)}
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {shift.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                كيف يعمل النظام؟
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Calendar,
                    title: 'إنشاء الجداول',
                    description: 'أنشئ جداول المناوبة بسهولة مع إمكانية التكرار الأسبوعي أو الشهري'
                  },
                  {
                    icon: Users,
                    title: 'تعيين الموظفين',
                    description: 'اختر الموظفين المناسبين لكل مناوبة حسب المهارات والتوفر'
                  },
                  {
                    icon: Clock,
                    title: 'تتبع الحضور',
                    description: 'تتبع أوقات الحضور والانصراف مع تسجيل دقيق للساعات'
                  },
                  {
                    icon: CheckCircle2,
                    title: 'التأكيد والموافقة',
                    description: 'نظام موافقة متقدم للتأكد من قبول الموظفين للمناوبات المحددة'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">مميزات إضافية</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  إشعارات تلقائية للموظفين
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  تقارير الحضور والغياب
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  إدارة الإجازات والعطل
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  تكامل مع أنظمة الرواتب
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


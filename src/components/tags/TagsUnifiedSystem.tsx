import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, FileText, Settings, BarChart3, Users 
} from 'lucide-react';

export function TagsUnifiedSystem() {
  const systemFeatures = [
    {
      icon: Plus,
      title: 'إضافة وسم جديد',
      description: 'أنشئ وسماً مخصصاً جديداً، وحدد لونه، وصنف المحادثات بسهولة',
    },
    {
      icon: FileText,
      title: 'تصنيف فوري',
      description: 'اختر الوسوم المناسبة وطبقها على المحادثات الجديدة أو الموجودة',
    },
    {
      icon: Settings,
      title: 'قيود تلقائية',
      description: 'ضع قيود تلقائية على الوسوم للحفاظ على التنظيم والاتساق',
    },
    {
      icon: BarChart3,
      title: 'تحليلات مفصلة',
      description: 'احصل على تقارير وإحصائيات مفصلة عن استخدام الوسوم',
    },
    {
      icon: Users,
      title: 'تجربة عميل أفضل',
      description: 'اتجه نحو محادثة أكثر تنظيماً لزيادة رضا العميل',
    },
  ];

  const mockConversations = [
    {
      name: 'محمد أحمد',
      status: 'عميل',
      tag: 'VIP',
      tagColor: 'bg-purple-100 text-purple-800',
    },
    {
      name: 'فاطمة علي',
      status: 'عميل',
      tag: 'جديد',
      tagColor: 'bg-blue-100 text-blue-800',
    },
    {
      name: 'خالد سعيد',
      status: 'عميل',
      tag: 'دعم',
      tagColor: 'bg-gray-100 text-gray-800',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            وسوم موحدة تنظم كل تواصلك
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            صنف كل شيء بسهولة
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {systemFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-google-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-google-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="space-y-4">
              {mockConversations.map((conversation, index) => (
                <motion.div
                  key={conversation.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-google-blue rounded-full flex items-center justify-center text-white font-semibold">
                      {conversation.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{conversation.name}</p>
                      <p className="text-sm text-gray-500">{conversation.status}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${conversation.tagColor}`}>
                    {conversation.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


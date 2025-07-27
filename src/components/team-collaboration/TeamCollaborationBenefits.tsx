import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Shield, Eye, Zap, BarChart3 } from 'lucide-react';

export function TeamCollaborationBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "وفر وقت فريقك",
      description: "توزيع المحادثات آلياً يقلّل العمل اليدوي ويُسرّع الاستجابة."
    },
    {
      icon: Shield,
      title: "تحكّم كامل",
      description: "صلاحيات مرنة تضمن وصول كل عضو للرسائل المناسبة فقط."
    },
    {
      icon: Eye,
      title: "رؤية فورية",
      description: "لوحة شات حيّة تُظهر أولوية وحالة كل محادثة في لحظة."
    },
    {
      icon: Zap,
      title: "أتمتة ذكية",
      description: "قوالب وردود جاهزة تحافظ على اتساق نبرة العلامة وتُبهر عملاءك."
    },
    {
      icon: BarChart3,
      title: "قرار مبني على بيانات",
      description: "تقارير أداء تفصيلية تبرز الاختناقات وتدعم قراراتك الاستراتيجية."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            لماذا تعاون الفريق؟
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-google-blue rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


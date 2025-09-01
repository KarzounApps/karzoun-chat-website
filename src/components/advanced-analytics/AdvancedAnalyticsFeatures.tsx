import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Activity, 
  Users,
  MessageSquare,
  Clock,
  Target,
  Filter,
  Calendar,
  Download,
  CheckCircle,
  Eye,
  Zap
} from 'lucide-react';

const AdvancedAnalyticsFeatures = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "تحليلات الأداء الشاملة",
      description: "مؤشرات أداء رئيسية شاملة تغطي جميع جوانب خدمة العملاء مع تحليل عميق للاتجاهات والأنماط",
      benefits: [
        "مؤشرات الأداء الرئيسية (KPIs)",
        "تحليل الاتجاهات الزمنية",
        "مقارنات دورية للأداء",
        "تقارير مخصصة قابلة للتخصيص"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "تحليل الاتجاهات والتوقعات",
      description: "تحليل متقدم للاتجاهات مع إمكانيات التنبؤ لمساعدتك في التخطيط المستقبلي واتخاذ قرارات استراتيجية",
      benefits: [
        "تحليل الاتجاهات طويلة المدى",
        "نماذج التنبؤ الذكية",
        "تحديد الأنماط الموسمية",
        "توقعات الطلب والحمولة"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "تحليلات العملاء المتقدمة",
      description: "فهم عميق لسلوك العملاء ورحلتهم مع تحليل شامل للتفاعلات والتفضيلات",
      benefits: [
        "تحليل رحلة العميل",
        "تجميع العملاء حسب السلوك",
        "تحليل معدلات الاحتفاظ",
        "قياس قيمة العميل مدى الحياة"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "تحليل الأوقات والكفاءة",
      description: "مراقبة دقيقة لأوقات الاستجابة والحل مع تحليل الكفاءة التشغيلية وتحديد الاختناقات",
      benefits: [
        "تتبع أوقات الاستجابة",
        "تحليل أوقات الذروة",
        "قياس الكفاءة التشغيلية",
        "تحديد نقاط الاختناق"
      ]
    },
    {
      icon: <PieChart className="w-8 h-8 text-blue-500" />,
      title: "تحليلات التوزيع والتصنيف",
      description: "رؤى مفصلة حول توزيع المحادثات والتذاكر حسب الفئات والأولويات مع تحليل الأنماط",
      benefits: [
        "توزيع المحادثات حسب الفئة",
        "تحليل الأولويات",
        "تصنيف أنواع المشاكل",
        "تحليل القنوات المختلفة"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "تحليل الأهداف والإنجازات",
      description: "مراقبة تحقيق الأهداف المحددة مع تحليل الأداء مقابل المعايير المرجعية والأهداف الاستراتيجية",
      benefits: [
        "تتبع تحقيق الأهداف",
        "مقارنة بالمعايير المرجعية",
        "تحليل الانحرافات",
        "تقييم الأداء الاستراتيجي"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مميزات التحليلات المتقدمة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            احصل على رؤى عميقة ومؤشرات أداء شاملة لتحسين جودة خدمة العملاء واتخاذ قرارات مدروسة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 flex-row-reverse mb-6">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <span className="text-gray-700 text-right flex-1">{benefit}</span>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Charts Demo Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              رسوم بيانية تفاعلية متقدمة
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              استكشف البيانات بطريقة تفاعلية مع رسوم بيانية ديناميكية وتقارير قابلة للتخصيص
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-time Performance Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">مباشر</span>
                </div>
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-right">الأداء المباشر</h4>
              <div className="h-32 flex items-end justify-between gap-1">
                {[65, 78, 82, 71, 89, 76, 94, 68, 85, 79, 91, 73].map((height, i) => (
                  <div key={i} className="flex-1 bg-blue-500 rounded-t transition-all duration-500 hover:bg-blue-600" 
                       style={{height: `${height}%`, maxHeight: '120px'}}></div>
                ))}
              </div>
              <div className="text-center mt-4">
                <span className="text-2xl font-bold text-blue-600">87%</span>
                <p className="text-sm text-gray-600">متوسط الأداء</p>
              </div>
            </div>

            {/* Customer Satisfaction Gauge */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <Eye className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-gray-600">تحديث كل دقيقة</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-right">رضا العملاء</h4>
              <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeDasharray="85, 100"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">96%</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">+3% من الشهر الماضي</p>
              </div>
            </div>

            {/* Response Time Trend */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <Zap className="w-5 h-5 text-orange-600" />
                <span className="text-sm text-gray-600">آخر 7 أيام</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-right">وقت الاستجابة</h4>
              <div className="h-20 flex items-end justify-between">
                <div className="w-6 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t" style={{height: '60px'}}></div>
                <div className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t" style={{height: '80px'}}></div>
                <div className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t" style={{height: '75px'}}></div>
                <div className="w-6 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t" style={{height: '65px'}}></div>
                <div className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t" style={{height: '85px'}}></div>
                <div className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t" style={{height: '90px'}}></div>
                <div className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t" style={{height: '70px'}}></div>
              </div>
              <div className="text-center mt-4">
                <span className="text-2xl font-bold text-green-600">1.8</span>
                <p className="text-sm text-gray-600">دقيقة متوسط</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Analytics Tools */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">تصفية ديناميكية</h3>
            <p className="text-gray-600 text-sm">
              تصفية البيانات حسب التاريخ والفريق والقناة
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">تقارير مجدولة</h3>
            <p className="text-gray-600 text-sm">
              تقارير تلقائية يومية وأسبوعية وشهرية
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">تصدير متقدم</h3>
            <p className="text-gray-600 text-sm">
              تصدير بصيغ متعددة مع تخصيص البيانات
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">تحليل المحتوى</h3>
            <p className="text-gray-600 text-sm">
              تحليل محتوى المحادثات والمشاعر
            </p>
          </div>
        </div>

        {/* Advanced Analytics Demo */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              تحليلات ذكية بالذكاء الاصطناعي
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              استفد من قوة الذكاء الاصطناعي للحصول على رؤى أعمق وتوصيات ذكية لتحسين الأداء
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12,847</div>
              <div className="text-blue-100">محادثة محللة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">96%</div>
              <div className="text-blue-100">دقة التحليل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">+18%</div>
              <div className="text-blue-100">تحسن الأداء</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">مراقبة مستمرة</div>
            </div>
          </div>
        </div>

        {/* Integration Features */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              تكامل شامل مع جميع الأنظمة
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تكامل سلس مع جميع أدوات العمل لتجربة تحليلية موحدة وشاملة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">تحليلات الأداء</h4>
              <p className="text-gray-600 text-sm">
                ربط مباشر مع جميع مؤشرات الأداء والمقاييس
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">إدارة العملاء</h4>
              <p className="text-gray-600 text-sm">
                تحليل شامل لبيانات العملاء وسلوكهم
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">المراقبة المباشرة</h4>
              <p className="text-gray-600 text-sm">
                مراقبة مستمرة للأداء مع تنبيهات ذكية
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAnalyticsFeatures;


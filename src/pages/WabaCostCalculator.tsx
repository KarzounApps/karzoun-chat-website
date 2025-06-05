import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Send, 
  MessageSquare, 
  Users, 
  DollarSign, 
  Globe, 
  HelpCircle, 
  Info, 
  Download, 
  Share2, 
  ChevronDown, 
  ChevronUp,
  Check,
  X,
  AlertCircle,
  FileText,
  Smartphone,
  Clock,
  ArrowRight,
  Zap,
  RefreshCw,
  PieChart,
  BarChart,
  Percent
} from 'lucide-react';

// Define types for the calculator
interface CountryRate {
  name: string;
  code: string;
  businessInitiatedRate: number;
  userInitiatedRate: number;
  currency: string;
}

interface MessageType {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  category: 'business' | 'user';
}

interface CalculationResult {
  dailyCost: number;
  monthlyCost: number;
  yearlyCost: number;
  messageBreakdown: {
    type: string;
    count: number;
    rate: number;
    cost: number;
    category: 'business' | 'user';
  }[];
  totalMessages: number;
  businessInitiatedPercentage: number;
  userInitiatedPercentage: number;
  currency: string;
}

// Sample country rates data
const countryRates: CountryRate[] = [
  { name: "المملكة العربية السعودية", code: "SA", businessInitiatedRate: 0.0474, userInitiatedRate: 0.0079, currency: "USD" },
  { name: "الإمارات العربية المتحدة", code: "AE", businessInitiatedRate: 0.0474, userInitiatedRate: 0.0079, currency: "USD" },
  { name: "مصر", code: "EG", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "الكويت", code: "KW", businessInitiatedRate: 0.0474, userInitiatedRate: 0.0079, currency: "USD" },
  { name: "قطر", code: "QA", businessInitiatedRate: 0.0474, userInitiatedRate: 0.0079, currency: "USD" },
  { name: "البحرين", code: "BH", businessInitiatedRate: 0.0474, userInitiatedRate: 0.0079, currency: "USD" },
  { name: "عمان", code: "OM", businessInitiatedRate: 0.0474, userInitiatedRate: 0.0079, currency: "USD" },
  { name: "الأردن", code: "JO", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "لبنان", code: "LB", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "المغرب", code: "MA", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "تونس", code: "TN", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "الجزائر", code: "DZ", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "العراق", code: "IQ", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "ليبيا", code: "LY", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "السودان", code: "SD", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "اليمن", code: "YE", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "سوريا", code: "SY", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "فلسطين", code: "PS", businessInitiatedRate: 0.0316, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "الولايات المتحدة", code: "US", businessInitiatedRate: 0.0158, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "المملكة المتحدة", code: "GB", businessInitiatedRate: 0.0474, userInitiatedRate: 0.0158, currency: "USD" },
  { name: "الهند", code: "IN", businessInitiatedRate: 0.0079, userInitiatedRate: 0.0026, currency: "USD" },
  { name: "البرازيل", code: "BR", businessInitiatedRate: 0.0158, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "المكسيك", code: "MX", businessInitiatedRate: 0.0158, userInitiatedRate: 0.0053, currency: "USD" },
  { name: "إندونيسيا", code: "ID", businessInitiatedRate: 0.0079, userInitiatedRate: 0.0026, currency: "USD" },
  { name: "دول أخرى", code: "OTHER", businessInitiatedRate: 0.0474, userInitiatedRate: 0.0158, currency: "USD" }
];

// Message types
const messageTypes: MessageType[] = [
  { 
    id: "template", 
    name: "رسائل القوالب", 
    description: "رسائل مهيكلة مسبقًا تستخدم للتواصل مع العملاء", 
    icon: FileText,
    category: "business"
  },
  { 
    id: "marketing", 
    name: "رسائل تسويقية", 
    description: "رسائل للترويج للمنتجات والخدمات والعروض", 
    icon: Smartphone,
    category: "business"
  },
  { 
    id: "transactional", 
    name: "رسائل المعاملات", 
    description: "إشعارات حول المعاملات والطلبات والتأكيدات", 
    icon: Clock,
    category: "business"
  },
  { 
    id: "service", 
    name: "رسائل الخدمة", 
    description: "رسائل متعلقة بخدمة العملاء والدعم", 
    icon: Zap,
    category: "business"
  },
  { 
    id: "user_reply", 
    name: "ردود المستخدمين", 
    description: "رسائل يبدأها المستخدم ردًا على رسائلك", 
    icon: MessageSquare,
    category: "user"
  },
  { 
    id: "user_initiated", 
    name: "محادثات بدأها المستخدم", 
    description: "محادثات جديدة يبدأها المستخدم", 
    icon: Users,
    category: "user"
  }
];

// FAQ data
const faqData = [
  {
    question: "ما هي رسائل واتساب للأعمال؟",
    answer: "رسائل واتساب للأعمال (WhatsApp Business API) هي خدمة تتيح للشركات التواصل مع عملائها عبر منصة واتساب. يمكن للشركات إرسال إشعارات، وتقديم خدمة العملاء، وإجراء محادثات تسويقية مع العملاء الذين اختاروا التواصل معهم."
  },
  {
    question: "كيف يتم احتساب تكاليف رسائل واتساب للأعمال؟",
    answer: "يعتمد تسعير رسائل واتساب للأعمال على نوع الرسالة (بدأها العمل أو بدأها المستخدم) والدولة التي يتواجد فيها المستلم. الرسائل التي يبدأها العمل عادة ما تكون أعلى سعرًا من الرسائل التي يبدأها المستخدم. تختلف الأسعار أيضًا حسب البلد."
  },
  {
    question: "ما الفرق بين الرسائل التي يبدأها العمل والرسائل التي يبدأها المستخدم؟",
    answer: "الرسائل التي يبدأها العمل هي رسائل ترسلها الشركة للمستخدم، مثل الإشعارات والرسائل التسويقية. الرسائل التي يبدأها المستخدم هي محادثات يبدأها العميل، أو ردود على رسائل الشركة ضمن نافذة الـ 24 ساعة."
  },
  {
    question: "ما هي نافذة الـ 24 ساعة؟",
    answer: "عندما يرسل المستخدم رسالة إلى عملك، يفتح ذلك 'نافذة محادثة' مدتها 24 ساعة. خلال هذه النافذة، يمكنك إرسال رسائل غير منظمة (رسائل حرة) إلى المستخدم بتكلفة 'رسائل يبدأها المستخدم' المنخفضة. بعد انتهاء النافذة، يجب استخدام قوالب رسائل معتمدة بتكلفة 'رسائل يبدأها العمل' الأعلى."
  },
  {
    question: "هل هناك رسوم إضافية لاستخدام واتساب للأعمال؟",
    answer: "بالإضافة إلى رسوم الرسائل، قد تكون هناك تكاليف إضافية مثل رسوم إعداد حساب واتساب للأعمال، ورسوم الاشتراك الشهري لمنصات إدارة الرسائل مثل كرزون، ورسوم خدمات إضافية مثل الروبوتات والتكاملات."
  },
  {
    question: "هل يمكنني إرسال رسائل تسويقية عبر واتساب للأعمال؟",
    answer: "نعم، يمكنك إرسال رسائل تسويقية، ولكن يجب أن تكون عبر قوالب معتمدة من واتساب، ويجب أن يكون المستخدم قد وافق صراحةً على تلقي هذه الرسائل. تخضع الرسائل التسويقية لتكلفة 'رسائل يبدأها العمل'."
  },
  {
    question: "كيف يمكنني تقليل تكاليف رسائل واتساب للأعمال؟",
    answer: "يمكنك تقليل التكاليف من خلال: تحسين استراتيجية الرسائل للاستفادة من نافذة الـ 24 ساعة، استخدام الروبوتات للرد الآلي على الاستفسارات الشائعة، تحسين جودة المحتوى لزيادة معدلات المشاركة، واستخدام التقسيم الفعال للجمهور لإرسال رسائل أكثر استهدافًا."
  },
  {
    question: "هل تختلف أسعار الرسائل حسب نوع المحتوى؟",
    answer: "لا، لا تختلف الأسعار حسب نوع المحتوى (نص، صورة، فيديو، ملف)، بل تعتمد فقط على نوع الرسالة (بدأها العمل أو بدأها المستخدم) والدولة التي يتواجد فيها المستلم."
  }
];

export function WabaCostCalculator() {
  // State for calculator inputs
  const [selectedCountry, setSelectedCountry] = useState<CountryRate>(countryRates[0]);
  const [messageVolumes, setMessageVolumes] = useState<Record<string, number>>({
    template: 1000,
    marketing: 500,
    transactional: 2000,
    service: 1500,
    user_reply: 3000,
    user_initiated: 1000
  });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  const [activeTab, setActiveTab] = useState<'calculator' | 'pricing' | 'faq'>('calculator');
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Calculate costs when inputs change
  useEffect(() => {
    calculateCosts();
  }, [selectedCountry, messageVolumes]);

  // Calculate the costs based on inputs
  const calculateCosts = () => {
    let totalCost = 0;
    let totalMessages = 0;
    let businessInitiatedCount = 0;
    let userInitiatedCount = 0;
    
    const messageBreakdown = messageTypes.map(type => {
      const count = messageVolumes[type.id] || 0;
      totalMessages += count;
      
      const rate = type.category === 'business' 
        ? selectedCountry.businessInitiatedRate 
        : selectedCountry.userInitiatedRate;
      
      const cost = count * rate;
      totalCost += cost;
      
      if (type.category === 'business') {
        businessInitiatedCount += count;
      } else {
        userInitiatedCount += count;
      }
      
      return {
        type: type.name,
        count,
        rate,
        cost,
        category: type.category
      };
    });
    
    const businessInitiatedPercentage = totalMessages > 0 
      ? (businessInitiatedCount / totalMessages) * 100 
      : 0;
    
    const userInitiatedPercentage = totalMessages > 0 
      ? (userInitiatedCount / totalMessages) * 100 
      : 0;
    
    setCalculationResult({
      dailyCost: totalCost / 30, // Approximate daily cost
      monthlyCost: totalCost,
      yearlyCost: totalCost * 12,
      messageBreakdown,
      totalMessages,
      businessInitiatedPercentage,
      userInitiatedPercentage,
      currency: selectedCountry.currency
    });
  };

  // Handle message volume change
  const handleVolumeChange = (id: string, value: string) => {
    const numValue = parseInt(value) || 0;
    setMessageVolumes(prev => ({
      ...prev,
      [id]: numValue
    }));
  };

  // Format currency
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('ar-SA', { 
      style: 'currency', 
      currency, 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                حاسبة تكاليف واتساب للأعمال
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                احسب تكاليف استخدام واتساب للأعمال (WhatsApp Business API) بدقة وسهولة
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setActiveTab('calculator')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'calculator' 
                      ? 'bg-white text-blue-700' 
                      : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  <Calculator className="h-5 w-5 inline-block ml-2" />
                  حاسبة التكاليف
                </button>
                <button 
                  onClick={() => setActiveTab('pricing')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'pricing' 
                      ? 'bg-white text-blue-700' 
                      : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  <DollarSign className="h-5 w-5 inline-block ml-2" />
                  قائمة الأسعار
                </button>
                <button 
                  onClick={() => setActiveTab('faq')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'faq' 
                      ? 'bg-white text-blue-700' 
                      : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  <HelpCircle className="h-5 w-5 inline-block ml-2" />
                  الأسئلة الشائعة
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Inputs */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Calculator className="h-5 w-5 text-blue-600 ml-2" />
                  إعدادات الحاسبة
                </h2>

                {/* Country Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اختر الدولة
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-gray-400 ml-2" />
                        <span>{selectedCountry.name}</span>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${showCountryDropdown ? 'transform rotate-180' : ''}`} />
                    </button>
                    
                    {showCountryDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto">
                        <div className="p-2">
                          {countryRates.map((country) => (
                            <button
                              key={country.code}
                              onClick={() => {
                                setSelectedCountry(country);
                                setShowCountryDropdown(false);
                              }}
                              className={`w-full text-right px-4 py-2 text-sm hover:bg-gray-100 rounded-lg ${
                                selectedCountry.code === country.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                              }`}
                            >
                              {country.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-xs text-gray-500 flex items-center">
                    <Info className="h-4 w-4 ml-1" />
                    أسعار الرسائل تختلف حسب الدولة
                  </div>
                </div>

                {/* Message Volume Inputs */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">حجم الرسائل الشهري</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-blue-700 mb-2 flex items-center">
                        <Send className="h-4 w-4 ml-1" />
                        رسائل يبدأها العمل
                      </h4>
                      <div className="space-y-4">
                        {messageTypes.filter(type => type.category === 'business').map((type) => (
                          <div key={type.id}>
                            <div className="flex items-center justify-between mb-1">
                              <label className="text-sm font-medium text-gray-700 flex items-center">
                                <type.icon className="h-4 w-4 ml-1 text-gray-500" />
                                {type.name}
                              </label>
                              <div className="text-xs text-gray-500">
                                {formatCurrency(selectedCountry.businessInitiatedRate, selectedCountry.currency)} / رسالة
                              </div>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="number"
                                min="0"
                                value={messageVolumes[type.id] || 0}
                                onChange={(e) => handleVolumeChange(type.id, e.target.value)}
                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                              />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">{type.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-green-700 mb-2 flex items-center">
                        <MessageSquare className="h-4 w-4 ml-1" />
                        رسائل يبدأها المستخدم
                      </h4>
                      <div className="space-y-4">
                        {messageTypes.filter(type => type.category === 'user').map((type) => (
                          <div key={type.id}>
                            <div className="flex items-center justify-between mb-1">
                              <label className="text-sm font-medium text-gray-700 flex items-center">
                                <type.icon className="h-4 w-4 ml-1 text-gray-500" />
                                {type.name}
                              </label>
                              <div className="text-xs text-gray-500">
                                {formatCurrency(selectedCountry.userInitiatedRate, selectedCountry.currency)} / رسالة
                              </div>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="number"
                                min="0"
                                value={messageVolumes[type.id] || 0}
                                onChange={(e) => handleVolumeChange(type.id, e.target.value)}
                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                              />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">{type.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Results and Visualization */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Cost Summary */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <DollarSign className="h-5 w-5 text-blue-600 ml-2" />
                    ملخص التكاليف
                  </h2>

                  {calculationResult && (
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="text-sm text-gray-500 mb-1">التكلفة اليومية (تقريبية)</div>
                          <div className="text-2xl font-bold text-blue-700">
                            {formatCurrency(calculationResult.dailyCost, calculationResult.currency)}
                          </div>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">التكلفة الشهرية</div>
                          <div className="text-2xl font-bold text-blue-800">
                            {formatCurrency(calculationResult.monthlyCost, calculationResult.currency)}
                          </div>
                        </div>
                        <div className="bg-blue-200 rounded-lg p-4">
                          <div className="text-sm text-gray-700 mb-1">التكلفة السنوية</div>
                          <div className="text-2xl font-bold text-blue-900">
                            {formatCurrency(calculationResult.yearlyCost, calculationResult.currency)}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-gray-900">إجمالي الرسائل الشهرية</h3>
                        <span className="text-lg font-bold">{calculationResult.totalMessages.toLocaleString('ar-SA')}</span>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-blue-500 ml-2"></div>
                            <span className="text-sm">رسائل يبدأها العمل</span>
                          </div>
                          <span className="text-sm font-medium">{calculationResult.businessInitiatedPercentage.toFixed(1)}%</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-green-500 ml-2"></div>
                            <span className="text-sm">رسائل يبدأها المستخدم</span>
                          </div>
                          <span className="text-sm font-medium">{calculationResult.userInitiatedPercentage.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div 
                            className="bg-blue-500 h-2.5 rounded-full" 
                            style={{ width: `${calculationResult.businessInitiatedPercentage}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-900 mb-4">تفاصيل التكاليف حسب نوع الرسالة</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  نوع الرسالة
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  عدد الرسائل
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  السعر / رسالة
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  التكلفة الإجمالية
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {calculationResult.messageBreakdown.map((item, index) => (
                                <tr key={index} className={item.category === 'business' ? 'bg-blue-50' : 'bg-green-50'}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {item.type}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item.count.toLocaleString('ar-SA')}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {formatCurrency(item.rate, calculationResult.currency)}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    {formatCurrency(item.cost, calculationResult.currency)}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr className="bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                  الإجمالي
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                  {calculationResult.totalMessages.toLocaleString('ar-SA')}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  -
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-700">
                                  {formatCurrency(calculationResult.monthlyCost, calculationResult.currency)}
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Visualization and Tips */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <PieChart className="h-5 w-5 text-blue-600 ml-2" />
                      توزيع التكاليف
                    </h3>
                    
                    {calculationResult && (
                      <div className="relative h-64">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full border-8 border-blue-500 relative overflow-hidden">
                            <div 
                              className="absolute top-0 right-0 w-full h-full border-8 border-green-500" 
                              style={{ 
                                clipPath: `polygon(0 0, 100% 0, 100% ${calculationResult.userInitiatedPercentage}%, 0 ${calculationResult.userInitiatedPercentage}%)` 
                              }} 
                            />
                          </div>
                        </div>
                        
                        <div className="absolute bottom-0 w-full">
                          <div className="flex justify-around">
                            <div className="text-center">
                              <div className="flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-blue-500 ml-1"></div>
                                <span className="text-sm">رسائل العمل</span>
                              </div>
                              <div className="font-bold">
                                {formatCurrency(
                                  calculationResult.messageBreakdown
                                    .filter(item => item.category === 'business')
                                    .reduce((sum, item) => sum + item.cost, 0),
                                  calculationResult.currency
                                )}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-green-500 ml-1"></div>
                                <span className="text-sm">رسائل المستخدم</span>
                              </div>
                              <div className="font-bold">
                                {formatCurrency(
                                  calculationResult.messageBreakdown
                                    .filter(item => item.category === 'user')
                                    .reduce((sum, item) => sum + item.cost, 0),
                                  calculationResult.currency
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Zap className="h-5 w-5 text-blue-600 ml-2" />
                      نصائح لتقليل التكاليف
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">استفد من نافذة الـ 24 ساعة للرد على العملاء بتكلفة أقل</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">استخدم الروبوتات للرد الآلي على الاستفسارات الشائعة</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">قم بتحسين محتوى رسائلك لزيادة معدلات المشاركة</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">استخدم التقسيم الفعال للجمهور لإرسال رسائل أكثر استهدافًا</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">قم بتحليل أداء حملاتك باستمرار وتحسينها</span>
                      </li>
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                        تعرف على المزيد من النصائح لتحسين استراتيجية الرسائل
                        <ArrowRight className="h-4 w-4 mr-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Pricing Table Tab */}
        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <DollarSign className="h-5 w-5 text-blue-600 ml-2" />
                أسعار رسائل واتساب للأعمال حسب الدولة
              </h2>
              
              <div className="mb-6 bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-600 ml-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800 mb-1">معلومات مهمة عن الأسعار</h3>
                    <p className="text-sm text-blue-700">
                      الأسعار المعروضة هي الأسعار الرسمية من Meta لرسائل واتساب للأعمال. قد تختلف الأسعار الفعلية حسب مزود الخدمة أو الشريك الذي تتعامل معه. الأسعار قابلة للتغيير من قبل Meta في أي وقت.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الدولة
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        رسائل يبدأها العمل
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        رسائل يبدأها المستخدم
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        العملة
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {countryRates.map((country) => (
                      <tr key={country.code} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {country.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatCurrency(country.businessInitiatedRate, country.currency)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatCurrency(country.userInitiatedRate, country.currency)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {country.currency}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <MessageSquare className="h-5 w-5 text-blue-600 ml-2" />
                  أنواع الرسائل
                </h3>
                
                <div className="space-y-4">
                  <div className="border-r-4 border-blue-500 pr-4">
                    <h4 className="font-medium text-gray-900 mb-1">رسائل يبدأها العمل</h4>
                    <p className="text-sm text-gray-600">
                      هي الرسائل التي ترسلها الشركة للمستخدم خارج نافذة الـ 24 ساعة. تشمل الإشعارات، والرسائل التسويقية، والتذكيرات، وغيرها. تكون عادة أعلى سعرًا.
                    </p>
                  </div>
                  
                  <div className="border-r-4 border-green-500 pr-4">
  <h4 className="font-medium text-gray-900 mb-1">رسائل يبدأها المستخدم</h4>
  <p className="text-sm text-gray-600">
    هي الرسائل التي يبدأها العميل، أو الردود على رسائل الشركة ضمن نافذة الـ 24 ساعة. تكون عادة أقل سعرًا بشكل ملحوظ من الرسائل التي يبدأها العمل.
  </p>
</div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-2">نافذة الـ 24 ساعة</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    عندما يرسل المستخدم رسالة إلى عملك، يفتح ذلك "نافذة محادثة" مدتها 24 ساعة. خلال هذه النافذة، يمكنك إرسال رسائل غير منظمة (رسائل حرة) بتكلفة "رسائل يبدأها المستخدم" المنخفضة.
                  </p>
                  <div className="bg-yellow-50 border-r-4 border-yellow-500 p-3 pr-4">
                    <p className="text-sm text-yellow-800">
                      بعد انتهاء نافذة الـ 24 ساعة، يجب استخدام قوالب رسائل معتمدة بتكلفة "رسائل يبدأها العمل" الأعلى.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Percent className="h-5 w-5 text-blue-600 ml-2" />
                  نصائح لتحسين نسبة الرسائل
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full ml-3 mt-0.5">
                      <Zap className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">تحسين استراتيجية الرسائل</h4>
                      <p className="text-sm text-gray-600">
                        صمم استراتيجية تشجع العملاء على بدء المحادثات، مما يزيد من نسبة الرسائل التي يبدأها المستخدم ويقلل التكاليف.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full ml-3 mt-0.5">
                      <Clock className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">استغلال نافذة الـ 24 ساعة</h4>
                      <p className="text-sm text-gray-600">
                        خطط لإرسال رسائلك المهمة خلال نافذة الـ 24 ساعة بعد تفاعل العميل لتقليل التكاليف.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full ml-3 mt-0.5">
                      <RefreshCw className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">تحسين معدلات الاستجابة</h4>
                      <p className="text-sm text-gray-600">
                        قدم محتوى قيمًا يشجع العملاء على الرد، مما يفتح نافذة الـ 24 ساعة ويقلل من الحاجة إلى رسائل يبدأها العمل.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                    <BarChart className="h-4 w-4 ml-1" />
                    النسبة المثالية للرسائل
                  </h4>
                  <p className="text-sm text-blue-700 mb-3">
                    تختلف النسبة المثالية حسب نوع العمل، ولكن بشكل عام، كلما زادت نسبة الرسائل التي يبدأها المستخدم، كلما انخفضت التكاليف الإجمالية.
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span>رسائل يبدأها العمل</span>
                    <span>رسائل يبدأها المستخدم</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2.5 mt-1 mb-1">
                    <div className="bg-blue-500 h-2.5 rounded-r-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span>40%</span>
                    <span>60%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <HelpCircle className="h-5 w-5 text-blue-600 ml-2" />
              الأسئلة الشائعة حول تكاليف واتساب للأعمال
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-right bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                    {activeFaqIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {activeFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-white">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-blue-600 ml-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-blue-800 mb-2">هل لديك المزيد من الأسئلة؟</h3>
                  <p className="text-sm text-blue-700 mb-4">
                    إذا كانت لديك أسئلة أخرى حول تكاليف واتساب للأعمال أو كيفية تحسين استراتيجية الرسائل الخاصة بك، فلا تتردد في التواصل مع فريق الدعم لدينا.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      تحدث مع فريق الدعم
                    </a>
                    <a href="#" className="inline-flex items-center gap-1 bg-white text-blue-700 border border-blue-200 px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                      <FileText className="h-4 w-4" />
                      تحميل دليل الأسعار
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            جاهز لبدء استخدام واتساب للأعمال مع كرزون؟
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            احصل على حلول متكاملة لإدارة رسائل واتساب للأعمال بكفاءة وفعالية من حيث التكلفة
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              ابدأ الآن مجانًا
            </a>
            <a href="#" className="bg-blue-700 text-white border border-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              تحدث مع مستشار
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
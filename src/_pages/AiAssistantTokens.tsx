"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Calculator,
  DollarSign,
  HelpCircle,
  Info,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  FileText,
  MessageSquare,
  Zap,
  // BarChart,
  ArrowRight,
  Check,
  // X,
  Sparkles,
  Bot,
  // Code,
  Image,
  Lightbulb,
  Cpu,
  Layers,
  // RefreshCw,
  // Lock,
  // Shield,
  // Download,
  PieChart,
  // LineChart,
  Rocket,
} from "lucide-react";

// Define types for the calculator
interface ModelRate {
  id: string;
  name: string;
  arabicName: string;
  inputPrice: number;
  outputPrice: number;
  contextWindow: number;
  description: string;
  capabilities: string[];
  useCases: string[];
  icon: React.ElementType;
  color: string;
}

interface TokenUsage {
  input: number;
  output: number;
}

interface CalculationResult {
  model: ModelRate;
  inputCost: number;
  outputCost: number;
  totalCost: number;
  totalTokens: number;
  inputTokenPercentage: number;
  outputTokenPercentage: number;
}

// Sample model rates data (200% of OpenAI prices)
const modelRates: ModelRate[] = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    arabicName: "كرزون الذكي المتقدم",
    inputPrice: 0.01 * 3, // $0.01 * 3 = $0.03 per 1K tokens
    outputPrice: 0.03 * 3, // $0.03 * 3 = $0.09 per 1K tokens
    contextWindow: 128000,
    description: "أحدث وأقوى نموذج لدينا، يجمع بين الذكاء المتقدم والسرعة العالية والتكلفة المنخفضة",
    capabilities: [
      "فهم وإنشاء نصوص معقدة",
      "حل مشكلات متقدمة",
      "تحليل وتلخيص المستندات الطويلة",
      "فهم السياق بشكل أفضل",
      "معالجة الصور والنصوص معًا",
    ],
    useCases: [
      "المساعدين الافتراضيين المتقدمين",
      "تحليل المستندات المعقدة",
      "إنشاء محتوى إبداعي",
      "تطوير البرمجيات",
      "التعليم والبحث",
    ],
    icon: Sparkles,
    color: "purple",
  },
  {
    id: "gpt-4",
    name: "GPT-4",
    arabicName: "كرزون الذكي 4",
    inputPrice: 0.03 * 3, // $0.03 * 3 = $0.09 per 1K tokens
    outputPrice: 0.06 * 3, // $0.06 * 3 = $0.18 per 1K tokens
    contextWindow: 8192,
    description: "نموذج متقدم يوفر قدرات فهم وإنشاء نصوص عالية الجودة",
    capabilities: ["فهم وإنشاء نصوص معقدة", "حل مشكلات متقدمة", "تحليل وتلخيص المستندات", "فهم السياق بشكل جيد"],
    useCases: ["المساعدين الافتراضيين", "تحليل المستندات", "إنشاء محتوى", "تطوير البرمجيات"],
    icon: Brain,
    color: "blue",
  },
  {
    id: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    arabicName: "كرزون الذكي 4 توربو",
    inputPrice: 0.01 * 3, // $0.01 * 3 = $0.03 per 1K tokens
    outputPrice: 0.03 * 3, // $0.03 * 3 = $0.09 per 1K tokens
    contextWindow: 128000,
    description: "نسخة محسنة من كرزون الذكي 4 مع سياق أكبر وتكلفة أقل",
    capabilities: [
      "فهم وإنشاء نصوص معقدة",
      "معالجة سياق أكبر (128 ألف توكن)",
      "أداء أسرع",
      "تكلفة أقل من كرزون الذكي 4",
    ],
    useCases: ["تحليل المستندات الطويلة", "المحادثات المعقدة", "تلخيص النصوص الكبيرة", "البحث والتحليل"],
    icon: Zap,
    color: "indigo",
  },
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    arabicName: "كرزون الأساسي",
    inputPrice: 0.0005 * 3, // $0.0005 * 3 = $0.0015 per 1K tokens
    outputPrice: 0.0015 * 3, // $0.0015 * 3 = $0.0045 per 1K tokens
    contextWindow: 16385,
    description: "نموذج سريع وفعال من حيث التكلفة مع أداء جيد للمهام العامة",
    capabilities: ["فهم وإنشاء نصوص", "الإجابة على الأسئلة", "المحادثات البسيطة", "تلخيص النصوص"],
    useCases: [
      "روبوتات الدردشة",
      "الإجابة على الأسئلة الشائعة",
      "المساعدة في الكتابة",
      "التطبيقات ذات الميزانية المحدودة",
    ],
    icon: Bot,
    color: "green",
  },
  {
    id: "gpt-4-vision",
    name: "GPT-4 Vision",
    arabicName: "كرزون البصري",
    inputPrice: 0.01 * 3, // $0.01 * 3 = $0.03 per 1K tokens
    outputPrice: 0.03 * 3, // $0.03 * 3 = $0.09 per 1K tokens
    contextWindow: 128000,
    description: "نموذج متقدم يمكنه فهم وتحليل الصور والنصوص معًا",
    capabilities: ["فهم وتحليل الصور", "الإجابة على أسئلة حول الصور", "وصف المحتوى البصري", "استخراج معلومات من الصور"],
    useCases: [
      "تحليل المستندات البصرية",
      "مساعدة ذوي الاحتياجات الخاصة",
      "تحليل المخططات والرسوم البيانية",
      "التعرف على المنتجات",
    ],
    icon: Image,
    color: "pink",
  },
  {
    id: "dall-e-3",
    name: "DALL-E 3",
    arabicName: "كرزون المبدع",
    inputPrice: 0.04 * 3, // $0.04 * 3 = $0.12 per image (1024x1024)
    outputPrice: 0.04 * 3, // Same price for simplicity
    contextWindow: 0, // Not applicable
    description: "نموذج لإنشاء صور عالية الجودة من وصف نصي",
    capabilities: ["إنشاء صور واقعية", "تحويل الأفكار النصية إلى صور", "تخصيص الأسلوب الفني", "إنشاء تصاميم إبداعية"],
    useCases: ["التصميم الجرافيكي", "إنشاء المحتوى البصري", "التسويق والإعلان", "التصور المفاهيمي"],
    icon: Lightbulb,
    color: "yellow",
  },
  {
    id: "embeddings",
    name: "Embeddings",
    arabicName: "كرزون التضمين",
    inputPrice: 0.0001 * 3, // $0.0001 * 3 = $0.0003 per 1K tokens
    outputPrice: 0.0001 * 3, // Same price for simplicity
    contextWindow: 0, // Not applicable
    description: "نموذج لتحويل النصوص إلى تمثيلات رقمية للبحث الدلالي",
    capabilities: ["تحويل النصوص إلى متجهات رقمية", "البحث الدلالي", "مقارنة التشابه بين النصوص", "تصنيف النصوص"],
    useCases: ["محركات البحث الدلالي", "أنظمة التوصية", "تصنيف المستندات", "الأسئلة والأجوبة على قواعد البيانات"],
    icon: Layers,
    color: "orange",
  },
];

// FAQ data
const faqData = [
  {
    question: "ما هي التوكنز (Tokens) وكيف يتم احتسابها؟",
    answer:
      "التوكنز هي وحدات النص التي يفهمها نموذج الذكاء الاصطناعي. يمكن أن يكون التوكن حرفًا واحدًا أو كلمة أو جزءًا من كلمة، اعتمادًا على اللغة والسياق. في اللغة الإنجليزية، يعادل 1 توكن حوالي 4 أحرف أو 0.75 كلمة. في اللغة العربية، قد يختلف هذا المعدل قليلاً. يتم احتساب التكلفة بناءً على عدد التوكنز المستخدمة في كل من المدخلات (الأسئلة) والمخرجات (الإجابات).",
  },
  {
    question: "ما الفرق بين توكنز المدخلات وتوكنز المخرجات؟",
    answer:
      "توكنز المدخلات هي التوكنز المستخدمة في الأسئلة أو التعليمات التي ترسلها إلى النموذج. توكنز المخرجات هي التوكنز المستخدمة في الإجابات التي ينتجها النموذج. عادةً ما تكون تكلفة توكنز المخرجات أعلى من تكلفة توكنز المدخلات.",
  },
  {
    question: "ما هو حجم نافذة السياق (Context Window)؟",
    answer:
      "نافذة السياق هي الحد الأقصى لعدد التوكنز التي يمكن للنموذج معالجتها في طلب واحد، وتشمل كلاً من المدخلات والمخرجات. على سبيل المثال، إذا كان حجم نافذة السياق 8192 توكن، فهذا يعني أن مجموع توكنز المدخلات والمخرجات لا يمكن أن يتجاوز 8192 توكن في الطلب الواحد.",
  },
  {
    question: "كيف يمكنني تقدير عدد التوكنز في النص؟",
    answer:
      "كقاعدة عامة، يمكن تقدير عدد التوكنز في النص الإنجليزي بقسمة عدد الكلمات على 0.75 (أو ضرب عدد الكلمات في 1.33). للنص العربي، قد تختلف النسبة قليلاً. للحصول على تقدير أكثر دقة، يمكنك استخدام أداة تقدير التوكنز المتوفرة في واجهة برمجة التطبيقات الخاصة بنا.",
  },
  {
    question: "هل هناك حد أدنى للفواتير؟",
    answer:
      "لا، نحن نفرض رسومًا فقط على الاستخدام الفعلي للتوكنز. لا يوجد حد أدنى للفواتير أو رسوم ثابتة. ومع ذلك، قد تكون هناك باقات اشتراك مختلفة توفر أسعارًا مخفضة للاستخدام العالي.",
  },
  {
    question: "هل يمكنني وضع حد أقصى للإنفاق؟",
    answer:
      "نعم، يمكنك تعيين حد أقصى للإنفاق الشهري من خلال لوحة التحكم الخاصة بك. عندما تصل إلى هذا الحد، سيتم إيقاف الطلبات الجديدة تلقائيًا حتى بداية الشهر التالي أو حتى تقوم بزيادة الحد.",
  },
  {
    question: "هل هناك خصومات للاستخدام بكميات كبيرة؟",
    answer:
      "نعم، نحن نقدم خصومات للعملاء الذين يستخدمون كميات كبيرة من التوكنز. يرجى التواصل مع فريق المبيعات لدينا لمناقشة الخيارات المتاحة لحالتك الخاصة.",
  },
  {
    question: "ما هي سياسة الاسترداد؟",
    answer:
      "نحن لا نقدم استردادًا للتوكنز المستخدمة. ومع ذلك، في حالة حدوث أخطاء تقنية من جانبنا أدت إلى استهلاك توكنز إضافية، يمكننا تقديم رصيد لحسابك بعد مراجعة الحالة.",
  },
];

// Usage examples data
const usageExamples = [
  {
    title: "روبوت دردشة للدعم الفني",
    description: "روبوت دردشة يجيب على استفسارات العملاء التقنية",
    model: "كرزون الأساسي",
    dailyConversations: 1000,
    avgInputTokens: 200,
    avgOutputTokens: 150,
    monthlyCost: 202.5, // (1000 * 30 * 200 * 0.0015/1000) + (1000 * 30 * 150 * 0.0045/1000)
  },
  {
    title: "مساعد كتابة المحتوى",
    description: "أداة لمساعدة المسوقين في إنشاء محتوى تسويقي",
    model: "كرزون الذكي 4 توربو",
    dailyConversations: 100,
    avgInputTokens: 500,
    avgOutputTokens: 1000,
    monthlyCost: 1350, // (100 * 30 * 500 * 0.03/1000) + (100 * 30 * 1000 * 0.09/1000)
  },
  {
    title: "محرك بحث داخلي",
    description: "محرك بحث دلالي للوثائق الداخلية للشركة",
    model: "كرزون التضمين",
    dailyConversations: 5000,
    avgInputTokens: 1000,
    avgOutputTokens: 0,
    monthlyCost: 450, // (5000 * 30 * 1000 * 0.0003/1000)
  },
  {
    title: "مولد صور للتسويق",
    description: "أداة لإنشاء صور إعلانية من وصف نصي",
    model: "كرزون المبدع",
    dailyConversations: 50,
    avgInputTokens: 1,
    avgOutputTokens: 1,
    monthlyCost: 180, // (50 * 30 * 0.12)
  },
];

export function AiAssistantTokens() {
  // State for calculator inputs
  const [selectedModel, setSelectedModel] = useState<ModelRate>(modelRates[0]);
  const [tokenUsage, setTokenUsage] = useState<TokenUsage>({
    input: 1000,
    output: 1000,
  });
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  const [activeTab, setActiveTab] = useState<"calculator" | "pricing" | "faq">("calculator");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [activeModelTab, setActiveModelTab] = useState<string>(modelRates[0].id);
  const [timeframe, setTimeframe] = useState<"daily" | "monthly" | "yearly">("monthly");

  // Calculate costs when inputs change
  useEffect(() => {
    calculateCosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModel, tokenUsage, timeframe]);

  // Calculate the costs based on inputs
  const calculateCosts = () => {
    const inputTokens = tokenUsage.input;
    const outputTokens = tokenUsage.output;
    const totalTokens = inputTokens + outputTokens;

    // Calculate costs per 1K tokens
    const inputCost = (inputTokens / 1000) * selectedModel.inputPrice;
    const outputCost = (outputTokens / 1000) * selectedModel.outputPrice;
    const totalCost = inputCost + outputCost;

    // Apply multiplier based on timeframe
    const multiplier = timeframe === "daily" ? 1 : timeframe === "monthly" ? 30 : 365;

    setCalculationResult({
      model: selectedModel,
      inputCost: inputCost * multiplier,
      outputCost: outputCost * multiplier,
      totalCost: totalCost * multiplier,
      totalTokens: totalTokens,
      inputTokenPercentage: totalTokens > 0 ? (inputTokens / totalTokens) * 100 : 0,
      outputTokenPercentage: totalTokens > 0 ? (outputTokens / totalTokens) * 100 : 0,
    });
  };

  // Handle token usage change
  const handleTokenUsageChange = (type: "input" | "output", value: string) => {
    const numValue = parseInt(value) || 0;
    setTokenUsage((prev) => ({
      ...prev,
      [type]: numValue,
    }));
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  // Format number with commas
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("ar-SA").format(num);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">حاسبة توكنز الذكاء الاصطناعي</h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
                احسب تكاليف استخدام نماذج كرزون للذكاء الاصطناعي بدقة وسهولة
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActiveTab("calculator")}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === "calculator"
                      ? "bg-white text-indigo-700"
                      : "bg-indigo-700 text-white hover:bg-indigo-600"
                  }`}
                >
                  <Calculator className="h-5 w-5 inline-block ml-2" />
                  حاسبة التوكنز
                </button>
                <button
                  onClick={() => setActiveTab("pricing")}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === "pricing"
                      ? "bg-white text-indigo-700"
                      : "bg-indigo-700 text-white hover:bg-indigo-600"
                  }`}
                >
                  <DollarSign className="h-5 w-5 inline-block ml-2" />
                  قائمة الأسعار
                </button>
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === "faq" ? "bg-white text-indigo-700" : "bg-indigo-700 text-white hover:bg-indigo-600"
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
        {activeTab === "calculator" && (
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
                  <Calculator className="h-5 w-5 text-indigo-600 ml-2" />
                  إعدادات الحاسبة
                </h2>

                {/* Model Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">اختر النموذج</label>
                  <div className="relative">
                    <button
                      onClick={() => setShowModelDropdown(!showModelDropdown)}
                      className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <div className="flex items-center">
                        <selectedModel.icon className={`h-5 w-5 text-${selectedModel.color}-500 ml-2`} />
                        <span>{selectedModel.arabicName}</span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          showModelDropdown ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {showModelDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto">
                        <div className="p-2">
                          {modelRates.map((model) => (
                            <button
                              key={model.id}
                              onClick={() => {
                                setSelectedModel(model);
                                setShowModelDropdown(false);
                              }}
                              className={`w-full text-right px-4 py-2 text-sm hover:bg-gray-100 rounded-lg ${
                                selectedModel.id === model.id ? "bg-indigo-50 text-indigo-700" : "text-gray-700"
                              }`}
                            >
                              <div className="flex items-center">
                                <model.icon className={`h-4 w-4 text-${model.color}-500 ml-2`} />
                                <div>
                                  <div>{model.arabicName}</div>
                                  <div className="text-xs text-gray-500">{model.name}</div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-xs text-gray-500 flex items-center">
                    <Info className="h-4 w-4 ml-1" />
                    أسعار التوكنز تختلف حسب النموذج
                  </div>
                </div>

                {/* Timeframe Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">الإطار الزمني</label>
                  <div className="flex rounded-md shadow-sm">
                    <button
                      onClick={() => setTimeframe("daily")}
                      className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-md ${
                        timeframe === "daily"
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                      }`}
                    >
                      يومي
                    </button>
                    <button
                      onClick={() => setTimeframe("monthly")}
                      className={`flex-1 py-2 px-4 text-sm font-medium ${
                        timeframe === "monthly"
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300"
                      }`}
                    >
                      شهري
                    </button>
                    <button
                      onClick={() => setTimeframe("yearly")}
                      className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-md ${
                        timeframe === "yearly"
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                      }`}
                    >
                      سنوي
                    </button>
                  </div>
                </div>

                {/* Token Usage Inputs */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">استخدام التوكنز</h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <ArrowRight className="h-4 w-4 ml-1 text-indigo-500" />
                          توكنز المدخلات (الأسئلة)
                        </label>
                        <div className="text-xs text-gray-500">
                          {formatCurrency(selectedModel.inputPrice / 1000)} / توكن
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          min="0"
                          value={tokenUsage.input}
                          onChange={(e) => handleTokenUsageChange("input", e.target.value)}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">عدد التوكنز المستخدمة في الأسئلة أو التعليمات</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <ArrowRight className="h-4 w-4 ml-1 text-indigo-500 transform rotate-180" />
                          توكنز المخرجات (الإجابات)
                        </label>
                        <div className="text-xs text-gray-500">
                          {formatCurrency(selectedModel.outputPrice / 1000)} / توكن
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          min="0"
                          value={tokenUsage.output}
                          onChange={(e) => handleTokenUsageChange("output", e.target.value)}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">عدد التوكنز المستخدمة في الإجابات المولدة</p>
                    </div>
                  </div>
                </div>

                {/* Model Info */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">معلومات النموذج</h3>
                  <p className="text-sm text-gray-600 mb-4">{selectedModel.description}</p>

                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      حجم نافذة السياق: {formatNumber(selectedModel.contextWindow)} توكن
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      سعر المدخلات: {formatCurrency(selectedModel.inputPrice / 1000)} / توكن
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      سعر المخرجات: {formatCurrency(selectedModel.outputPrice / 1000)} / توكن
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Results and Visualization */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                {/* Cost Summary */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <DollarSign className="h-5 w-5 text-indigo-600 ml-2" />
                    ملخص التكاليف
                  </h2>

                  {calculationResult && (
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-indigo-50 rounded-lg p-4">
                          <div className="text-sm text-gray-500 mb-1">تكلفة المدخلات</div>
                          <div className="text-2xl font-bold text-indigo-700">
                            {formatCurrency(calculationResult.inputCost)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {formatNumber(tokenUsage.input)} توكن × {formatCurrency(selectedModel.inputPrice / 1000)} /
                            توكن
                          </div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <div className="text-sm text-gray-500 mb-1">تكلفة المخرجات</div>
                          <div className="text-2xl font-bold text-purple-700">
                            {formatCurrency(calculationResult.outputCost)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {formatNumber(tokenUsage.output)} توكن × {formatCurrency(selectedModel.outputPrice / 1000)}{" "}
                            / توكن
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg p-4">
                          <div className="text-sm opacity-90 mb-1">التكلفة الإجمالية</div>
                          <div className="text-2xl font-bold">{formatCurrency(calculationResult.totalCost)}</div>
                          <div className="text-xs opacity-75">
                            {timeframe === "daily" ? "يوميًا" : timeframe === "monthly" ? "شهريًا" : "سنويًا"}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-gray-900">إجمالي التوكنز</h3>
                        <span className="text-lg font-bold">{formatNumber(calculationResult.totalTokens)}</span>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-indigo-500 ml-2"></div>
                            <span className="text-sm">توكنز المدخلات</span>
                          </div>
                          <span className="text-sm font-medium">
                            {calculationResult.inputTokenPercentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-purple-500 ml-2"></div>
                            <span className="text-sm">توكنز المخرجات</span>
                          </div>
                          <span className="text-sm font-medium">
                            {calculationResult.outputTokenPercentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div
                            className="bg-indigo-500 h-2.5 rounded-r-full"
                            style={{ width: `${calculationResult.inputTokenPercentage}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Equivalent Examples */}
                      <div>
                        <h3 className="font-medium text-gray-900 mb-4">ما يمكنك فعله بهذه التوكنز</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <MessageSquare className="h-5 w-5 text-indigo-500" />
                              <span className="font-medium">محادثات</span>
                            </div>
                            <p className="text-sm text-gray-600">
                              حوالي {formatNumber(Math.floor(calculationResult.totalTokens / 800))} محادثة بمتوسط 800
                              توكن للمحادثة
                            </p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <FileText className="h-5 w-5 text-indigo-500" />
                              <span className="font-medium">صفحات نصية</span>
                            </div>
                            <p className="text-sm text-gray-600">
                              حوالي {formatNumber(Math.floor(calculationResult.totalTokens / 500))} صفحة بمتوسط 500 توكن
                              للصفحة
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Visualization and Tips */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <PieChart className="h-5 w-5 text-indigo-600 ml-2" />
                      توزيع التكاليف
                    </h3>

                    {calculationResult && (
                      <div className="relative h-64">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full border-8 border-indigo-500 relative overflow-hidden">
                            <div
                              className="absolute top-0 right-0 w-full h-full border-8 border-purple-500"
                              style={{
                                clipPath: `polygon(0 0, 100% 0, 100% ${
                                  (calculationResult.outputCost / calculationResult.totalCost) * 100
                                }%, 0 ${(calculationResult.outputCost / calculationResult.totalCost) * 100}%)`,
                              }}
                            />
                          </div>
                        </div>

                        <div className="absolute bottom-0 w-full">
                          <div className="flex justify-around">
                            <div className="text-center">
                              <div className="flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-indigo-500 ml-1"></div>
                                <span className="text-sm">المدخلات</span>
                              </div>
                              <div className="font-bold">{formatCurrency(calculationResult.inputCost)}</div>
                              <div className="text-xs text-gray-500">
                                {((calculationResult.inputCost / calculationResult.totalCost) * 100).toFixed(1)}%
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-purple-500 ml-1"></div>
                                <span className="text-sm">المخرجات</span>
                              </div>
                              <div className="font-bold">{formatCurrency(calculationResult.outputCost)}</div>
                              <div className="text-xs text-gray-500">
                                {((calculationResult.outputCost / calculationResult.totalCost) * 100).toFixed(1)}%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Zap className="h-5 w-5 text-indigo-600 ml-2" />
                      نصائح لتقليل التكاليف
                    </h3>

                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          استخدم تعليمات واضحة ومختصرة لتقليل توكنز المدخلات
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">اطلب إجابات مختصرة لتقليل توكنز المخرجات</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">استخدم نماذج أقل تكلفة للمهام البسيطة</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">استخدم نماذج أقل تكلفة للمهام البسيطة</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          قم بتخزين نتائج الاستعلامات المتكررة لتجنب إعادة الحساب
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          استخدم التضمينات (Embeddings) للبحث في المستندات الكبيرة بدلاً من إرسالها كاملة
                        </span>
                      </li>
                    </ul>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                      >
                        تعرف على المزيد من النصائح لتحسين استخدام التوكنز
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
        {activeTab === "pricing" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <DollarSign className="h-5 w-5 text-indigo-600 ml-2" />
                أسعار نماذج كرزون للذكاء الاصطناعي
              </h2>

              <div className="mb-6 bg-indigo-50 rounded-lg p-4">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 ml-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-indigo-800 mb-1">معلومات مهمة عن الأسعار</h3>
                    <p className="text-sm text-indigo-700">
                      الأسعار المعروضة هي لكل 1000 توكن. التوكن هو وحدة قياس النص التي يستخدمها نموذج الذكاء الاصطناعي.
                      في اللغة الإنجليزية، يعادل 1 توكن حوالي 4 أحرف أو 0.75 كلمة. قد تختلف هذه النسبة في اللغة العربية.
                    </p>
                  </div>
                </div>
              </div>

              {/* Model Tabs */}
              <div className="mb-6">
                <div className="flex overflow-x-auto scrollbar-hide space-x-2 space-x-reverse">
                  {modelRates.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setActiveModelTab(model.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                        activeModelTab === model.id
                          ? `bg-${model.color}-100 text-${model.color}-800 border border-${model.color}-200`
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <model.icon className={`h-4 w-4 text-${model.color}-500`} />
                        <span>{model.arabicName}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Model Details */}
              <AnimatePresence mode="wait">
                {modelRates.map(
                  (model) =>
                    activeModelTab === model.id && (
                      <motion.div
                        key={model.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`border border-${model.color}-200 rounded-lg overflow-hidden`}
                      >
                        <div className={`bg-${model.color}-50 p-4 border-b border-${model.color}-200`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 bg-${model.color}-100 rounded-lg`}>
                                <model.icon className={`h-6 w-6 text-${model.color}-600`} />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold">{model.arabicName}</h3>
                                <p className="text-sm text-gray-600">{model.name}</p>
                              </div>
                            </div>
                            <div
                              className={`px-3 py-1 rounded-full bg-${model.color}-100 text-${model.color}-800 text-sm font-medium`}
                            >
                              {model.contextWindow > 0 ? `${formatNumber(model.contextWindow)} توكن` : "غير محدد"}
                            </div>
                          </div>
                          <p className="mt-3 text-gray-700">{model.description}</p>
                        </div>

                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-3">الأسعار</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                  <span className="text-sm">سعر المدخلات (لكل 1000 توكن)</span>
                                  <span className="font-medium">{formatCurrency(model.inputPrice)}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                  <span className="text-sm">سعر المخرجات (لكل 1000 توكن)</span>
                                  <span className="font-medium">{formatCurrency(model.outputPrice)}</span>
                                </div>
                              </div>

                              <div className="mt-4">
                                <h4 className="font-medium text-gray-900 mb-2">القدرات</h4>
                                <ul className="space-y-1">
                                  {model.capabilities.map((capability, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                      <Check className={`h-4 w-4 text-${model.color}-500`} />
                                      {capability}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-3">حالات الاستخدام</h4>
                              <ul className="space-y-1">
                                {model.useCases.map((useCase, index) => (
                                  <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                    <ArrowRight className={`h-4 w-4 text-${model.color}-500`} />
                                    {useCase}
                                  </li>
                                ))}
                              </ul>

                              {/* Example Cost Calculation */}
                              <div className={`mt-4 p-3 bg-${model.color}-50 rounded-lg`}>
                                <h4 className={`font-medium text-${model.color}-800 mb-2`}>مثال على التكلفة</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                  لمحادثة بها 1000 توكن مدخلات و2000 توكن مخرجات:
                                </p>
                                <div className="text-sm">
                                  <div className="flex justify-between mb-1">
                                    <span>تكلفة المدخلات:</span>
                                    <span>{formatCurrency(model.inputPrice)}</span>
                                  </div>
                                  <div className="flex justify-between mb-1">
                                    <span>تكلفة المخرجات:</span>
                                    <span>{formatCurrency(model.outputPrice * 2)}</span>
                                  </div>
                                  <div className="flex justify-between font-medium pt-1 border-t border-gray-200">
                                    <span>التكلفة الإجمالية:</span>
                                    <span>{formatCurrency(model.inputPrice + model.outputPrice * 2)}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>

              {/* Pricing Table */}
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">مقارنة جميع النماذج</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          النموذج
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          سعر المدخلات (لكل 1000 توكن)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          سعر المخرجات (لكل 1000 توكن)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          حجم نافذة السياق
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {modelRates.map((model) => (
                        <tr key={model.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <model.icon className={`h-5 w-5 text-${model.color}-500 ml-2`} />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{model.arabicName}</div>
                                <div className="text-sm text-gray-500">{model.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(model.inputPrice)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(model.outputPrice)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {model.contextWindow > 0 ? formatNumber(model.contextWindow) : "غير محدد"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Usage Examples */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Rocket className="h-5 w-5 text-indigo-600 ml-2" />
                أمثلة على حالات الاستخدام والتكاليف
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {usageExamples.map((example, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <h3 className="font-bold">{example.title}</h3>
                      <p className="text-sm text-gray-600">{example.description}</p>
                    </div>
                    <div className="p-4">
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-1">النموذج المستخدم</div>
                        <div className="font-medium">{example.model}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">المحادثات اليومية</div>
                          <div className="font-medium">{formatNumber(example.dailyConversations)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">متوسط التوكنز</div>
                          <div className="font-medium">
                            {formatNumber(example.avgInputTokens)} مدخلات / {formatNumber(example.avgOutputTokens)}{" "}
                            مخرجات
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-indigo-800">التكلفة الشهرية التقديرية</span>
                          <span className="font-bold text-indigo-800">{formatCurrency(example.monthlyCost)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Section */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-md p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">حلول مخصصة للمؤسسات</h2>
                  <p className="text-indigo-100 mb-6">
                    للشركات والمؤسسات التي تحتاج إلى حجم كبير من التوكنز أو تتطلب حلولًا مخصصة، نقدم باقات خاصة بأسعار
                    تنافسية وميزات إضافية.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-indigo-200" />
                      <span>خصومات على حجم الاستخدام الكبير</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-indigo-200" />
                      <span>دعم فني متخصص على مدار الساعة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-indigo-200" />
                      <span>تخصيص النماذج حسب احتياجاتك</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-indigo-200" />
                      <span>تدريب وتأهيل الفريق</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                    تواصل مع فريق المبيعات
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <HelpCircle className="h-5 w-5 text-indigo-600 ml-2" />
              الأسئلة الشائعة حول توكنز الذكاء الاصطناعي
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
                        animate={{ height: "auto", opacity: 1 }}
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

            <div className="mt-8 bg-indigo-50 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-indigo-600 ml-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-indigo-800 mb-2">هل لديك المزيد من الأسئلة؟</h3>
                  <p className="text-sm text-indigo-700 mb-4">
                    إذا كانت لديك أسئلة أخرى حول توكنز الذكاء الاصطناعي أو كيفية تحسين استخدامك للنماذج، فلا تتردد في
                    التواصل مع فريق الدعم لدينا.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      تحدث مع فريق الدعم
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 bg-white text-indigo-700 border border-indigo-200 px-4 py-2 rounded-lg text-sm hover:bg-indigo-50 transition-colors"
                    >
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-800 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">جاهز لبدء استخدام نماذج كرزون للذكاء الاصطناعي؟</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            احصل على حلول ذكاء اصطناعي متقدمة تناسب احتياجات عملك وميزانيتك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              ابدأ الآن مجانًا
            </a>
            <a
              href="#"
              className="bg-indigo-700 text-white border border-indigo-500 px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors"
            >
              تحدث مع مستشار
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  // Copy,
  // Download,
  Check,
  Settings,
  // Smartphone,
  Palette,
  // Layout,
  // Type,
  // Image,
  // Clock,
  // ChevronDown,
  // ChevronUp,
  X,
  // Info,
  // ArrowRight,
  Code,
  // ExternalLink,
  Send,
  Phone,
  // Mail,
  // MapPin,
  // Globe,
  // AlertCircle,
  // HelpCircle,
  // Sparkles,
  Zap,
  Eye,
  Upload,
} from "lucide-react";

// Widget themes
const THEMES = [
  {
    id: "default",
    name: "الافتراضي",
    primaryColor: "#25D366",
    textColor: "#ffffff",
    backgroundColor: "#ffffff",
    buttonColor: "#25D366",
  },
  {
    id: "dark",
    name: "داكن",
    primaryColor: "#25D366",
    textColor: "#ffffff",
    backgroundColor: "#222222",
    buttonColor: "#25D366",
  },
  {
    id: "blue",
    name: "أزرق",
    primaryColor: "#4285f4",
    textColor: "#ffffff",
    backgroundColor: "#ffffff",
    buttonColor: "#4285f4",
  },
  {
    id: "minimal",
    name: "بسيط",
    primaryColor: "#25D366",
    textColor: "#333333",
    backgroundColor: "#f5f5f5",
    buttonColor: "#25D366",
  },
  {
    id: "elegant",
    name: "أنيق",
    primaryColor: "#34495e",
    textColor: "#ffffff",
    backgroundColor: "#ffffff",
    buttonColor: "#34495e",
  },
  {
    id: "custom",
    name: "مخصص",
    primaryColor: "#25D366",
    textColor: "#ffffff",
    backgroundColor: "#ffffff",
    buttonColor: "#25D366",
  },
];

// Widget layouts
const LAYOUTS = [
  { id: "bubble", name: "فقاعة", description: "أيقونة دائرية بسيطة" },
  { id: "card", name: "بطاقة", description: "بطاقة تحتوي على معلومات الاتصال" },
  { id: "popup", name: "منبثق", description: "نافذة منبثقة مع معلومات وخيارات متعددة" },
  { id: "bar", name: "شريط", description: "شريط في أسفل الصفحة" },
];

// Widget positions
const POSITIONS = [
  { id: "bottom-right", name: "أسفل اليمين" },
  { id: "bottom-left", name: "أسفل اليسار" },
  { id: "top-right", name: "أعلى اليمين" },
  { id: "top-left", name: "أعلى اليسار" },
];

// Widget animations
const ANIMATIONS = [
  { id: "none", name: "بدون حركة" },
  { id: "fade", name: "تلاشي" },
  { id: "scale", name: "تكبير" },
  { id: "bounce", name: "ارتداد" },
  { id: "slide", name: "انزلاق" },
];

// Widget behaviors
const BEHAVIORS = [
  { id: "click", name: "عند النقر" },
  { id: "hover", name: "عند التمرير" },
  { id: "auto", name: "تلقائي بعد فترة" },
];

// Widget display options
const DISPLAY_OPTIONS = [
  { id: "always", name: "دائماً" },
  { id: "desktop", name: "أجهزة الكمبيوتر فقط" },
  { id: "mobile", name: "الأجهزة المحمولة فقط" },
  { id: "scroll", name: "بعد التمرير" },
];

// Sample avatars
const AVATARS = [
  { id: "default", url: "https://cdn.jsdelivr.net/gh/karzoun/whatsapp-widget/avatars/default.png" },
  { id: "male", url: "https://cdn.jsdelivr.net/gh/karzoun/whatsapp-widget/avatars/male.png" },
  { id: "female", url: "https://cdn.jsdelivr.net/gh/karzoun/whatsapp-widget/avatars/female.png" },
  { id: "business", url: "https://cdn.jsdelivr.net/gh/karzoun/whatsapp-widget/avatars/business.png" },
  { id: "custom", url: "" },
];

// Default widget configuration
const DEFAULT_CONFIG = {
  phoneNumber: "966500000000",
  message: "مرحباً، أود الاستفسار عن خدماتكم",
  welcomeMessage: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
  agentName: "فريق خدمة العملاء",
  companyName: "شركتي",
  avatar: AVATARS[0].url,
  theme: THEMES[0].id,
  layout: LAYOUTS[0].id,
  position: POSITIONS[0].id,
  animation: ANIMATIONS[1].id,
  behavior: BEHAVIORS[0].id,
  displayOn: DISPLAY_OPTIONS[0].id,
  autoOpenDelay: 5,
  primaryColor: THEMES[0].primaryColor,
  textColor: THEMES[0].textColor,
  backgroundColor: THEMES[0].backgroundColor,
  buttonColor: THEMES[0].buttonColor,
  direction: "rtl",
  showAvatar: true,
  showCompanyName: true,
  showAgentName: true,
  showCloseButton: true,
  showTimestamp: true,
  enableNotifications: false,
  notificationInterval: 0,
  notificationMessage: "هل تحتاج إلى مساعدة؟",
  multipleAgents: false,
  agents: [{ name: "فريق المبيعات", phone: "966500000000", avatar: AVATARS[0].url, department: "المبيعات" }],
  customCSS: "",
  customJS: "",
  gdprCompliance: false,
  gdprMessage: "باستخدامك لهذه الخدمة، أنت توافق على سياسة الخصوصية الخاصة بنا.",
  buttonText: "تواصل معنا",
  buttonIcon: "whatsapp",
  showOnDesktop: true,
  showOnMobile: true,
  mobileBreakpoint: 768,
  zIndex: 9999,
  loadingDelay: 1000,
  customFields: [],
};

// CDN URL for the widget script
const CDN_URL = "https://cdn.jsdelivr.net/gh/karzoun/whatsapp-widget/widget.js";

export function WhatsappWidgetGenerator() {
  // State for widget configuration
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [activeTab, setActiveTab] = useState("basic");
  const [previewMode, setPreviewMode] = useState("desktop");
  const [copied, setCopied] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [expandedSection, setExpandedSection] = useState("basic");
  const [customThemeActive, setCustomThemeActive] = useState(false);
  const [scriptGenerated, setScriptGenerated] = useState(false);

  // Update config when theme changes
  useEffect(() => {
    if (config.theme !== "custom") {
      const selectedTheme = THEMES.find((theme) => theme.id === config.theme);
      if (selectedTheme) {
        setConfig((prev) => ({
          ...prev,
          primaryColor: selectedTheme.primaryColor,
          textColor: selectedTheme.textColor,
          backgroundColor: selectedTheme.backgroundColor,
          buttonColor: selectedTheme.buttonColor,
        }));
        setCustomThemeActive(false);
      }
    } else {
      setCustomThemeActive(true);
    }
  }, [config.theme]);

  // Handle config changes
  const handleConfigChange = (key: string, value: any) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
    setScriptGenerated(false);
  };

  // Toggle section expansion
  const toggleSection = (section: any) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Generate widget code
  const generateWidgetCode = () => {
    const configJSON = JSON.stringify(config);

    return `
<!-- WhatsApp Widget by Karzoun - Start -->
<script>
  (function() {
    var script = document.createElement('script');
    script.src = '${CDN_URL}';
    script.async = true;
    script.onload = function() {
      KarzounWhatsAppWidget.init(${configJSON});
    };
    document.head.appendChild(script);
  })();
</script>
<!-- WhatsApp Widget by Karzoun - End -->
`;
  };

  // Copy code to clipboard
  const copyToClipboard = () => {
    const code = generateWidgetCode();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Download code as HTML file
  const downloadCode = () => {
    const code = generateWidgetCode();
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "whatsapp-widget.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Generate the widget script
  const handleGenerateScript = () => {
    setScriptGenerated(true);
  };

  // Render preview based on configuration
  const renderPreview = () => {
    // const selectedLayout = LAYOUTS.find((layout) => layout.id === config.layout);
    const selectedPosition = POSITIONS.find((pos) => pos.id === config.position);

    // Position classes
    const positionClasses = {
      "bottom-right": "bottom-4 right-4",
      "bottom-left": "bottom-4 left-4",
      "top-right": "top-4 right-4",
      "top-left": "top-4 left-4",
    };

    // Layout specific rendering
    const renderLayoutContent = () => {
      switch (config.layout) {
        case "bubble":
          return (
            <div
              className="rounded-full p-3 shadow-lg flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: config.buttonColor }}
            >
              <MessageSquare className="h-6 w-6" style={{ color: config.textColor }} />
            </div>
          );

        case "card":
          return (
            <div
              className="rounded-lg shadow-lg overflow-hidden max-w-xs"
              style={{ backgroundColor: config.backgroundColor }}
            >
              <div className="p-4 flex items-center gap-3" style={{ backgroundColor: config.primaryColor }}>
                {config.showAvatar && (
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                    <img src={config.avatar || AVATARS[0].url} alt="Agent" className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  {config.showCompanyName && (
                    <div className="font-bold" style={{ color: config.textColor }}>
                      {config.companyName}
                    </div>
                  )}
                  {config.showAgentName && (
                    <div className="text-sm opacity-90" style={{ color: config.textColor }}>
                      {config.agentName}
                    </div>
                  )}
                </div>
                {config.showCloseButton && (
                  <button className="ml-auto">
                    <X className="h-5 w-5" style={{ color: config.textColor }} />
                  </button>
                )}
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-4">{config.welcomeMessage}</p>
                <button
                  className="w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: config.buttonColor, color: config.textColor }}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>{config.buttonText}</span>
                </button>
              </div>
            </div>
          );

        case "popup":
          return (
            <div
              className="rounded-lg shadow-lg overflow-hidden max-w-sm"
              style={{ backgroundColor: config.backgroundColor }}
            >
              <div className="p-4 flex items-center gap-3" style={{ backgroundColor: config.primaryColor }}>
                {config.showAvatar && (
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                    <img src={config.avatar || AVATARS[0].url} alt="Agent" className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  {config.showCompanyName && (
                    <div className="font-bold" style={{ color: config.textColor }}>
                      {config.companyName}
                    </div>
                  )}
                  {config.showAgentName && (
                    <div className="text-sm opacity-90" style={{ color: config.textColor }}>
                      {config.agentName}
                    </div>
                  )}
                </div>
                {config.showCloseButton && (
                  <button className="ml-auto">
                    <X className="h-5 w-5" style={{ color: config.textColor }} />
                  </button>
                )}
              </div>
              <div className="p-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <p className="text-gray-700">{config.welcomeMessage}</p>
                  {config.showTimestamp && (
                    <div className="text-xs text-gray-500 mt-1 text-right">
                      {new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={config.message}
                    readOnly
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <button className="p-2 rounded-lg" style={{ backgroundColor: config.buttonColor }}>
                    <Send className="h-5 w-5" style={{ color: config.textColor }} />
                  </button>
                </div>
              </div>
              {config.gdprCompliance && (
                <div className="px-4 py-2 bg-gray-100 text-xs text-gray-600 text-center">{config.gdprMessage}</div>
              )}
            </div>
          );

        case "bar":
          return (
            <div
              className="fixed bottom-0 left-0 right-0 shadow-lg p-3 flex items-center justify-between"
              style={{ backgroundColor: config.primaryColor }}
            >
              <div className="flex items-center gap-3">
                {config.showAvatar && (
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                    <img src={config.avatar || AVATARS[0].url} alt="Agent" className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  <p className="font-medium" style={{ color: config.textColor }}>
                    {config.welcomeMessage}
                  </p>
                </div>
              </div>
              <button
                className="py-2 px-4 rounded-lg flex items-center gap-2"
                style={{ backgroundColor: config.buttonColor, color: config.textColor }}
              >
                <MessageSquare className="h-5 w-5" />
                <span>{config.buttonText}</span>
              </button>
            </div>
          );

        default:
          return (
            <div
              className="rounded-full p-3 shadow-lg flex items-center justify-center"
              style={{ backgroundColor: config.buttonColor }}
            >
              <MessageSquare className="h-6 w-6" style={{ color: config.textColor }} />
            </div>
          );
      }
    };

    // Animation classes
    const getAnimationClass = () => {
      switch (config.animation) {
        case "fade":
          return "animate-fade-in";
        case "scale":
          return "animate-scale-in";
        case "bounce":
          return "animate-bounce";
        case "slide":
          return "animate-slide-in";
        default:
          return "";
      }
    };

    return (
      <div
        className={`relative ${
          previewMode === "mobile" ? "w-[375px] h-[667px]" : "w-full h-[500px]"
        } border border-gray-200 rounded-lg overflow-hidden bg-gray-100`}
      >
        {/* Mock browser/device frame */}
        <div className="bg-gray-200 p-2 flex items-center justify-between border-b border-gray-300">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="bg-white rounded px-2 py-1 text-xs text-gray-500 flex-1 mx-4 text-center">
            www.example.com
          </div>
          <div className="w-4"></div>
        </div>

        {/* Mock website content */}
        <div className="p-4 h-full overflow-auto">
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="w-1/2 h-6 bg-gray-200 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4">
              <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded mb-1"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded mb-1"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <div className="w-1/3 h-6 bg-gray-200 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Widget preview */}
        {config.layout !== "bar" ? (
          <div
            className={`absolute ${
              positionClasses[selectedPosition?.id as keyof typeof positionClasses]
            } ${getAnimationClass()}`}
          >
            {renderLayoutContent()}
          </div>
        ) : (
          renderLayoutContent()
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">منشئ أداة واتساب للمواقع</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                أنشئ أداة واتساب مخصصة لموقعك بسهولة وبدون برمجة. زد من تفاعل عملائك وحسّن من تجربتهم.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    setActiveTab("basic");
                    setExpandedSection("basic");
                  }}
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center gap-2"
                >
                  <Zap className="h-5 w-5" />
                  ابدأ الآن
                </button>
                <a
                  href="#features"
                  className="bg-green-600 text-white border border-green-500 px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  تعرف على المميزات
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("basic")}
                    className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${
                      activeTab === "basic"
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Settings className="h-4 w-4" />
                    الإعدادات الأساسية
                  </button>
                  <button
                    onClick={() => setActiveTab("appearance")}
                    className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${
                      activeTab === "appearance"
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Palette className="h-4 w-4" />
                    المظهر
                  </button>
                  <button
                    onClick={() => setActiveTab("behavior")}
                    className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${
                      activeTab === "behavior"
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Zap className="h-4 w-4" />
                    السلوك
                  </button>
                  <button
                    onClick={() => setActiveTab("advanced")}
                    className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${
                      activeTab === "advanced"
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Code className="h-4 w-4" />
                    متقدم
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Basic Settings Tab */}
                {activeTab === "basic" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">معلومات الاتصال</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            رقم الهاتف (مع رمز الدولة)
                          </label>
                          <div className="relative">
                            <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              value={config.phoneNumber}
                              onChange={(e) => handleConfigChange("phoneNumber", e.target.value)}
                              className="block w-full rounded-md border-gray-300 pr-10 focus:border-green-500 focus:ring-green-500"
                              placeholder="966500000000"
                            />
                          </div>
                          <p className="mt-1 text-xs text-gray-500">
                            أدخل رقم الهاتف مع رمز الدولة بدون علامات أو مسافات
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة الافتراضية</label>
                          <textarea
                            value={config.message}
                            onChange={(e) => handleConfigChange("message", e.target.value)}
                            rows={3}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                            placeholder="مرحباً، أود الاستفسار عن خدماتكم"
                          />
                          <p className="mt-1 text-xs text-gray-500">
                            الرسالة التي سيتم إرسالها تلقائياً عند النقر على الزر
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">معلومات الشركة</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">اسم الشركة</label>
                          <input
                            type="text"
                            value={config.companyName}
                            onChange={(e) => handleConfigChange("companyName", e.target.value)}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                            placeholder="شركتي"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">اسم وكيل خدمة العملاء</label>
                          <input
                            type="text"
                            value={config.agentName}
                            onChange={(e) => handleConfigChange("agentName", e.target.value)}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                            placeholder="فريق خدمة العملاء"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">رسائل الترحيب</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">رسالة الترحيب</label>
                        <textarea
                          value={config.welcomeMessage}
                          onChange={(e) => handleConfigChange("welcomeMessage", e.target.value)}
                          rows={3}
                          className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                          placeholder="مرحباً! كيف يمكنني مساعدتك اليوم؟"
                        />
                        <p className="mt-1 text-xs text-gray-500">الرسالة التي ستظهر للزائر عند فتح نافذة المحادثة</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">الصورة الشخصية</h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                        {AVATARS.slice(0, 4).map((avatar) => (
                          <div
                            key={avatar.id}
                            onClick={() => handleConfigChange("avatar", avatar.url)}
                            className={`relative rounded-lg overflow-hidden cursor-pointer border-2 ${
                              config.avatar === avatar.url ? "border-green-500" : "border-transparent"
                            }`}
                          >
                            <img src={avatar.url} alt={avatar.id} className="w-full aspect-square object-cover" />
                            {config.avatar === avatar.url && (
                              <div className="absolute top-1 right-1 bg-green-500 rounded-full p-0.5">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                        ))}
                        <div className="relative rounded-lg overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center aspect-square bg-gray-50">
                          <div className="text-center p-2">
                            <Upload className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                            <span className="text-xs text-gray-500">تحميل صورة</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">اختر صورة شخصية أو قم بتحميل صورة مخصصة (قريباً)</p>
                    </div>
                  </div>
                )}

                {/* Appearance Tab */}
                {activeTab === "appearance" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">المظهر العام</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">السمة</label>
                          <select
                            value={config.theme}
                            onChange={(e) => handleConfigChange("theme", e.target.value)}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                          >
                            {THEMES.map((theme) => (
                              <option key={theme.id} value={theme.id}>
                                {theme.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">التخطيط</label>
                          <select
                            value={config.layout}
                            onChange={(e) => handleConfigChange("layout", e.target.value)}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                          >
                            {LAYOUTS.map((layout) => (
                              <option key={layout.id} value={layout.id}>
                                {layout.name} - {layout.description}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">الموضع</label>
                          <select
                            value={config.position}
                            onChange={(e) => handleConfigChange("position", e.target.value)}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                          >
                            {POSITIONS.map((position) => (
                              <option key={position.id} value={position.id}>
                                {position.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">الحركة</label>
                          <select
                            value={config.animation}
                            onChange={(e) => handleConfigChange("animation", e.target.value)}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                          >
                            {ANIMATIONS.map((animation) => (
                              <option key={animation.id} value={animation.id}>
                                {animation.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">الألوان</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">اللون الرئيسي</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              value={config.primaryColor}
                              onChange={(e) => handleConfigChange("primaryColor", e.target.value)}
                              disabled={!customThemeActive}
                              className={`h-10 w-10 rounded border-0 ${
                                !customThemeActive ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            />
                            <input
                              type="text"
                              value={config.primaryColor}
                              onChange={(e) => handleConfigChange("primaryColor", e.target.value)}
                              disabled={!customThemeActive}
                              className={`block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 ${
                                !customThemeActive ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">لون النص</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              value={config.textColor}
                              onChange={(e) => handleConfigChange("textColor", e.target.value)}
                              disabled={!customThemeActive}
                              className={`h-10 w-10 rounded border-0 ${
                                !customThemeActive ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            />
                            <input
                              type="text"
                              value={config.textColor}
                              onChange={(e) => handleConfigChange("textColor", e.target.value)}
                              disabled={!customThemeActive}
                              className={`block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 ${
                                !customThemeActive ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">لون الخلفية</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              value={config.backgroundColor}
                              onChange={(e) => handleConfigChange("backgroundColor", e.target.value)}
                              disabled={!customThemeActive}
                              className={`h-10 w-10 rounded border-0 ${
                                !customThemeActive ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            />
                            <input
                              type="text"
                              value={config.backgroundColor}
                              onChange={(e) => handleConfigChange("backgroundColor", e.target.value)}
                              disabled={!customThemeActive}
                              className={`block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 ${
                                !customThemeActive ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">لون الزر</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              value={config.buttonColor}
                              onChange={(e) => handleConfigChange("buttonColor", e.target.value)}
                              disabled={!customThemeActive}
                              className={`h-10 w-10 rounded border-0 ${
                                !customThemeActive ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            />
                            <input
                              type="text"
                              value={config.buttonColor}
                              onChange={(e) => handleConfigChange("buttonColor", e.target.value)}
                              disabled={!customThemeActive}
                              className={`block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 ${
                                !customThemeActive ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      {!customThemeActive && (
                        <div className="mt-2 bg-yellow-50 border-r-4 border-yellow-500 p-3">
                          <p className="text-sm text-yellow-700">
                            لتخصيص الألوان، اختر السمة <span className="font-bold">مخصص</span> من القائمة أعلاه.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">خيارات العرض</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">إظهار الصورة الشخصية</label>
                          <div className="relative inline-block w-10 ml-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={config.showAvatar}
                              onChange={(e) => handleConfigChange("showAvatar", e.target.checked)}
                              className="sr-only"
                              id="showAvatar"
                            />
                            <label
                              htmlFor="showAvatar"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                config.showAvatar ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                  config.showAvatar ? "translate-x-4" : "translate-x-0"
                                }`}
                              ></span>
                            </label>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">إظهار اسم الشركة</label>
                          <div className="relative inline-block w-10 ml-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={config.showCompanyName}
                              onChange={(e) => handleConfigChange("showCompanyName", e.target.checked)}
                              className="sr-only"
                              id="showCompanyName"
                            />
                            <label
                              htmlFor="showCompanyName"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                config.showCompanyName ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                  config.showCompanyName ? "translate-x-4" : "translate-x-0"
                                }`}
                              ></span>
                            </label>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">إظهار اسم وكيل خدمة العملاء</label>
                          <div className="relative inline-block w-10 ml-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={config.showAgentName}
                              onChange={(e) => handleConfigChange("showAgentName", e.target.checked)}
                              className="sr-only"
                              id="showAgentName"
                            />
                            <label
                              htmlFor="showAgentName"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                config.showAgentName ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                  config.showAgentName ? "translate-x-4" : "translate-x-0"
                                }`}
                              ></span>
                            </label>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">إظهار زر الإغلاق</label>
                          <div className="relative inline-block w-10 ml-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={config.showCloseButton}
                              onChange={(e) => handleConfigChange("showCloseButton", e.target.checked)}
                              className="sr-only"
                              id="showCloseButton"
                            />
                            <label
                              htmlFor="showCloseButton"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                config.showCloseButton ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                  config.showCloseButton ? "translate-x-4" : "translate-x-0"
                                }`}
                              ></span>
                            </label>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">إظهار الطابع الزمني</label>
                          <div className="relative inline-block w-10 ml-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={config.showTimestamp}
                              onChange={(e) => handleConfigChange("showTimestamp", e.target.checked)}
                              className="sr-only"
                              id="showTimestamp"
                            />
                            <label
                              htmlFor="showTimestamp"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                config.showTimestamp ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                  config.showTimestamp ? "translate-x-4" : "translate-x-0"
                                }`}
                              ></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Behavior Tab */}
                {activeTab === "behavior" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">سلوك الأداة</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">طريقة الفتح</label>
                          <select
                            value={config.behavior}
                            onChange={(e) => handleConfigChange("behavior", e.target.value)}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                          >
                            {BEHAVIORS.map((behavior) => (
                              <option key={behavior.id} value={behavior.id}>
                                {behavior.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            التأخير قبل الفتح التلقائي (بالثواني)
                          </label>
                          <input
                            type="number"
                            value={config.autoOpenDelay}
                            onChange={(e) => handleConfigChange("autoOpenDelay", parseInt(e.target.value))}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                            min="0"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">خيارات الإشعارات</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">تمكين الإشعارات</label>
                          <div className="relative inline-block w-10 ml-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={config.enableNotifications}
                              onChange={(e) => handleConfigChange("enableNotifications", e.target.checked)}
                              className="sr-only"
                              id="enableNotifications"
                            />
                            <label
                              htmlFor="enableNotifications"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                config.enableNotifications ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                  config.enableNotifications ? "translate-x-4" : "translate-x-0"
                                }`}
                              ></span>
                            </label>
                          </div>
                        </div>
                        {config.enableNotifications && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">رسالة الإشعار</label>
                            <input
                              type="text"
                              value={config.notificationMessage}
                              onChange={(e) => handleConfigChange("notificationMessage", e.target.value)}
                              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                              placeholder="هل تحتاج إلى مساعدة؟"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">خيارات العرض</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">إظهار على أجهزة الكمبيوتر</label>
                          <div className="relative inline-block w-10 ml-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={config.showOnDesktop}
                              onChange={(e) => handleConfigChange("showOnDesktop", e.target.checked)}
                              className="sr-only"
                              id="showOnDesktop"
                            />
                            <label
                              htmlFor="showOnDesktop"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                config.showOnDesktop ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                  config.showOnDesktop ? "translate-x-4" : "translate-x-0"
                                }`}
                              ></span>
                            </label>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">إظهار على الأجهزة المحمولة</label>
                          <div className="relative inline-block w-10 ml-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={config.showOnMobile}
                              onChange={(e) => handleConfigChange("showOnMobile", e.target.checked)}
                              className="sr-only"
                              id="showOnMobile"
                            />
                            <label
                              htmlFor="showOnMobile"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                config.showOnMobile ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                  config.showOnMobile ? "translate-x-4" : "translate-x-0"
                                }`}
                              ></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Advanced Tab */}
                {activeTab === "advanced" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">خيارات متقدمة</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">مؤشر الترتيب (z-index)</label>
                          <input
                            type="number"
                            value={config.zIndex}
                            onChange={(e) => handleConfigChange("zIndex", parseInt(e.target.value))}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            تأخير التحميل (بالمللي ثانية)
                          </label>
                          <input
                            type="number"
                            value={config.loadingDelay}
                            onChange={(e) => handleConfigChange("loadingDelay", parseInt(e.target.value))}
                            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                            min="0"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">توافق GDPR</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">تمكين توافق GDPR</label>
                          <div className="relative inline-block w-10 ml-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={config.gdprCompliance}
                              onChange={(e) => handleConfigChange("gdprCompliance", e.target.checked)}
                              className="sr-only"
                              id="gdprCompliance"
                            />
                            <label
                              htmlFor="gdprCompliance"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                config.gdprCompliance ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                  config.gdprCompliance ? "translate-x-4" : "translate-x-0"
                                }`}
                              ></span>
                            </label>
                          </div>
                        </div>
                        {config.gdprCompliance && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">رسالة توافق GDPR</label>
                            <textarea
                              value={config.gdprMessage}
                              onChange={(e) => handleConfigChange("gdprMessage", e.target.value)}
                              rows={3}
                              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                              placeholder="باستخدامك لهذه الخدمة، أنت توافق على سياسة الخصوصية الخاصة بنا."
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">حقول مخصصة</h3>
                      <div className="space-y-4">
                        {config.customFields.map((field: any, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <input
                              type="text"
                              value={field.label}
                              onChange={(e) => {
                                const newFields: any = [...config.customFields];
                                newFields[index].label = e.target.value;
                                handleConfigChange("customFields", newFields);
                              }}
                              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                              placeholder="اسم الحقل"
                            />
                            <select
                              value={field.type}
                              onChange={(e) => {
                                const newFields: any = [...config.customFields];
                                newFields[index].type = e.target.value;
                                handleConfigChange("customFields", newFields);
                              }}
                              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                            >
                              <option value="text">نص</option>
                              <option value="number">رقم</option>
                              <option value="email">بريد إلكتروني</option>
                              <option value="tel">هاتف</option>
                            </select>
                            <button
                              onClick={() => {
                                const newFields: any = [...config.customFields];
                                newFields.splice(index, 1);
                                handleConfigChange("customFields", newFields);
                              }}
                              className="p-2 text-red-500 hover:text-red-700"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => {
                            const newFields = [...config.customFields, { label: "", type: "text" }];
                            handleConfigChange("customFields", newFields);
                          }}
                          className="w-full py-2 px-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                        >
                          إضافة حقل مخصص
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Eye className="h-5 w-5 text-green-600 ml-2" />
                معاينة الأداة
              </h2>
              {renderPreview()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

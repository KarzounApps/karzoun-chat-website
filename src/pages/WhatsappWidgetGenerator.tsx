import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Palette, 
  Settings, 
  Code, 
  Copy, 
  Check, 
  MessageSquare, 
  Send, 
  Layout, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Globe,
  Clock,
  Bell,
  Search,
  User,
  Upload,
  Download,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
  Info
} from 'lucide-react';

// Widget configuration types
interface WidgetConfig {
  phoneNumber: string;
  message: string;
  welcomeMessage: string;
  buttonText: string;
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  layout: 'bubble' | 'card' | 'popup' | 'bar';
  behavior: 'click' | 'auto';
  autoOpenDelay: number;
  zIndex: number;
  buttonColor: string;
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
  showAvatar: boolean;
  showCompanyName: boolean;
  showAgentName: boolean;
  showCloseButton: boolean;
  avatar: string;
  companyName: string;
  agentName: string;
}

// Default configuration
const defaultConfig: WidgetConfig = {
  phoneNumber: '966500000000',
  message: 'مرحباً، أود الاستفسار عن خدماتكم',
  welcomeMessage: 'مرحباً! كيف يمكنني مساعدتك اليوم؟',
  buttonText: 'تواصل معنا',
  position: 'bottom-right',
  layout: 'bubble',
  behavior: 'click',
  autoOpenDelay: 5,
  zIndex: 9999,
  buttonColor: '#4285f4',
  backgroundColor: '#ffffff',
  textColor: '#ffffff',
  primaryColor: '#4285f4',
  showAvatar: true,
  showCompanyName: true,
  showAgentName: true,
  showCloseButton: true,
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
  companyName: 'شركتك',
  agentName: 'فريق الدعم'
};

export function WhatsappWidgetGenerator() {
  const [config, setConfig] = useState<WidgetConfig>(defaultConfig);
  const [activeTab, setActiveTab] = useState<'design' | 'settings' | 'preview' | 'code'>('design');
  const [copied, setCopied] = useState(false);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [showPreviewControls, setShowPreviewControls] = useState(true);
  const [showSnippetCopied, setShowSnippetCopied] = useState(false);
  const [showFullSnippet, setShowFullSnippet] = useState(false);

  // Update configuration
  const updateConfig = (key: keyof WidgetConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  // Generate installation code snippet
  const generateSnippet = () => {
    return `<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/karzoun/whatsapp-widget/widget.js';
    script.async = true;
    script.onload = function() {
      KarzounWhatsAppWidget.init({
        phoneNumber: '${config.phoneNumber}',
        message: '${config.message}',
        welcomeMessage: '${config.welcomeMessage}',
        buttonText: '${config.buttonText}',
        position: '${config.position}',
        layout: '${config.layout}',
        behavior: '${config.behavior}',
        autoOpenDelay: ${config.autoOpenDelay},
        zIndex: ${config.zIndex},
        buttonColor: '${config.buttonColor}',
        backgroundColor: '${config.backgroundColor}',
        textColor: '${config.textColor}',
        primaryColor: '${config.primaryColor}',
        showAvatar: ${config.showAvatar},
        showCompanyName: ${config.showCompanyName},
        showAgentName: ${config.showAgentName},
        showCloseButton: ${config.showCloseButton},
        avatar: '${config.avatar}',
        companyName: '${config.companyName}',
        agentName: '${config.agentName}'
      });
    };
    document.head.appendChild(script);
  })();
</script>`;
  };

  // Copy snippet to clipboard
  const copySnippet = () => {
    navigator.clipboard.writeText(generateSnippet());
    setShowSnippetCopied(true);
    setTimeout(() => setShowSnippetCopied(false), 2000);
  };

  // Handle phone number format
  const formatPhoneNumber = (value: string) => {
    // Remove any non-digit characters
    const digits = value.replace(/\D/g, '');
    return digits;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
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
                منشئ أداة واتساب للمواقع
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                أنشئ أداة واتساب مخصصة لموقعك الإلكتروني بسهولة وبدون برمجة
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setActiveTab('design')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'design' 
                      ? 'bg-white text-blue-700' 
                      : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  <Palette className="h-5 w-5 inline-block ml-2" />
                  التصميم
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-white text-blue-700' 
                      : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  <Settings className="h-5 w-5 inline-block ml-2" />
                  الإعدادات
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Design Tab */}
              {activeTab === 'design' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Palette className="h-5 w-5 text-blue-600 ml-2" />
                    تصميم الأداة
                  </h2>

                  <div className="space-y-6">
                    {/* Layout Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        نوع الأداة
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 'bubble', label: 'فقاعة', icon: MessageSquare },
                          { id: 'card', label: 'بطاقة', icon: Layout },
                        ].map((layout) => (
                          <button
                            key={layout.id}
                            onClick={() => updateConfig('layout', layout.id)}
                            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-colors ${
                              config.layout === layout.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-200'
                            }`}
                          >
                            <layout.icon className={`h-6 w-6 mb-2 ${
                              config.layout === layout.id ? 'text-blue-500' : 'text-gray-400'
                            }`} />
                            <span className={`text-sm ${
                              config.layout === layout.id ? 'font-medium text-blue-700' : 'text-gray-500'
                            }`}>
                              {layout.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Position Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        موقع الأداة
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 'bottom-right', label: 'أسفل اليمين' },
                          { id: 'bottom-left', label: 'أسفل اليسار' },
                          { id: 'top-right', label: 'أعلى اليمين' },
                          { id: 'top-left', label: 'أعلى اليسار' },
                        ].map((position) => (
                          <button
                            key={position.id}
                            onClick={() => updateConfig('position', position.id)}
                            className={`p-3 rounded-lg border transition-colors ${
                              config.position === position.id
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 text-gray-500 hover:border-blue-200'
                            }`}
                          >
                            {position.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Colors */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الألوان
                      </label>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <label className="text-sm text-gray-500">لون الزر</label>
                            <span className="text-xs text-gray-400">{config.buttonColor}</span>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="color"
                              value={config.buttonColor}
                              onChange={(e) => updateConfig('buttonColor', e.target.value)}
                              className="h-8 w-8 rounded cursor-pointer mr-2"
                            />
                            <input
                              type="text"
                              value={config.buttonColor}
                              onChange={(e) => updateConfig('buttonColor', e.target.value)}
                              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <label className="text-sm text-gray-500">لون النص</label>
                            <span className="text-xs text-gray-400">{config.textColor}</span>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="color"
                              value={config.textColor}
                              onChange={(e) => updateConfig('textColor', e.target.value)}
                              className="h-8 w-8 rounded cursor-pointer mr-2"
                            />
                            <input
                              type="text"
                              value={config.textColor}
                              onChange={(e) => updateConfig('textColor', e.target.value)}
                              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        {config.layout === 'card' && (
                          <>
                            <div>
                              <div className="flex justify-between mb-1">
                                <label className="text-sm text-gray-500">لون الخلفية</label>
                                <span className="text-xs text-gray-400">{config.backgroundColor}</span>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="color"
                                  value={config.backgroundColor}
                                  onChange={(e) => updateConfig('backgroundColor', e.target.value)}
                                  className="h-8 w-8 rounded cursor-pointer mr-2"
                                />
                                <input
                                  type="text"
                                  value={config.backgroundColor}
                                  onChange={(e) => updateConfig('backgroundColor', e.target.value)}
                                  className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <label className="text-sm text-gray-500">لون العنوان</label>
                                <span className="text-xs text-gray-400">{config.primaryColor}</span>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="color"
                                  value={config.primaryColor}
                                  onChange={(e) => updateConfig('primaryColor', e.target.value)}
                                  className="h-8 w-8 rounded cursor-pointer mr-2"
                                />
                                <input
                                  type="text"
                                  value={config.primaryColor}
                                  onChange={(e) => updateConfig('primaryColor', e.target.value)}
                                  className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Card Layout Options */}
                    {config.layout === 'card' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          خيارات البطاقة
                        </label>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <label className="text-sm text-gray-500">إظهار الصورة الرمزية</label>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                              <input
                                type="checkbox"
                                checked={config.showAvatar}
                                onChange={(e) => updateConfig('showAvatar', e.target.checked)}
                                className="sr-only"
                                id="showAvatar"
                              />
                              <label
                                htmlFor="showAvatar"
                                className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors ${
                                  config.showAvatar ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                              >
                                <span
                                  className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                    config.showAvatar ? 'translate-x-4' : 'translate-x-0'
                                  }`}
                                ></span>
                              </label>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <label className="text-sm text-gray-500">إظهار اسم الشركة</label>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                              <input
                                type="checkbox"
                                checked={config.showCompanyName}
                                onChange={(e) => updateConfig('showCompanyName', e.target.checked)}
                                className="sr-only"
                                id="showCompanyName"
                              />
                              <label
                                htmlFor="showCompanyName"
                                className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors ${
                                  config.showCompanyName ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                              >
                                <span
                                  className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                    config.showCompanyName ? 'translate-x-4' : 'translate-x-0'
                                  }`}
                                ></span>
                              </label>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <label className="text-sm text-gray-500">إظهار اسم الوكيل</label>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                              <input
                                type="checkbox"
                                checked={config.showAgentName}
                                onChange={(e) => updateConfig('showAgentName', e.target.checked)}
                                className="sr-only"
                                id="showAgentName"
                              />
                              <label
                                htmlFor="showAgentName"
                                className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors ${
                                  config.showAgentName ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                              >
                                <span
                                  className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                    config.showAgentName ? 'translate-x-4' : 'translate-x-0'
                                  }`}
                                ></span>
                              </label>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <label className="text-sm text-gray-500">إظهار زر الإغلاق</label>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                              <input
                                type="checkbox"
                                checked={config.showCloseButton}
                                onChange={(e) => updateConfig('showCloseButton', e.target.checked)}
                                className="sr-only"
                                id="showCloseButton"
                              />
                              <label
                                htmlFor="showCloseButton"
                                className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors ${
                                  config.showCloseButton ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                              >
                                <span
                                  className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                                    config.showCloseButton ? 'translate-x-4' : 'translate-x-0'
                                  }`}
                                ></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Settings className="h-5 w-5 text-blue-600 ml-2" />
                    إعدادات الأداة
                  </h2>

                  <div className="space-y-6">
                    {/* WhatsApp Settings */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        إعدادات واتساب
                      </label>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">
                            رقم الهاتف (مع رمز الدولة)
                          </label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                              +
                            </span>
                            <input
                              type="text"
                              value={config.phoneNumber}
                              onChange={(e) => updateConfig('phoneNumber', formatPhoneNumber(e.target.value))}
                              placeholder="966500000000"
                              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                            />
                          </div>
                          <p className="mt-1 text-xs text-gray-500">
                            مثال: 966500000000 (بدون + أو مسافات)
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm text-gray-500 mb-1">
                            الرسالة الافتراضية
                          </label>
                          <textarea
                            value={config.message}
                            onChange={(e) => updateConfig('message', e.target.value)}
                            rows={2}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            placeholder="مرحباً، أود الاستفسار عن خدماتكم"
                          />
                          <p className="mt-1 text-xs text-gray-500">
                            الرسالة التي ستظهر تلقائياً في واتساب
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Widget Content */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        محتوى الأداة
                      </label>
                      <div className="space-y-4">
                        {config.layout === 'card' && (
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">
                              رسالة الترحيب
                            </label>
                            <textarea
                              value={config.welcomeMessage}
                              onChange={(e) => updateConfig('welcomeMessage', e.target.value)}
                              rows={2}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                              placeholder="مرحباً! كيف يمكنني مساعدتك اليوم؟"
                            />
                          </div>
                        )}

                        <div>
                          <label className="block text-sm text-gray-500 mb-1">
                            نص الزر
                          </label>
                          <input
                            type="text"
                            value={config.buttonText}
                            onChange={(e) => updateConfig('buttonText', e.target.value)}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            placeholder="تواصل معنا"
                          />
                        </div>

                        {config.layout === 'card' && config.showAvatar && (
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">
                              رابط الصورة الرمزية
                            </label>
                            <input
                              type="text"
                              value={config.avatar}
                              onChange={(e) => updateConfig('avatar', e.target.value)}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                              placeholder="https://example.com/avatar.jpg"
                            />
                          </div>
                        )}

                        {config.layout === 'card' && config.showCompanyName && (
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">
                              اسم الشركة
                            </label>
                            <input
                              type="text"
                              value={config.companyName}
                              onChange={(e) => updateConfig('companyName', e.target.value)}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                              placeholder="شركتك"
                            />
                          </div>
                        )}

                        {config.layout === 'card' && config.showAgentName && (
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">
                              اسم الوكيل
                            </label>
                            <input
                              type="text"
                              value={config.agentName}
                              onChange={(e) => updateConfig('agentName', e.target.value)}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                              placeholder="فريق الدعم"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Advanced Settings Toggle */}
                    <div>
                      <button
                        onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
                        className="flex items-center justify-between w-full px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-medium text-gray-700">إعدادات متقدمة</span>
                        {showAdvancedSettings ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>

                      {showAdvancedSettings && (
                        <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">
                              سلوك الفتح
                            </label>
                            <div className="flex space-x-4 space-x-reverse">
                              <div className="flex items-center">
                                <input
                                  id="behavior-click"
                                  type="radio"
                                  checked={config.behavior === 'click'}
                                  onChange={() => updateConfig('behavior', 'click')}
                                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="behavior-click" className="mr-2 block text-sm text-gray-700">
                                  عند النقر
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  id="behavior-auto"
                                  type="radio"
                                  checked={config.behavior === 'auto'}
                                  onChange={() => updateConfig('behavior', 'auto')}
                                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="behavior-auto" className="mr-2 block text-sm text-gray-700">
                                  تلقائي
                                </label>
                              </div>
                            </div>
                          </div>

                          {config.behavior === 'auto' && (
                            <div>
                              <label className="block text-sm text-gray-500 mb-1">
                                تأخير الفتح التلقائي (بالثواني)
                              </label>
                              <input
                                type="number"
                                min="1"
                                max="60"
                                value={config.autoOpenDelay}
                                onChange={(e) => updateConfig('autoOpenDelay', parseInt(e.target.value) || 5)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                              />
                            </div>
                          )}

                          <div>
                            <label className="block text-sm text-gray-500 mb-1">
                              مؤشر Z-index
                            </label>
                            <input
                              type="number"
                              min="1"
                              value={config.zIndex}
                              onChange={(e) => updateConfig('zIndex', parseInt(e.target.value) || 9999)}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                              يحدد ترتيب طبقات العناصر في الصفحة
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Preview Panel (Desktop) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Live Preview */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold flex items-center">
                    <Smartphone className="h-5 w-5 text-blue-600 ml-2" />
                    معاينة مباشرة
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPreviewMode('desktop')}
                      className={`p-2 rounded-md ${
                        previewMode === 'desktop'
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      <Globe className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setPreviewMode('mobile')}
                      className={`p-2 rounded-md ${
                        previewMode === 'mobile'
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      <Smartphone className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '500px' }}>
                  {/* Mock Website Content */}
                  <div className="h-full overflow-y-auto">
                    <div className="bg-white shadow-sm p-4">
                      <div className="h-8 bg-gray-200 rounded-lg w-1/3 mb-4"></div>
                      <div className="flex gap-4">
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-6"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/6 mb-8"></div>
                      
                      <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
                      
                      <div className="h-6 bg-gray-200 rounded-lg w-1/2 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
                      
                      <div className="h-40 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>

                  {/* Widget Preview */}
                  <div className={`absolute ${
                    config.position === 'bottom-right' ? 'bottom-4 right-4' :
                    config.position === 'bottom-left' ? 'bottom-4 left-4' :
                    config.position === 'top-right' ? 'top-4 right-4' :
                    'top-4 left-4'
                  }`}>
                    {config.layout === 'bubble' ? (
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                        style={{ backgroundColor: config.buttonColor }}
                      >
                        <Send className="h-7 w-7" style={{ color: config.textColor }} />
                      </div>
                    ) : (
                      <div 
                        className="w-80 rounded-lg shadow-lg overflow-hidden"
                        style={{ backgroundColor: config.backgroundColor }}
                      >
                        <div 
                          className="px-4 py-3 flex items-center gap-3"
                          style={{ backgroundColor: config.primaryColor }}
                        >
                          {config.showAvatar && (
                            <img 
                              src={config.avatar} 
                              alt="Agent" 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          )}
                          <div>
                            {config.showCompanyName && (
                              <div className="font-medium" style={{ color: config.textColor }}>
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
                            <button className="ml-auto text-white opacity-70 hover:opacity-100">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                              </svg>
                            </button>
                          )}
                        </div>
                        <div className="p-4">
                          <p className="text-gray-700 mb-4">{config.welcomeMessage}</p>
                          <button 
                            className="w-full py-2 px-4 rounded flex items-center justify-center gap-2"
                            style={{ backgroundColor: config.buttonColor, color: config.textColor }}
                          >
                            <Send className="h-5 w-5" />
                            <span>{config.buttonText}</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Code Snippet Section */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Code className="h-5 w-5 text-blue-600 ml-2" />
                  كود التضمين
                </h2>

                <div className="mb-4">
                  <p className="text-gray-600 mb-4">
                    انسخ الكود التالي والصقه في موقعك قبل علامة الإغلاق <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">&lt;/body&gt;</code> لإضافة أداة واتساب.
                  </p>

                  <div className="relative">
                    <div className="bg-gray-800 rounded-lg p-4 overflow-auto max-h-60">
                      <pre className="text-gray-300 text-sm whitespace-pre-wrap" dir="ltr">
                        <code>{showFullSnippet ? generateSnippet() : generateSnippet().split('\n').slice(0, 10).join('\n') + '\n  // ...'}</code>
                      </pre>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-2">
                      {!showFullSnippet && (
                        <button
                          onClick={() => setShowFullSnippet(true)}
                          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-md transition-colors"
                          title="عرض الكود كاملاً"
                        >
                          <ChevronDown className="h-5 w-5" />
                        </button>
                      )}
                      <button
                        onClick={copySnippet}
                        className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-md transition-colors"
                        title="نسخ الكود"
                      >
                        {showSnippetCopied ? (
                          <Check className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {showSnippetCopied && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      تم نسخ الكود بنجاح!
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <button 
                    onClick={copySnippet}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                  >
                    <Copy className="h-5 w-5 ml-2" />
                    نسخ الكود
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    <Download className="h-5 w-5 ml-2" />
                    تحميل ملف HTML
                  </button>
                </div>
              </div>

              {/* Installation Guide */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 ml-2" />
                  دليل التثبيت
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="mr-4">
                      <h3 className="font-medium text-gray-900 mb-2">نسخ الكود</h3>
                      <p className="text-gray-600 mb-2">
                        انسخ كود التضمين من القسم أعلاه بالضغط على زر "نسخ الكود".
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-sm text-gray-500">
                          <Info className="h-4 w-4 text-blue-500 ml-2" />
                          تأكد من نسخ الكود كاملاً بدون أي تعديل.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="mr-4">
                      <h3 className="font-medium text-gray-900 mb-2">فتح محرر الكود الخاص بموقعك</h3>
                      <p className="text-gray-600 mb-2">
                        افتح محرر الكود الخاص بموقعك أو لوحة تحكم نظام إدارة المحتوى الذي تستخدمه.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500 mb-2">أمثلة على أنظمة إدارة المحتوى الشائعة:</p>
                        <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                          <li>ووردبريس: انتقل إلى "المظهر" ثم "محرر القوالب" أو استخدم إضافة لإضافة أكواد HTML</li>
                          <li>شوبيفاي: انتقل إلى "القالب" ثم "تحرير HTML/CSS"</li>
                          <li>ويكس: انتقل إلى "إعدادات" ثم "متقدم" ثم "HTML/CSS"</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="mr-4">
                      <h3 className="font-medium text-gray-900 mb-2">لصق الكود في موقعك</h3>
                      <p className="text-gray-600 mb-2">
                        الصق الكود قبل علامة الإغلاق <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;/body&gt;</code> في صفحات موقعك.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-sm text-gray-500">
                          <Info className="h-4 w-4 text-blue-500 ml-2" />
                          إذا كنت تريد إظهار الأداة في صفحات محددة فقط، أضف الكود في تلك الصفحات فقط.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="mr-4">
                      <h3 className="font-medium text-gray-900 mb-2">حفظ التغييرات وتحديث موقعك</h3>
                      <p className="text-gray-600 mb-2">
                        احفظ التغييرات التي قمت بها وقم بتحديث موقعك لتفعيل أداة واتساب.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-sm text-gray-500">
                          <Info className="h-4 w-4 text-blue-500 ml-2" />
                          قد تحتاج إلى مسح ذاكرة التخزين المؤقت للمتصفح لرؤية التغييرات.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-green-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 ml-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-green-800 mb-2">تم الانتهاء!</h3>
                      <p className="text-green-700 mb-4">
                        الآن يمكن لزوار موقعك التواصل معك مباشرة عبر واتساب بنقرة زر واحدة.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href="#" 
                          className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                        >
                          <HelpCircle className="h-4 w-4" />
                          الحصول على المساعدة
                        </a>
                        <a 
                          href="#" 
                          className="inline-flex items-center gap-2 bg-white text-green-700 border border-green-200 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          مشاهدة أمثلة
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600">
            إليك إجابات على الأسئلة الأكثر شيوعًا حول أداة واتساب للمواقع
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              question: "هل يمكنني تخصيص شكل الأداة بالكامل؟",
              answer: "نعم، يمكنك تخصيص شكل الأداة بالكامل بما في ذلك الألوان والموقع والنصوص والصور الرمزية وغيرها من الخيارات من خلال واجهة المنشئ سهلة الاستخدام."
            },
            {
              question: "هل أحتاج إلى مهارات برمجية لاستخدام الأداة؟",
              answer: "لا، لا تحتاج إلى أي مهارات برمجية. ما عليك سوى تخصيص الأداة باستخدام واجهة المنشئ، ثم نسخ الكود ولصقه في موقعك. الأمر بهذه البساطة!"
            },
            {
              question: "هل الأداة متوافقة مع جميع أنظمة إدارة المحتوى؟",
              answer: "نعم، الأداة متوافقة مع جميع أنظمة إدارة المحتوى الشائعة مثل ووردبريس وشوبيفاي وويكس وسكوير سبيس وغيرها. يمكن إضافتها إلى أي موقع يدعم إضافة أكواد HTML مخصصة."
            },
            {
              question: "هل يمكنني استخدام الأداة على الهاتف المحمول؟",
              answer: "نعم، الأداة متوافقة تمامًا مع الأجهزة المحمولة وتعمل بشكل جيد على جميع أحجام الشاشات. يمكنك معاينة كيفية ظهورها على الهاتف المحمول من خلال وضع المعاينة المخصص."
            },
            {
              question: "هل يمكنني تغيير إعدادات الأداة بعد تثبيتها؟",
              answer: "نعم، يمكنك العودة إلى منشئ الأداة في أي وقت لتعديل الإعدادات والحصول على كود جديد. ثم قم باستبدال الكود القديم في موقعك بالكود الجديد."
            },
            {
              question: "هل الأداة مجانية للاستخدام؟",
              answer: "نعم، الأداة مجانية تمامًا للاستخدام ولا توجد أي رسوم خفية. يمكنك إنشاء وتخصيص واستخدام الأداة على موقعك بدون أي تكلفة."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setCopied(index === copied ? null : index)}
                className="w-full flex items-center justify-between p-4 text-right bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900">{faq.question}</h3>
                {copied === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {copied === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            جاهز لتحسين تواصلك مع العملاء؟
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            أنشئ أداة واتساب مخصصة لموقعك الآن وابدأ في تلقي المزيد من الاستفسارات والمبيعات
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('design')}
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              إنشاء أداة واتساب الآن
            </button>
            <a 
              href="#" 
              className="bg-blue-700 text-white border border-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              مشاهدة أمثلة
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Upload, Monitor, Moon, Sun, 
  Check, MessageSquare, Bell, Search,
  User, Settings, Menu
} from 'lucide-react';

interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

const defaultTheme: Theme = {
  primary: '#4285f4',
  secondary: '#34a853',
  accent: '#fbbc05',
  background: '#ffffff',
  text: '#1f2937'
};

export function WhitelabelDemo() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [logo, setLogo] = useState<string>('/logo.svg');
  const [darkMode, setDarkMode] = useState(false);
  const [companyName, setCompanyName] = useState('شركتك');

  const updateTheme = (key: keyof Theme, value: string) => {
    setTheme(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-gray-50 rounded-3xl p-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Controls Panel */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">تخصيص الواجهة</h3>
              <p className="text-gray-600 mb-6">
                جرب تخصيص واجهة المنصة بألوانك وهويتك التجارية
              </p>
            </div>

            {/* Brand Settings */}
            <div className="space-y-4">
              <h4 className="font-semibold">الهوية التجارية</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    اسم الشركة
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-google-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    الشعار
                  </label>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Upload className="h-4 w-4" />
                      تحميل شعار
                    </button>
                    <button 
                      onClick={() => setLogo('/logo.svg')}
                      className="text-sm text-google-blue hover:underline"
                    >
                      إعادة تعيين
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Scheme */}
            <div className="space-y-4">
              <h4 className="font-semibold">نظام الألوان</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(theme).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {key === 'primary' ? 'اللون الرئيسي' :
                       key === 'secondary' ? 'اللون الثانوي' :
                       key === 'accent' ? 'لون التمييز' :
                       key === 'background' ? 'الخلفية' : 'النص'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={value}
                        onChange={(e) => updateTheme(key as keyof Theme, e.target.value)}
                        className="h-8 w-8 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => updateTheme(key as keyof Theme, e.target.value)}
                        className="flex-1 px-3 py-1 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="space-y-4">
              <h4 className="font-semibold">المظهر</h4>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDarkMode(false)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    !darkMode 
                      ? 'bg-google-blue text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <Sun className="h-4 w-4" />
                  فاتح
                </button>
                <button
                  onClick={() => setDarkMode(true)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-google-blue text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <Moon className="h-4 w-4" />
                  داكن
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div>
            <h3 className="text-xl font-bold mb-4">معاينة مباشرة</h3>
            <p className="text-gray-600 mb-6">
              شاهد كيف ستبدو منصتك بعد التخصيص
            </p>

            {/* Dashboard Preview */}
            <div 
              className={`rounded-xl shadow-lg overflow-hidden transition-colors ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
              style={{ 
                backgroundColor: darkMode ? '#1f2937' : theme.background,
                color: darkMode ? '#f3f4f6' : theme.text
              }}
            >
              {/* Header */}
              <div className="border-b" style={{ borderColor: darkMode ? '#374151' : '#e5e7eb' }}>
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Menu className="h-6 w-6" />
                      <img src={logo} alt="Logo" className="h-8" />
                      <span className="font-semibold">{companyName}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <Bell className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <Settings className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <User className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6">
                {/* Search Bar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="بحث..."
                      className="w-full pl-4 pr-10 py-2 rounded-lg border"
                      style={{ 
                        backgroundColor: darkMode ? '#374151' : '#f9fafb',
                        borderColor: darkMode ? '#4b5563' : '#e5e7eb'
                      }}
                    />
                  </div>
                  <button 
                    className="px-4 py-2 rounded-lg text-white"
                    style={{ backgroundColor: theme.primary }}
                  >
                    محادثة جديدة
                  </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'المحادثات النشطة', value: '24' },
                    { label: 'العملاء الجدد', value: '156' },
                    { label: 'معدل الرضا', value: '98%' }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg"
                      style={{ 
                        backgroundColor: darkMode ? '#374151' : '#f9fafb',
                        borderColor: darkMode ? '#4b5563' : '#e5e7eb'
                      }}
                    >
                      <div className="text-2xl font-bold" style={{ color: theme.primary }}>
                        {stat.value}
                      </div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Chat Preview */}
                <div 
                  className="rounded-lg p-4"
                  style={{ 
                    backgroundColor: darkMode ? '#374151' : '#f9fafb',
                    borderColor: darkMode ? '#4b5563' : '#e5e7eb'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-5 w-5" style={{ color: theme.primary }} />
                    <span className="font-medium">آخر المحادثات</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      'مرحباً، كيف يمكنني المساعدة؟',
                      'أريد معرفة المزيد عن خدماتكم',
                      'بالتأكيد! يسعدني مساعدتك...'
                    ].map((message, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg"
                        style={{ 
                          backgroundColor: index % 2 === 0 
                            ? (darkMode ? '#4b5563' : '#ffffff')
                            : (darkMode ? '#1f2937' : '#f3f4f6')
                        }}
                      >
                        {message}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
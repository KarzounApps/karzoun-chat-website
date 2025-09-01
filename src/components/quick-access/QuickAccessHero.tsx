'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, Command, User, MessageSquare, Package, BarChart3, Settings, FileText, Check, UserCircle } from 'lucide-react';

const QuickAccessHero = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showToast, setShowToast] = useState(false);
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState([]);
  const [shortcutPulse, setShortcutPulse] = useState(-1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);

  // Sample contacts data
  const contacts = [
    { id: 1, firstName: 'مروة', lastName: 'سعيد', fullName: 'مروة سعيد', phone: '+966501234567', email: 'marwa@karzoun.com' },
    { id: 2, firstName: 'مروة', lastName: '', fullName: 'مروة', phone: '0501147516299', email: 'marwa@test.com' },
    { id: 3, firstName: 'مروة', lastName: 'بدور', fullName: 'مروة بدور', phone: '+966501168676280', email: 'marwa.bedour@test.com' },
    { id: 4, firstName: 'أحمد', lastName: 'محمد', fullName: 'أحمد محمد', phone: '0551234567', email: 'ahmed@example.com' },
    { id: 5, firstName: 'فاطمة', lastName: 'علي', fullName: 'فاطمة علي', phone: '0561234567', email: 'fatima@example.com' },
    { id: 6, firstName: 'محمد', lastName: 'السعيد', fullName: 'محمد السعيد', phone: '0571234567', email: 'mohammed@example.com' },
    { id: 7, firstName: 'نورا', lastName: 'أحمد', fullName: 'نورا أحمد', phone: '0581234567', email: 'nora@example.com' },
    { id: 8, firstName: 'خالد', lastName: 'محمود', fullName: 'خالد محمود', phone: '0591234567', email: 'khalid@example.com' },
  ];

  const quickAccessItems = [
    { icon: User, title: 'تفاصيل العميل', description: 'عرض معلومات العميل الكاملة', shortcut: 'Ctrl+U' },
    { icon: MessageSquare, title: 'المحادثات', description: 'الوصول السريع للمحادثات', shortcut: 'Ctrl+M' },
    { icon: Package, title: 'الطلبات', description: 'إدارة الطلبات والمبيعات', shortcut: 'Ctrl+O' },
    { icon: BarChart3, title: 'التقارير', description: 'عرض التحليلات والتقارير', shortcut: 'Ctrl+R' },
    { icon: Settings, title: 'الإعدادات', description: 'تخصيص النظام', shortcut: 'Ctrl+S' },
    { icon: FileText, title: 'تطبيقات العميل', description: 'إدارة التطبيقات', shortcut: 'Ctrl+A' },
  ];

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 250);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Utility functions for search
  const normalizeArabicDigits = (text) => {
    const arabicDigits = '٠١٢٣٤٥٦٧٨٩';
    const latinDigits = '0123456789';
    return text.replace(/[٠-٩]/g, (match) => latinDigits[arabicDigits.indexOf(match)]);
  };

  const normalizePhone = (phone) => {
    let normalized = normalizeArabicDigits(phone);
    normalized = normalized.replace(/[\s\-\(\)]/g, ''); // Remove spaces, dashes, parentheses
    if (normalized.startsWith('0')) {
      normalized = normalized.substring(1); // Remove leading zero
    }
    if (normalized.startsWith('+966')) {
      normalized = normalized.substring(4); // Remove country code
    }
    return normalized;
  };

  const removeDiacritics = (text) => {
    return text.replace(/[\u064B-\u0652\u0670\u0640]/g, ''); // Remove Arabic diacritics
  };

  const calculateEditDistance = (a, b) => {
    const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
    
    for (let i = 0; i <= a.length; i += 1) {
      matrix[0][i] = i;
    }
    
    for (let j = 0; j <= b.length; j += 1) {
      matrix[j][0] = j;
    }
    
    for (let j = 1; j <= b.length; j += 1) {
      for (let i = 1; i <= a.length; i += 1) {
        const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1, // deletion
          matrix[j - 1][i] + 1, // insertion
          matrix[j - 1][i - 1] + indicator, // substitution
        );
      }
    }
    
    return matrix[b.length][a.length];
  };

  const highlightMatches = (text, query) => {
    if (!query) return text;
    
    const normalizedText = removeDiacritics(text.toLowerCase());
    const normalizedQuery = removeDiacritics(query.toLowerCase());
    
    // For phone numbers, highlight digit sequences
    if (/\d/.test(query)) {
      const phoneQuery = normalizePhone(query);
      const phoneText = normalizePhone(text);
      if (phoneText.includes(phoneQuery)) {
        return text.replace(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>');
      }
    }
    
    // For names, highlight matching parts
    const regex = new RegExp(`(${normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  // Search contacts
  const searchResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    
    const query = debouncedQuery.trim();
    const hasDigits = /[\d٠-٩]/.test(query);
    
    const results = contacts.map(contact => {
      let score = 0;
      let matchType = '';
      let matchedField = '';
      
      if (hasDigits) {
        // Phone search
        const normalizedQuery = normalizePhone(query);
        const normalizedPhone = normalizePhone(contact.phone);
        
        if (normalizedPhone === normalizedQuery) {
          score = 1000; // Exact match
          matchType = 'exact_phone';
        } else if (normalizedPhone.startsWith(normalizedQuery)) {
          score = 800; // Prefix match
          matchType = 'prefix_phone';
        } else if (normalizedPhone.includes(normalizedQuery)) {
          score = 600; // Substring match
          matchType = 'substring_phone';
        }
        matchedField = 'phone';
      } else {
        // Name search
        const normalizedQuery = removeDiacritics(query.toLowerCase());
        const normalizedFullName = removeDiacritics(contact.fullName.toLowerCase());
        const normalizedFirstName = removeDiacritics(contact.firstName.toLowerCase());
        const normalizedLastName = removeDiacritics(contact.lastName.toLowerCase());
        
        if (normalizedFullName === normalizedQuery) {
          score = 900; // Exact full name match
          matchType = 'exact_name';
          matchedField = 'fullName';
        } else if (normalizedFirstName === normalizedQuery || normalizedLastName === normalizedQuery) {
          score = 850; // Exact first/last name match
          matchType = 'exact_partial_name';
          matchedField = normalizedFirstName === normalizedQuery ? 'firstName' : 'lastName';
        } else if (normalizedFullName.startsWith(normalizedQuery)) {
          score = 700; // Prefix match
          matchType = 'prefix_name';
          matchedField = 'fullName';
        } else if (normalizedFirstName.startsWith(normalizedQuery) || normalizedLastName.startsWith(normalizedQuery)) {
          score = 650; // Prefix match on first/last name
          matchType = 'prefix_partial_name';
          matchedField = normalizedFirstName.startsWith(normalizedQuery) ? 'firstName' : 'lastName';
        } else if (normalizedFullName.includes(normalizedQuery)) {
          score = 500; // Substring match
          matchType = 'substring_name';
          matchedField = 'fullName';
        } else {
          // Fuzzy match (1 edit distance)
          const editDistance = calculateEditDistance(normalizedQuery, normalizedFullName);
          if (editDistance <= 1 && normalizedQuery.length > 2) {
            score = 300; // Fuzzy match
            matchType = 'fuzzy_name';
            matchedField = 'fullName';
          }
        }
      }
      
      return { ...contact, score, matchType, matchedField };
    })
    .filter(contact => contact.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.fullName.localeCompare(b.fullName, 'ar');
    })
    .slice(0, 10);
    
    return results;
  }, [debouncedQuery]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Animation sequence
  useEffect(() => {
    if (prefersReducedMotion) {
      setCardVisible(true);
      setItemsVisible(quickAccessItems.map(() => true));
      return;
    }

    const sequence = async () => {
      // Reset state
      setAnimationStep(0);
      setSearchQuery('');
      setSelectedIndex(-1);
      setShowToast(false);
      setShowShortcutHint(false);
      setCardVisible(false);
      setItemsVisible([]);
      setShortcutPulse(-1);

      // Step 1: Fade in card (400ms)
      setTimeout(() => setCardVisible(true), 100);
      
      // Step 2: Show shortcut hint (1s after card)
      setTimeout(() => setShowShortcutHint(true), 600);
      
      // Step 3: Simulate Ctrl+K press (2s)
      setTimeout(() => {
        setAnimationStep(1);
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 2000);
      
      // Step 4: Type "محمد" for contact search (2.5s)
      setTimeout(() => {
        const searchTerm = 'محمد';
        let j = 0;
        const searchInterval = setInterval(() => {
          if (j < searchTerm.length) {
            setSearchQuery(searchTerm.slice(0, j + 1));
            j++;
          } else {
            clearInterval(searchInterval);
            // Show results immediately after typing (4s)
            setTimeout(() => {
              setAnimationStep(2);
              setIsSearching(true);
            }, 200);
          }
        }, 100);
      }, 2500);
      
      // Step 5: Arrow key navigation (8s - after 3.5s of showing results)
      setTimeout(() => {
        setAnimationStep(3);
        let currentIndex = 0;
        const navInterval = setInterval(() => {
          setSelectedIndex(currentIndex);
          currentIndex = (currentIndex + 1) % Math.min(searchResults.length, 3);
          if (currentIndex === 1) { // Stop at second result
            clearInterval(navInterval);
            setSelectedIndex(1);
            // Step 6: Enter press (9.5s)
            setTimeout(() => {
              setAnimationStep(4);
              setShowToast(true);
              setTimeout(() => setShowToast(false), 2000);
            }, 500);
          }
        }, 400);
      }, 8000);
      
      // Restart loop (13s - extended for longer result display)
      setTimeout(() => {
        setIsSearching(false);
        sequence();
      }, 13000);
    };

    sequence();
  }, [prefersReducedMotion, searchResults.length]);

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
      
      if (searchResults.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % searchResults.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => prev <= 0 ? searchResults.length - 1 : prev - 1);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
          e.preventDefault();
          setShowToast(true);
          setTimeout(() => setShowToast(false), 2000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchResults.length, selectedIndex]);

  const displayItems = isSearching && searchResults.length > 0 ? searchResults : 
                      (!isSearching && !searchQuery) ? quickAccessItems : [];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-6 lg:pt-8 xl:pt-10 overflow-hidden" 
             style={{ background: 'linear-gradient(135deg, #10254E 0%, #1F2D5C 100%)' }} dir="rtl">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10254E]/80 via-transparent to-[#10254E]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#10254E]/60 via-transparent to-[#10254E]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-center">
            أداة الوصول السريع
          </h1>
          
          <div className="text-center flex flex-col items-center justify-center mb-4">
            <div className="w-full flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 leading-relaxed text-center w-full max-w-4xl mx-auto">
                تنقل بين الصفحات بخفة وسلاسة مع أداة الوصول السريع المتطورة
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
            وفر الوقت والجهد مع أداة الوصول السريع المتطورة. انتقل بسرعة بين جميع أقسام النظام باستخدام اختصارات لوحة المفاتيح أو البحث الذكي
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="order-1 sm:order-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              ابدأ الآن مجاناً
            </button>
            <button className="order-2 sm:order-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              عرض توضيحي
            </button>
          </div>

          {/* Interactive Demo */}
          <div className={`relative max-w-4xl mx-auto transition-all duration-400 ${
            cardVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
          }`}>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 bg-green-500 rounded-full transition-all duration-300 ${
                    showToast ? 'animate-pulse scale-125' : ''
                  }`}></div>
                  <h3 className="text-xl font-semibold text-white">عرض تفاعلي لأداة الوصول السريع</h3>
                </div>
              </div>

              {/* Command Palette Demo */}
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-2 border-blue-200 focus-within:border-blue-500 transition-colors">
                    <Search className={`w-5 h-5 text-gray-400 transition-transform duration-120 ${
                      animationStep >= 1 ? 'rotate-90' : ''
                    }`} />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="ابحث عن جهات الاتصال..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 outline-none text-right"
                      style={{ color: '#10254E' }}
                    />
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Command className="w-3 h-3" />
                      <span>K</span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                {displayItems.length > 0 && (
                  <div className="space-y-2">
                    {/* Header for contacts */}
                    {isSearching && searchResults.length > 0 && (
                      <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-500 border-b border-gray-200">
                        <span>Contacts</span>
                        <span>جهات الاتصال</span>
                      </div>
                    )}
                    
                    {displayItems.map((item, index) => (
                      <div
                        key={isSearching ? item.id : index}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                          selectedIndex === index 
                            ? 'bg-blue-50 shadow-md transform translate-y-[-2px]' 
                            : 'hover:bg-blue-50 hover:transform hover:translate-y-[-2px] hover:shadow-md'
                        }`}
                        style={{
                          backgroundColor: selectedIndex === index ? '#2362FF15' : '',
                          borderLeft: selectedIndex === index ? '3px solid #2362FF' : '3px solid transparent'
                        }}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className={`w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors ${
                            selectedIndex === index ? 'bg-blue-200' : ''
                          }`}>
                            {isSearching ? (
                              <UserCircle className="w-5 h-5 text-blue-600" />
                            ) : (
                              <item.icon className="w-5 h-5 text-blue-600" />
                            )}
                          </div>
                          <div className="text-right flex-1">
                            {isSearching ? (
                              <>
                                <div 
                                  className="font-semibold" 
                                  style={{ color: '#10254E' }}
                                  dangerouslySetInnerHTML={{ 
                                    __html: highlightMatches(item.fullName, searchQuery) 
                                  }}
                                />
                                <div className="text-sm text-gray-500">
                                  <span 
                                    dangerouslySetInnerHTML={{ 
                                      __html: highlightMatches(item.phone, searchQuery) 
                                    }}
                                  />
                                  {item.email && (
                                    <>
                                      {' • '}
                                      <span 
                                        dangerouslySetInnerHTML={{ 
                                          __html: highlightMatches(item.email, searchQuery) 
                                        }}
                                      />
                                    </>
                                  )}
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="font-semibold" style={{ color: '#10254E' }}>{item.title}</div>
                                <div className="text-sm text-gray-500">{item.description}</div>
                              </>
                            )}
                          </div>
                        </div>
                        {!isSearching && (
                          <div className={`text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded transition-all duration-300 ${
                            shortcutPulse === index ? 'scale-110 bg-blue-100' : ''
                          }`}>
                            {item.shortcut}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Empty state */}
                    {isSearching && searchResults.length === 0 && searchQuery && (
                      <div className="text-center py-8 text-gray-500">
                        لا توجد نتائج مطابقة.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
              <div className={`absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 ${
                prefersReducedMotion ? '' : 'animate-bounce'
              }`}>
                <Check className="w-4 h-4" />
                <span>تم فتح جهة الاتصال</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom styles for highlighting */}
      <style jsx>{`
        mark {
          background-color: #fef3c7;
          color: inherit;
          padding: 0;
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
};

export default QuickAccessHero;


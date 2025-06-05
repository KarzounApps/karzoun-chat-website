import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, Phone, Mail, User, MoreHorizontal, 
  Star, Tag, Plus, Edit, FileText, 
  Clock, CheckCircle2, Download, Share2,
  MessageSquare, Calendar, ShoppingCart
} from 'lucide-react';

// Types
interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'away' | 'offline' | 'busy';
  lastSeen?: string;
  tags?: string[];
  isStarred?: boolean;
}

interface UserInfoPanelProps {
  contact: Contact;
  onClose: () => void;
  darkMode: boolean;
}

export function UserInfoPanel({ contact, onClose, darkMode }: UserInfoPanelProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'orders' | 'notes'>('info');
  const [editingTags, setEditingTags] = useState(false);
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (!newTag.trim()) return;
    // In a real app, you would update the contact with the new tag
    console.log('Adding tag:', newTag);
    setNewTag('');
  };

  return (
    <div className="h-full flex flex-col">
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-between`}>
        <h3 className="font-medium">معلومات العميل</h3>
        <button 
          onClick={onClose}
          className={`p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {/* User Profile */}
        <div className="text-center mb-6">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
          />
          <h3 className="text-xl font-bold">{contact.name}</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {contact.status === 'online' ? 'متصل الآن' : 
             contact.status === 'away' ? 'غير متواجد' : 
             contact.status === 'busy' ? 'مشغول' : 
             contact.lastSeen ? contact.lastSeen : 'غير متصل'}
          </p>
          
          <div className="flex justify-center gap-3 mt-3">
            <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <Phone className="h-5 w-5" />
            </button>
            <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <Mail className="h-5 w-5" />
            </button>
            <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <User className="h-5 w-5" />
            </button>
            <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className={`flex border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} mb-4`}>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-2 text-center text-sm font-medium ${
              activeTab === 'info' 
                ? darkMode ? 'text-white border-b-2 border-google-blue' : 'text-google-blue border-b-2 border-google-blue'
                : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            معلومات
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-2 text-center text-sm font-medium ${
              activeTab === 'orders' 
                ? darkMode ? 'text-white border-b-2 border-google-blue' : 'text-google-blue border-b-2 border-google-blue'
                : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            الطلبات
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex-1 py-2 text-center text-sm font-medium ${
              activeTab === 'notes' 
                ? darkMode ? 'text-white border-b-2 border-google-blue' : 'text-google-blue border-b-2 border-google-blue'
                : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            ملاحظات
          </button>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'info' && (
          <>
            {/* Tags */}
            {contact.tags && (
              <div className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">الوسوم</h4>
                  <button 
                    onClick={() => setEditingTags(!editingTags)}
                    className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
                  >
                    {editingTags ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Edit className="h-4 w-4" />}
                  </button>
                </div>
                
                {editingTags ? (
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {contact.tags.map((tag, i) => (
                        <div 
                          key={i} 
                          className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${
                            darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          {tag}
                          <button className="text-gray-500 hover:text-gray-700">
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="إضافة وسم جديد..."
                        className={`flex-1 px-3 py-1 text-sm rounded-lg ${
                          darkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                        } border focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddTag();
                          }
                        }}
                      />
                      <button 
                        onClick={handleAddTag}
                        className="bg-google-blue text-white px-3 py-1 rounded-lg text-sm"
                      >
                        إضافة
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {contact.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-xs ${
                          darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    <button className={`px-2 py-1 rounded-full text-xs ${
                      darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                    }`}>
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Customer Info */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-sm">معلومات العميل</h4>
                <button className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <Edit className="h-4 w-4" />
                </button>
              </div>
              
              <div className={`rounded-lg overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="divide-y divide-gray-200">
                  <div className={`px-4 py-3 flex justify-between ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>البريد الإلكتروني</span>
                    <span className="text-sm">{contact.name.replace(/\s+/g, '.').toLowerCase()}@example.com</span>
                  </div>
                  <div className={`px-4 py-3 flex justify-between ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>رقم الهاتف</span>
                    <span className="text-sm">+966 5X XXX XXXX</span>
                  </div>
                  <div className={`px-4 py-3 flex justify-between ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>المدينة</span>
                    <span className="text-sm">الرياض</span>
                  </div>
                  <div className={`px-4 py-3 flex justify-between ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>تاريخ التسجيل</span>
                    <span className="text-sm">15 يناير 2023</span>
                  </div>
                  <div className={`px-4 py-3 flex justify-between ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>عدد المحادثات</span>
                    <span className="text-sm">12</span>
                  </div>
                  <div className={`px-4 py-3 flex justify-between ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>آخر تفاعل</span>
                    <span className="text-sm">اليوم</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Customer Metrics */}
            <div className="mb-4">
              <h4 className="font-medium text-sm mb-3">إحصائيات العميل</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <ShoppingCart className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">إجمالي الطلبات</span>
                  </div>
                  <div className="text-2xl font-bold">8</div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">معدل الاستجابة</span>
                  </div>
                  <div className="text-2xl font-bold">92%</div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-medium">عميل منذ</span>
                  </div>
                  <div className="text-lg font-bold">6 أشهر</div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">التقييم</span>
                  </div>
                  <div className="text-2xl font-bold">4.8</div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'orders' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-sm">طلبات العميل</h4>
              <button className="text-xs text-google-blue">عرض الكل</button>
            </div>
            
            <div className={`rounded-lg overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {[
                { id: '#45678', date: '5 مارس 2023', status: 'تم التسليم', amount: '450 ريال' },
                { id: '#45123', date: '20 فبراير 2023', status: 'تم التسليم', amount: '320 ريال' },
                { id: '#44987', date: '10 يناير 2023', status: 'تم التسليم', amount: '560 ريال' },
                { id: '#44756', date: '15 ديسمبر 2022', status: 'تم التسليم', amount: '290 ريال' },
                { id: '#44532', date: '5 نوفمبر 2022', status: 'تم التسليم', amount: '780 ريال' }
              ].map((order, i) => (
                <div 
                  key={i} 
                  className={`px-4 py-3 ${i !== 4 ? (darkMode ? 'border-b border-gray-700' : 'border-b border-gray-200') : ''} ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  } cursor-pointer`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{order.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{order.date}</span>
                    <span className="text-sm font-medium">{order.amount}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium text-sm mb-3">إحصائيات الطلبات</h4>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>إجمالي الإنفاق</p>
                    <p className="font-bold">2,400 ريال</p>
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>متوسط قيمة الطلب</p>
                    <p className="font-bold">480 ريال</p>
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>المنتجات المشتراة</p>
                    <p className="font-bold">15 منتج</p>
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>معدل تكرار الشراء</p>
                    <p className="font-bold">45 يوم</p>
                  </div>
                </div>
                
                <div>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>الفئات المفضلة</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-800'
                    }`}>
                      الإلكترونيات
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-800'
                    }`}>
                      الملابس
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-800'
                    }`}>
                      الأحذية
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'notes' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-sm">ملاحظات العميل</h4>
              <button className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Plus className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  author: 'محمد علي', 
                  text: 'العميل يفضل التواصل عبر الواتساب. يهتم بالعروض الخاصة على الإلكترونيات.',
                  date: 'قبل 3 أيام',
                  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },
                { 
                  author: 'فاطمة حسن', 
                  text: 'تمت معالجة شكوى العميل بخصوص التأخر في الشحن. تم تقديم قسيمة خصم كتعويض.',
                  date: 'قبل أسبوع',
                  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                }
              ].map((note, i) => (
                <div 
                  key={i} 
                  className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={note.avatar} 
                      alt={note.author} 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{note.author}</div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{note.date}</div>
                    </div>
                  </div>
                  <p className="text-sm">{note.text}</p>
                </div>
              ))}
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50/50'}`}>
                <textarea
                  placeholder="أضف ملاحظة جديدة..."
                  rows={3}
                  className={`w-full p-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                  } border focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent resize-none`}
                ></textarea>
                <div className="flex justify-end mt-2">
                  <button className="bg-google-blue text-white px-3 py-1.5 rounded-lg text-sm">
                    إضافة ملاحظة
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserInfoPanel;
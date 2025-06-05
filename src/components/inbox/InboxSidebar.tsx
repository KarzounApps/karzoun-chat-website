import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Inbox, Archive, Trash2, 
  Star, Tag, Settings, Users, Filter, 
  ChevronDown, ChevronRight, Plus, Search,
  Clock, CheckCircle2, AlertCircle, Flag
} from 'lucide-react';

interface InboxSidebarProps {
  darkMode: boolean;
  onFilterChange: (filter: string) => void;
  currentFilter: string;
}

export function InboxSidebar({ darkMode, onFilterChange, currentFilter }: InboxSidebarProps) {
  const [showFolders, setShowFolders] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [showTeam, setShowTeam] = useState(false);

  const folders = [
    { id: 'inbox', name: 'صندوق الوارد', icon: Inbox, count: 24 },
    { id: 'starred', name: 'المميزة بنجمة', icon: Star, count: 5 },
    { id: 'archived', name: 'المؤرشفة', icon: Archive, count: 18 },
    { id: 'trash', name: 'المحذوفة', icon: Trash2, count: 0 }
  ];

  const labels = [
    { id: 'support', name: 'الدعم الفني', color: 'bg-blue-500', count: 12 },
    { id: 'sales', name: 'المبيعات', color: 'bg-green-500', count: 8 },
    { id: 'feedback', name: 'الآراء والتعليقات', color: 'bg-yellow-500', count: 4 },
    { id: 'complaints', name: 'الشكاوى', color: 'bg-red-500', count: 2 }
  ];

  const statuses = [
    { id: 'active', name: 'نشطة', icon: MessageSquare, color: 'text-green-500', count: 15 },
    { id: 'pending', name: 'معلقة', icon: Clock, color: 'text-yellow-500', count: 7 },
    { id: 'resolved', name: 'محلولة', icon: CheckCircle2, color: 'text-blue-500', count: 32 },
    { id: 'flagged', name: 'مميزة', icon: Flag, color: 'text-orange-500', count: 3 },
    { id: 'spam', name: 'مزعجة', icon: AlertCircle, color: 'text-red-500', count: 1 }
  ];

  const team = [
    { id: 'tm1', name: 'محمد علي', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', status: 'online', count: 8 },
    { id: 'tm2', name: 'فاطمة حسن', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', status: 'busy', count: 5 },
    { id: 'tm3', name: 'أحمد خالد', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', status: 'away', count: 3 },
    { id: 'tm4', name: 'سارة محمد', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', status: 'online', count: 9 }
  ];

  return (
    <div className={`h-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border-l ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="بحث في المحادثات..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500'
            } border focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent`}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        {/* Folders Section */}
        <div className="mb-4">
          <div 
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => setShowFolders(!showFolders)}
          >
            <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
              المجلدات
            </h3>
            {showFolders ? (
              <ChevronDown className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            )}
          </div>
          
          {showFolders && (
            <div className="space-y-1">
              {folders.map((folder) => (
                <button
                  key={folder.id}
                  onClick={() => onFilterChange(folder.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                    currentFilter === folder.id
                      ? darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'
                      : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <folder.icon className={`h-4 w-4 ${currentFilter === folder.id ? 'text-google-blue' : ''}`} />
                    <span>{folder.name}</span>
                  </div>
                  {folder.count > 0 && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      currentFilter === folder.id
                        ? 'bg-google-blue text-white'
                        : darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {folder.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Status Filters */}
        <div className="mb-4">
          <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider mb-2`}>
            الحالة
          </h3>
          
          <div className="space-y-1">
            {statuses.map((status) => (
              <button
                key={status.id}
                onClick={() => onFilterChange(status.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  currentFilter === status.id
                    ? darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'
                    : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <status.icon className={status.color} />
                  <span>{status.name}</span>
                </div>
                {status.count > 0 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    currentFilter === status.id
                      ? 'bg-google-blue text-white'
                      : darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {status.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Labels Section */}
        <div className="mb-4">
          <div 
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => setShowLabels(!showLabels)}
          >
            <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
              التصنيفات
            </h3>
            <div className="flex items-center gap-1">
              <button className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Plus className="h-3 w-3 text-gray-400" />
              </button>
              {showLabels ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </div>
          </div>
          
          {showLabels && (
            <div className="space-y-1">
              {labels.map((label) => (
                <button
                  key={label.id}
                  onClick={() => onFilterChange(label.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                    currentFilter === label.id
                      ? darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'
                      : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${label.color}`}></div>
                    <span>{label.name}</span>
                  </div>
                  {label.count > 0 && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      currentFilter === label.id
                        ? 'bg-google-blue text-white'
                        : darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {label.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Team Section */}
        <div>
          <div 
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => setShowTeam(!showTeam)}
          >
            <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
              الفريق
            </h3>
            {showTeam ? (
              <ChevronDown className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            )}
          </div>
          
          {showTeam && (
            <div className="space-y-1">
              {team.map((member) => (
                <button
                  key={member.id}
                  onClick={() => onFilterChange(member.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                    currentFilter === member.id
                      ? darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'
                      : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <div className={`absolute bottom-0 right-0 h-2 w-2 rounded-full border ${darkMode ? 'border-gray-800' : 'border-white'} ${
                        member.status === 'online' ? 'bg-green-500' :
                        member.status === 'busy' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                    <span>{member.name}</span>
                  </div>
                  {member.count > 0 && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      currentFilter === member.id
                        ? 'bg-google-blue text-white'
                        : darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {member.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Sidebar Footer */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <button className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg ${
          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
        } transition-colors`}>
          <Settings className="h-5 w-5" />
          <span>إعدادات الصندوق</span>
        </button>
      </div>
    </div>
  );
}

export default InboxSidebar;
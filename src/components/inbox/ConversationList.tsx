import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, MessageCircle, 
  ChevronDown, RefreshCw, MoreHorizontal, 
  Clock, CheckCircle2, AlertCircle
} from 'lucide-react';

// Types
interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'away' | 'offline' | 'busy';
  lastSeen?: string;
  isTyping?: boolean;
  unreadCount?: number;
  tags?: string[];
  isStarred?: boolean;
}

interface Conversation {
  id: string;
  contactId: string;
  lastMessage: string;
  lastMessageTime: string;
  channel: 'whatsapp' | 'instagram' | 'facebook' | 'web' | 'email';
  status: 'active' | 'resolved' | 'pending' | 'spam';
  assignedTo?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
}

interface ConversationListProps {
  conversations: Conversation[];
  contacts: Contact[];
  selectedConversationId: string | null;
  onSelectConversation: (conversation: Conversation) => void;
  darkMode: boolean;
}

// Channel icon mapping
const getChannelIcon = (channel: string) => {
  switch (channel) {
    case 'whatsapp':
      return <WhatsApp className="h-4 w-4 text-green-500" />;
    case 'instagram':
      return <Instagram className="h-4 w-4 text-pink-500" />;
    case 'facebook':
      return <Facebook className="h-4 w-4 text-blue-500" />;
    case 'web':
      return <Globe className="h-4 w-4 text-purple-500" />;
    case 'email':
      return <Mail className="h-4 w-4 text-gray-500" />;
    default:
      return <MessageCircle className="h-4 w-4 text-gray-500" />;
  }
};

// Status color mapping
const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'resolved':
      return 'bg-blue-100 text-blue-800';
    case 'spam':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Priority color mapping
const getPriorityColor = (priority?: string) => {
  switch (priority) {
    case 'urgent':
      return 'bg-red-100 text-red-800';
    case 'high':
      return 'bg-orange-100 text-orange-800';
    case 'medium':
      return 'bg-blue-100 text-blue-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Status icon mapping
const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <MessageCircle className="h-4 w-4 text-green-500" />;
    case 'pending':
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case 'resolved':
      return <CheckCircle2 className="h-4 w-4 text-blue-500" />;
    case 'spam':
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    default:
      return <MessageCircle className="h-4 w-4 text-gray-500" />;
  }
};

// Custom components for social media icons
const WhatsApp = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Instagram = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Globe = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const Mail = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export function ConversationList({
  conversations,
  contacts,
  selectedConversationId,
  onSelectConversation,
  darkMode
}: ConversationListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter conversations based on search and status
  const filteredConversations = conversations.filter(conv => {
    const contact = contacts.find(c => c.id === conv.contactId);
    if (!contact) return false;
    
    // Apply search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      if (!contact.name.toLowerCase().includes(searchLower)) {
        return false;
      }
    }
    
    // Apply status filter
    if (filterStatus && conv.status !== filterStatus) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="h-full flex flex-col">
      {/* Search and Filters */}
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="بحث في المحادثات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500'
            } border focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent`}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Filter className="h-4 w-4" />
            <span>تصفية</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'transform rotate-180' : ''}`} />
          </button>
          
          <div className="flex gap-2">
            <button className={`p-1.5 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <RefreshCw className="h-4 w-4" />
            </button>
            <button className={`p-1.5 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Filters */}
        <motion.div
          initial={false}
          animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-3"
        >
          {showFilters && (
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h4 className="font-medium text-sm mb-2">حالة المحادثة</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {['active', 'pending', 'resolved', 'spam'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(filterStatus === status ? null : status)}
                    className={`px-3 py-1 rounded-full text-xs ${
                      filterStatus === status
                        ? getStatusColor(status)
                        : darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {status === 'active' ? 'نشطة' : 
                     status === 'pending' ? 'معلقة' : 
                     status === 'resolved' ? 'محلولة' : 'مزعجة'}
                  </button>
                ))}
              </div>
              
              <h4 className="font-medium text-sm mb-2">القناة</h4>
              <div className="flex flex-wrap gap-2">
                {['whatsapp', 'instagram', 'facebook', 'web', 'email'].map((channel) => (
                  <button
                    key={channel}
                    className={`px-3 py-1 rounded-full text-xs ${
                      darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {channel === 'whatsapp' ? 'واتساب' : 
                     channel === 'instagram' ? 'انستغرام' : 
                     channel === 'facebook' ? 'فيسبوك' : 
                     channel === 'web' ? 'الموقع' : 'البريد'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <MessageCircle className={`h-12 w-12 ${darkMode ? 'text-gray-600' : 'text-gray-300'} mb-3`} />
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>لا توجد محادثات تطابق البحث</p>
            <button 
              onClick={() => { setSearchQuery(''); setFilterStatus(null); }}
              className="text-sm text-google-blue"
            >
              مسح التصفية
            </button>
          </div>
        ) : (
          filteredConversations.map((conversation) => {
            const contact = contacts.find(c => c.id === conversation.contactId);
            if (!contact) return null;
            
            return (
              <div
                key={conversation.id}
                onClick={() => onSelectConversation(conversation)}
                className={`p-3 cursor-pointer transition-colors ${
                  selectedConversationId === conversation.id
                    ? darkMode ? 'bg-gray-700' : 'bg-blue-50'
                    : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                } ${contact.unreadCount ? (darkMode ? 'bg-gray-700/50' : 'bg-blue-50/50') : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 ${darkMode ? 'border-gray-800' : 'border-white'} ${
                      contact.status === 'online' ? 'bg-green-500' :
                      contact.status === 'busy' ? 'bg-red-500' :
                      contact.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`}></div>
                    {contact.isTyping && (
                      <div className={`absolute -bottom-1 -right-1 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-full px-1`}>
                        <span className="text-xs text-green-500">...</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium truncate">{contact.name}</h4>
                      <div className="flex items-center">
                        {getChannelIcon(conversation.channel)}
                        <span className="text-xs text-gray-500 mr-1">{conversation.lastMessageTime}</span>
                      </div>
                    </div>
                    
                    <p className={`text-sm truncate ${
                      darkMode 
                        ? contact.unreadCount ? 'text-white' : 'text-gray-400'
                        : contact.unreadCount ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {conversation.lastMessage}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(conversation.status)}`}>
                        {conversation.status === 'active' ? 'نشطة' : 
                         conversation.status === 'pending' ? 'معلقة' : 
                         conversation.status === 'resolved' ? 'محلولة' : 'مزعجة'}
                      </span>
                      
                      {conversation.priority && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(conversation.priority)}`}>
                          {conversation.priority === 'urgent' ? 'عاجلة' : 
                           conversation.priority === 'high' ? 'عالية' : 
                           conversation.priority === 'medium' ? 'متوسطة' : 'منخفضة'}
                        </span>
                      )}
                      
                      {contact.unreadCount && (
                        <span className="text-xs bg-google-blue text-white px-2 py-0.5 rounded-full">
                          {contact.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {contact.isStarred && (
                    <Star className="h-4 w-4 text-yellow-400 fill-current flex-shrink-0" />
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ConversationList;
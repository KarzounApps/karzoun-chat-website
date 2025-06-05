import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Paperclip, Smile, MoreHorizontal, 
  Phone, Video, Search, ArrowLeft, ArrowRight,
  FileText, Image, Mic, Zap, Bot, Star,
  MessageSquare, User, Clock, CheckCircle2
} from 'lucide-react';

// Types
interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'away' | 'offline' | 'busy';
  lastSeen?: string;
  isTyping?: boolean;
  isStarred?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  attachments?: {
    type: 'image' | 'file' | 'voice' | 'location';
    url: string;
    name?: string;
    size?: string;
    thumbnail?: string;
  }[];
  isForwarded?: boolean;
  reactions?: {
    type: string;
    count: number;
    users: string[];
  }[];
  replyTo?: {
    id: string;
    text: string;
    senderId: string;
  };
}

interface Conversation {
  id: string;
  contactId: string;
  messages: Message[];
  channel: 'whatsapp' | 'instagram' | 'facebook' | 'web' | 'email';
  lastMessageTime: string;
  status: 'active' | 'resolved' | 'pending' | 'spam';
  assignedTo?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
}

interface QuickReply {
  id: string;
  title: string;
  text: string;
}

interface ChatAreaProps {
  conversation: Conversation;
  contact: Contact;
  quickReplies: QuickReply[];
  onSendMessage: (text: string) => void;
  onToggleUserInfo: () => void;
  darkMode: boolean;
  channelIcon: React.ReactNode;
}

export function ChatArea({
  conversation,
  contact,
  quickReplies,
  onSendMessage,
  onToggleUserInfo,
  darkMode,
  channelIcon
}: ChatAreaProps) {
  const [newMessage, setNewMessage] = useState('');
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [conversation.messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [newMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    onSendMessage(newMessage);
    setNewMessage('');
    setReplyingTo(null);
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleQuickReply = (text: string) => {
    setNewMessage(text);
    setShowQuickReplies(false);
    
    // Focus textarea
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReplyToMessage = (message: Message) => {
    setReplyingTo(message);
    textareaRef.current?.focus();
  };

  // Channel icon mapping
  const getChannelName = (channel: string) => {
    switch (channel) {
      case 'whatsapp':
        return 'واتساب';
      case 'instagram':
        return 'انستغرام';
      case 'facebook':
        return 'فيسبوك';
      case 'web':
        return 'الموقع';
      case 'email':
        return 'البريد';
      default:
        return channel;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className={`px-4 py-3 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex items-center justify-between`}>
        <div className="flex items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onToggleUserInfo}>
            <div className="relative">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 ${darkMode ? 'border-gray-800' : 'border-white'} ${
                contact.status === 'online' ? 'bg-green-500' :
                contact.status === 'busy' ? 'bg-red-500' :
                contact.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
              }`}></div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center gap-2">
                {contact.name}
                {contact.isStarred && <Star className="h-4 w-4 text-yellow-400 fill-current" />}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">
                  {contact.status === 'online' ? 'متصل الآن' : 
                   contact.status === 'away' ? 'غير متواجد' : 
                   contact.status === 'busy' ? 'مشغول' : 
                   contact.lastSeen ? contact.lastSeen : 'غير متصل'}
                </span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  {channelIcon}
                  {getChannelName(conversation.channel)}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Phone className="h-5 w-5" />
          </button>
          <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Video className="h-5 w-5" />
          </button>
          <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Search className="h-5 w-5" />
          </button>
          <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className={`flex-1 overflow-y-auto p-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-3xl mx-auto space-y-4">
          {conversation.messages.map((message) => {
            const isOwn = message.senderId === 'agent';
            
            return (
              <div 
                key={message.id} 
                className={`flex ${isOwn ? 'justify-start' : 'justify-end'}`}
              >
                {isOwn && (
                  <div className="flex-shrink-0 ml-3">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                      alt="You" 
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  </div>
                )}
                
                <div 
                  className={`max-w-[70%] ${isOwn ? 'ml-auto' : 'mr-auto'} group`}
                  onDoubleClick={() => handleReplyToMessage(message)}
                >
                  {message.replyTo && (
                    <div className={`mb-1 p-2 text-xs rounded ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    } border-r-2 border-google-blue`}>
                      <p className="font-medium mb-1">رداً على:</p>
                      <p className="truncate">{message.replyTo.text}</p>
                    </div>
                  )}
                  
                  <div className={`rounded-lg p-3 ${
                    isOwn 
                      ? darkMode ? 'bg-blue-600 text-white' : 'bg-google-blue text-white' 
                      : darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                  } ${isOwn ? 'rounded-bl-none' : 'rounded-br-none'} shadow-sm relative`}>
                    {/* Message actions on hover */}
                    <div className={`absolute top-0 ${isOwn ? 'left-0 -translate-x-full -ml-2' : 'right-0 translate-x-full mr-2'} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                      <button className={`p-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}>
                        <ArrowLeft className="h-3 w-3" />
                      </button>
                      <button 
                        className={`p-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}
                        onClick={() => handleReplyToMessage(message)}
                      >
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                    
                    {message.isForwarded && (
                      <p className="text-xs opacity-70 mb-1">تم إعادة التوجيه</p>
                    )}
                    
                    <p className="whitespace-pre-line">{message.text}</p>
                    
                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {message.attachments.map((attachment, i) => (
                          <div key={i}>
                            {attachment.type === 'image' && (
                              <img 
                                src={attachment.url} 
                                alt={attachment.name || 'Attachment'} 
                                className="rounded-lg max-h-60 w-auto"
                              />
                            )}
                            {attachment.type === 'file' && (
                              <div className={`flex items-center gap-2 p-2 rounded ${
                                darkMode ? 'bg-gray-700' : 'bg-gray-100'
                              }`}>
                                <FileText className="h-5 w-5 text-blue-500" />
                                <div>
                                  <p className="text-sm font-medium">{attachment.name}</p>
                                  <p className="text-xs opacity-70">{attachment.size}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-xs opacity-70">{message.timestamp}</span>
                      {isOwn && (
                        message.status === 'read' ? (
                          <div className="text-blue-400">
                            <svg className="h-3 w-3 fill-current" viewBox="0 0 16 16">
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                            </svg>
                          </div>
                        ) : message.status === 'delivered' ? (
                          <div className="text-gray-400">
                            <svg className="h-3 w-3 fill-current" viewBox="0 0 16 16">
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                            </svg>
                          </div>
                        ) : (
                          <div className="text-gray-400">
                            <svg className="h-3 w-3 fill-current" viewBox="0 0 16 16">
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  
                  {message.reactions && message.reactions.length > 0 && (
                    <div className="flex justify-end mt-1">
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                      } shadow-sm`}>
                        {message.reactions.map((reaction, i) => (
                          <div key={i} className="flex items-center">
                            <span>{reaction.type}</span>
                            <span className="text-xs text-gray-500 mr-1">{reaction.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {!isOwn && (
                  <div className="flex-shrink-0 mr-3">
                    <img 
                      src={contact.avatar} 
                      alt={contact.name} 
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
          
          {contact.isTyping && (
            <div className="flex justify-end">
              <div className="flex items-end gap-1 mr-11">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-400' : 'bg-gray-500'}`}
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                      className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-400' : 'bg-gray-500'}`}
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                      className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-400' : 'bg-gray-500'}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Message Input */}
      <div className={`p-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-3xl mx-auto">
          {/* Reply indicator */}
          {replyingTo && (
            <div className={`mb-2 p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-start`}>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className={`w-1 h-full rounded-full bg-google-blue`}></div>
                  <div>
                    <p className="text-xs font-medium">
                      الرد على {replyingTo.senderId === 'agent' ? 'رسالتك' : contact.name}
                    </p>
                    <p className="text-xs truncate">{replyingTo.text}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setReplyingTo(null)}
                className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
          
          <div className="flex items-center gap-2 mb-3">
            <button 
              onClick={() => setShowQuickReplies(!showQuickReplies)}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <Zap className="h-4 w-4 inline-block ml-1" />
              ردود سريعة
            </button>
            
            <button className={`px-3 py-1.5 rounded-lg text-sm ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors`}>
              <Bot className="h-4 w-4 inline-block ml-1" />
              اقتراح رد
            </button>
          </div>
          
          {/* Quick Replies Dropdown */}
          <AnimatePresence>
            {showQuickReplies && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-3"
              >
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className="font-medium text-sm mb-2">الردود السريعة</h4>
                  <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply.id}
                        onClick={() => handleQuickReply(reply.text)}
                        className={`text-right p-2 rounded-lg text-sm ${
                          darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-white hover:bg-gray-100'
                        } transition-colors`}
                      >
                        <div className="font-medium mb-1">{reply.title}</div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>{reply.text}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="اكتب رسالتك هنا..."
              rows={1}
              className={`w-full pl-12 pr-4 py-3 rounded-lg ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500'
              } border focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent resize-none`}
              style={{ maxHeight: '150px' }}
            />
            
            <div className="absolute left-2 bottom-2 flex items-center gap-1">
              <div className="relative">
                <button 
                  onClick={() => setShowAttachmentOptions(!showAttachmentOptions)}
                  className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
                >
                  <Paperclip className="h-5 w-5 text-gray-500" />
                </button>
                
                {/* Attachment options */}
                <AnimatePresence>
                  {showAttachmentOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute bottom-full mb-2 left-0 ${
                        darkMode ? 'bg-gray-700' : 'bg-white'
                      } rounded-lg shadow-lg p-2 flex gap-2`}
                    >
                      <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}>
                        <Image className="h-5 w-5 text-blue-500" />
                      </button>
                      <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}>
                        <FileText className="h-5 w-5 text-green-500" />
                      </button>
                      <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}>
                        <Mic className="h-5 w-5 text-red-500" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
                >
                  <Smile className="h-5 w-5 text-gray-500" />
                </button>
                
                {/* Emoji picker (simplified) */}
                <AnimatePresence>
                  {showEmojiPicker && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute bottom-full mb-2 left-0 ${
                        darkMode ? 'bg-gray-700' : 'bg-white'
                      } rounded-lg shadow-lg p-2 w-64`}
                    >
                      <div className="grid grid-cols-8 gap-1">
                        {['😊', '😂', '❤️', '👍', '🙏', '🔥', '✅', '⭐'].map((emoji, i) => (
                          <button 
                            key={i}
                            onClick={() => {
                              setNewMessage(prev => prev + emoji);
                              setShowEmojiPicker(false);
                            }}
                            className={`p-1 text-lg rounded hover:bg-gray-100`}
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className={`absolute left-2 bottom-2 p-1.5 rounded-full ${
                newMessage.trim()
                  ? 'bg-google-blue text-white'
                  : darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-300 text-gray-500'
              }`}
              style={{ display: newMessage.trim() ? 'block' : 'none' }}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// X icon component
function X(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export default ChatArea;
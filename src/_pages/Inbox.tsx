"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Search,
  Filter,
  Bell,
  Settings,
  User,
  MoreHorizontal,
  Send,
  Paperclip,
  Smile,
  Star,
  // Archive,
  // Trash2,
  Tag,
  // Clock,
  // CheckCircle2,
  // AlertCircle,
  Phone,
  Video,
  // Calendar,
  FileText,
  // Image,
  // Mic,
  ChevronDown,
  // Users,
  RefreshCw,
  Menu,
  X,
  // ArrowLeft,
  // ArrowRight,
  // Eye,
  // EyeOff,
  UserPlus,
  Flag,
  // Bookmark,
  // Share2,
  HelpCircle,
  LogOut,
  Moon,
  Sun,
  Globe,
  Zap,
  Bot,
  Inbox as InboxIcon,
  Mail,
  MessageCircle,
  Plus,
  // Heart,
  // ThumbsUp,
  // ThumbsDown,
} from "lucide-react";

// Types
interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "away" | "offline" | "busy";
  lastSeen?: string;
  isTyping?: boolean;
  unreadCount?: number;
  tags?: string[];
  isStarred?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  status: "sent" | "delivered" | "read";
  attachments?: {
    type: "image" | "file" | "voice" | "location";
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
  channel: "whatsapp" | "instagram" | "facebook" | "web" | "email";
  lastMessageTime: string;
  status: "active" | "resolved" | "pending" | "spam";
  assignedTo?: string;
  priority?: "low" | "medium" | "high" | "urgent";
  notes?: string[];
}

// Sample data
const contacts: Contact[] = [
  {
    id: "1",
    name: "أحمد محمد",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "online",
    unreadCount: 3,
    tags: ["عميل جديد", "استفسار"],
    isStarred: true,
  },
  {
    id: "2",
    name: "سارة العتيبي",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "away",
    lastSeen: "منذ 5 دقائق",
    tags: ["عميل VIP", "مشكلة تقنية"],
    isTyping: true,
  },
  {
    id: "3",
    name: "خالد الشمري",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "offline",
    lastSeen: "منذ ساعة",
    tags: ["استفسار عن المنتج"],
  },
  {
    id: "4",
    name: "نورة الغامدي",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "busy",
    tags: ["شكوى", "متابعة طلب"],
  },
  {
    id: "5",
    name: "محمد العنزي",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "online",
    unreadCount: 1,
    tags: ["استفسار عن الشحن"],
  },
  {
    id: "6",
    name: "فاطمة الدوسري",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "offline",
    lastSeen: "منذ يومين",
    tags: ["طلب استرجاع"],
  },
  {
    id: "7",
    name: "عبدالله القحطاني",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "online",
    tags: ["عميل جديد"],
  },
  {
    id: "8",
    name: "ريم السعيد",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "away",
    lastSeen: "منذ 30 دقيقة",
    tags: ["استفسار عن الدفع"],
  },
];

const conversations: Conversation[] = [
  {
    id: "1",
    contactId: "1",
    messages: [
      {
        id: "m1",
        senderId: "1",
        text: "مرحباً، أود الاستفسار عن المنتج الجديد الذي أعلنتم عنه",
        timestamp: "10:30",
        status: "read",
      },
      {
        id: "m2",
        senderId: "agent",
        text: "أهلاً بك! يسعدني مساعدتك. المنتج الجديد متوفر الآن بثلاثة ألوان مختلفة وبسعر تنافسي. هل تود معرفة المزيد من التفاصيل؟",
        timestamp: "10:32",
        status: "read",
      },
      {
        id: "m3",
        senderId: "1",
        text: "نعم من فضلك. ما هي المواصفات التقنية للمنتج؟",
        timestamp: "10:35",
        status: "read",
      },
      {
        id: "m4",
        senderId: "agent",
        text: "المنتج يأتي بمواصفات متطورة تشمل:\n- شاشة عالية الدقة\n- بطارية تدوم 24 ساعة\n- مقاوم للماء\n- ضمان لمدة عامين\n\nهل هناك مواصفات محددة تهتم بها؟",
        timestamp: "10:38",
        status: "delivered",
      },
    ],
    channel: "whatsapp",
    lastMessageTime: "10:38",
    status: "active",
    assignedTo: "محمد علي",
    priority: "medium",
  },
  {
    id: "2",
    contactId: "2",
    messages: [
      {
        id: "m5",
        senderId: "2",
        text: "متى سيتم توصيل طلبي رقم #45678؟",
        timestamp: "09:15",
        status: "read",
      },
      {
        id: "m6",
        senderId: "agent",
        text: "مرحباً! سأتحقق من حالة طلبك حالاً...",
        timestamp: "09:17",
        status: "read",
      },
      {
        id: "m7",
        senderId: "agent",
        text: "طلبك رقم #45678 في مرحلة الشحن وسيصل خلال 24-48 ساعة. هل تحتاج إلى مساعدة أخرى؟",
        timestamp: "09:20",
        status: "read",
      },
    ],
    channel: "instagram",
    lastMessageTime: "09:20",
    status: "pending",
    assignedTo: "فاطمة حسن",
    priority: "high",
  },
  {
    id: "3",
    contactId: "3",
    messages: [
      {
        id: "m8",
        senderId: "3",
        text: "أريد حجز موعد للصيانة",
        timestamp: "أمس",
        status: "read",
      },
      {
        id: "m9",
        senderId: "agent",
        text: "أهلاً بك! يسعدني مساعدتك في حجز موعد للصيانة. هل تفضل زيارة الفرع أم خدمة الصيانة المنزلية؟",
        timestamp: "أمس",
        status: "read",
      },
      {
        id: "m10",
        senderId: "3",
        text: "خدمة الصيانة المنزلية",
        timestamp: "أمس",
        status: "read",
      },
      {
        id: "m11",
        senderId: "agent",
        text: "ممتاز! المواعيد المتاحة للصيانة المنزلية هي:\n\n- الأحد 10 مارس، 10 صباحاً - 12 ظهراً\n- الاثنين 11 مارس، 2 - 4 مساءً\n- الثلاثاء 12 مارس، 9 - 11 صباحاً\n\nيرجى اختيار الموعد المناسب لك.",
        timestamp: "أمس",
        status: "read",
      },
    ],
    channel: "web",
    lastMessageTime: "أمس",
    status: "active",
    priority: "low",
  },
  {
    id: "4",
    contactId: "4",
    messages: [
      {
        id: "m12",
        senderId: "4",
        text: "لدي مشكلة في المنتج الذي اشتريته الأسبوع الماضي",
        timestamp: "2 مارس",
        status: "read",
      },
      {
        id: "m13",
        senderId: "agent",
        text: "آسف لسماع ذلك. هل يمكنك وصف المشكلة بالتفصيل؟",
        timestamp: "2 مارس",
        status: "read",
      },
      {
        id: "m14",
        senderId: "4",
        text: "المنتج لا يعمل بشكل صحيح، هناك مشكلة في الشاشة",
        timestamp: "2 مارس",
        status: "read",
        attachments: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            name: "صورة المشكلة",
            thumbnail:
              "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
          },
        ],
      },
      {
        id: "m15",
        senderId: "agent",
        text: "شكراً على إرسال الصورة. يبدو أن هناك مشكلة في وحدة العرض. يمكنك إحضار المنتج إلى أقرب مركز صيانة أو يمكننا إرسال فني إلى منزلك. ما الخيار الذي تفضله؟",
        timestamp: "2 مارس",
        status: "read",
      },
    ],
    channel: "whatsapp",
    lastMessageTime: "2 مارس",
    status: "resolved",
    assignedTo: "أحمد خالد",
    priority: "high",
  },
  {
    id: "5",
    contactId: "5",
    messages: [
      {
        id: "m16",
        senderId: "5",
        text: "هل لديكم خدمة توصيل إلى المنطقة الشرقية؟",
        timestamp: "1 مارس",
        status: "read",
      },
      {
        id: "m17",
        senderId: "agent",
        text: "نعم، نوفر خدمة التوصيل إلى جميع مناطق المملكة بما فيها المنطقة الشرقية. رسوم التوصيل تبدأ من 15 ريال حسب الوزن والحجم.",
        timestamp: "1 مارس",
        status: "read",
      },
      {
        id: "m18",
        senderId: "5",
        text: "كم يستغرق التوصيل عادة؟",
        timestamp: "1 مارس",
        status: "read",
      },
    ],
    channel: "facebook",
    lastMessageTime: "1 مارس",
    status: "active",
    assignedTo: "سارة محمد",
    priority: "low",
  },
];

// Team members
const teamMembers = [
  {
    id: "tm1",
    name: "محمد علي",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "مدير المبيعات",
    status: "online",
  },
  {
    id: "tm2",
    name: "فاطمة حسن",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "خدمة العملاء",
    status: "busy",
  },
  {
    id: "tm3",
    name: "أحمد خالد",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "دعم فني",
    status: "away",
  },
  {
    id: "tm4",
    name: "سارة محمد",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "خدمة العملاء",
    status: "online",
  },
];

// Quick replies
const quickReplies = [
  {
    id: "qr1",
    title: "ترحيب",
    text: "مرحباً بك! كيف يمكنني مساعدتك اليوم؟",
  },
  {
    id: "qr2",
    title: "شكر",
    text: "شكراً لتواصلك معنا. نحن سعداء بخدمتك.",
  },
  {
    id: "qr3",
    title: "استفسار عن الطلب",
    text: "يمكنك تتبع طلبك من خلال رابط التتبع المرسل إلى بريدك الإلكتروني أو رقم هاتفك.",
  },
  {
    id: "qr4",
    title: "سياسة الإرجاع",
    text: "يمكنك إرجاع المنتج خلال 14 يوماً من تاريخ الاستلام إذا كان بحالته الأصلية مع جميع الملحقات.",
  },
  {
    id: "qr5",
    title: "وقت التوصيل",
    text: "عادة ما يستغرق التوصيل من 3-5 أيام عمل داخل المدن الرئيسية، و5-7 أيام للمناطق الأخرى.",
  },
];

// Main Inbox Component
export function Inbox() {
  // State
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showTeamMembers, setShowTeamMembers] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Effects
  useEffect(() => {
    // Set initial conversation
    if (conversations.length > 0 && !selectedConversation) {
      const conversation = conversations[0];
      setSelectedConversation(conversation);
      setSelectedContact(contacts.find((c) => c.id === conversation.contactId) || null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handlers
  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    setSelectedContact(contacts.find((c) => c.id === conversation.contactId) || null);
    setShowUserInfo(false);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    // In a real app, you would send this to your backend
    console.log("Sending message:", newMessage);

    // For demo purposes, we'll just update the local state
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [
            ...conv.messages,
            {
              id: `m${Date.now()}`,
              senderId: "agent",
              text: newMessage,
              timestamp: new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" }),
              status: "sent",
            },
          ],
          lastMessageTime: new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" }),
        };
      }
      return conv;
    });

    // Update state
    const updatedConversation = updatedConversations.find((c) => c.id === selectedConversation.id);
    if (updatedConversation) {
      setSelectedConversation(updatedConversation as any);
    }

    setNewMessage("");
  };

  const handleQuickReply = (text: string) => {
    setNewMessage(text);
    setShowQuickReplies(false);
  };

  const filteredConversations = conversations.filter((conv) => {
    const contact = contacts.find((c) => c.id === conv.contactId);
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

  // Channel icon mapping
  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "whatsapp":
        return <MessageCircle className="h-4 w-4 text-green-500" />;
      case "instagram":
        return <Instagram className="h-4 w-4 text-pink-500" />;
      case "facebook":
        return <Facebook className="h-4 w-4 text-blue-500" />;
      case "web":
        return <Globe className="h-4 w-4 text-purple-500" />;
      case "email":
        return <Mail className="h-4 w-4 text-gray-500" />;
      default:
        return <MessageSquare className="h-4 w-4 text-gray-500" />;
    }
  };

  // Status color mapping
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-blue-100 text-blue-800";
      case "spam":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Priority color mapping
  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-blue-100 text-blue-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Status icon mapping
  // const getStatusIcon = (status: string) => {
  //   switch (status) {
  //     case "active":
  //       return <MessageSquare className="h-4 w-4 text-green-500" />;
  //     case "pending":
  //       return <Clock className="h-4 w-4 text-yellow-500" />;
  //     case "resolved":
  //       return <CheckCircle2 className="h-4 w-4 text-blue-500" />;
  //     case "spam":
  //       return <AlertCircle className="h-4 w-4 text-red-500" />;
  //     default:
  //       return <MessageSquare className="h-4 w-4 text-gray-500" />;
  //   }
  // };

  // Custom components for social media icons
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

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-10 ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } border-b shadow-sm`}
      >
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className={`p-2 rounded-md ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 mr-4">
                <MessageSquare className="h-6 w-6 text-google-blue" />
                <span className="font-bold text-lg">صندوق الوارد</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} relative`}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>

                {showNotifications && (
                  <div
                    className={`absolute left-0 mt-2 w-80 ${
                      darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                    } rounded-md shadow-lg border overflow-hidden z-20`}
                  >
                    <div
                      className={`px-4 py-3 border-b ${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      } flex justify-between items-center`}
                    >
                      <h3 className="font-medium">الإشعارات</h3>
                      <button className="text-sm text-google-blue">تعيين الكل كمقروء</button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {[1, 2, 3].map((_, i) => (
                        <div
                          key={i}
                          className={`px-4 py-3 ${
                            i !== 2 ? (darkMode ? "border-b border-gray-700" : "border-b border-gray-200") : ""
                          } ${i === 0 ? (darkMode ? "bg-gray-700/50" : "bg-blue-50") : ""}`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-2 rounded-full ${
                                i === 0
                                  ? "bg-blue-100 text-blue-600"
                                  : i === 1
                                  ? "bg-green-100 text-green-600"
                                  : "bg-yellow-100 text-yellow-600"
                              }`}
                            >
                              {i === 0 ? (
                                <MessageSquare className="h-4 w-4" />
                              ) : i === 1 ? (
                                <UserPlus className="h-4 w-4" />
                              ) : (
                                <Bell className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <p className={`text-sm ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                                {i === 0
                                  ? "رسالة جديدة من أحمد محمد"
                                  : i === 1
                                  ? "تم تعيين محادثة جديدة لك"
                                  : "تذكير: متابعة طلب العميل"}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                منذ {i === 0 ? "5 دقائق" : i === 1 ? "30 دقيقة" : "ساعة"}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`px-4 py-2 ${darkMode ? "bg-gray-700" : "bg-gray-50"} text-center`}>
                      <button className="text-sm text-google-blue">عرض كل الإشعارات</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                >
                  <Settings className="h-5 w-5" />
                </button>

                {showSettings && (
                  <div
                    className={`absolute left-0 mt-2 w-56 ${
                      darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                    } rounded-md shadow-lg border overflow-hidden z-20`}
                  >
                    <div className="py-1">
                      <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`flex items-center gap-2 w-full text-right px-4 py-2 text-sm ${
                          darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                        }`}
                      >
                        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        <span>{darkMode ? "الوضع الفاتح" : "الوضع الداكن"}</span>
                      </button>
                      <button
                        className={`flex items-center gap-2 w-full text-right px-4 py-2 text-sm ${
                          darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                        }`}
                      >
                        <User className="h-4 w-4" />
                        <span>الملف الشخصي</span>
                      </button>
                      <button
                        className={`flex items-center gap-2 w-full text-right px-4 py-2 text-sm ${
                          darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                        }`}
                      >
                        <Settings className="h-4 w-4" />
                        <span>الإعدادات</span>
                      </button>
                      <button
                        className={`flex items-center gap-2 w-full text-right px-4 py-2 text-sm ${
                          darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                        }`}
                      >
                        <HelpCircle className="h-4 w-4" />
                        <span>المساعدة</span>
                      </button>
                      <div className={`border-t ${darkMode ? "border-gray-700" : "border-gray-200"} my-1`}></div>
                      <button
                        className={`flex items-center gap-2 w-full text-right px-4 py-2 text-sm ${
                          darkMode ? "hover:bg-gray-700 text-red-400" : "hover:bg-gray-100 text-red-600"
                        }`}
                      >
                        <LogOut className="h-4 w-4" />
                        <span>تسجيل الخروج</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className={`flex items-center gap-2 ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } rounded-full`}
                  onClick={() => setShowTeamMembers(!showTeamMembers)}
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover border-2 border-google-blue"
                  />
                </button>

                {showTeamMembers && (
                  <div
                    className={`absolute left-0 mt-2 w-64 ${
                      darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                    } rounded-md shadow-lg border overflow-hidden z-20`}
                  >
                    <div className={`px-4 py-3 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                      <h3 className="font-medium">فريق العمل</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {teamMembers.map((member) => (
                        <div
                          key={member.id}
                          className={`px-4 py-3 ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} cursor-pointer`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img
                                src={member.avatar}
                                alt={member.name}
                                className="h-10 w-10 rounded-full object-cover"
                              />
                              <div
                                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 ${
                                  darkMode ? "border-gray-800" : "border-white"
                                } ${
                                  member.status === "online"
                                    ? "bg-green-500"
                                    : member.status === "busy"
                                    ? "bg-red-500"
                                    : member.status === "away"
                                    ? "bg-yellow-500"
                                    : "bg-gray-500"
                                }`}
                              ></div>
                            </div>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-xs text-gray-500">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`px-4 py-2 ${darkMode ? "bg-gray-700" : "bg-gray-50"} text-center`}>
                      <button className="text-sm text-google-blue">إدارة الفريق</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <AnimatePresence>
          {showSidebar && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-16 bottom-0 right-0 z-10 w-80 ${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              } border-l overflow-hidden`}
            >
              <div className="h-full flex flex-col">
                {/* Search and Filters */}
                <div className={`p-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="بحث في المحادثات..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500"
                      } border focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent`}
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className={`flex items-center gap-1 text-sm ${
                        darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <Filter className="h-4 w-4" />
                      <span>تصفية</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${showFilters ? "transform rotate-180" : ""}`}
                      />
                    </button>

                    <div className="flex gap-2">
                      <button className={`p-1.5 rounded ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
                        <RefreshCw className="h-4 w-4" />
                      </button>
                      <button className={`p-1.5 rounded ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Filters */}
                  <AnimatePresence>
                    {showFilters && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3"
                      >
                        <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                          <h4 className="font-medium text-sm mb-2">حالة المحادثة</h4>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {["active", "pending", "resolved", "spam"].map((status) => (
                              <button
                                key={status}
                                onClick={() => setFilterStatus(filterStatus === status ? null : status)}
                                className={`px-3 py-1 rounded-full text-xs ${
                                  filterStatus === status
                                    ? getStatusColor(status)
                                    : darkMode
                                    ? "bg-gray-600 text-gray-300"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {status === "active"
                                  ? "نشطة"
                                  : status === "pending"
                                  ? "معلقة"
                                  : status === "resolved"
                                  ? "محلولة"
                                  : "مزعجة"}
                              </button>
                            ))}
                          </div>

                          <h4 className="font-medium text-sm mb-2">القناة</h4>
                          <div className="flex flex-wrap gap-2">
                            {["whatsapp", "instagram", "facebook", "web", "email"].map((channel) => (
                              <button
                                key={channel}
                                className={`px-3 py-1 rounded-full text-xs ${
                                  darkMode ? "bg-gray-600 text-gray-300" : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {channel === "whatsapp"
                                  ? "واتساب"
                                  : channel === "instagram"
                                  ? "انستغرام"
                                  : channel === "facebook"
                                  ? "فيسبوك"
                                  : channel === "web"
                                  ? "الموقع"
                                  : "البريد"}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-y-auto">
                  {filteredConversations.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                      <InboxIcon className={`h-12 w-12 ${darkMode ? "text-gray-600" : "text-gray-300"} mb-3`} />
                      <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} mb-2`}>
                        لا توجد محادثات تطابق البحث
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setFilterStatus(null);
                        }}
                        className="text-sm text-google-blue"
                      >
                        مسح التصفية
                      </button>
                    </div>
                  ) : (
                    filteredConversations.map((conversation) => {
                      const contact = contacts.find((c) => c.id === conversation.contactId);
                      if (!contact) return null;

                      const lastMessage = conversation.messages[conversation.messages.length - 1];

                      return (
                        <div
                          key={conversation.id}
                          onClick={() => handleSelectConversation(conversation)}
                          className={`p-3 cursor-pointer transition-colors ${
                            selectedConversation?.id === conversation.id
                              ? darkMode
                                ? "bg-gray-700"
                                : "bg-blue-50"
                              : darkMode
                              ? "hover:bg-gray-700"
                              : "hover:bg-gray-50"
                          } ${contact.unreadCount ? (darkMode ? "bg-gray-700/50" : "bg-blue-50/50") : ""}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img
                                src={contact.avatar}
                                alt={contact.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div
                                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 ${
                                  darkMode ? "border-gray-800" : "border-white"
                                } ${
                                  contact.status === "online"
                                    ? "bg-green-500"
                                    : contact.status === "busy"
                                    ? "bg-red-500"
                                    : contact.status === "away"
                                    ? "bg-yellow-500"
                                    : "bg-gray-500"
                                }`}
                              ></div>
                              {contact.isTyping && (
                                <div
                                  className={`absolute -bottom-1 -right-1 ${
                                    darkMode ? "bg-gray-800" : "bg-white"
                                  } rounded-full px-1`}
                                >
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

                              <p
                                className={`text-sm truncate ${
                                  darkMode
                                    ? contact.unreadCount
                                      ? "text-white"
                                      : "text-gray-400"
                                    : contact.unreadCount
                                    ? "text-gray-900"
                                    : "text-gray-500"
                                }`}
                              >
                                {lastMessage.senderId === "agent" ? "أنت: " : ""}
                                {lastMessage.text}
                              </p>

                              <div className="flex items-center gap-2 mt-1">
                                <span
                                  className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(conversation.status)}`}
                                >
                                  {conversation.status === "active"
                                    ? "نشطة"
                                    : conversation.status === "pending"
                                    ? "معلقة"
                                    : conversation.status === "resolved"
                                    ? "محلولة"
                                    : "مزعجة"}
                                </span>

                                {conversation.priority && (
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(
                                      conversation.priority
                                    )}`}
                                  >
                                    {conversation.priority === "urgent"
                                      ? "عاجلة"
                                      : conversation.priority === "high"
                                      ? "عالية"
                                      : conversation.priority === "medium"
                                      ? "متوسطة"
                                      : "منخفضة"}
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
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Chat Area */}
        <main className={`flex-1 ${showSidebar ? "mr-80" : ""} transition-all duration-300`}>
          {selectedConversation && selectedContact ? (
            <div className="h-full flex flex-col">
              {/* Chat Header */}
              <div
                className={`px-4 py-3 border-b ${
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                } flex items-center justify-between`}
              >
                <div className="flex items-center">
                  {!showSidebar && (
                    <button
                      onClick={() => setShowSidebar(true)}
                      className={`p-2 rounded-md mr-2 ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                    >
                      <Menu className="h-5 w-5" />
                    </button>
                  )}

                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setShowUserInfo(!showUserInfo)}
                  >
                    <div className="relative">
                      <img
                        src={selectedContact.avatar}
                        alt={selectedContact.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 ${
                          darkMode ? "border-gray-800" : "border-white"
                        } ${
                          selectedContact.status === "online"
                            ? "bg-green-500"
                            : selectedContact.status === "busy"
                            ? "bg-red-500"
                            : selectedContact.status === "away"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                        }`}
                      ></div>
                    </div>

                    <div>
                      <h3 className="font-medium flex items-center gap-2">
                        {selectedContact.name}
                        {selectedContact.isStarred && <Star className="h-4 w-4 text-yellow-400 fill-current" />}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {selectedContact.status === "online"
                            ? "متصل الآن"
                            : selectedContact.status === "away"
                            ? "غير متواجد"
                            : selectedContact.status === "busy"
                            ? "مشغول"
                            : selectedContact.lastSeen
                            ? selectedContact.lastSeen
                            : "غير متصل"}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          {getChannelIcon(selectedConversation.channel)}
                          {selectedConversation.channel === "whatsapp"
                            ? "واتساب"
                            : selectedConversation.channel === "instagram"
                            ? "انستغرام"
                            : selectedConversation.channel === "facebook"
                            ? "فيسبوك"
                            : selectedConversation.channel === "web"
                            ? "الموقع"
                            : "البريد"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
                    <Video className="h-5 w-5" />
                  </button>
                  <button className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
                    <Search className="h-5 w-5" />
                  </button>
                  <button className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className={`flex-1 overflow-y-auto p-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
                <div className="max-w-3xl mx-auto space-y-4">
                  {selectedConversation.messages.map((message) => {
                    const isOwn = message.senderId === "agent";

                    return (
                      <div key={message.id} className={`flex ${isOwn ? "justify-start" : "justify-end"}`}>
                        {isOwn && (
                          <div className="flex-shrink-0 ml-3">
                            <img
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="You"
                              className="h-8 w-8 rounded-full object-cover"
                            />
                          </div>
                        )}

                        <div className={`max-w-[70%] ${isOwn ? "ml-auto" : "mr-auto"}`}>
                          {message.replyTo && (
                            <div
                              className={`mb-1 p-2 text-xs rounded ${
                                darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                              } border-r-2 border-google-blue`}
                            >
                              <p className="font-medium mb-1">رداً على:</p>
                              <p className="truncate">{message.replyTo.text}</p>
                            </div>
                          )}

                          <div
                            className={`rounded-lg p-3 ${
                              isOwn
                                ? darkMode
                                  ? "bg-blue-600 text-white"
                                  : "bg-google-blue text-white"
                                : darkMode
                                ? "bg-gray-800 text-white"
                                : "bg-white text-gray-900"
                            } ${isOwn ? "rounded-bl-none" : "rounded-br-none"} shadow-sm`}
                          >
                            {message.isForwarded && <p className="text-xs opacity-70 mb-1">تم إعادة التوجيه</p>}

                            <p className="whitespace-pre-line">{message.text}</p>

                            {message.attachments && message.attachments.length > 0 && (
                              <div className="mt-2 space-y-2">
                                {message.attachments.map((attachment, i) => (
                                  <div key={i}>
                                    {attachment.type === "image" && (
                                      <img
                                        src={attachment.url}
                                        alt={attachment.name || "Attachment"}
                                        className="rounded-lg max-h-60 w-auto"
                                      />
                                    )}
                                    {attachment.type === "file" && (
                                      <div
                                        className={`flex items-center gap-2 p-2 rounded ${
                                          darkMode ? "bg-gray-700" : "bg-gray-100"
                                        }`}
                                      >
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
                              {isOwn &&
                                (message.status === "read" ? (
                                  <div className="text-blue-400">
                                    <svg className="h-3 w-3 fill-current" viewBox="0 0 16 16">
                                      <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                                    </svg>
                                  </div>
                                ) : message.status === "delivered" ? (
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
                                ))}
                            </div>
                          </div>

                          {message.reactions && message.reactions.length > 0 && (
                            <div className="flex justify-end mt-1">
                              <div
                                className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                                  darkMode ? "bg-gray-800" : "bg-white"
                                } shadow-sm`}
                              >
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
                              src={selectedContact.avatar}
                              alt={selectedContact.name}
                              className="h-8 w-8 rounded-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {selectedContact.isTyping && (
                    <div className="flex justify-end">
                      <div className="flex items-end gap-1 mr-11">
                        <div className={`p-2 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                          <div className="flex gap-1">
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity }}
                              className={`w-2 h-2 rounded-full ${darkMode ? "bg-gray-400" : "bg-gray-500"}`}
                            />
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                              className={`w-2 h-2 rounded-full ${darkMode ? "bg-gray-400" : "bg-gray-500"}`}
                            />
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                              className={`w-2 h-2 rounded-full ${darkMode ? "bg-gray-400" : "bg-gray-500"}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Message Input */}
              <div className={`p-4 border-t ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <button
                      onClick={() => setShowQuickReplies(!showQuickReplies)}
                      className={`px-3 py-1.5 rounded-lg text-sm ${
                        darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <Zap className="h-4 w-4 inline-block ml-1" />
                      ردود سريعة
                    </button>

                    <button
                      className={`px-3 py-1.5 rounded-lg text-sm ${
                        darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <Bot className="h-4 w-4 inline-block ml-1" />
                      اقتراح رد
                    </button>

                    <div className="flex-1"></div>

                    <button
                      className={`p-1.5 rounded-lg ${
                        darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <Tag className="h-4 w-4" />
                    </button>

                    <button
                      className={`p-1.5 rounded-lg ${
                        darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <Flag className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Quick Replies Dropdown */}
                  <AnimatePresence>
                    {showQuickReplies && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-3"
                      >
                        <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                          <h4 className="font-medium text-sm mb-2">الردود السريعة</h4>
                          <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
                            {quickReplies.map((reply) => (
                              <button
                                key={reply.id}
                                onClick={() => handleQuickReply(reply.text)}
                                className={`text-right p-2 rounded-lg text-sm ${
                                  darkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-white hover:bg-gray-100"
                                } transition-colors`}
                              >
                                <div className="font-medium mb-1">{reply.title}</div>
                                <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} truncate`}>
                                  {reply.text}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="اكتب رسالتك هنا..."
                      rows={1}
                      className={`w-full pl-12 pr-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500"
                      } border focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent resize-none`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />

                    <div className="absolute left-2 bottom-2 flex items-center gap-1">
                      <button className={`p-1.5 rounded-full ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}>
                        <Paperclip className="h-5 w-5 text-gray-500" />
                      </button>
                      <button className={`p-1.5 rounded-full ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}>
                        <Smile className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>

                    <button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className={`absolute left-2 bottom-2 p-1.5 rounded-full ${
                        newMessage.trim()
                          ? "bg-google-blue text-white"
                          : darkMode
                          ? "bg-gray-600 text-gray-400"
                          : "bg-gray-300 text-gray-500"
                      }`}
                      style={{ display: newMessage.trim() ? "block" : "none" }}
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className={`h-16 w-16 mx-auto mb-4 ${darkMode ? "text-gray-700" : "text-gray-300"}`} />
                <h3 className="text-xl font-medium mb-2">اختر محادثة للبدء</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} max-w-md`}>
                  حدد محادثة من القائمة الجانبية أو ابدأ محادثة جديدة
                </p>
              </div>
            </div>
          )}
        </main>

        {/* User Info Sidebar */}
        <AnimatePresence>
          {showUserInfo && selectedContact && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-16 bottom-0 left-0 z-10 w-80 ${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              } border-r overflow-hidden`}
            >
              <div className="h-full flex flex-col">
                <div
                  className={`p-4 border-b ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } flex items-center justify-between`}
                >
                  <h3 className="font-medium">معلومات العميل</h3>
                  <button
                    onClick={() => setShowUserInfo(false)}
                    className={`p-1.5 rounded-lg ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  {/* User Profile */}
                  <div className="text-center mb-6">
                    <img
                      src={selectedContact.avatar}
                      alt={selectedContact.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                    />
                    <h3 className="text-xl font-bold">{selectedContact.name}</h3>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {selectedContact.status === "online"
                        ? "متصل الآن"
                        : selectedContact.status === "away"
                        ? "غير متواجد"
                        : selectedContact.status === "busy"
                        ? "مشغول"
                        : selectedContact.lastSeen
                        ? selectedContact.lastSeen
                        : "غير متصل"}
                    </p>

                    <div className="flex justify-center gap-3 mt-3">
                      <button
                        className={`p-2 rounded-full ${
                          darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        <Phone className="h-5 w-5" />
                      </button>
                      <button
                        className={`p-2 rounded-full ${
                          darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        <Mail className="h-5 w-5" />
                      </button>
                      <button
                        className={`p-2 rounded-full ${
                          darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        <User className="h-5 w-5" />
                      </button>
                      <button
                        className={`p-2 rounded-full ${
                          darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  {selectedContact.tags && selectedContact.tags.length > 0 && (
                    <div className={`p-4 rounded-lg mb-4 ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                      <h4 className="font-medium text-sm mb-2">الوسوم</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedContact.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs ${
                              darkMode ? "bg-gray-600 text-gray-200" : "bg-gray-200 text-gray-800"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                        <button
                          className={`px-2 py-1 rounded-full text-xs ${
                            darkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-200 hover:bg-gray-300"
                          }`}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Customer Info */}
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-3">معلومات العميل</h4>
                    <div
                      className={`rounded-lg overflow-hidden border ${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <div
                        className={`px-4 py-3 ${darkMode ? "bg-gray-700" : "bg-gray-50"} border-b ${
                          darkMode ? "border-gray-600" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">البيانات الأساسية</span>
                          <button className={`p-1 rounded ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}>
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="divide-y divide-gray-200">
                        <div
                          className={`px-4 py-3 flex justify-between ${
                            darkMode ? "divide-gray-700" : "divide-gray-200"
                          }`}
                        >
                          <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            البريد الإلكتروني
                          </span>
                          <span className="text-sm">
                            {selectedContact.name.replace(/\s+/g, ".").toLowerCase()}@example.com
                          </span>
                        </div>
                        <div
                          className={`px-4 py-3 flex justify-between ${
                            darkMode ? "divide-gray-700" : "divide-gray-200"
                          }`}
                        >
                          <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>رقم الهاتف</span>
                          <span className="text-sm">+966 5X XXX XXXX</span>
                        </div>
                        <div
                          className={`px-4 py-3 flex justify-between ${
                            darkMode ? "divide-gray-700" : "divide-gray-200"
                          }`}
                        >
                          <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>المدينة</span>
                          <span className="text-sm">الرياض</span>
                        </div>
                        <div
                          className={`px-4 py-3 flex justify-between ${
                            darkMode ? "divide-gray-700" : "divide-gray-200"
                          }`}
                        >
                          <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            تاريخ التسجيل
                          </span>
                          <span className="text-sm">15 يناير 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Previous Orders */}
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-3">الطلبات السابقة</h4>
                    <div
                      className={`rounded-lg overflow-hidden border ${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <div
                        className={`px-4 py-3 ${darkMode ? "bg-gray-700" : "bg-gray-50"} border-b ${
                          darkMode ? "border-gray-600" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">آخر 3 طلبات</span>
                          <button className="text-xs text-google-blue">عرض الكل</button>
                        </div>
                      </div>
                      <div className="divide-y divide-gray-200">
                        {[
                          { id: "#45678", date: "5 مارس 2023", status: "تم التسليم", amount: "450 ريال" },
                          { id: "#45123", date: "20 فبراير 2023", status: "تم التسليم", amount: "320 ريال" },
                          { id: "#44987", date: "10 يناير 2023", status: "تم التسليم", amount: "560 ريال" },
                        ].map((order, i) => (
                          <div
                            key={i}
                            className={`px-4 py-3 ${
                              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                            } cursor-pointer`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">{order.id}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {order.date}
                              </span>
                              <span className="text-sm font-medium">{order.amount}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <h4 className="font-medium text-sm mb-3">ملاحظات</h4>
                    <div
                      className={`rounded-lg overflow-hidden border ${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <div
                        className={`px-4 py-3 ${darkMode ? "bg-gray-700" : "bg-gray-50"} border-b ${
                          darkMode ? "border-gray-600" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">ملاحظات الفريق</span>
                          <button className={`p-1 rounded ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}>
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className={`p-4 ${darkMode ? "bg-gray-700/50" : "bg-gray-50/50"}`}>
                        <textarea
                          placeholder="أضف ملاحظة حول هذا العميل..."
                          rows={3}
                          className={`w-full p-3 rounded-lg ${
                            darkMode
                              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                          } border focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent resize-none`}
                        ></textarea>
                        <div className="flex justify-end mt-2">
                          <button className="bg-google-blue text-white px-3 py-1.5 rounded-lg text-sm">
                            حفظ الملاحظة
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Custom Edit icon component
function Edit(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
}

export default Inbox;

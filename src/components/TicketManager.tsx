import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MoreHorizontal, Plus, Calendar, Clock, User, Tag,
  MessageSquare, CheckCircle, AlertCircle, Search,
  Filter, List, LayoutGrid, ChevronDown
} from 'lucide-react';

// Define ticket types and statuses
type TicketStatus = 'pending' | 'assigned' | 'resolved' | 'waiting' | 'reviewing';
type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';

interface Ticket {
  id: string;
  title: string;
  status: TicketStatus;
  priority: TicketPriority;
  assignee?: string;
  createdAt: string;
  updatedAt: string;
  customerEmail?: string;
  customerName?: string;
  tags?: string[];
}

// Sample ticket data
const initialTickets: Ticket[] = [
  {
    id: 'TK-1001',
    title: 'مشكلة في تسجيل الدخول',
    status: 'pending',
    priority: 'high',
    createdAt: '2025-02-07',
    updatedAt: '2025-02-07',
    customerEmail: 'ahmed@example.com',
    customerName: 'أحمد محمد',
    tags: ['تسجيل الدخول', 'خطأ تقني']
  },
  {
    id: 'TK-1002',
    title: 'استفسار عن الباقة المتقدمة',
    status: 'assigned',
    priority: 'medium',
    assignee: 'محمد علي',
    createdAt: '2025-02-05',
    updatedAt: '2025-02-06',
    customerEmail: 'sara@example.com',
    customerName: 'سارة أحمد',
    tags: ['استفسار', 'الباقات']
  },
  {
    id: 'TK-1003',
    title: 'طلب استرداد مبلغ',
    status: 'waiting',
    priority: 'high',
    assignee: 'فاطمة حسن',
    createdAt: '2025-02-04',
    updatedAt: '2025-02-05',
    customerEmail: 'khalid@example.com',
    customerName: 'خالد العتيبي',
    tags: ['استرداد', 'مالي']
  },
  {
    id: 'TK-1004',
    title: 'مشكلة في إعداد الروبوت',
    status: 'pending',
    priority: 'urgent',
    createdAt: '2025-02-07',
    updatedAt: '2025-02-07',
    customerEmail: 'nora@example.com',
    customerName: 'نورة الغامدي',
    tags: ['روبوت المحادثة', 'خطأ تقني']
  },
  {
    id: 'TK-1005',
    title: 'تكامل مع نظام المحاسبة',
    status: 'resolved',
    priority: 'medium',
    assignee: 'عبدالله المالكي',
    createdAt: '2025-01-30',
    updatedAt: '2025-02-03',
    customerEmail: 'omar@example.com',
    customerName: 'عمر السعيد',
    tags: ['تكامل', 'API']
  },
  {
    id: 'TK-1006',
    title: 'تحديث بيانات الحساب',
    status: 'reviewing',
    priority: 'low',
    assignee: 'ليلى محمد',
    createdAt: '2025-02-01',
    updatedAt: '2025-02-04',
    customerEmail: 'fahad@example.com',
    customerName: 'فهد القحطاني',
    tags: ['حساب', 'تحديث بيانات']
  },
  {
    id: 'TK-1007',
    title: 'استفسار عن التقارير الشهرية',
    status: 'waiting',
    priority: 'medium',
    createdAt: '2025-02-06',
    updatedAt: '2025-02-06',
    customerEmail: 'hind@example.com',
    customerName: 'هند الشمري',
    tags: ['تقارير', 'استفسار']
  },
  {
    id: 'TK-1008',
    title: 'مشكلة في إرسال الرسائل',
    status: 'assigned',
    priority: 'high',
    assignee: 'سلطان العنزي',
    createdAt: '2025-02-05',
    updatedAt: '2025-02-06',
    customerEmail: 'lama@example.com',
    customerName: 'لمياء الدوسري',
    tags: ['رسائل', 'خطأ تقني']
  }
];

// Status column configuration
const statusColumns = [
  { id: 'pending', title: 'جاري المعالجة', color: 'bg-blue-500' },
  { id: 'assigned', title: 'تم الإسناد', color: 'bg-indigo-500' },
  { id: 'waiting', title: 'بانتظار العميل', color: 'bg-yellow-500' },
  { id: 'resolved', title: 'تم الحل', color: 'bg-green-500' },
  { id: 'reviewing', title: 'قيد المراجعة', color: 'bg-purple-500' }
];

// Priority badge colors
const priorityColors = {
  low: 'bg-gray-100 text-gray-800',
  medium: 'bg-blue-100 text-blue-800',
  high: 'bg-orange-100 text-orange-800',
  urgent: 'bg-red-100 text-red-800'
};

// Priority labels in Arabic
const priorityLabels = {
  low: 'منخفضة',
  medium: 'متوسطة',
  high: 'عالية',
  urgent: 'عاجلة'
};

export function TicketManager() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [draggedTicket, setDraggedTicket] = useState<Ticket | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle drag start
  const handleDragStart = (ticket: Ticket) => {
    setDraggedTicket(ticket);
  };

  // Handle drag over
  const handleDragOver = (e: React.DragEvent, status: TicketStatus) => {
    e.preventDefault();
  };

  // Handle drop
  const handleDrop = (e: React.DragEvent, status: TicketStatus) => {
    e.preventDefault();
    
    if (draggedTicket) {
      setIsAnimating(true);
      
      // Update the ticket status
      const updatedTickets = tickets.map(ticket => 
        ticket.id === draggedTicket.id 
          ? { ...ticket, status, updatedAt: new Date().toISOString().split('T')[0] } 
          : ticket
      );
      
      setTimeout(() => {
        setTickets(updatedTickets);
        setDraggedTicket(null);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Filter tickets by status
  const getTicketsByStatus = (status: TicketStatus) => {
    return tickets.filter(ticket => ticket.status === status);
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-lg">لوحة التذاكر</h3>
            <div className="flex items-center gap-2">
              <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-md">
                <List className="h-4 w-4 text-gray-600" />
              </button>
              <button className="bg-blue-50 text-google-blue p-2 rounded-md">
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="بحث عن تذكرة..." 
                className="bg-gray-100 border-none rounded-md pl-3 pr-10 py-2 text-sm w-64 focus:ring-2 focus:ring-google-blue"
              />
            </div>
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-sm">
              <Filter className="h-4 w-4" />
              <span>تصفية</span>
            </button>
            <button className="flex items-center gap-2 bg-google-blue text-white px-3 py-2 rounded-md text-sm">
              <Plus className="h-4 w-4" />
              <span>تذكرة جديدة</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Ticket Board */}
      <div className="p-4 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {statusColumns.map(column => (
            <div 
              key={column.id}
              className="w-72 flex flex-col bg-white rounded-lg shadow"
              onDragOver={(e) => handleDragOver(e, column.id as TicketStatus)}
              onDrop={(e) => handleDrop(e, column.id as TicketStatus)}
            >
              {/* Column Header */}
              <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${column.color}`}></div>
                  <h4 className="font-medium">{column.title}</h4>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                    {getTicketsByStatus(column.id as TicketStatus).length}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              
              {/* Tickets */}
              <div className="p-2 flex-1 overflow-y-auto max-h-[400px] space-y-2">
                {getTicketsByStatus(column.id as TicketStatus).map(ticket => (
                  <motion.div
                    key={ticket.id}
                    layoutId={ticket.id}
                    draggable
                    onDragStart={() => handleDragStart(ticket)}
                    className="bg-white border border-gray-100 rounded-md p-3 shadow-sm hover:shadow cursor-move"
                    whileHover={{ scale: 1.02 }}
                    whileDrag={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-gray-500">{ticket.id}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[ticket.priority]}`}>
                        {priorityLabels[ticket.priority]}
                      </span>
                    </div>
                    
                    <h5 className="font-medium text-sm mb-2">{ticket.title}</h5>
                    
                    {ticket.assignee && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px]">
                          {ticket.assignee.charAt(0)}
                        </div>
                        <span className="text-xs text-gray-600">{ticket.assignee}</span>
                      </div>
                    )}
                    
                    {ticket.tags && ticket.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {ticket.tags.map((tag, index) => (
                          <span key={index} className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{ticket.updatedAt}</span>
                      </div>
                      
                      {ticket.customerName && (
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{ticket.customerName.split(' ')[0]}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {/* Add ticket button */}
                <button className="w-full flex items-center justify-center gap-1 p-2 text-xs text-gray-500 hover:bg-gray-50 rounded-md border border-dashed border-gray-200">
                  <Plus className="h-3 w-3" />
                  <span>إضافة تذكرة</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-white border-t border-gray-200 p-3 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            <span>إجمالي التذاكر: {tickets.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3 text-green-500" />
            <span>تم حلها: {getTicketsByStatus('resolved').length}</span>
          </div>
          <div className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3 text-yellow-500" />
            <span>قيد الانتظار: {getTicketsByStatus('waiting').length}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span>آخر تحديث:</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>منذ دقيقة واحدة</span>
          </div>
        </div>
      </div>
    </div>
  );
}
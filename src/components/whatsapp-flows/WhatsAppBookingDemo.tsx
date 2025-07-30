'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, 
  Video, 
  MoreVertical, 
  ArrowLeft,
  Check,
  CheckCheck,
  Camera,
  Mic,
  Paperclip,
  Send,
  Calendar,
  Clock,
  MapPin,
  User,
  Stethoscope
} from 'lucide-react'

interface Message {
  id: number
  type: 'clinic' | 'user'
  content: string
  timestamp: string
  messageType: 'text' | 'image' | 'form' | 'summary' | 'button'
  data?: any
  status?: 'sent' | 'delivered' | 'read'
}

const WhatsAppBookingDemo = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [formData, setFormData] = useState({
    date: 'السبت، 7 يونيو 2023',
    time: '14:30',
    patientName: 'عائشة بوار',
    specialty: 'الطب الباطني',
    location: 'بلازا الصحة، الرياض، 11564',
    privacyAccepted: false
  })

  const specialties = ['الطب الباطني', 'الجلدية', 'العظام']

  useEffect(() => {
    // Start the conversation
    setTimeout(() => {
      addMessage({
        id: 1,
        type: 'clinic',
        content: 'مرحباً بك في عيادة الصحة الشاملة 👨‍⚕️\nاحجز موعدك في خطوات بسيطة.',
        timestamp: '14:30',
        messageType: 'text'
      })
    }, 1000)

    setTimeout(() => {
      addMessage({
        id: 2,
        type: 'clinic',
        content: 'احجز الآن',
        timestamp: '14:30',
        messageType: 'button',
        data: { action: 'start_booking' }
      })
    }, 2000)
  }, [])

  const addMessage = (message: Message) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, message])
    }, 1500)
  }

  const handleBookNow = () => {
    addMessage({
      id: 3,
      type: 'user',
      content: 'احجز الآن',
      timestamp: '14:32',
      messageType: 'text'
    })

    setTimeout(() => {
      addMessage({
        id: 4,
        type: 'clinic',
        content: 'ممتاز! يرجى ملء بيانات الحجز:',
        timestamp: '14:32',
        messageType: 'text'
      })
    }, 1000)

    setTimeout(() => {
      addMessage({
        id: 5,
        type: 'clinic',
        content: 'نموذج الحجز',
        timestamp: '14:32',
        messageType: 'form',
        data: formData
      })
    }, 2000)

    setCurrentStep(1)
  }

  const handleFormSubmit = () => {
    addMessage({
      id: 6,
      type: 'user',
      content: 'متابعة',
      timestamp: '14:35',
      messageType: 'text'
    })

    setTimeout(() => {
      addMessage({
        id: 7,
        type: 'clinic',
        content: 'يرجى مراجعة تفاصيل موعدك:',
        timestamp: '14:35',
        messageType: 'text'
      })
    }, 1000)

    setTimeout(() => {
      addMessage({
        id: 8,
        type: 'clinic',
        content: 'ملخص الموعد',
        timestamp: '14:35',
        messageType: 'summary',
        data: formData
      })
    }, 2000)

    setCurrentStep(2)
  }

  const handleConfirmBooking = () => {
    if (!formData.privacyAccepted) {
      alert('يرجى قبول سياسة الخصوصية')
      return
    }

    addMessage({
      id: 9,
      type: 'user',
      content: 'تأكيد الحجز',
      timestamp: '14:37',
      messageType: 'text'
    })

    setTimeout(() => {
      addMessage({
        id: 10,
        type: 'clinic',
        content: `✅ تم تأكيد الموعد

📅 التاريخ: ${formData.date}
⏰ الوقت: ${formData.time}
🏥 التخصص: ${formData.specialty}
👤 الاسم: ${formData.patientName}
📍 الموقع: ${formData.location}

شكراً لك! سنرسل لك تذكيراً قبل الموعد.`,
        timestamp: '14:37',
        messageType: 'text'
      })
    }, 1500)

    setCurrentStep(3)
  }

  const renderMessage = (message: Message) => {
    const isClinic = message.type === 'clinic'
    
    return (
      <motion.div
        key={message.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex mb-2 ${isClinic ? 'justify-start' : 'justify-end'}`}
        dir="rtl"
      >
        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          isClinic 
            ? 'bg-white text-gray-800 rounded-bl-sm shadow-sm' 
            : 'bg-green-500 text-white rounded-br-sm'
        }`}>
          {message.messageType === 'text' && (
            <div>
              <p className="text-sm whitespace-pre-line">{message.content}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-xs opacity-70">{message.timestamp}</span>
                {!isClinic && (
                  <CheckCheck className="w-3 h-3 opacity-70" />
                )}
              </div>
            </div>
          )}

          {message.messageType === 'button' && (
            <div>
              <button
                onClick={handleBookNow}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 w-full"
              >
                {message.content}
              </button>
              <div className="flex items-center justify-end gap-1 mt-2">
                <span className="text-xs opacity-70">{message.timestamp}</span>
              </div>
            </div>
          )}

          {message.messageType === 'form' && (
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-center mb-3">نموذج حجز الموعد</h4>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">التاريخ: {formData.date}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">الوقت: {formData.time}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">اسم المريض: {formData.patientName}</span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">التخصص:</span>
                  </div>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-white"
                  >
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">الموقع: {formData.location}</span>
                </div>
              </div>

              <button
                onClick={handleFormSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 w-full mt-3"
              >
                متابعة
              </button>
              
              <div className="flex items-center justify-end gap-1 mt-2">
                <span className="text-xs opacity-70">{message.timestamp}</span>
              </div>
            </div>
          )}

          {message.messageType === 'summary' && (
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-center mb-3">ملخص الموعد</h4>
              
              <div className="bg-gray-50 p-3 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">التاريخ:</span>
                  <span className="text-sm">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">الوقت:</span>
                  <span className="text-sm">{formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">التخصص:</span>
                  <span className="text-sm">{formData.specialty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">المريض:</span>
                  <span className="text-sm">{formData.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">الموقع:</span>
                  <span className="text-sm">{formData.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacyAccepted}
                  onChange={(e) => setFormData({...formData, privacyAccepted: e.target.checked})}
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-xs text-gray-600">
                  أوافق على سياسة الخصوصية
                </label>
              </div>

              <button
                onClick={handleConfirmBooking}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 w-full mt-3"
              >
                تأكيد الحجز
              </button>
              
              <div className="flex items-center justify-end gap-1 mt-2">
                <span className="text-xs opacity-70">{message.timestamp}</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden" dir="rtl">
      {/* WhatsApp Header */}
      <div className="bg-green-600 text-white p-4 flex items-center gap-3">
        <ArrowLeft className="w-6 h-6" />
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <Stethoscope className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm">عيادة الصحة الشاملة</h4>
          <p className="text-xs text-green-100">متصل الآن</p>
        </div>
        <div className="flex gap-4">
          <Video className="w-5 h-5" />
          <Phone className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 bg-gray-50 space-y-2">
        <AnimatePresence>
          {messages.map(renderMessage)}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex justify-start"
          >
            <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Paperclip className="w-5 h-5 text-gray-500" />
          <Camera className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="اكتب رسالة..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm"
            disabled
          />
          <Mic className="w-5 h-5 text-gray-500" />
          <button className="bg-green-500 text-white p-2 rounded-full">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppBookingDemo


'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot } from 'lucide-react';

interface ChatMessage {
  id: number;
  type: 'user' | 'bot';
  text: string;
  isTyping?: boolean;
}

export default function AnimatedChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const chatSequence = [
    { type: 'user', text: 'مرحبا، أريد معرفة أوقات العمل' },
    { type: 'bot', text: 'مرحباً بك! أوقات العمل لدينا من الأحد إلى الخميس من 9 صباحاً حتى 6 مساءً. هل تحتاج لمساعدة أخرى؟' },
    { type: 'user', text: 'نعم، كيف يمكنني حجز موعد؟' },
    { type: 'bot', text: 'يمكنك حجز موعد عبر الرابط التالي أو الاتصال على رقم 123456789. سأقوم بتحويلك لأحد المختصين لمساعدتك.' }
  ];

  const resetAnimation = () => {
    setMessages([]);
    setCurrentStep(0);
    setIsAnimating(false);
  };

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const animateMessage = (stepIndex: number) => {
      if (stepIndex >= chatSequence.length) {
        // Animation complete, wait 3 seconds then restart
        timeoutRef.current = setTimeout(() => {
          resetAnimation();
          setTimeout(startAnimation, 100);
        }, 3000);
        return;
      }

      const message = chatSequence[stepIndex];
      
      if (message.type === 'user') {
        // Add user message immediately
        setMessages(prev => [...prev, { 
          id: stepIndex, 
          type: 'user', 
          text: message.text 
        }]);
        
        // Move to next step after 600ms
        timeoutRef.current = setTimeout(() => {
          setCurrentStep(stepIndex + 1);
          animateMessage(stepIndex + 1);
        }, 600);
      } else {
        // Show typing indicator for bot
        setMessages(prev => [...prev, { 
          id: stepIndex, 
          type: 'bot', 
          text: '', 
          isTyping: true 
        }]);
        
        // Replace typing with actual message after 800ms
        timeoutRef.current = setTimeout(() => {
          setMessages(prev => prev.map(msg => 
            msg.id === stepIndex 
              ? { ...msg, text: message.text, isTyping: false }
              : msg
          ));
          
          // Move to next step after 1000ms
          timeoutRef.current = setTimeout(() => {
            setCurrentStep(stepIndex + 1);
            animateMessage(stepIndex + 1);
          }, 1000);
        }, 800);
      }
    };

    // Start animation after 600ms
    timeoutRef.current = setTimeout(() => {
      animateMessage(0);
    }, 600);
  };

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Show all messages instantly
      setMessages(chatSequence.map((msg, index) => ({
        id: index,
        type: msg.type as 'user' | 'bot',
        text: msg.text,
        isTyping: false
      })));
    } else {
      startAnimation();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const TypingIndicator = () => (
    <div className="flex items-center gap-1">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto mt-16"
      dir="rtl"
    >
      {/* Section with Karzoun brand gradient */}
      <div 
        className="rounded-2xl p-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #10254E 0%, #1F2D5C 100%)',
          maxHeight: '60vh'
        }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          مثال على محادثة مع الروبوت
        </h3>
        
        {/* Chat Container */}
        <div 
          className="bg-gray-100/10 backdrop-blur-sm rounded-xl p-6 overflow-y-auto"
          style={{ maxHeight: '45vh' }}
        >
          <div className="space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ 
                    opacity: 0, 
                    x: message.type === 'user' ? -30 : 30 
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0 
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: 'easeOut'
                  }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'user' ? (
                    /* User Message */
                    <div 
                      className="text-white text-sm max-w-xs sm:max-w-sm md:max-w-md select-text"
                      style={{
                        backgroundColor: '#2362FF',
                        padding: '12px',
                        borderRadius: '16px 16px 4px 16px'
                      }}
                    >
                      {message.text}
                    </div>
                  ) : (
                    /* Bot Message */
                    <div className="max-w-xs sm:max-w-sm md:max-w-md">
                      <div 
                        className="text-sm select-text"
                        style={{
                          backgroundColor: '#F8F9FB',
                          color: '#10254E',
                          padding: '12px',
                          borderRadius: '16px 16px 16px 4px'
                        }}
                      >
                        <div className="flex items-center mb-2">
                          <Bot className="w-4 h-4 text-blue-600 ml-2" />
                          <span className="text-xs font-semibold text-blue-600">روبوت المساعدة</span>
                        </div>
                        {message.isTyping ? (
                          <TypingIndicator />
                        ) : (
                          <p>{message.text}</p>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Custom CSS for responsive scaling */}
      <style jsx>{`
        @media (max-width: 640px) {
          .max-w-xs {
            max-width: 90%;
          }
          .max-w-sm {
            max-width: 90%;
          }
          .max-w-md {
            max-width: 90%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}


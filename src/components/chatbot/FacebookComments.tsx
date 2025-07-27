import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, MessageSquare, Heart, Share, 
  ArrowRight, CheckCircle2, Users, BarChart, 
  Zap, RefreshCw, Clock, Search, MoreHorizontal,
  User, Settings, BellRing, Image, Camera, Smile
} from 'lucide-react';

export function FacebookComments() {
  const [activeTab, setActiveTab] = useState('comments');
  const [currentComment, setCurrentComment] = useState(0);
  const [isReplying, setIsReplying] = useState(false);
  
  // Sample Facebook post and comments
  const post = {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    caption: "أحذية رياضية جديدة متوفرة الآن! تصميم عصري ومريح لممارسة الرياضة. متوفرة بألوان متعددة. اطلبها الآن واحصل على خصم 15% لفترة محدودة! #أحذية_رياضية #تخفيضات #رياضة",
    likes: 1543,
    shares: 89,
    user: {
      name: "متجر الرياضة العربي",
      avatar: "https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    comments: [
      {
        id: 1,
        user: {
          name: "أحمد محمد",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        text: "هل متوفر مقاس 43؟",
        time: "قبل 15 دقيقة",
        reply: {
          text: "نعم، متوفر مقاس 43 بجميع الألوان! يمكنك الطلب عبر رسالة خاصة أو عبر الواتساب.",
          time: "الآن"
        }
      },
      {
        id: 2,
        user: {
          name: "سارة أحمد",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        text: "ما هي المدة المتوقعة للتوصيل؟",
        time: "قبل 30 دقيقة",
        reply: {
          text: "مدة التوصيل من 3-5 أيام عمل داخل المدن الرئيسية، و5-7 أيام للمناطق الأخرى. هل تحتاجين مساعدة أخرى؟",
          time: "الآن"
        }
      },
      {
        id: 3,
        user: {
          name: "خالد العنزي",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        text: "هل هي مناسبة للجري لمسافات طويلة؟",
        time: "قبل ساعة",
        reply: {
          text: "نعم، هذه الأحذية مصممة خصيصاً للجري لمسافات طويلة، وتتميز بنعل مريح يمتص الصدمات ويوفر دعماً ممتازاً للقدم. هل تود معرفة المزيد من التفاصيل؟",
          time: "الآن"
        }
      }
    ]
  };

  // Auto-advance comments and replies
  useEffect(() => {
    if (currentComment < post.comments.length) {
      const timer = setTimeout(() => {
        setIsReplying(true);
        setTimeout(() => {
          setIsReplying(false);
          setCurrentComment(prev => prev + 1);
        }, 2000);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      // Reset to start the demo again
      setTimeout(() => {
        setCurrentComment(0);
      }, 3000);
    }
  }, [currentComment]);

  return (
    <section id="channel-facebook" className="py-16" style={{ backgroundColor: '#1877F2' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
            data-aos="fade-up"
          >
            <div className="text-right">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                أتمتة التعليقات على فيسبوك
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                الرد التلقائي على تعليقات المتابعين على منشورات فيسبوك وتعزيز مشاركة الجمهور.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">ردود تلقائية ذكية</h3>
                    <p className="text-gray-600 text-sm">ردود فورية ومخصصة لكل تعليق</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">زيادة التفاعل وبناء مجتمع نشط</h3>
                    <p className="text-gray-600 text-sm">تعزيز المشاركة والتفاعل مع المتابعين</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">إرسال رسائل ماسنجر خاصة تلقائياً</h3>
                    <p className="text-gray-600 text-sm">تحويل التعليقات إلى محادثات خاصة</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="flex-shrink-0">
                    <BarChart className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">تحليلات التفاعل لتحديد أفضل المحتوى</h3>
                    <p className="text-gray-600 text-sm">قياس الأداء وتحسين الاستراتيجية</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>مثالي للشركات والعلامات التجارية</span>
                  <div className="flex items-center gap-2">
                    <Facebook className="h-4 w-4" />
                    <span>فيسبوك</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Facebook Demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            data-aos="fade-up"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-md mx-auto">
                {/* Facebook Header */}
                <div className="bg-[#1877F2] text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Facebook className="h-6 w-6" />
                      <h3 className="font-bold">فيسبوك</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <Heart className="h-5 w-5" />
                      <MessageSquare className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                
                {/* Facebook Post */}
                <div className="bg-white">
                  {/* Post Header */}
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <span className="font-medium text-sm block">{post.user.name}</span>
                        <span className="text-xs text-gray-500">قبل ساعتين</span>
                      </div>
                    </div>
                    <MoreHorizontal className="h-5 w-5 text-gray-500" />
                  </div>
                  
                  {/* Post Caption */}
                  <div className="px-3 pb-3">
                    <p className="text-sm text-right">
                      {post.caption}
                    </p>
                  </div>
                  
                  {/* Post Image */}
                  <img
                    src={post.image}
                    alt="Facebook Post"
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Post Actions */}
                  <div className="p-3 border-b border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{post.likes} إعجاب</span>
                      <span>{post.shares} مشاركة</span>
                    </div>
                    <div className="flex items-center justify-around border-t border-gray-200 pt-2">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">إعجاب</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-sm">تعليق</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                        <Share className="h-4 w-4" />
                        <span className="text-sm">مشاركة</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Comments Section */}
                  <div className="max-h-64 overflow-y-auto p-3 space-y-4">
                    {post.comments.slice(0, currentComment).map((comment, index) => (
                      <div key={comment.id} className="space-y-2">
                        {/* User Comment */}
                        <div className="flex gap-2">
                          <img
                            src={comment.user.avatar}
                            alt={comment.user.name}
                            className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-lg p-2">
                              <div className="font-medium text-xs text-gray-900 mb-1">
                                {comment.user.name}
                              </div>
                              <div className="text-sm text-gray-800 text-right">
                                {comment.text}
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1 text-right">
                              {comment.time}
                            </div>
                          </div>
                        </div>

                        {/* Bot Reply */}
                        {index < currentComment && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-2 mr-8"
                          >
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Zap className="h-3 w-3 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                                <div className="font-medium text-xs text-blue-900 mb-1">
                                  بوت كرزون
                                </div>
                                <div className="text-sm text-blue-800 text-right">
                                  {comment.reply.text}
                                </div>
                              </div>
                              <div className="text-xs text-gray-500 mt-1 text-right">
                                {comment.reply.time}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Typing Indicator */}
                        {index === currentComment - 1 && isReplying && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-2 mr-8"
                          >
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Zap className="h-3 w-3 text-white" />
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


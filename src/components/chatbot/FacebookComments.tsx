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
  const [mounted, setMounted] = useState(false);
  
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
          name: "خالد العتيبي",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        text: "هل هي مناسبة للجري لمسافات طويلة؟",
        time: "قبل ساعة",
        reply: {
          text: "نعم، هذه الأحذية مصممة خصيصاً للجري لمسافات طويلة، وتتميز بنعل مريح يمتص الصدمات. هل تود معرفة المزيد؟",
          time: "الآن"
        }
      }
    ]
  };

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-advance comments and replies
  useEffect(() => {
    if (!mounted) return;
    
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
  }, [currentComment, mounted]);

  return (
    <div className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              أتمتة التعليقات على فيسبوك
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              الرد التلقائي على تعليقات المتابعين على منشورات فيسبوك وتعزيز مشاركة الجمهور.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
          {/* Facebook Demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 bg-blue-100 w-24 h-24 rounded-full opacity-60"></div>
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
                      <span className="font-medium text-sm">{post.user.name}</span>
                    </div>
                    <MoreHorizontal className="h-5 w-5 text-gray-500" />
                  </div>
                  
                  {/* Post Content */}
                  <div className="px-3 pb-3">
                    <p className="text-sm mb-3">{post.caption}</p>
                  </div>
                  
                  {/* Post Image */}
                  <img
                    src={post.image}
                    alt="Facebook Post"
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Post Actions */}
                  <div className="p-3 flex items-center justify-between border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-blue-600">
                        <Heart className="h-5 w-5" />
                        <span className="text-sm">إعجاب</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-600">
                        <MessageSquare className="h-5 w-5" />
                        <span className="text-sm">تعليق</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-600">
                        <Share className="h-5 w-5" />
                        <span className="text-sm">مشاركة</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Post Stats */}
                  <div className="px-3 py-2 flex items-center justify-between text-sm text-gray-500 border-b border-gray-200">
                    <span>{post.likes} إعجاب</span>
                    <span>{post.shares} مشاركة</span>
                  </div>
                  
                  {/* Comments Section */}
                  <div className="max-h-64 overflow-y-auto p-3 space-y-4">
                    {post.comments.slice(0, currentComment).map((comment, index) => (
                      <div key={comment.id} className="space-y-2">
                        <div className="flex items-start gap-2">
                          <img
                            src={comment.user.avatar}
                            alt={comment.user.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-2xl px-3 py-2">
                              <div className="font-medium text-sm">{comment.user.name}</div>
                              <div className="text-sm">{comment.text}</div>
                            </div>
                            <div className="flex items-center gap-3 mt-1 px-3">
                              <span className="text-xs text-gray-500">{comment.time}</span>
                              <button className="text-xs font-medium text-gray-600">إعجاب</button>
                              <button className="text-xs font-medium text-gray-600">الرد</button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Reply */}
                        {(index < currentComment - 1 || !isReplying) && comment.reply && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-start gap-2 mr-8"
                          >
                            <img
                              src={post.user.avatar}
                              alt={post.user.name}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="bg-blue-100 rounded-2xl px-3 py-2">
                                <div className="font-medium text-sm">{post.user.name}</div>
                                <div className="text-sm">{comment.reply.text}</div>
                              </div>
                              <div className="flex items-center gap-3 mt-1 px-3">
                                <span className="text-xs text-gray-500">{comment.reply.time}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Typing Indicator */}
                        {index === currentComment - 1 && isReplying && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-start gap-2 mr-8"
                          >
                            <img
                              src={post.user.avatar}
                              alt={post.user.name}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <div className="bg-gray-100 rounded-2xl px-3 py-2">
                              <div className="flex gap-1">
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
                  
                  {/* Comment Input */}
                  <div className="border-t border-gray-200 p-3 flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="User"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <input
                      type="text"
                      placeholder="اكتب تعليقاً..."
                      className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="text-blue-600">
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              تفاعل مع متابعيك
              <span className="block text-blue-600">بشكل فوري وذكي</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              أتمت الردود على تعليقات المتابعين على منشورات فيسبوك، وقدم تجربة تفاعلية تزيد من مشاركة الجمهور وتعزز من تواجدك على المنصة.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: MessageSquare,
                  title: "ردود تلقائية ذكية",
                  description: "الرد على الاستفسارات الشائعة في التعليقات بشكل فوري وذكي"
                },
                {
                  icon: Users,
                  title: "زيادة التفاعل وبناء مجتمع نشط",
                  description: "تعزيز مشاركة المتابعين وبناء مجتمع نشط حول علامتك التجارية"
                },
                {
                  icon: MessageSquare,
                  title: "إرسال رسائل ماسنجر خاصة تلقائياً",
                  description: "تحويل التعليقات إلى محادثات خاصة لمتابعة أفضل"
                },
                {
                  icon: BarChart,
                  title: "تحليلات التفاعل لتحديد أفضل المحتوى",
                  description: "قياس مستوى التفاعل وتحليل المحتوى الأكثر جذباً للجمهور"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Facebook className="h-5 w-5 text-blue-600" />
                <span>مثالي للشركات والعلامات التجارية</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "الرد على استفسارات المنتجات بشكل فوري",
                  "توجيه المتابعين إلى قنوات البيع المختلفة",
                  "جمع بيانات العملاء المحتملين",
                  "تحويل التعليقات إلى فرص بيع",
                  "تعزيز صورة العلامة التجارية من خلال التفاعل المستمر"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  <span>اكتشف المزيد عن أتمتة التعليقات على فيسبوك</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


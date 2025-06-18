import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, MessageSquare, Heart, Send, 
  ArrowRight, CheckCircle2, Users, BarChart, 
  Zap, RefreshCw, Clock, Search, MoreHorizontal,
  User, Settings, BellRing, Image, Camera, Smile
} from 'lucide-react';

export function InstagramComments() {
  const [activeTab, setActiveTab] = useState('comments');
  const [currentComment, setCurrentComment] = useState(0);
  const [isReplying, setIsReplying] = useState(false);
  
  // Sample Instagram post and comments
  const post = {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    caption: "أحذية رياضية جديدة متوفرة الآن! تصميم عصري ومريح لممارسة الرياضة. متوفرة بألوان متعددة. اطلبها الآن واحصل على خصم 15% لفترة محدودة! #أحذية_رياضية #تخفيضات #رياضة",
    likes: 1243,
    user: {
      name: "sportswear_arabia",
      avatar: "https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    comments: [
      {
        id: 1,
        user: {
          name: "ahmed_sports",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        text: "هل متوفر مقاس 43؟",
        time: "قبل 15 دقيقة",
        reply: {
          text: "نعم، متوفر مقاس 43 بجميع الألوان! يمكنك الطلب عبر الرابط في البايو أو عبر الواتساب.",
          time: "الآن"
        }
      },
      {
        id: 2,
        user: {
          name: "sara_fitness",
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
          name: "khalid_runner",
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
    <div className="py-24 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              أتمتة التعليقات على انستغرام
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              الرد التلقائي على تعليقات المتابعين على منشورات انستغرام، وتوفير تجربة تفاعلية تزيد من مشاركة الجمهور
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
          {/* Instagram Demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 bg-pink-100 w-24 h-24 rounded-full opacity-60"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-md mx-auto">
                {/* Instagram Header */}
                <div className="bg-white border-b border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Instagram className="h-6 w-6 text-pink-600" />
                      <h3 className="font-bold">انستغرام</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <Heart className="h-5 w-5" />
                      <MessageSquare className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                
                {/* Instagram Post */}
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
                  
                  {/* Post Image */}
                  <img
                    src={post.image}
                    alt="Instagram Post"
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Post Actions */}
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Heart className="h-6 w-6" />
                      <MessageSquare className="h-6 w-6" />
                      <Send className="h-6 w-6" />
                    </div>
                    <div className="text-sm font-medium">{post.likes} إعجاب</div>
                  </div>
                  
                  {/* Post Caption */}
                  <div className="px-3 pb-3">
                    <p className="text-sm">
                      <span className="font-medium">{post.user.name}</span>{" "}
                      {post.caption}
                    </p>
                  </div>
                  
                  {/* Comments Tabs */}
                  <div className="border-t border-gray-200">
                    <div className="flex">
                      <button
                        onClick={() => setActiveTab('comments')}
                        className={`flex-1 py-2 text-sm font-medium ${
                          activeTab === 'comments'
                            ? 'text-pink-600 border-b-2 border-pink-600'
                            : 'text-gray-500'
                        }`}
                      >
                        التعليقات
                      </button>
                      <button
                        onClick={() => setActiveTab('activity')}
                        className={`flex-1 py-2 text-sm font-medium ${
                          activeTab === 'activity'
                            ? 'text-pink-600 border-b-2 border-pink-600'
                            : 'text-gray-500'
                        }`}
                      >
                        النشاط
                      </button>
                    </div>
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
                            <div className="text-sm">
                              <span className="font-medium">{comment.user.name}</span>{" "}
                              {comment.text}
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-gray-500">{comment.time}</span>
                              <button className="text-xs font-medium">الرد</button>
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
                              <div className="text-sm">
                                <span className="font-medium">{post.user.name}</span>{" "}
                                {comment.reply.text}
                              </div>
                              <div className="flex items-center gap-3 mt-1">
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
                            <div className="bg-gray-100 rounded-full px-3 py-1">
                              <div className="flex gap-1">
                                <motion.div
                                  animate={{ y: [0, -3, 0] }}
                                  transition={{ duration: 0.5, repeat: Infinity }}
                                  className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                />
                                <motion.div
                                  animate={{ y: [0, -3, 0] }}
                                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                                  className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                />
                                <motion.div
                                  animate={{ y: [0, -3, 0] }}
                                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                                  className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Comment Input */}
                  <div className="border-t border-gray-200 p-3 flex items-center gap-2">
                    <Smile className="h-6 w-6 text-gray-500" />
                    <input
                      type="text"
                      placeholder="أضف تعليقاً..."
                      className="flex-1 border-none text-sm focus:ring-0"
                    />
                    <button className="text-sm font-medium text-blue-500">نشر</button>
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
              <span className="block text-pink-600">بشكل فوري وذكي</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              أتمت الردود على تعليقات المتابعين على منشورات انستغرام، وقدم تجربة تفاعلية تزيد من مشاركة الجمهور وتعزز من تواجدك على المنصة.
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
                  title: "زيادة التفاعل",
                  description: "تعزيز مشاركة المتابعين وبناء مجتمع نشط حول علامتك التجارية"
                },
                {
                  icon: Clock,
                  title: "توفير الوقت",
                  description: "التعامل مع مئات التعليقات يومياً دون الحاجة للتدخل اليدوي"
                },
                {
                  icon: BarChart,
                  title: "تحليلات التفاعل",
                  description: "قياس مستوى التفاعل وتحليل المحتوى الأكثر جذباً للجمهور"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-pink-600" />
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
                <Instagram className="h-5 w-5 text-pink-600" />
                <span>مثالي للمؤثرين وأصحاب المتاجر</span>
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
                    <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1">
                  <span>اكتشف المزيد عن أتمتة التعليقات على انستغرام</span>
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
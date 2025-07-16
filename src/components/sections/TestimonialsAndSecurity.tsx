import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, ShieldCheck, Clock, Award, Building2, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";

// Expanded testimonials data
const testimonials = [
  {
    id: 1,
    quote:
      "نتشرف في توجيهه عملائنا دوما في وكالة رادار الى كرزون ، شكرا لكل الفريق العظيم على جهودهم وسرعة تأسيس الحسابات والتعاون مع جميع عملائهم نفتخر بكم دوماً ",
    author: "نبيل ",
    position: "المدير التنفيذي",
    company: "وكالة رادار",
    image:
      "https://images.unsplash.com/photo-150003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },

  {
    id: 3,
    quote: "أفضل تطبيق اتمتتة للواتساب في السوق لحد الان عمل جبار اهنيكم",
    author: "الوليد",
    position: "المدير العام",
    company: "Rzq boutique",
    image:
      "https://images.unsplash.com/photo-150648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    id: 4,
    quote: "نظامهم في ادارة العملاء  ممتاز جدا وسهل وبسيط وتقارير مرتبه وبرضه خدمة العملاء عندهم ممتازة ",
    author: "عامر فريد باسلوم ",
    position: "مدير التسويق",
    company: "سارا ميك اب ",
    image:
      "https://images.unsplash.com/pho-1573497019940-1c28c88b4f3e?ixlib=b-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },

  {
    id: 7,
    quote: "من افضل الحلول التقنية في خدمة العملاء واعاده الاستهداف ",
    author: "Alwaleed Alkaffary",
    position: "المدير التنفيذي",
    company: "Segadty - سجادتي",
    image:
      "https://images.unsplash.com/photo-158602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "كرزون منصة متكاملة لإدارة خدمة العملاء باحترافية عالية، يتميز فريقهم بدعم سريع ومستمر، وتطوير دائم يواكب احتياجاتنا بكل مرونة وكفاءة ",
    author: "أسماء الشريح",
    position: "مدير التسويق",
    company: "لافا للعطور",
    image:
      "https://images.unsplash.com/photo-158602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "منصة كرزون أضافت قيمة حقيقية لخدمة العملاء، من خلال تنظيم العمليات، والتطوير المستمر، والدعم السريع والفعّال",
    author: "أسماء باسم ",
    position: "مدير التسويق",
    company: "البداح للعود ",
    image:
      "https://images.unsplash.com/photo-158602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    id: 9,
    quote: `شكلت Karzoun إضافة استثنائية لمتجر بروميت!
هذه المنصة غيرت طريقة تواصلنا مع عملائنا تمامًا بفضل تكاملها السلس مع واتساب، شهدنا قفزة هائلة في معدلات التحويل وإكمال الطلبات، مع تجربة استخدام في غاية السهولة، وخدمة العملاء استثنائية، والدعم دائم ومجاني وعلى مدار الساعة، والنتائج تتحدث عن نفسها: معدل تحويل أعلى، تفاعل أكبر، رضا أعلى، وتجربة عملاء مثالية!
نوصي بها لأي علامة تجارية تبحث عن حل مبتكر لتعزيز تجربة العملاء! 🔥👏`,
    author: "ياسر",
    position: "CEO ",
    company: "Promate.sa",
    image:
      "https://images.unsplash.com/photo-144790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
];

// Trust badges
const trustBadges = [
  {
    name: "ISO 27001",
    logo: "/iso/ISO_27001.png",
  },
  {
    name: "SOC 2",
    logo: "/iso/SOC_2.png",
  },
  {
    name: "GDPR Compliant",
    logo: "/iso/DPR_Compliant.png",
  },
  {
    name: "PCI DSS",
    logo: "/iso/PCI_DSS.png",
  },
];

export function TestimonialsAndSecurity() {
  const [activeView, setActiveView] = useState("carousel"); // 'grid', 'carousel', or 'featured'
  const [currentPage, setCurrentPage] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const testimonialsRef = useRef(null);
  const isInView = useInView(testimonialsRef, { once: false, amount: 0.3 });

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Auto-rotate featured testimonial
  useEffect(() => {
    if (activeView !== "featured" || !isInView) return;

    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeView, isInView]);

  // Get current page testimonials
  const getCurrentPageTestimonials = () => {
    const startIndex = currentPage * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  // Navigation functions
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Testimonials Section */}
        <div ref={testimonialsRef} className="mb-24">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                ماذا يقول{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue to-blue-600">
                  عملاؤنا
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">نجاحنا يقاس برضا عملائنا وتحقيق أهدافهم</p>

              {/* View toggle buttons */}
              {/* <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-8">
                <button
                  onClick={() => setActiveView("grid")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeView === "grid" ? "bg-white text-google-blue shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  عرض الشبكة
                </button>
                <button
                  onClick={() => setActiveView("carousel")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeView === "carousel"
                      ? "bg-white text-google-blue shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  عرض الشريط
                </button>
                <button
                  onClick={() => setActiveView("featured")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeView === "featured"
                      ? "bg-white text-google-blue shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  عرض مميز
                </button>
              </div> */}
            </motion.div>
          </div>

          {/* Grid View */}
          {activeView === "grid" && (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`grid-page-${currentPage}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {getCurrentPageTestimonials().map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      {/* Quote Icon */}
                      <div className="text-google-blue opacity-20 mb-4">
                        <svg width="30" height="24" className="fill-current">
                          <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                        </svg>
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-gray-800 mb-4 line-clamp-4 min-h-[100px]">
                        {testimonial.quote}
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 mt-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover border-2 border-google-blue"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.author}</div>
                          <div className="text-xs text-gray-600">{testimonial.position}</div>
                          <div className="text-xs text-gray-500">{testimonial.company}</div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex mt-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={goToPrevPage}
                  className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentPage ? "bg-google-blue w-8" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNextPage}
                  className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          )}

          {/* Carousel View */}
          {activeView === "carousel" && (
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
                <button
                  onClick={goToPrevPage}
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
                <button
                  onClick={goToNextPage}
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                  aria-label="Next testimonials"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Testimonials Carousel */}
              <div className="overflow-hidden py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`carousel-page-${currentPage}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-6"
                  >
                    {getCurrentPageTestimonials()
                      .slice(0, 3)
                      .map((testimonial, index) => (
                        <motion.div
                          key={testimonial.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex-1 min-w-0"
                        >
                          {/* Quote Icon */}
                          <div className="mb-6 text-google-blue opacity-20">
                            <svg width="45" height="36" className="fill-current">
                              <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                            </svg>
                          </div>

                          {/* Testimonial Content */}
                          <blockquote className="text-lg text-gray-800 mb-6 min-h-[100px]">
                            {testimonial.quote}
                          </blockquote>

                          {/* Author Info */}
                          <div className="flex items-center gap-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-14 h-14 rounded-full object-cover border-2 border-google-blue"
                            />
                            <div>
                              <div className="font-semibold text-gray-900">{testimonial.author}</div>
                              <div className="text-sm text-gray-600">{testimonial.position}</div>
                              <div className="text-sm text-gray-500">{testimonial.company}</div>
                            </div>
                            <div className="ml-auto">
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentPage ? "bg-google-blue w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Featured View */}
          {activeView === "featured" && (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`featured-${featuredIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-lg relative overflow-hidden"
                >
                  {/* Large quote mark */}
                  <div className="absolute top-6 right-10 text-google-blue opacity-10">
                    <svg width="120" height="100" className="fill-current">
                      <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                    </svg>
                  </div>

                  <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="md:w-1/3 flex flex-col items-center">
                      <img
                        src={testimonials[featuredIndex].image}
                        alt={testimonials[featuredIndex].author}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mb-6"
                      />
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">{testimonials[featuredIndex].author}</div>
                        <div className="text-gray-600">{testimonials[featuredIndex].position}</div>
                        <div className="text-gray-500 mb-4">{testimonials[featuredIndex].company}</div>
                        <div className="flex justify-center">
                          {[...Array(testimonials[featuredIndex].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <blockquote className="text-2xl font-medium text-gray-800 mb-6 relative">
                        {testimonials[featuredIndex].quote}
                      </blockquote>

                      {/* Testimonial navigation */}
                      <div className="flex justify-between mt-8">
                        <button
                          onClick={() =>
                            setFeaturedIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                          }
                          className="flex items-center gap-2 text-google-blue hover:underline"
                        >
                          <ChevronRight className="h-5 w-5" />
                          <span>السابق</span>
                        </button>
                        <button
                          onClick={() => setFeaturedIndex((prev) => (prev + 1) % testimonials.length)}
                          className="flex items-center gap-2 text-google-blue hover:underline"
                        >
                          <span>التالي</span>
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Small testimonials preview */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
                {testimonials.slice(0, 6).map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setFeaturedIndex(index)}
                    className={`relative rounded-lg overflow-hidden transition-all ${
                      featuredIndex === index ? "ring-4 ring-google-blue" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-20 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                      <span className="text-xs text-white font-medium truncate w-full">{testimonial.author}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* View all testimonials button */}
          {/* <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center gap-2 text-google-blue hover:text-blue-700 font-medium">
              عرض جميع قصص النجاح
              <ArrowRight className="h-4 w-4" />
            </a>
          </div> */}
        </div>

        {/* Trust and Security Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">أمان وموثوقية بمعايير عالمية</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                نلتزم بأعلى معايير الأمان والخصوصية لحماية بياناتك وبيانات عملائك
              </p>
            </motion.div>
          </div>

          {/* Certification Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center h-24"
              >
                <img src={badge.logo} alt={badge.name} className="max-h-20 max-w-full object-vover" />
              </motion.div>
            ))}
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "تشفير البيانات",
                description: "تشفير من طرف إلى طرف لجميع البيانات",
              },
              {
                icon: Clock,
                title: "نسخ احتياطي مستمر",
                description: "نسخ احتياطي تلقائي كل ساعة",
              },
              {
                icon: Award,
                title: "امتثال للمعايير",
                description: "متوافق مع GDPR وSOC 2",
              },
              {
                icon: Building2,
                title: "مراكز بيانات آمنة",
                description: "مراكز بيانات موزعة جغرافياً",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <feature.icon className="h-8 w-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              تعرف على التزامنا بالأمان
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

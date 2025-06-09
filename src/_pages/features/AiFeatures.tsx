"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  // MessageSquare,
  Zap,
  FileText,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Settings,
  Play,
  // Braces,
  Users,
  Database,
  // Lock,
  // Shield,
  // Code,
  // Search,
  // BookOpen,
  // PenTool,
  Lightbulb,
  Star,
  BarChart,
  // Layers,
  RefreshCw,
  Gauge,
  // AlertCircle,
  // FileCheck,
  // UserCheck,
  // MessagesSquare,
  BrainCircuit,
  // Workflow,
  // Cpu,
  // GitBranch,
  Keyboard,
  Rocket,
  // ChevronRight,
  // ChevronLeft,
  Send,
  Clock,
  User,
  Wand2,
  Repeat,
  // Fingerprint,
  // Eye,
  // Network,
  Target,
  // Blocks,
  Loader2,
  Maximize2,
  Minimize2,
  // Expand,
  PieChart,
  // Shrink,
  // Info,
  Waves,
  Orbit,
  Atom,
  // Infinity,
  // Radar,
  // Printer as Prism,
} from "lucide-react";

// Sample conversation for AI demo
const demoConversation = [
  { role: "user", message: "مرحباً، أريد معرفة المزيد عن خدماتكم" },
  { role: "assistant", message: "أهلاً بك! يسعدني مساعدتك. نحن نقدم حلول متكاملة لإدارة علاقات العملاء تشمل:" },
  {
    role: "assistant",
    message:
      "1. منصة محادثات موحدة\n2. روبوتات محادثة ذكية\n3. أتمتة التسويق\n4. تحليلات متقدمة\n\nما الذي تود معرفة المزيد عنه؟",
  },
  { role: "user", message: "أخبرني أكثر عن روبوتات المحادثة" },
  {
    role: "assistant",
    message:
      "روبوتات المحادثة لدينا مدعومة بالذكاء الاصطناعي وتتميز بـ:\n- فهم اللغة العربية بشكل طبيعي\n- القدرة على التعلم من المحادثات السابقة\n- إمكانية التخصيص حسب احتياجات عملك\n\nهل تود تجربة عرض توضيحي؟",
  },
];

export function AiFeatures() {
  // const [activeSection, setActiveSection] = useState('autopilot');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState("wave");
  const [showAIVisualization, setShowAIVisualization] = useState(false);
  const [neuralNetworkNodes, setNeuralNetworkNodes] = useState<
    Array<{
      id: string;
      x: number;
      y: number;
      layer: number;
    }>
  >([]);
  const [neuralNetworkConnections, setNeuralNetworkConnections] = useState<
    Array<{
      source: { x: number; y: number };
      target: { x: number; y: number };
      active: boolean;
    }>
  >([]);

  // Generate neural network visualization
  useEffect(() => {
    if (showAIVisualization) {
      const nodes: any = [];
      const connections: any = [];

      // Generate nodes for 3 layers
      for (let layer = 0; layer < 3; layer++) {
        const nodesInLayer = layer === 1 ? 8 : 5;
        for (let i = 0; i < nodesInLayer; i++) {
          nodes.push({
            id: `${layer}-${i}`,
            x: layer * 200 + 100,
            y: i * 60 + (layer === 1 ? 30 : 60),
            layer,
          });
        }
      }

      // Generate connections between layers
      nodes.forEach((node: any) => {
        if (node.layer < 2) {
          const nextLayer = nodes.filter((n: any) => n.layer === node.layer + 1);
          nextLayer.forEach((target: any) => {
            connections.push({
              source: node,
              target,
              active: Math.random() > 0.7,
            });
          });
        }
      });

      setNeuralNetworkNodes(nodes);
      setNeuralNetworkConnections(connections);

      // Animate connections periodically
      const interval = setInterval(() => {
        setNeuralNetworkConnections((prev) =>
          prev.map((conn) => ({
            ...conn,
            active: Math.random() > 0.7,
          }))
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [showAIVisualization]);

  // Auto advance messages in demo
  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev < demoConversation.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Simulate training progress
  useEffect(() => {
    if (isTraining && trainingProgress < 100) {
      const timer = setInterval(() => {
        setTrainingProgress((prev) => Math.min(prev + 1, 100));
      }, 50);
      return () => clearInterval(timer);
    } else if (trainingProgress === 100) {
      setTimeout(() => {
        setIsTraining(false);
        setTrainingProgress(0);
      }, 1000);
    }
  }, [isTraining, trainingProgress]);

  // const handleTraining = () => {
  //   setIsTraining(true);
  // };

  const handleProcessing = () => {
    setIsProcessing(true);
    // Add a random delay between 1-3 seconds for more realistic feel
    setTimeout(() => setIsProcessing(false), 1000 + Math.random() * 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-10"></div>
          <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ذكاء اصطناعي متقدم
                <span className="block text-google-blue mt-2">لتجربة عملاء استثنائية</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                استفد من قوة الذكاء الاصطناعي لأتمتة خدمة العملاء، تحسين الإنتاجية، وتقديم تجربة شخصية لكل عميل
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  className="bg-google-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                  onClick={() => setIsExpanded(true)}
                >
                  ابدأ الآن مجاناً
                </button>
                <button
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                  onClick={() => handleProcessing()}
                >
                  عرض توضيحي
                </button>
              </div>
            </motion.div>
          </div>

          {/* AI Demo */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden relative"
            >
              {/* Neural Network Visualization */}
              {showAIVisualization && (
                <div className="absolute inset-0 pointer-events-none">
                  <svg width="100%" height="100%" className="opacity-10">
                    {neuralNetworkConnections.map((conn, i) => (
                      <motion.line
                        key={i}
                        x1={conn.source.x}
                        y1={conn.source.y}
                        x2={conn.target.x}
                        y2={conn.target.y}
                        stroke={conn.active ? "#4285f4" : "#e5e7eb10"}
                        strokeWidth="2"
                        strokeDasharray="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          pathLength: { duration: 1, delay: i * 0.05 },
                          stroke: { duration: 0.3 },
                        }}
                      />
                    ))}
                    {neuralNetworkNodes.map((node, i) => (
                      <motion.circle
                        key={i}
                        cx={node.x}
                        cy={node.y}
                        r={node.layer === 1 ? "8" : "6"}
                        fill={node.layer === 1 ? "#4285f4" : "#e5e7eb30"}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          scale: { duration: 0.5, delay: i * 0.1 },
                          fill: { duration: 0.3 },
                        }}
                        whileHover={{
                          scale: 1.2,
                          fill: node.layer === 1 ? "#4285f4" : "#4285f450",
                        }}
                      />
                    ))}
                  </svg>
                </div>
              )}
              {/* Demo Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-blue-100 p-2 rounded-lg cursor-pointer"
                      onClick={() => setShowAIVisualization(!showAIVisualization)}
                    >
                      {activeAnimation === "wave" ? (
                        <Waves className="h-6 w-6 text-google-blue" />
                      ) : activeAnimation === "orbit" ? (
                        <Orbit className="h-6 w-6 text-google-blue" />
                      ) : (
                        <Atom className="h-6 w-6 text-google-blue" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">المساعد الذكي</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">يتعلم ويتكيف مع احتياجات عملك</span>
                        <div className="flex gap-1">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              activeAnimation === "wave" ? "bg-google-blue" : "bg-gray-300"
                            } cursor-pointer`}
                            onClick={() => setActiveAnimation("wave")}
                          />
                          <div
                            className={`w-2 h-2 rounded-full ${
                              activeAnimation === "orbit" ? "bg-google-blue" : "bg-gray-300"
                            } cursor-pointer`}
                            onClick={() => setActiveAnimation("orbit")}
                          />
                          <div
                            className={`w-2 h-2 rounded-full ${
                              activeAnimation === "atom" ? "bg-google-blue" : "bg-gray-300"
                            } cursor-pointer`}
                            onClick={() => setActiveAnimation("atom")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">متصل</span>
                    {isExpanded ? (
                      <button onClick={() => setIsExpanded(false)} className="p-1 hover:bg-gray-100 rounded">
                        <Minimize2 className="h-4 w-4 text-gray-500" />
                      </button>
                    ) : (
                      <button onClick={() => setIsExpanded(true)} className="p-1 hover:bg-gray-100 rounded">
                        <Maximize2 className="h-4 w-4 text-gray-500" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6 h-96 overflow-y-auto">
                <div className="space-y-4">
                  {demoConversation.slice(0, messageIndex + 1).map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className="flex items-start gap-3 max-w-[80%]">
                        {msg.role === "assistant" && (
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Bot className="h-5 w-5 text-google-blue" />
                          </div>
                        )}
                        <div
                          className={`rounded-2xl p-4 ${
                            msg.role === "user" ? "bg-google-blue text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="whitespace-pre-line">{msg.message}</p>
                        </div>
                        {msg.role === "user" && (
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                            <User className="h-5 w-5 text-gray-600" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Demo Input */}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="اكتب رسالتك هنا..."
                    className={`flex-1 bg-gray-100 border-none rounded-lg px-4 py-2 ${
                      isProcessing ? "animate-pulse" : ""
                    }`}
                  />
                  <button
                    className={`bg-google-blue text-white p-2 rounded-lg ${
                      isProcessing ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                    }`}
                    disabled={isProcessing}
                  >
                    {isProcessing ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                  </button>
                </div>
                {isProcessing && (
                  <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    جاري معالجة الرسالة...
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature: AI Assistant Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 bg-blue-100 w-24 h-24 rounded-full opacity-60"></div>
                <div className="relative z-10 bg-white shadow-xl rounded-2xl overflow-hidden border border-blue-100">
                  <div className="bg-blue-500 text-white py-4 px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">المساعد الآلي الذكي</h3>
                      <Wand2 className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 mb-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 flex-1">
                            <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                            <div className="h-2 w-1/2 bg-gray-200 rounded mt-2"></div>
                          </div>
                        </div>
                      ))}

                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 flex-1 relative">
                          <div className="h-2 w-full bg-blue-100 rounded"></div>
                          <div className="h-2 w-5/6 bg-blue-100 rounded mt-2"></div>
                          <div className="h-2 w-2/3 bg-blue-100 rounded mt-2"></div>

                          <div className="absolute -right-2 -top-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-3 w-3" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="text-xs text-gray-500">وقت الاستجابة: 0.2 ثانية</div>
                      <div className="text-xs text-gray-500">دقة: 98%</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                مساعد آلي ذكي
                <span className="block text-google-blue">يتفهم العملاء بشكل طبيعي</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                روبوت محادثة متطور يستجيب لاستفسارات العملاء تلقائياً بذكاء وفهم للسياق، مما يحسن تجربة العملاء ويوفر
                وقت فريقك.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Brain, text: "فهم متقدم للغة العربية الطبيعية" },
                  { icon: Repeat, text: "تعلم مستمر من المحادثات السابقة" },
                  { icon: Zap, text: "استجابة فورية على مدار الساعة" },
                  { icon: Sparkles, text: "قدرة على التعامل مع الاستفسارات المعقدة" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-google-blue" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => handleProcessing()}
                  className="bg-google-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  <span>تجربة المساعد</span>
                </button>
                <button className="border border-google-blue text-google-blue px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  اكتشف المزيد
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature: Employee Assistant Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">
                مساعد الموظفين
                <span className="block text-indigo-600">دعم فريقك بذكاء</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                مساعد ذكي يدعم فريقك بإجابات وتوصيات أثناء خدمة العملاء، مما يمكنهم من تقديم خدمة أفضل وأسرع.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Lightbulb, text: "اقتراح ردود ذكية بناءً على سياق المحادثة" },
                  { icon: Database, text: "وصول سريع لقاعدة معرفة الشركة" },
                  { icon: Users, text: "تحسين أداء الموظفين وتقليل وقت التدريب" },
                  { icon: CheckCircle2, text: "ضمان توافق الردود مع سياسات الشركة" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => handleProcessing()}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  <span>تجربة المساعد</span>
                </button>
                <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                  اكتشف المزيد
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-indigo-100 w-24 h-24 rounded-full opacity-60"></div>
                <div className="relative z-10 bg-white shadow-xl rounded-2xl overflow-hidden border border-indigo-100">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">مساعد فريق خدمة العملاء</h3>
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <div className="text-sm font-medium mb-2">سؤال العميل:</div>
                      <p className="text-sm text-gray-600 mb-4">كيف يمكنني تغيير بيانات الشحن الخاصة بي؟</p>

                      <div className="bg-indigo-100 rounded-lg p-3">
                        <div className="text-xs text-indigo-700 mb-2">اقتراحات الرد:</div>
                        <div className="space-y-2">
                          <div className="bg-white p-2 rounded border border-indigo-200 text-sm cursor-pointer hover:bg-indigo-50 transition-colors">
                            يمكنك تغيير بيانات الشحن بسهولة من خلال الحساب الشخصي في قسم &quot;الإعدادات&quot; ثم
                            &quot;بيانات الشحن&quot;.
                          </div>
                          <div className="bg-white p-2 rounded border border-indigo-200 text-sm cursor-pointer hover:bg-indigo-50 transition-colors">
                            أهلاً! لتغيير بيانات الشحن، يرجى الانتقال إلى صفحة الحساب الشخصي واختيار &quot;عناوين
                            الشحن&quot; من القائمة.
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3 text-xs text-indigo-800">
                          <div className="flex items-center gap-1">
                            <Database className="h-3 w-3" />
                            <span>المصدر: سياسات الشحن</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>آخر تحديث: اليوم</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button className="text-xs text-indigo-600 flex items-center gap-1">
                        <RefreshCw className="h-3 w-3" />
                        <span>اقتراحات جديدة</span>
                      </button>
                      <button className="text-xs text-indigo-600 flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        <span>تحسين التوصيات</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature: Intent Analysis Section */}
      <section className="py-24 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 bg-green-100 w-24 h-24 rounded-full opacity-60"></div>
                <div className="relative z-10 bg-white shadow-xl rounded-2xl overflow-hidden border border-green-100">
                  <div className="bg-green-500 text-white py-4 px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">تحليل نوايا العملاء</h3>
                      <Target className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="text-sm mb-2">رسالة العميل:</div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4">
                        <p className="text-sm">أريد معرفة متى سيصل طلبي رقم #45678، لقد مر أكثر من أسبوع على الطلب.</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium">استفسار عن حالة طلب</span>
                          </div>
                          <span className="text-sm font-medium">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "92%" }}></div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm font-medium">شكوى تأخير</span>
                          </div>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: "45%" }}></div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium">طلب المساعدة</span>
                          </div>
                          <span className="text-sm font-medium">18%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "18%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-green-600">
                        <ArrowRight className="h-4 w-4" />
                        <span>توجيه إلى: فريق التوصيل</span>
                      </div>
                      <div className="text-xs text-gray-500">معالجة في: 0.3 ثانية</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                تحليل النوايا
                <span className="block text-green-600">فهم دقيق لاحتياجات العملاء</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                نظام متطور يحدد نوايا العملاء بدقة ويوجههم تلقائياً للمسار المناسب، مما يضمن استجابة سريعة وخدمة مخصصة.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Target, text: "تحليل دقيق لمحتوى رسائل العملاء" },
                  { icon: Gauge, text: "توجيه تلقائي للقسم المختص" },
                  { icon: Rocket, text: "تسريع وقت الاستجابة وحل المشكلات" },
                  { icon: PieChart, text: "تحسين مستمر للدقة مع مرور الوقت" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => handleProcessing()}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  <span>تجربة تحليل النوايا</span>
                </button>
                <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
                  اكتشف المزيد
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature: Auto-completion Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">
                إكمال تلقائي ذكي
                <span className="block text-purple-600">توفير الوقت وتحسين الجودة</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                نظام إكمال تلقائي متطور يقترح ويكمل الردود أثناء الكتابة، مما يوفر وقت الموظفين ويضمن جودة الردود.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Keyboard, text: "اقتراحات ذكية أثناء الكتابة" },
                  { icon: Sparkles, text: "تخصيص الاقتراحات حسب أسلوب الشركة" },
                  { icon: Clock, text: "توفير حتى 50% من وقت كتابة الردود" },
                  { icon: Settings, text: "إمكانية تخصيص وتدريب النظام" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => handleProcessing()}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  <span>تجربة الإكمال التلقائي</span>
                </button>
                <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                  اكتشف المزيد
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-purple-100 w-24 h-24 rounded-full opacity-60"></div>
                <div className="relative z-10 bg-white shadow-xl rounded-2xl overflow-hidden border border-purple-100">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">محرر ذكي</h3>
                      <Sparkles className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="text-sm mb-2">رد على عميل:</div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200 min-h-[100px] relative">
                        <p className="text-sm">
                          شكراً لتواصلك معنا. يسعدنا إبلاغك بأن طلبك رقم #45678{" "}
                          <span className="bg-purple-100 px-1 rounded">في مرحلة الشحن وسيصل خلال</span>
                        </p>

                        <div className="absolute bottom-3 left-3 right-3 bg-purple-100 text-purple-800 p-2 rounded-lg text-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Sparkles
                                className="h-4 w 
4 w-4"
                              />
                              <span>اقتراحات:</span>
                            </div>
                            <div className="flex gap-2">
                              <span className="px-1 bg-white rounded border border-purple-200 cursor-pointer hover:bg-purple-50">
                                1-2 أيام عمل
                              </span>
                              <span className="px-1 bg-white rounded border border-purple-200 cursor-pointer hover:bg-purple-50">
                                48 ساعة
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="text-xs text-gray-500">إحصائيات:</div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs">سرعة الكتابة</div>
                        <div className="text-xs font-medium text-green-600">+40%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "40%" }}></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs">دقة الاقتراحات</div>
                        <div className="text-xs font-medium text-purple-600">85%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 flex items-center justify-between">
                      <span>يتم تدريب النظام بناءً على أسلوبك في الكتابة</span>
                      <button className="text-purple-600 flex items-center gap-1">
                        <Settings className="h-3 w-3" />
                        <span>تخصيص</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature: Service Evaluation Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 bg-yellow-100 w-24 h-24 rounded-full opacity-60"></div>
                <div className="relative z-10 bg-white shadow-xl rounded-2xl overflow-hidden border border-yellow-100">
                  <div className="bg-yellow-500 text-white py-4 px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">تقييم الخدمة</h3>
                      <Star className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium">تحليل المحادثة #25478</div>
                        <div className="text-xs text-gray-500">منذ 5 دقائق</div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm">مستوى الرضا</div>
                          <div className="text-sm font-medium text-green-600">ممتاز</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm">سرعة الاستجابة</div>
                          <div className="text-sm font-medium text-green-600">سريعة جداً</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm">جودة الحل</div>
                          <div className="text-sm font-medium text-yellow-600">جيدة</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="text-xs text-gray-500 mb-1">توصيات للتحسين:</div>
                        <p className="text-xs text-gray-700">
                          تقديم معلومات أكثر تفصيلاً عن خيارات حل المشكلة وتوفير روابط للمساعدة الذاتية.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 justify-between">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <Star key={n} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">تقييم العميل: ممتاز (5/5)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                تقييم الخدمة
                <span className="block text-yellow-600">تحليل مستمر لتحسين الأداء</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                نظام تحليل متقدم يقيم جودة الخدمة المقدمة في المحادثات تلقائياً، ويقدم رؤى وتوصيات قيمة لتحسين أداء
                فريقك.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Star, text: "تقييم تلقائي لمستوى رضا العملاء" },
                  { icon: Lightbulb, text: "توصيات ذكية لتحسين الخدمة" },
                  { icon: BarChart, text: "تحليلات تفصيلية لأداء الفريق" },
                  { icon: Gauge, text: "تحديد نقاط القوة والضعف" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-yellow-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => handleProcessing()}
                  className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  <span>تجربة تقييم الخدمة</span>
                </button>
                <button className="border border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-50 transition-colors">
                  اكتشف المزيد
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature: Conversation Summary Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">
                تلخيص المحادثات
                <span className="block text-teal-600">استخلاص المعلومات المهمة</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                تقنية متطورة تلخص المحادثات الطويلة وتستخرج النقاط المهمة والإجراءات المطلوبة، مما يوفر الوقت ويضمن
                متابعة احتياجات العملاء.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: FileText, text: "تلخيص تلقائي للمحادثات الطويلة" },
                  { icon: CheckCircle2, text: "استخراج المهام والإجراءات المطلوبة" },
                  { icon: Database, text: "إضافة معلومات قيمة لملف العميل" },
                  { icon: Repeat, text: "تحسين عمليات المتابعة والتواصل اللاحق" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => handleProcessing()}
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  <span>تجربة تلخيص المحادثات</span>
                </button>
                <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">
                  اكتشف المزيد
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-teal-100 w-24 h-24 rounded-full opacity-60"></div>
                <div className="relative z-10 bg-white shadow-xl rounded-2xl overflow-hidden border border-teal-100">
                  <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-4 px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">ملخص المحادثة</h3>
                      <FileText className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="text-sm font-medium mb-3">ملخص محادثة العميل أحمد خالد:</div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-teal-700 font-medium mb-1">المشكلة الرئيسية:</div>
                          <p className="text-sm text-gray-700">تأخر وصول طلب #45678 المطلوب منذ أسبوعين.</p>
                        </div>

                        <div>
                          <div className="text-xs text-teal-700 font-medium mb-1">المعلومات المهمة:</div>
                          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                            <li>الطلب خرج من المستودع بتاريخ 10 مارس</li>
                            <li>العميل يحتاج المنتج بشكل عاجل للعمل</li>
                            <li>هذه الشحنة الثالثة التي تتأخر للعميل</li>
                          </ul>
                        </div>

                        <div>
                          <div className="text-xs text-teal-700 font-medium mb-1">الإجراءات المطلوبة:</div>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span>التواصل مع شركة الشحن للمتابعة</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              <span>تقديم خصم 15% على الطلب القادم كتعويض</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-yellow-500" />
                              <span>متابعة مع العميل خلال 24 ساعة</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <button className="text-teal-600 flex items-center gap-1">
                        <Database className="h-4 w-4" />
                        <span>إضافة للملف</span>
                      </button>

                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>محادثة منذ: 10 دقائق</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">ابدأ رحلة التحول الرقمي</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              حول طريقة خدمة عملائك مع حلول الذكاء الاصطناعي المتكاملة
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                onClick={() => handleProcessing()}
              >
                ابدأ الآن مجاناً
              </button>
              <button
                className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                onClick={() => handleProcessing()}
              >
                جدولة عرض توضيحي
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Processing Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center">
            <Loader2 className="h-8 w-8 text-google-blue animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">جاري المعالجة</h3>
            <p className="text-gray-600">يرجى الانتظار قليلاً...</p>
          </div>
        </div>
      )}
    </div>
  );
}

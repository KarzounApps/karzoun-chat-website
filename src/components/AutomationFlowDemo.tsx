import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
  Panel,
  Handle,
  Connection,
  ConnectionMode,
  EdgeProps,
  getBezierPath,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  MessageSquare,
  Bot,
  Zap,
  Mail,
  BellRing,
  ShoppingCart,
  Split,
  Send,
  Store,
  Plus,
  Timer,
  Users,
  Globe,
  Calendar,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

// Custom node components with handles
const CustomNode = ({ data, headerBg, headerIcon: Icon, headerText, headerTextColor }: any) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-visible min-w-[200px]">
    {/* Input Handle - Only one connection allowed */}
    <Handle
      type="target"
      position={Position.Left}
      className="w-3 h-3 rounded-full border-2 border-white bg-blue-400 -left-1.5"
    />

    <div className={`${headerBg} px-3 py-1.5 border-b border-gray-200 flex items-center gap-2`}>
      <div className={`${headerTextColor} p-1 rounded`}>
        <Icon className="h-3 w-3 text-white" />
      </div>
      <span className={`text-xs font-medium ${headerTextColor}`}>{headerText}</span>
    </div>

    <div className="p-3">
      <div className="flex items-center gap-2">
        <data.icon className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">{data.label}</span>
      </div>
      {data.description && <p className="text-xs text-gray-500 mt-1">{data.description}</p>}
      {data.content && <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-600">{data.content}</div>}
    </div>

    {/* Output Handle - Can connect to multiple nodes */}
    <Handle
      type="source"
      position={Position.Right}
      className="w-3 h-3 rounded-full border-2 border-white bg-blue-400 -right-1.5"
    />
  </div>
);

// Custom edge with delete button
const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [isHovered, setIsHovered] = useState(false);

  const onEdgeClick = (evt: React.MouseEvent, id: string) => {
    evt.stopPropagation();
    // We'll handle edge deletion through the parent component
  };

  return (
    <>
      <path
        id={id}
        style={{
          ...style,
          strokeWidth: 2,
          stroke: "#f59e0b",
          strokeDasharray: "5,5",
        }}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <foreignObject
          width={20}
          height={20}
          x={labelX - 10}
          y={labelY - 10}
          className="overflow-visible"
          requiredExtensions="http://www.w3.org/1999/xhtml"
        >
          <div
            className="flex items-center justify-center w-5 h-5 bg-red-500 rounded-full cursor-pointer text-white hover:bg-red-600"
            onClick={(event) => onEdgeClick(event, id)}
          >
            <X className="w-3 h-3" />
          </div>
        </foreignObject>
      )}
    </>
  );
};

const nodeTypes = {
  trigger: (props: any) => (
    <CustomNode
      {...props}
      headerBg="bg-purple-50"
      headerIcon={BellRing}
      headerText="محفز"
      headerTextColor="text-purple-700"
    />
  ),
  action: (props: any) => (
    <CustomNode
      {...props}
      headerBg="bg-green-50"
      headerIcon={Zap}
      headerText="إجراء"
      headerTextColor="text-green-700"
    />
  ),
  split: (props: any) => (
    <CustomNode
      {...props}
      headerBg="bg-yellow-50"
      headerIcon={Split}
      headerText="اختبار A/B"
      headerTextColor="text-yellow-700"
    />
  ),
  message: (props: any) => (
    <CustomNode
      {...props}
      headerBg="bg-blue-50"
      headerIcon={MessageSquare}
      headerText="رسالة"
      headerTextColor="text-blue-700"
    />
  ),
};

const edgeTypes = {
  custom: CustomEdge,
};

const availableActions = [
  {
    type: "trigger",
    label: "محفز",
    description: "بدء التدفق",
    icon: BellRing,
    color: "bg-purple-100",
  },
  {
    type: "message",
    label: "رسالة",
    description: "إرسال رسالة",
    icon: MessageSquare,
    color: "bg-blue-100",
  },
  {
    type: "action",
    label: "إجراء",
    description: "تنفيذ إجراء",
    icon: Zap,
    color: "bg-green-100",
  },
  {
    type: "split",
    label: "اختبار A/B",
    description: "تقسيم المسار",
    icon: Split,
    color: "bg-yellow-100",
  },
  {
    type: "email",
    label: "بريد إلكتروني",
    description: "إرسال بريد",
    icon: Mail,
    color: "bg-red-100",
  },
  {
    type: "bot",
    label: "روبوت",
    description: "رد آلي",
    icon: Bot,
    color: "bg-indigo-100",
  },
];

const initialNodes: Node[] = [
  // Cart Abandonment Flow
  {
    id: "cart-1",
    type: "trigger",
    data: {
      label: "سلة مهجورة",
      icon: ShoppingCart,
      description: "عميل ترك سلة تسوق نشطة",
    },
    position: { x: 0, y: 0 },
    sourcePosition: Position.Right,
  },
  {
    id: "cart-2",
    type: "split",
    data: {
      label: "اختبار رسائل الاسترداد",
      icon: Split,
    },
    position: { x: 250, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "cart-3a",
    type: "action",
    data: {
      label: "رسالة واتساب - النسخة أ",
      icon: Send,
      description: "عرض خصم 10%",
    },
    position: { x: 500, y: -50 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "cart-3b",
    type: "action",
    data: {
      label: "رسالة واتساب - النسخة ب",
      icon: Send,
      description: "عرض شحن مجاني",
    },
    position: { x: 500, y: 50 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "cart-4",
    type: "action",
    data: {
      label: "تتبع التحويل",
      icon: Store,
      description: "تتبع معدل استرداد السلة",
    },
    position: { x: 750, y: 0 },
    targetPosition: Position.Left,
  },

  // Welcome Flow
  {
    id: "welcome-1",
    type: "trigger",
    data: {
      label: "تسجيل عميل جديد",
      icon: Users,
      description: "عند تسجيل عميل جديد",
    },
    position: { x: 0, y: 200 },
    sourcePosition: Position.Right,
  },
  {
    id: "welcome-2",
    type: "action",
    data: {
      label: "رسالة ترحيب",
      icon: MessageSquare,
      description: "إرسال رسالة ترحيب",
    },
    position: { x: 250, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "welcome-3",
    type: "action",
    data: {
      label: "إرسال دليل البدء",
      icon: Mail,
      description: "إرسال دليل المستخدم",
    },
    position: { x: 500, y: 200 },
    targetPosition: Position.Left,
  },

  // Follow-up Flow
  {
    id: "followup-1",
    type: "trigger",
    data: {
      label: "زيارة صفحة المنتج",
      icon: Globe,
      description: "عند زيارة صفحة منتج",
    },
    position: { x: 0, y: 400 },
    sourcePosition: Position.Right,
  },
  {
    id: "followup-2",
    type: "action",
    data: {
      label: "انتظار 24 ساعة",
      icon: Timer,
      description: "تأخير 24 ساعة",
    },
    position: { x: 250, y: 400 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "followup-3",
    type: "action",
    data: {
      label: "رسالة متابعة",
      icon: MessageSquare,
      description: "إرسال عرض خاص",
    },
    position: { x: 500, y: 400 },
    targetPosition: Position.Left,
  },

  // Event Flow
  {
    id: "event-1",
    type: "trigger",
    data: {
      label: "حدث قادم",
      icon: Calendar,
      description: "قبل موعد الحدث",
    },
    position: { x: 0, y: 600 },
    sourcePosition: Position.Right,
  },
  {
    id: "event-2",
    type: "split",
    data: {
      label: "حالة التسجيل",
      icon: Split,
    },
    position: { x: 250, y: 600 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "event-3a",
    type: "action",
    data: {
      label: "تذكير بالتسجيل",
      icon: MessageSquare,
      description: "للمدعوين",
    },
    position: { x: 500, y: 550 },
    targetPosition: Position.Left,
  },
  {
    id: "event-3b",
    type: "action",
    data: {
      label: "تأكيد الحضور",
      icon: MessageSquare,
      description: "للمسجلين",
    },
    position: { x: 500, y: 650 },
    targetPosition: Position.Left,
  },
];

const initialEdges: Edge[] = [
  // Cart Abandonment Flow
  {
    id: "e-cart-1-2",
    source: "cart-1",
    target: "cart-2",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-cart-2-3a",
    source: "cart-2",
    target: "cart-3a",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-cart-2-3b",
    source: "cart-2",
    target: "cart-3b",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-cart-3a-4",
    source: "cart-3a",
    target: "cart-4",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-cart-3b-4",
    source: "cart-3b",
    target: "cart-4",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },

  // Welcome Flow
  {
    id: "e-welcome-1-2",
    source: "welcome-1",
    target: "welcome-2",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-welcome-2-3",
    source: "welcome-2",
    target: "welcome-3",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },

  // Follow-up Flow
  {
    id: "e-followup-1-2",
    source: "followup-1",
    target: "followup-2",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-followup-2-3",
    source: "followup-2",
    target: "followup-3",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },

  // Event Flow
  {
    id: "e-event-1-2",
    source: "event-1",
    target: "event-2",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-event-2-3a",
    source: "event-2",
    target: "event-3a",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-event-2-3b",
    source: "event-2",
    target: "event-3b",
    animated: true,
    type: "custom",
    style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "5,5" },
  },
];

// The actual flow component that uses the ReactFlow hooks
const FlowWithProvider = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showHint, setShowHint] = useState(true);
  const [showHint2, setShowHint2] = useState(false);

  const onConnect = useCallback(
    (params: Connection) => {
      // Check if target node already has an incoming connection
      const targetHasConnection = edges.some((edge) => edge.target === params.target);

      // If target already has a connection, don't add a new one
      if (targetHasConnection) {
        return;
      }

      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            type: "custom",
            style: {
              stroke: "#f59e0b",
              strokeWidth: 2,
              strokeDasharray: "5,5",
            },
          },
          eds
        )
      );
    },
    [edges, setEdges]
  );

  const onEdgeDelete = useCallback(
    (edgeId: string) => {
      setEdges((eds) => eds.filter((e) => e.id !== edgeId));
    },
    [setEdges]
  );

  return (
    <div className="relative h-[600px] overflow-visible mt-52">
      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -30 }}
          className="absolute -top-10 left-1/2 w-full md:w-auto -translate-x-1/2 z-10 bg-white md:px-10 px-3 py-3 rounded-full shadow-lg flex items-center gap-2"
        >
          <span className="md:text-sm text-xs text-gray-600 ">
            جرب تحريك وربط العناصر لتخصيص التدفق، انقر على الخط لحذف الاتصال 👋
          </span>
          <button onClick={() => setShowHint(false)} className="text-gray-400 hover:text-gray-600">
            ×
          </button>
        </motion.div>
      )}
      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -100 }}
          className="absolute -top-10 left-1/2 w-full md:w-auto  -translate-x-1/2 z-10 bg-white  md:px-10 px-3 py-3 rounded-full shadow-lg flex items-center gap-2"
        >
          <span className=" md:text-sm text-xs text-gray-600 ">
            صمم رحلات عملاء متطورة مع واجهتنا السهلة للسحب والإفلات. اربط الإجراءات والمحفزات والشروط بسلاسة
          </span>
          <button onClick={() => setShowHint(false)} className="text-gray-400 hover:text-gray-600">
            ×
          </button>
        </motion.div>
      )}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView={false}
        panOnScroll
        selectionOnDrag
        panOnDrag={true}
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
        minZoom={0.2}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 1.4 }}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          animated: true,
          type: "custom",
          style: {
            stroke: "#f59e0b",
            strokeWidth: 2,
            strokeDasharray: "5,5",
          },
        }}
      >
        <Panel position="top-right" className="bg-white p-2 rounded-lg shadow-lg border border-gray-200">
          <div className="w-44">
            <h3 className="text-xs font-medium text-gray-900 mb-2">الإجراءات المتاحة</h3>
            <div className="space-y-1 max-h-[300px] overflow-y-auto">
              {availableActions.map((action, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 cursor-pointer group"
                >
                  <div className={`${action.color} p-1.5 rounded-lg group-hover:scale-105 transition-transform`}>
                    <action.icon className="h-3 w-3 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-gray-900">{action.label}</div>
                    <div className="text-[10px] text-gray-500">{action.description}</div>
                  </div>
                  <Plus className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100">
              <button className="w-full flex items-center justify-center gap-1 px-2 py-1.5 bg-google-blue text-white rounded-lg hover:bg-blue-600 transition-colors text-xs">
                <Plus className="h-3 w-3" />
                إضافة إجراء جديد
              </button>
            </div>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

// Main component that wraps the flow with ReactFlowProvider
export function AutomationFlowDemo() {
  return (
    <ReactFlowProvider>
      <FlowWithProvider />
    </ReactFlowProvider>
  );
}

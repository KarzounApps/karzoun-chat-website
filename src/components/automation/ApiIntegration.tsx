import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Globe, Database, ArrowRight, CheckCircle2,
  Webhook, Link, Settings, Braces, Server, Cloud,
  Lock, Key, RefreshCw, FileJson, Terminal, Play,
  Blocks, Network, Cpu, GitBranch, Layers, Shield,
  Zap, MessageSquare, Send, Mail, Bot, Users
} from 'lucide-react';

export function ApiIntegration() {
  const [activeTab, setActiveTab] = useState('http');
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  
  const integrationTypes = [
    { id: 'http', name: 'طلبات HTTP', icon: Globe },
    { id: 'webhook', name: 'Webhooks', icon: Webhook },
    { id: 'database', name: 'قواعد البيانات', icon: Database },
    { id: 'custom', name: 'تكامل مخصص', icon: Code }
  ];
  
  const endpoints = {
    http: [
      {
        title: "إرسال طلب GET",
        description: "جلب البيانات من نقطة نهاية خارجية",
        method: "GET",
        url: "https://api.example.com/data",
        headers: {
          "Authorization": "Bearer {token}",
          "Content-Type": "application/json"
        },
        code: `// نموذج طلب GET
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {token}',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  // معالجة البيانات
  console.log(data);
});`
      },
      {
        title: "إرسال طلب POST",
        description: "إرسال بيانات إلى نقطة نهاية خارجية",
        method: "POST",
        url: "https://api.example.com/data",
        headers: {
          "Authorization": "Bearer {token}",
          "Content-Type": "application/json"
        },
        body: {
          "key": "value",
          "data": "{dynamic_data}"
        },
        code: `// نموذج طلب POST
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key: 'value',
    data: '{dynamic_data}'
  })
})
.then(response => response.json())
.then(data => {
  // معالجة الاستجابة
  console.log(data);
});`
      },
      {
        title: "تحديث البيانات",
        description: "تحديث بيانات موجودة باستخدام طلب PUT",
        method: "PUT",
        url: "https://api.example.com/data/{id}",
        headers: {
          "Authorization": "Bearer {token}",
          "Content-Type": "application/json"
        },
        body: {
          "key": "updated_value"
        },
        code: `// نموذج طلب PUT
fetch('https://api.example.com/data/{id}', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer {token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key: 'updated_value'
  })
})
.then(response => response.json())
.then(data => {
  // معالجة الاستجابة
  console.log(data);
});`
      }
    ],
    webhook: [
      {
        title: "استقبال Webhook",
        description: "إنشاء نقطة نهاية لاستقبال البيانات",
        url: "https://your-domain.com/webhook/endpoint",
        method: "POST",
        code: `// معالجة Webhook
app.post('/webhook/endpoint', (req, res) => {
  const data = req.body;
  
  // معالجة البيانات الواردة
  console.log('Webhook received:', data);
  
  // إرسال استجابة
  res.status(200).json({
    status: 'success',
    message: 'Webhook received'
  });
});`
      },
      {
        title: "إرسال Webhook",
        description: "إرسال بيانات إلى نقطة نهاية Webhook",
        url: "{webhook_url}",
        method: "POST",
        code: `// إرسال Webhook
fetch('{webhook_url}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    event: 'user_action',
    data: {
      user_id: 123,
      action: 'purchase'
    }
  })
})
.then(response => response.json())
.then(data => {
  console.log('Webhook sent:', data);
});`
      }
    ],
    database: [
      {
        title: "استعلام SQL",
        description: "تنفيذ استعلام SQL على قاعدة البيانات",
        code: `// نموذج استعلام SQL
const query = \`
  SELECT * FROM customers 
  WHERE last_purchase_date > NOW() - INTERVAL '30 days'
  AND total_purchases > 1000
\`;

executeQuery(query)
  .then(results => {
    // معالجة نتائج الاستعلام
    console.log(results);
  });`
      },
      {
        title: "تحديث البيانات",
        description: "تحديث سجلات في قاعدة البيانات",
        code: `// نموذج تحديث البيانات
const updateQuery = \`
  UPDATE customers 
  SET status = 'vip', 
      updated_at = NOW() 
  WHERE id = ?
\`;

executeUpdate(updateQuery, [customerId])
  .then(result => {
    console.log('تم تحديث السجل:', result);
  });`
      }
    ],
    custom: [
      {
        title: "كود JavaScript مخصص",
        description: "تنفيذ كود JavaScript مخصص",
        code: `// نموذج كود مخصص
async function customIntegration(data) {
  try {
    // معالجة البيانات
    const processedData = await processData(data);
    
    // إرسال إلى نظام خارجي
    const response = await sendToExternalSystem(processedData);
    
    // تحديث قاعدة البيانات
    await updateDatabase(response);
    
    return {
      status: 'success',
      data: response
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 'error',
      message: error.message
    };
  }
}`
      },
      {
        title: "معالجة الأحداث",
        description: "معالجة مخصصة للأحداث",
        code: `// نموذج معالجة الأحداث
eventEmitter.on('custom_event', async (event) => {
  // التحقق من نوع الحدث
  if (event.type === 'user_action') {
    // معالجة حدث المستخدم
    await handleUserAction(event.data);
  } else if (event.type === 'system_event') {
    // معالجة حدث النظام
    await handleSystemEvent(event.data);
  }
  
  // تسجيل الحدث
  await logEvent(event);
});`
      }
    ]
  };

  return (
    <div className="py-24 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              تكامل API متقدم
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ربط تدفقات الأتمتة مع الأنظمة الخارجية باستخدام واجهة برمجة التطبيقات المرنة والقوية
            </p>
          </motion.div>
        </div>

        {/* Integration Type Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {integrationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors ${
                activeTab === type.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 shadow-sm hover:bg-gray-50'
              }`}
            >
              <type.icon className="h-5 w-5" />
              <span>{type.name}</span>
            </button>
          ))}
        </div>

        {/* Integration Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Endpoints List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {endpoints[activeTab].map((endpoint, index) => (
              <div
                key={index}
                onClick={() => setSelectedEndpoint(endpoint)}
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 cursor-pointer transition-all ${
                  selectedEndpoint === endpoint ? 'ring-2 ring-indigo-500' : 'hover:shadow-xl'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Code className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{endpoint.title}</h3>
                    <p className="text-sm text-gray-600">{endpoint.description}</p>
                  </div>
                </div>

                {endpoint.method && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {endpoint.method}
                    </span>
                    <span className="text-sm text-gray-600">{endpoint.url}</span>
                  </div>
                )}

                {endpoint.headers && (
                  <div className="text-sm text-gray-600 mb-2">
                    <div className="font-medium mb-1">Headers:</div>
                    <pre className="bg-gray-50 p-2 rounded text-xs">
                      {JSON.stringify(endpoint.headers, null, 2)}
                    </pre>
                  </div>
                )}

                {endpoint.body && (
                  <div className="text-sm text-gray-600">
                    <div className="font-medium mb-1">Body:</div>
                    <pre className="bg-gray-50 p-2 rounded text-xs">
                      {JSON.stringify(endpoint.body, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-gray-400" />
                <h3 className="text-gray-200 font-medium">معاينة الكود</h3>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Copy className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Play className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm">
                <code className="text-gray-300">
                  {selectedEndpoint ? selectedEndpoint.code : '// اختر نوع التكامل لعرض نموذج الكود'}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Integration Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Lock,
              title: "آمن وموثوق",
              description: "تشفير كامل للبيانات وتأمين نقاط النهاية"
            },
            {
              icon: Zap,
              title: "أداء عالي",
              description: "معالجة سريعة للطلبات مع دعم للتخزين المؤقت"
            },
            {
              icon: RefreshCw,
              title: "مزامنة ثنائية الاتجاه",
              description: "تزامن البيانات في كلا الاتجاهين بين الأنظمة"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Documentation Link */}
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            <span>استكشف وثائق API الكاملة</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Add Copy icon component since it's not imported
function Copy(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
}
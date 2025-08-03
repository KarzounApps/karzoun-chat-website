import React from 'react';

const BulkActionsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-6 lg:pt-8 xl:pt-10 bg-gradient-to-br from-[#06142E] via-[#0B2A52] to-[#06142E] overflow-hidden" dir="rtl">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142E]/80 via-transparent to-[#06142E]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06142E]/60 via-transparent to-[#06142E]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
          تنفيذ إجراءات بالجملة
        </h1>
        
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-8 text-center leading-relaxed" 
              style={{textAlign: 'center', width: '100%', display: 'block'}}>
            قم بتغيير حالة أو حذف أو إضافة العملاء، المحادثات والكثير عبر تحديد الكل أو البعض
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          وفر ساعات من العمل اليدوي من خلال تنفيذ إجراءات متعددة على مئات أو آلاف العناصر بنقرة واحدة. إدارة فعالة وسريعة لقاعدة بياناتك
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors order-1">
            ابدأ الآن مجاناً
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors order-2">
            عرض توضيحي
          </button>
        </div>

        {/* Interactive Bulk Actions Illustration */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-[280px] md:h-[420px] flex items-center justify-center">
            <svg 
              viewBox="0 0 800 400" 
              className="w-full h-full max-w-4xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle cx="400" cy="200" r="180" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
              
              {/* CSV Upload Section - Top Left */}
              <g transform="translate(200, 80)">
                {/* CSV File Icon */}
                <rect x="0" y="0" width="60" height="80" rx="8" fill="#0042FF" opacity="0.9">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="8" y="8" width="44" height="4" rx="2" fill="white"/>
                <rect x="8" y="16" width="44" height="4" rx="2" fill="white"/>
                <rect x="8" y="24" width="44" height="4" rx="2" fill="white"/>
                <rect x="8" y="32" width="44" height="4" rx="2" fill="white"/>
                
                {/* Upload Arrow */}
                <path d="M30 50 L30 65 M25 55 L30 50 L35 55" stroke="#00C46C" strokeWidth="3" fill="none" strokeLinecap="round">
                  <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="2s" repeatCount="indefinite"/>
                </path>
                
                {/* Contacts flowing out */}
                <circle cx="80" cy="20" r="8" fill="#00C46C">
                  <animate attributeName="cx" values="80;120;160" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80" cy="40" r="8" fill="#00C46C">
                  <animate attributeName="cx" values="80;120;160" dur="4s" begin="0.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;0" dur="4s" begin="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80" cy="60" r="8" fill="#00C46C">
                  <animate attributeName="cx" values="80;120;160" dur="4s" begin="1s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;0" dur="4s" begin="1s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Conversation Assignment - Center */}
              <g transform="translate(320, 120)">
                {/* Chat Bubbles */}
                <ellipse cx="0" cy="0" rx="25" ry="15" fill="#0042FF" opacity="0.8">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="30" cy="-20" rx="20" ry="12" fill="#0042FF" opacity="0.8">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" begin="0.3s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="60" cy="10" rx="22" ry="14" fill="#0042FF" opacity="0.8">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" begin="0.6s" repeatCount="indefinite"/>
                </ellipse>
                
                {/* Selection Lines */}
                <path d="M-40 -30 L-20 -15 L0 0 L20 -8 L40 5 L80 -5" stroke="#00C46C" strokeWidth="2" fill="none" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/>
                </path>
                
                {/* Agent Avatars */}
                <g transform="translate(120, 60)">
                  <circle cx="0" cy="0" r="20" fill="#00C46C" opacity="0.9">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" begin="1s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="0" cy="0" r="12" fill="white"/>
                  <path d="M-6 -3 Q0 -8 6 -3 Q6 3 0 8 Q-6 3 -6 -3" fill="#0042FF"/>
                </g>
                
                <g transform="translate(160, 40)">
                  <circle cx="0" cy="0" r="20" fill="#00C46C" opacity="0.9">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" begin="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="0" cy="0" r="12" fill="white"/>
                  <path d="M-6 -3 Q0 -8 6 -3 Q6 3 0 8 Q-6 3 -6 -3" fill="#0042FF"/>
                </g>
              </g>

              {/* Workflow Automation - Bottom Right */}
              <g transform="translate(550, 280)">
                {/* Gear Icon */}
                <g>
                  <circle cx="0" cy="0" r="30" fill="none" stroke="#0042FF" strokeWidth="4">
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="0" cy="0" r="15" fill="#0042FF" opacity="0.8"/>
                  
                  {/* Gear Teeth */}
                  <rect x="-3" y="-35" width="6" height="10" fill="#0042FF">
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="-3" y="25" width="6" height="10" fill="#0042FF">
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="25" y="-3" width="10" height="6" fill="#0042FF">
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="-35" y="-3" width="10" height="6" fill="#0042FF">
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite"/>
                  </rect>
                </g>
                
                {/* Automation Sparks */}
                <circle cx="50" cy="-30" r="4" fill="#00C46C">
                  <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="2;6;2" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-40" cy="35" r="4" fill="#00C46C">
                  <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="2;6;2" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="35" cy="40" r="4" fill="#00C46C">
                  <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="1s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="2;6;2" dur="1.5s" begin="1s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Central Connection Lines */}
              <path d="M280 160 Q400 120 520 240" stroke="rgba(0,196,108,0.6)" strokeWidth="2" fill="none" strokeDasharray="8,4">
                <animate attributeName="stroke-dashoffset" values="0;-24" dur="3s" repeatCount="indefinite"/>
              </path>
              
              <path d="M360 200 Q400 180 440 200" stroke="rgba(0,196,108,0.6)" strokeWidth="2" fill="none" strokeDasharray="6,3">
                <animate attributeName="stroke-dashoffset" values="0;-18" dur="2.5s" repeatCount="indefinite"/>
              </path>

              {/* Title Labels */}
              <text x="230" y="50" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">استيراد جماعي</text>
              <text x="400" y="100" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">توزيع المحادثات</text>
              <text x="580" y="350" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">تشغيل آلي</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkActionsHero;


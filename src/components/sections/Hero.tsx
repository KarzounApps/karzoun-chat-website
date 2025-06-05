import { motion } from 'framer-motion';
import { AutomationFlowDemo } from '../AutomationFlowDemo';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4285f4,#34a853)] opacity-5"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(#4285f4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            أتمتة تواصلك مع العملاء
            <span className="text-google-blue"> بكل سهولة</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            حوّل علاقاتك مع العملاء من خلال أتمتة الرسائل الذكية.
            قم ببناء تدفقات العمل المرئية، وتواصل مع العملاء، ونمّي أعمالك مع منصتنا
            القوية لإدارة علاقات العملاء.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="rounded-md bg-google-blue px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              ابدأ مجاناً
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              شاهد العرض التوضيحي <span aria-hidden="true">←</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Automation Flow Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <AutomationFlowDemo />
        </motion.div>
      </div>
    </div>
  );
}
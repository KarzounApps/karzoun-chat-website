import { motion } from "framer-motion";
import { TicketManager } from "../TicketManager";

export function TeamManagement() {
  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 grid-cols-1  gap-12 items-center">
          <div className="text-start ">
            <h2 className="text-xl font-bold text-gray-900 mb-4">إدارة الفريق والمهام اسهل مع كرزون</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              تابِع حالة كل تذكرة لحظة بلحظة، وحدّد أولوياتها، وعيِّن المسؤول المناسب تلقائيًا. كرونز يجمع كل طلبات
              العملاء في مكان واحد، فيمنع ضياعها بين الأقسام ويُسرّع حلّها.
            </p>
            <div className="mt-4">
              <a href="#" className="text-google-blue text-sm hover:underline">
                استكشف مزايا إدارة التذاكر <span className="inline-block mr-1">←</span>
              </a>
            </div>
          </div>

          <div className="">
            <TicketManager />
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">كرزون تشات تتيح لفريقك أن يكون متعاون وأكثر إنتاجية وسرعة.</h3>
          <p className="text-gray-600 mb-8">وفّر وقت فريقك، وارفع رضى عملائك—كل ذلك من لوحة واحدة. كرزون شات</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-google-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
          >
            اشترك الآن
          </motion.button>
        </div>
      </div>
    </div>
  );
}

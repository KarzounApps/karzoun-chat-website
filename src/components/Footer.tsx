import { Facebook, Twitter, Instagram, YoutubeIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-right">
          <div className="lg:col-span-2">
            <img src="/logo.svg" alt="كرزون" className="h-8 mb-4" />
            <p className="text-gray-600 mb-4">
              نحن لسنا فقط شركة تقدم خدمات ومنتجات تقنية. نحن مجتمع متكامل لرواد العمل والتطوير في الوطن العربي
            </p>
            <div className="flex gap-4 justify-end">
              <a href="#" className="text-gray-400 hover:text-google-blue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-google-blue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-google-blue">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-google-blue">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">معلومات التواصل</h3>
            <ul className="space-y-2 text-gray-600">
              <li>كرزون ميديا ماشين اند ديجيتال</li>
              <li>سويسرا ت.م.م</li>
              <li className="text-sm">E-mail : support@karzoun.chat</li>
              <li>Sales WhatsApp : +971-50-774-6687</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">المساعدة والدعم</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  قل نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  اخر الاخبار
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  تواصل معنا
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  وثائق API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  مركز المساعدة &quot;قاعدة المعرفة&quot;
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">روابط عامة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  إدارة الفواتير
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  برنامج الشركاء
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  شروط الاستخدام
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  السياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-google-blue">
                  إعمل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/SOC2_Logo.svg" alt="SOC" className="h-12" />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Meta_Business_Partner.svg"
                alt="Meta Business Partner"
                className="h-12"
              />
            </div>
            <p className="text-gray-600 text-sm">جميع الحقوق محفوظة © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

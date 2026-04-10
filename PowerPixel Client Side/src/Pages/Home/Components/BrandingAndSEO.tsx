import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const brands = [
  {
    name: "BOYA",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/boya-200x200.png",
  },
  {
    name: "Rapoo",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/rapoo-200x200.png",
  },
  {
    name: "Vention",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/vention-200x200.png",
  },
  {
    name: "Huntkey",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/huntkey-200x200.png",
  },
  {
    name: "Lexar",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/lexar-200x200.png",
  },
  {
    name: "Cooler Master",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/cooler-master-200x200.png",
  },
  {
    name: "Power Guard",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/power-guard-200x200.png",
  },
  {
    name: "Asus",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/asus-200x200.png",
  },
  {
    name: "Gigabyte",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/gigabyte-200x200.png",
  },
  {
    name: "Logitech",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/logitech-200x200.png",
  },
  {
    name: "MSI",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/msi-200x200.png",
  },
  {
    name: "Intel",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/intel-200x200.png",
  },
  {
    name: "HP",
    logo: "https://www.startech.com.bd/image/cache/catalog/brand-logo/hp-200x200.png",
  },
];

const BrandingAndSEO = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brands Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted By 120+ Brands
          </h2>
          <div className="flex flex-wrap gap-4 items-center justify-start">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="w-32 h-20 bg-white border border-gray-100 rounded-lg flex items-center justify-center p-4 hover:shadow-md transition-shadow grayscale hover:grayscale-0 cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SEO / About Section */}
        <div className="relative">
          <div
            className={`transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-[5000px]" : "max-h-[400px]"}`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Largest Retail Computer Store | PowerPixel
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm lg:text-base">
              <p>
                PowerPixel is one of the largest computer stores in Bangladesh
                offering bundle deals and discounted prices for the latest
                computer accessories, laptops, notebooks,{" "}
                <span className="text-orange-600 font-medium">monitors</span>,
                desktop PC, office equipment, digital camera, printers, gaming
                peripherals, networking products, all security solutions, and
                software-antivirus. Find the best trends and latest technology
                prior to other brands with us to discover the next generation.
              </p>
              <p>
                Nowadays there are thousands of different computer stores and
                they provide various features and price and the number is
                increasing day by day. But for purchasing 100% branded and
                quality guaranteed products PowerPixel is one of the best
                options. We are authorized for all renowned brands like HP,
                DELL, ASUS, Intel, McAfee, Lenovo, Acer, LG, A4tech, TP-Link,
                CISCO, Canon, Gigabyte, Twinmos, A-Data, Microlab, Microsoft,
                etc.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Smartwatch Price In Bangladesh
              </h3>
              <p>
                A{" "}
                <span className="text-orange-600 font-medium">Smartwatch</span>{" "}
                is a <span className="text-orange-600 font-medium">watch</span>{" "}
                designed not only to tell time but to make your life easier and
                more modern. Although it looks like a watch, it shows the time,
                and many more features or technology are added. The smartwatch
                connects to your mobile phone, sending messages, making phone
                calls, or reading. Today's modern smartwatches have various
                health features that help you keep track of your health. It has
                heart rate monitoring, which monitors your heart rate and alerts
                you if anything abnormal happens.
              </p>
              <p>
                Also, blood oxygen monitoring (SpO2). SpO2 is an estimate of
                peripheral capillary oxygen saturation, the amount of oxygen in
                the blood. Also, the smartwatch provides real-time sleep
                monitoring that lets you know how long you've been asleep. You
                can see how many more steps you walked, how far you ran, and
                your sports activities. Many devices offer personalized workout
                suggestions, reminders to drink water, and emergency contact
                alerts if you're in danger. A smartwatch is a device that will
                help make your life easier. In Bangladesh, there are amazing
                smartwatch brands like{" "}
                <span className="text-orange-600 font-medium">
                  Xiaomi, Imilab, Kieslect, Kospet, Mibro, Amazfit, Apple,
                  Haylou
                </span>
                , etc.
              </p>
            </div>

            {/* Fade effect when collapsed */}
            {!isExpanded && (
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          {/* Show More Button */}
          {!isExpanded && (
            <div className="mt-6 flex justify-center relative z-10">
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-2 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-md transition-colors text-sm shadow-sm"
              >
                Show More <FaChevronDown />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandingAndSEO;

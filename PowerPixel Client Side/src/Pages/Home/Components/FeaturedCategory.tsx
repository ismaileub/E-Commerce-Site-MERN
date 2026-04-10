import * as React from "react";

type FeaturedProduct = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  badge: string;
};

const pcTabs = [
  "Laptop Deals",
  "Student Deals",
  "New Arrivals",
  "Bestsellers",
  "Featured",
];

const productsByCategory: Record<(typeof pcTabs)[number], FeaturedProduct[]> = {
  "Laptop Deals": [
    {
      id: "laptop-1",
      title: "UltraSlim Laptop",
      subtitle: "i5 • 16GB • 512GB SSD",
      price: "৳ 72,999",
      badge: "Deal",
    },
    {
      id: "laptop-2",
      title: "Creator Laptop",
      subtitle: "i7 • 16GB • RTX",
      price: "৳ 1,24,999",
      badge: "Hot",
    },
    {
      id: "laptop-3",
      title: "Gaming Laptop",
      subtitle: "Ryzen 7 • 16GB • 1TB",
      price: "৳ 1,39,999",
      badge: "Save",
    },
    {
      id: "laptop-4",
      title: "Everyday Laptop",
      subtitle: "i3 • 8GB • 256GB SSD",
      price: "৳ 48,999",
      badge: "Budget",
    },
    {
      id: "laptop-5",
      title: "Business Laptop",
      subtitle: "i5 • 16GB • Fingerprint",
      price: "৳ 68,999",
      badge: "Work",
    },
    {
      id: "laptop-6",
      title: "Thin & Light",
      subtitle: "14-inch • 10hr battery",
      price: "৳ 59,999",
      badge: "Slim",
    },
    {
      id: "laptop-7",
      title: "Pro Creator",
      subtitle: "i7 • RTX • 1TB SSD",
      price: "৳ 1,49,999",
      badge: "Pro",
    },
    {
      id: "laptop-8",
      title: "Budget Notebook",
      subtitle: "Celeron • 4GB • 128GB SSD",
      price: "৳ 34,999",
      badge: "Save",
    },
    {
      id: "laptop-9",
      title: "Travel Laptop",
      subtitle: "Portable • Fast charge",
      price: "৳ 53,999",
      badge: "Travel",
    },
    {
      id: "laptop-10",
      title: "Premium Ultrabook",
      subtitle: "OLED • Metal body",
      price: "৳ 1,09,999",
      badge: "Elite",
    },
  ],
  "Student Deals": [
    {
      id: "student-1",
      title: "Study Laptop",
      subtitle: "Lightweight • Long battery",
      price: "৳ 45,999",
      badge: "Student",
    },
    {
      id: "student-2",
      title: "Wireless Mouse",
      subtitle: "Silent click • 2.4GHz",
      price: "৳ 799",
      badge: "Bundle",
    },
    {
      id: "student-3",
      title: "Backpack",
      subtitle: "Laptop sleeve • Water resistant",
      price: "৳ 1,599",
      badge: "New",
    },
    {
      id: "student-4",
      title: "Headset",
      subtitle: "Mic • Comfortable fit",
      price: "৳ 1,299",
      badge: "Deal",
    },
    {
      id: "student-5",
      title: "Notebook Bundle",
      subtitle: "Books • Pen • Folder",
      price: "৳ 499",
      badge: "Bundle",
    },
    {
      id: "student-6",
      title: "Laptop Stand",
      subtitle: "Foldable • Aluminum",
      price: "৳ 899",
      badge: "New",
    },
    {
      id: "student-7",
      title: "USB Hub",
      subtitle: "4-port • Type-C",
      price: "৳ 799",
      badge: "Deal",
    },
    {
      id: "student-8",
      title: "Portable SSD",
      subtitle: "512GB • Fast backup",
      price: "৳ 4,499",
      badge: "Save",
    },
    {
      id: "student-9",
      title: "Webcam",
      subtitle: "1080p • Mic built-in",
      price: "৳ 2,299",
      badge: "Top",
    },
    {
      id: "student-10",
      title: "Router",
      subtitle: "Dual-band • Stable net",
      price: "৳ 2,999",
      badge: "Study",
    },
  ],
  "New Arrivals": [
    {
      id: "new-1",
      title: "DDR5 RAM",
      subtitle: "16GB • 5600MHz",
      price: "৳ 5,999",
      badge: "New",
    },
    {
      id: "new-2",
      title: "NVMe SSD",
      subtitle: "1TB • PCIe Gen4",
      price: "৳ 9,499",
      badge: "New",
    },
    {
      id: "new-3",
      title: "Mechanical Keyboard",
      subtitle: "Hot-swap • RGB",
      price: "৳ 3,499",
      badge: "New",
    },
    {
      id: "new-4",
      title: "IPS Monitor",
      subtitle: "24-inch • 75Hz",
      price: "৳ 14,999",
      badge: "New",
    },
    {
      id: "new-5",
      title: "Gaming Headphones",
      subtitle: "7.1 surround • RGB",
      price: "৳ 2,499",
      badge: "New",
    },
    {
      id: "new-6",
      title: "Motherboard",
      subtitle: "B760 • DDR5",
      price: "৳ 21,999",
      badge: "New",
    },
    {
      id: "new-7",
      title: "PC Case",
      subtitle: "Tempered glass • Airflow",
      price: "৳ 5,999",
      badge: "New",
    },
    {
      id: "new-8",
      title: "Graphics Card",
      subtitle: "8GB • GDDR6",
      price: "৳ 42,999",
      badge: "New",
    },
    {
      id: "new-9",
      title: "Wi-Fi Adapter",
      subtitle: "AX210 • Bluetooth 5.2",
      price: "৳ 1,799",
      badge: "New",
    },
    {
      id: "new-10",
      title: "Smart UPS",
      subtitle: "1200VA • Backup power",
      price: "৳ 9,999",
      badge: "New",
    },
  ],
  Bestsellers: [
    {
      id: "best-1",
      title: "Gaming Mouse",
      subtitle: "RGB • 8 buttons",
      price: "৳ 1,299",
      badge: "Top",
    },
    {
      id: "best-2",
      title: "Office Keyboard",
      subtitle: "Full-size • Quiet keys",
      price: "৳ 999",
      badge: "Top",
    },
    {
      id: "best-3",
      title: "27-inch Monitor",
      subtitle: "2K • 144Hz",
      price: "৳ 29,999",
      badge: "Top",
    },
    {
      id: "best-4",
      title: "Power Strip",
      subtitle: "Surge protection",
      price: "৳ 699",
      badge: "Top",
    },
    {
      id: "best-5",
      title: "Mouse Pad",
      subtitle: "Extended • Anti-slip",
      price: "৳ 499",
      badge: "Top",
    },
    {
      id: "best-6",
      title: "Cooling Pad",
      subtitle: "Dual fan • Silent",
      price: "৳ 1,499",
      badge: "Top",
    },
    {
      id: "best-7",
      title: "Printer",
      subtitle: "All-in-one • Wi-Fi",
      price: "৳ 16,999",
      badge: "Top",
    },
    {
      id: "best-8",
      title: "External HDD",
      subtitle: "2TB • USB 3.0",
      price: "৳ 8,499",
      badge: "Top",
    },
    {
      id: "best-9",
      title: "Desk Lamp",
      subtitle: "LED • Eye comfort",
      price: "৳ 1,199",
      badge: "Top",
    },
    {
      id: "best-10",
      title: "USB Keyboard",
      subtitle: "Full-size • Durable",
      price: "৳ 1,199",
      badge: "Top",
    },
  ],
  Featured: [
    {
      id: "feat-1",
      title: "Motherboard",
      subtitle: "ATX • Wi‑Fi • DDR5",
      price: "৳ 18,999",
      badge: "Featured",
    },
    {
      id: "feat-2",
      title: "Processor",
      subtitle: "8‑Core • High boost",
      price: "৳ 24,999",
      badge: "Featured",
    },
    {
      id: "feat-3",
      title: "RAM Kit",
      subtitle: "32GB • Dual channel",
      price: "৳ 8,999",
      badge: "Featured",
    },
    {
      id: "feat-4",
      title: "Gaming Chair",
      subtitle: "Ergonomic • Adjustable",
      price: "৳ 12,499",
      badge: "Featured",
    },
    {
      id: "feat-5",
      title: "Power Supply",
      subtitle: "650W • 80+ Bronze",
      price: "৳ 6,499",
      badge: "Featured",
    },
    {
      id: "feat-6",
      title: "CPU Cooler",
      subtitle: "Tower • Quiet fan",
      price: "৳ 3,299",
      badge: "Featured",
    },
    {
      id: "feat-7",
      title: "Monitor Arm",
      subtitle: "Gas spring • Adjustable",
      price: "৳ 4,199",
      badge: "Featured",
    },
    {
      id: "feat-8",
      title: "SSD Enclosure",
      subtitle: "NVMe • Portable",
      price: "৳ 1,999",
      badge: "Featured",
    },
    {
      id: "feat-9",
      title: "Gaming Desk",
      subtitle: "Carbon finish • Spacious",
      price: "৳ 18,499",
      badge: "Featured",
    },
    {
      id: "feat-10",
      title: "RGB Fans",
      subtitle: "3-pack • ARGB",
      price: "৳ 2,599",
      badge: "Featured",
    },
  ],
};

const FeaturedCategory = () => {
  const [value, setValue] = React.useState(2);

  const activeCategory = pcTabs[value];
  const activeProducts = productsByCategory[activeCategory] ?? [];

  return (
    <div className="mt-16 w-full max-w-8xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
            Featured Categories
          </h2>
          <p className="mt-2 text-gray-500 max-w-md">
            Handpicked selections from our most popular categories built for
            performance and reliability.
          </p>
        </div>

        {/* Tab Header */}
        <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-xl w-fit">
          {pcTabs.map((tab, index) => {
            const isActive = value === index;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setValue(index)}
                className={
                  "px-5 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg whitespace-nowrap " +
                  (isActive
                    ? "bg-white text-orange-500 shadow-sm ring-1 ring-black/5"
                    : "text-gray-500 hover:text-gray-900")
                }
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {activeProducts.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-gray-100 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 text-orange-600 uppercase tracking-wider border border-orange-100">
                {product.badge}
              </span>
            </div>

            {/* Image Placeholder - Compacted Aspect Ratio */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center transition-colors group-hover:bg-gray-100 mb-4">
              <div className="text-gray-200 transform transition-transform duration-500 group-hover:scale-110">
                <svg
                  className="w-14 h-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <p className="mt-0.5 text-xs text-gray-500 line-clamp-1 leading-relaxed">
                  {product.subtitle}
                </p>
              </div>

              <div className="pt-1 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-medium">
                    Price
                  </span>
                  <span className="text-lg font-extrabold text-orange-600">
                    {product.price}
                  </span>
                </div>

                <button
                  type="button"
                  className="p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-orange-600 bg-orange-50 border border-orange-100 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;

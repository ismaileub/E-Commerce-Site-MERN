import { FaUserPlus, FaTag, FaCheckCircle, FaLaptop } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-cyan-600" size={24} />,
    title: "Join PowerPixel",
    description:
      "Create your account to unlock exclusive member-only deals and early access.",
  },
  {
    icon: <FaTag className="text-cyan-600" size={24} />,
    title: "Find Your Deal",
    description:
      "Browse curated categories and discover high-performance PC components.",
  },
  {
    icon: <FaCheckCircle className="text-cyan-600" size={24} />,
    title: "Hassle-Free Order",
    description: "Secure checkout and fast delivery straight to your doorstep.",
  },
  {
    icon: <FaLaptop className="text-cyan-600" size={24} />,
    title: "Enjoy Performance",
    description:
      "Build your dream setup and experience the power of Pixel-perfect gaming.",
  },
];

const WorkProcess = () => {
  return (
    <div className="mt-20 w-full max-w-8xl mx-auto px-4 sm:px-6 mb-20 text-center">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
          Getting Started is Easy
        </h2>
        <p className="mt-4 text-slate-700 max-w-2xl mx-auto text-lg leading-relaxed">
          Follow these simple steps to build your dream PC setup with
          PowerPixel's premium selection.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 relative">
        {/* Connection Line (Desktop only) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-50 group-hover:border-cyan-200 group-hover:shadow-lg group-hover:-translate-y-2">
                {step.icon}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center">
                {index + 1}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;

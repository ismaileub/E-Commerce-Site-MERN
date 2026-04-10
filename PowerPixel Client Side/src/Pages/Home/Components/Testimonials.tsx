import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahat Ahmed",
    role: "Professional Gamer",
    content:
      "PowerPixel built me a beast of a machine. The performance is incredible, and the customer service was top-notch throughout the build process.",
    rating: 5,
    avatarColor: "bg-orange-100 text-orange-600",
  },
  {
    name: "Sarah Kabir",
    role: "Content Creator",
    content:
      "Finding genuine PC components in Bangladesh can be tough, but PowerPixel is a name I trust. My 4K editing rig works flawlessly.",
    rating: 5,
    avatarColor: "bg-blue-100 text-blue-600",
  },
  {
    name: "Tanvir Hossain",
    role: "Software Architect",
    content:
      "Price-to-performance ratio here is the best. I appreciate the transparency and the expert advice provided by their technical team.",
    rating: 5,
    avatarColor: "bg-green-100 text-green-600",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Builders & Gamers
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Don't just take our word for it—see what our community has to say
            about their PowerPixel experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
            >
              <FaQuoteLeft className="text-orange-100 absolute top-6 right-8 text-4xl" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-orange-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${testimonial.avatarColor}`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

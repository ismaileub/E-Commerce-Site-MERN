import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                PowerPixel
              </h2>
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-6">
              Your trusted store for PC parts, accessories, and deals.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="hover:text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/cart">
                  Cart
                </Link>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Offers
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold text-white">Policies</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:text-white" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Refund Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Delivery Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-gray-400" />
                <span className="text-gray-400">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-400" />
                <a className="hover:text-white" href="tel:+880000000000">
                  +880 0000-000000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400" />
                <a
                  className="hover:text-white"
                  href="mailto:support@powerpixel.com"
                >
                  support@powerpixel.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {year} PowerPixel. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built for performance and great deals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

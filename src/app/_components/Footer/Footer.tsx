import { TiShoppingCart } from "react-icons/ti";

import {
  FaCarSide,
  FaHeadphones,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaArrowRotateLeft } from "react-icons/fa6";

import { BiCurrentLocation } from "react-icons/bi";
export default function Footer() {
  return (
    <div>
      <footer className="bg-slate-900 text-white">
        <div className="bg-green-100 text-black py-4 flex justify-around text-sm">
          <div className="flex items-center gap-2">
            <FaCarSide size={30} color="green" /> Free Shipping On orders over
            500 EGP
          </div>
          <div className="flex items-center gap-2">
            <FaArrowRotateLeft size={30} color="green" /> Easy Returns 14-day
            return policy
          </div>
          <div className="flex items-center gap-2">
            <BiCurrentLocation size={30} color="green" /> Secure Payment 100%
            secure checkout
          </div>
          <div className="flex items-center gap-2">
            <FaHeadphones size={30} color="green" /> 24/7 Support Contact us
            anytime
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-6 gap-8 text-sm">
          <div className="md:col-span-2">
            <h1 className="text-xl font-extrabold flex items-center gap-2">
              <TiShoppingCart size={40} color="green" />
              FreshCart
            </h1>
            <p className="mt-4 text-gray-300 text-sm">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>
            <div className="mt-4 space-y-2 text-gray-400 text-sm">
              <p> +1 (800) 123-4567</p>
              <p> support@freshcart.com</p>
              <p> 123 Commerce Street, New York, NY 10001</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white flex items-center gap-2">
                <FaFacebookF size={30} />
              </a>
              <a href="#" className="hover:text-white flex items-center gap-2">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="hover:text-white flex items-center gap-2">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="hover:text-white flex items-center gap-2">
                <FaYoutube size={30} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Brands
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Men's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Women's Fashion
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-extraboldmb-4">Account</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shopping Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Create Account
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 text-gray-500 text-sm py-4 flex justify-between max-w-7xl mx-auto px-6">
          <p>© 2026 FreshCart. All rights reserved.</p>
          <div className="flex gap-3">
            <FaCcVisa size={35} />
            <FaCcMastercard size={35} />
            <FaCcPaypal size={35} />
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import Image from "next/image";

const FooterSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start justify-between py-12 border-b">
          {/* Left Side - Logo */}
          <div className="w-64 mb-6 md:mb-0">
            <div className="relative">
              <Image
                src="/assets/svgs/2025/ETHAccra-circular.svg"
                alt="ETHAccra Logo"
                width={240}
                height={240}
                priority
              />
            </div>
          </div>
          
          {/* Right Side - Text and Icons */}
          <div className="w-full md:w-3/5">
            {/* Community Text */}
            <div className="mb-8">
              <p className="text-black text-xl leading-relaxed mb-6">
                Our vibrant community welcomes developers, designers, researchers, and enthusiasts to push the boundaries of technology in West Africa. Accra is poised to be the epicenter of Ethereum innovation in the region.
              </p>
              <p className="text-black text-xl font-medium">
                Come for the hack, stay for the vibes.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {/* Telegram Icon */}
              <a href="https://t.me/+pXympPbcG7U5NWI0" className="block" target="_blank">
                <div className="w-14 h-14 rounded-full bg-pink-600 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <g id="SVGRepo_iconCarrier">
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#faf9f7"></path>
                    </g>
                  </svg>
                </div>
              </a>
              
              {/* X/Twitter Icon - Keep original */}
              <a href="https://x.com/ETHAccra" className="block" target="_blank">
                <div className="w-14 h-14 rounded-full bg-orange-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                      <g transform="scale(5.12,5.12)">
                        <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
              
              {/* Email Icon */}
              <a href="mailto:info@ethaccra.xyz" className="block" target="_blank">
                <div className="w-14 h-14 rounded-full bg-yellow-300 flex items-center justify-center">
                  <svg width="24" height="24" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#faf9f7">
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009 c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067 c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745 c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51 c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05 c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104 c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929 c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443 c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925 l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244 c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16 c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572 c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 flex flex-wrap justify-between items-center text-black">
          <div className="mb-4 md:mb-0">
            <p>All rights reserved 2025</p>
          </div>
          <div className="flex flex-wrap space-x-8">
            <a href="#about-us" className="mb-2 md:mb-0 hover:underline">About Us</a>
            <a href="#contact-us" className="mb-2 md:mb-0 hover:underline">Contact Us</a>
            <a href="#faqs" className="mb-2 md:mb-0 hover:underline">FAQs</a>
            <a href="#gallery" className="mb-2 md:mb-0 hover:underline">Gallery</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
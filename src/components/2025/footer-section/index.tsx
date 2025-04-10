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
              <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#F472B6"/>
                  <path d="M5.5 13L18 7L12 19L9.5 14.5L5.5 13Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* X/Twitter Icon */}
              <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FB923C"/>
                  <path d="M18 8L16 8L13 12.5L10 8L8 8L12 14L8 20L10 20L13 15.5L16 20L18 20L14 14L18 8Z" fill="white"/>
                </svg>
              </div>
              
              {/* Email Icon */}
              <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FCD34D"/>
                  <path d="M5 9L12 13L19 9M5 9V15C5 15.5523 5.44772 16 6 16H18C18.5523 16 19 15.5523 19 15V9M5 9L7 8M19 9L17 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 flex flex-wrap justify-between items-center text-black">
          <div className="mb-4 md:mb-0">
            <p>All rights reserved 2025</p>
          </div>
          <div className="flex flex-wrap space-x-8">
            <a href="#" className="mb-2 md:mb-0 hover:underline">About Us</a>
            <a href="#" className="mb-2 md:mb-0 hover:underline">Contact Us</a>
            <a href="#" className="mb-2 md:mb-0 hover:underline">FAQs</a>
            <a href="#" className="mb-2 md:mb-0 hover:underline">Gallery</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
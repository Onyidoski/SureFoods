'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react'; 

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center pt-24 md:pt-0 font-sans">
      
      {/* Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-gray-800/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="text-left space-y-8">
            
            {/* TAG: HIDDEN ON MOBILE (hidden md:flex) */}
            <div className="hidden md:flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-white/80 text-xl">✨</span>
              <p className="text-gray-400 font-semibold tracking-wider text-xs uppercase">
                Premium Nigerian Cuisine
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Order Tasty & <br />
              Fresh Food <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Anytime.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Skip the market stress. Fresh Oha, Egusi, and Stews delivered to your doorstep in premium liters.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <a 
                href="#menu"
                className="group relative px-8 py-4 bg-[#ff4d4d] text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(255,77,77,0.2)] hover:shadow-[0_10px_40px_rgba(255,77,77,0.4)] hover:translate-y-[-2px] transition-all duration-300"
              >
                Order Now
              </a>

              <Link 
                href="#menu" 
                className="text-gray-300 font-medium hover:text-white flex items-center gap-2 transition-colors"
              >
                See Menu
                <span className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-all">
                  <ArrowDown size={14} />
                </span>
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-white/5 animate-spin-slow" />
              
              <Image 
                src="/images/hero-plate.png" 
                alt="Nigerian Soup"
                fill
                priority
                className="object-contain drop-shadow-2xl animate-float z-10" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Floating Element 1 */}
              <div className="absolute top-0 right-0 md:top-10 md:-right-10 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 animate-bounce-slow shadow-2xl z-20">
                 <div className="w-10 h-10 bg-white/10 rounded-full overflow-hidden relative p-1">
                    <Image src="/images/egusi.webp" alt="Small" fill className="object-cover" />
                 </div>
                 <div>
                   <p className="text-white text-xs font-bold">Egusi Special</p>
                   <p className="text-gray-400 text-xs">₦25,000</p>
                 </div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute bottom-0 -left-4 md:bottom-10 md:-left-12 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-3 animate-bounce-delayed shadow-2xl z-20">
                 <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow-lg">
                   <span className="text-xs font-bold">✔</span>
                 </div>
                 <div>
                   <p className="text-white text-xs font-bold">Fast Delivery</p>
                   <p className="text-gray-400 text-[10px]">30-45 mins</p>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
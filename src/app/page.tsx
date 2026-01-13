import MenuSection from '@/components/MenuSection';
import Hero from '@/components/Hero';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { SITE_CONFIG } from '@/lib/config';
import { MapPin, Clock, Wallet, CheckCircle2 } from 'lucide-react'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tighter">
            Sure<span className="text-[#ff4d4d]">Foods</span>.
          </div>
          <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Help?
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <Hero />

      {/* MENU SECTION */}
      <MenuSection />

      {/* --- DELIVERY SECTION --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#ff4d4d] font-bold tracking-widest text-xs uppercase mb-3 block">
              Logistics & Handling
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight font-sans">
              Fast & Reliable Delivery
            </h2>
            <p className="text-gray-500 text-lg font-medium font-sans">
              We ensure your soup arrives hot, fresh, and sealed tight.
            </p>
          </div>

          {/* The Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Coverage */}
            <div className="group bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-black">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-sans">Coverage Areas</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-sans">
                We currently deliver to all locations within <span className="text-gray-900 font-semibold">Enugu Metropolis</span>. Special arrangements can be made for outskirts.
              </p>
            </div>

            {/* Card 2: Timing */}
            <div className="group bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-black">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-sans">Delivery Timing</h3>
              <ul className="space-y-3 text-sm text-gray-500 font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Same-day: Order before 4 PM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Next-day: For late orders</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Fees */}
            <div className="group bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-black">
                <Wallet size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-sans">Delivery Fees</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-sans">
                Standard delivery ranges from <span className="text-gray-900 font-bold">₦1,500 - ₦3,000</span> depending on your exact distance from our kitchen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] text-gray-400 py-12 text-center border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-2xl font-bold text-white mb-6 tracking-tighter">
            Sure<span className="text-[#ff4d4d]">Foods</span>.
          </div>
          <p className="text-sm mb-6 font-sans">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-xs text-gray-600 uppercase tracking-widest font-sans">
            <span>Enugu</span>
            <span>•</span>
            <span>Lagos</span>
            <span>•</span>
            <span>Abuja</span>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTON */}
      <FloatingWhatsApp />
      
    </main>
  );
}
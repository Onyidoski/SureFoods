'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MenuItem, PriceVariant } from '@/data/menu';
import { SITE_CONFIG } from '@/lib/config';
import { formatCurrency } from '@/lib/utils';

interface FoodCardProps {
  item: MenuItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  // State to track which size is selected. Default to 2L.
  const [selectedSize, setSelectedSize] = useState<PriceVariant>('2L');

  // Get current price based on selection
  const currentPrice = item.prices[selectedSize];

  // Generate the WhatsApp Link dynamically
  const generateWhatsAppLink = () => {
    const message = `Hello, I'd like to order:
*${item.name}*
Size: ${selectedSize}
Price: ${formatCurrency(currentPrice)}

Please confirm availability.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* 1. IMAGE SECTION */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
        <Image 
          src={item.image} 
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-800 rounded-full shadow-sm">
          {item.category}
        </span>
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {item.name}
          </h3>
        </div>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 font-light">
           Freshly prepared {item.name} ready for delivery.
        </p>

        {/* 3. SIZE SELECTOR */}
        <div className="mt-auto">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-2 block">
            Select Quantity
          </label>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {(['2L', '3L', '5L'] as PriceVariant[]).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`
                  py-2 px-1 text-sm font-medium rounded-lg border transition-all duration-200
                  ${selectedSize === size 
                    ? 'bg-black text-white border-black ring-2 ring-black/20' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }
                `}
              >
                {size}
              </button>
            ))}
          </div>

          {/* 4. PRICE & ACTION FOOTER */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Price</span>
              <span className="text-xl font-bold text-gray-900">
                {formatCurrency(currentPrice)}
              </span>
            </div>

            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg active:scale-95 group/btn"
            >
              {/* Official WhatsApp Logo SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                className="group-hover/btn:rotate-12 transition-transform duration-300"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              <span>Order</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
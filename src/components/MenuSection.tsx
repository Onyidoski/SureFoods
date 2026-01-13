'use client';

import { useState } from 'react';
import FoodCard from './FoodCard';
import { menuItems } from '@/data/menu';

// Get unique categories from the data automatically
const categories = ['All', ...new Set(menuItems.map((item) => item.category))];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50 font-sans" id="menu">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* SECTION HEADER - NOW FORCED TO POPPINS */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight font-sans">
            Our Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium font-sans">
            Choose your preferred quantity. Order directly via WhatsApp.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar touch-pan-x">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 font-sans
                ${activeCategory === category
                  ? 'bg-black text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* THE RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 font-sans">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}
// src/data/menu.ts

export type PriceVariant = '2L' | '3L' | '5L';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Soup' | 'Rice' | 'Stew'; // Based on PRD section 5.8
  description?: string; // Optional short description
  image: string; // Path to image in public folder
  prices: {
    [key in PriceVariant]: number;
  };
  isAvailable: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Bitter Leaf Soup',
    category: 'Soup',
    image: '/images/bitterleaf.jpg', // We will add placeholders later
    prices: { '2L': 25000, '3L': 45000, '5L': 65000 },
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Oha Soup',
    category: 'Soup',
    image: '/images/oha.jpg',
    prices: { '2L': 25000, '3L': 45000, '5L': 65000 },
    isAvailable: true,
  },
  {
    id: '3',
    name: 'Egusi Soup',
    category: 'Soup',
    image: '/images/egusi.webp',
    prices: { '2L': 23000, '3L': 42000, '5L': 63000 },
    isAvailable: true,
  },
  {
    id: '4',
    name: 'Okra Soup',
    category: 'Soup',
    image: '/images/okra.jpg',
    prices: { '2L': 23000, '3L': 42000, '5L': 63000 },
    isAvailable: true,
  },
  {
    id: '5',
    name: 'Stew',
    category: 'Stew',
    image: '/images/stew.jpeg',
    prices: { '2L': 25000, '3L': 45000, '5L': 65000 },
    isAvailable: true,
  },
  {
    id: '6',
    name: 'Nsala Soup',
    category: 'Soup',
    image: '/images/nsala.jpg',
    prices: { '2L': 30000, '3L': 50000, '5L': 75000 },
    isAvailable: true,
  },
  {
    id: '7',
    name: 'Vegetable Soup',
    category: 'Soup',
    image: '/images/vegetable.jpeg',
    prices: { '2L': 23000, '3L': 42000, '5L': 63000 },
    isAvailable: true,
  },
  {
    id: '8',
    name: 'Ogbono Soup',
    category: 'Soup',
    image: '/images/ogbono.jpg',
    prices: { '2L': 23000, '3L': 42000, '5L': 63000 },
    isAvailable: true,
  },
  {
    id: '9',
    name: 'Jollof Rice',
    category: 'Rice',
    image: '/images/jollof.jpg',
    prices: { '2L': 25000, '3L': 45000, '5L': 65000 },
    isAvailable: true,
  },
  {
    id: '10',
    name: 'Fried Rice',
    category: 'Rice',
    image: '/images/fried-rice.jpeg',
    prices: { '2L': 30000, '3L': 50000, '5L': 70000 },
    isAvailable: true,
  },
];
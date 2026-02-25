'use client';


import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { LATEST_RESULTS, NEWS_ITEMS, PRODUCTS, UPCOMING_MATCHES } from '../constants';
import { MatchResult, NewsItem, Product, CartItem } from '../types';

interface DataContextType {
  matches: MatchResult[];
  upcomingMatches: MatchResult[];
  news: NewsItem[];
  products: Product[];
  cartItems: CartItem[];
  updateMatch: (id: number, data: Partial<MatchResult>) => void;
  updateNews: (id: number, data: Partial<NewsItem>) => void;
  addNews: (item: Omit<NewsItem, 'id'>) => void;
  deleteNews: (id: number) => void;
  updateProduct: (id: number, data: Partial<Product>) => void;
  addProduct: (item: Omit<Product, 'id'>) => void;
  deleteProduct: (id: number) => void;
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (cartId: string) => void;
  updateCartItemQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state with data from constants (acting as initial DB seed)
  const [matches, setMatches] = useState<MatchResult[]>(LATEST_RESULTS);
  const [upcomingMatches, setUpcomingMatches] = useState<MatchResult[]>(UPCOMING_MATCHES);
  const [news, setNews] = useState<NewsItem[]>(NEWS_ITEMS);
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Sync state with constants when they change (useful for development/editing code)
  useEffect(() => {
    setMatches(LATEST_RESULTS);
  }, [LATEST_RESULTS]);

  useEffect(() => {
    setUpcomingMatches(UPCOMING_MATCHES);
  }, [UPCOMING_MATCHES]);

  useEffect(() => {
    setNews(NEWS_ITEMS);
  }, [NEWS_ITEMS]);

  useEffect(() => {
    setProducts(PRODUCTS);
  }, [PRODUCTS]);

  const updateMatch = (id: number, data: Partial<MatchResult>) => {
    setMatches(prev => prev.map(m => m.id === id ? { ...m, ...data } : m));
  };

  const updateNews = (id: number, data: Partial<NewsItem>) => {
    setNews(prev => prev.map(n => n.id === id ? { ...n, ...data } : n));
  };

  const addNews = (item: Omit<NewsItem, 'id'>) => {
    const newId = Math.max(...news.map(n => n.id), 0) + 1;
    setNews(prev => [{ id: newId, ...item }, ...prev]);
  };

  const deleteNews = (id: number) => {
    setNews(prev => prev.filter(n => n.id !== id));
  };

  const updateProduct = (id: number, data: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...data } : p));
  };

  const addProduct = (item: Omit<Product, 'id'>) => {
    const newId = Math.max(...products.map(p => p.id), 0) + 1;
    setProducts(prev => [{ id: newId, ...item }, ...prev]);
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addToCart = (product: Product, size: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.selectedSize === size);
      
      if (existingItem) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, {
        ...product,
        selectedSize: size,
        quantity: 1,
        cartId: `${product.id}-${size}-${Date.now()}`
      }];
    });
  };

  const removeFromCart = (cartId: string) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateCartItemQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.cartId === cartId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <DataContext.Provider value={{ 
      matches, upcomingMatches, news, products, cartItems,
      updateMatch, updateNews, addNews, deleteNews,
      updateProduct, addProduct, deleteProduct,
      addToCart, removeFromCart, updateCartItemQuantity, clearCart
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

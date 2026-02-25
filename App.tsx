
import React, { useState, useEffect } from 'react';
import { DataProvider, useData } from './context/DataContext'; // Import Provider and hook
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './components/HomePage';
import { ClubPage } from './components/ClubPage';
import { TeamsPage } from './components/TeamsPage';
import { MembershipPage } from './components/MembershipPage';
import { SponsorsPage } from './components/SponsorsPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactsPage } from './components/ContactsPage';
import { StorePage } from './components/StorePage';
import { RegistrationPage } from './components/RegistrationPage';
import { NewsPage } from './components/NewsPage';
import { NewsDetailPage } from './components/NewsDetailPage';
import { AlbumDetailPage } from './components/AlbumDetailPage';
import { AdminDashboard } from './components/AdminDashboard'; // Import Admin
import { LoadingScreen } from './components/LoadingScreen';
import { StoreCart } from './components/StoreCart';
import { CheckoutForm } from './components/CheckoutForm';
import { WhatsAppWidget } from './components/WhatsAppWidget';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [previousCartLength, setPreviousCartLength] = useState(0);
  const { cartItems, removeFromCart, updateCartItemQuantity, clearCart } = useData();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Abrir carrinho automaticamente quando um item é adicionado
  useEffect(() => {
    if (cartItems.length > previousCartLength && cartItems.length > 0) {
      setIsCartOpen(true);
    }
    setPreviousCartLength(cartItems.length);
  }, [cartItems.length, previousCartLength]);

  const handleNavigate = (page: string, id?: number) => {
    // Reset scroll to top immediately
    window.scrollTo(0, 0);
    
    setActivePage(page);
    if (page === 'noticia-detalhe' && id) {
      setSelectedNewsId(id);
    } else if (page === 'album-detalhe' && id) {
      setSelectedAlbumId(id);
    }
    
    // Ensure scroll to top after render cycle
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const renderContent = () => {
    if (activePage === 'admin') {
       return <AdminDashboard onLogout={() => setActivePage('home')} />;
    }

    switch (activePage) {
      case 'equipas':
        return <TeamsPage />;
      case 'clube':
        return <ClubPage />;
      case 'socios':
        return <MembershipPage />;
      case 'patrocinadores':
        return <SponsorsPage />;
      case 'galeria':
        return <GalleryPage onNavigate={handleNavigate} />;
      case 'album-detalhe':
        return selectedAlbumId ? <AlbumDetailPage albumId={selectedAlbumId} onNavigate={handleNavigate} /> : <GalleryPage onNavigate={handleNavigate} />;
      case 'contactos':
        return <ContactsPage />;
      case 'loja':
        return <StorePage />;
      case 'inscricoes':
        return <RegistrationPage />;
      case 'noticias':
        return <NewsPage onNavigate={handleNavigate} activePage={activePage} cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />;
      case 'noticia-detalhe':
        return selectedNewsId ? <NewsDetailPage newsId={selectedNewsId} onNavigate={handleNavigate} /> : <NewsPage onNavigate={handleNavigate} activePage={activePage} cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />;
      case 'home':
      default:
        return <HomePage onNavigate={setActivePage} />;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  // If Admin page is active, we might want to hide standard Navbar/Footer or keep them. 
  // For a clean admin experience, let's hide them when on 'admin'.
  if (activePage === 'admin') {
     return <div className="min-h-screen font-sans bg-gray-50">{renderContent()}</div>;
  }

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
    clearCart();
  };

  const total = cartItems.reduce((sum, item) => sum + (parseFloat(String(item.price).replace('€', '')) * item.quantity), 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen font-sans bg-gray-50 animate-fade-in">
      <Navbar 
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />
      
      <main>
        {renderContent()}
      </main>
      
      <StoreCart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateCartItemQuantity}
        onCheckout={handleCheckout}
      />

      <CheckoutForm
        isOpen={isCheckoutOpen}
        onClose={handleCheckoutClose}
        items={cartItems}
        total={total}
      />
      
      <Footer onNavigate={handleNavigate} />
      <WhatsAppWidget />
      <CookieConsent />
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
};

export default App;

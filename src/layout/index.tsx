import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export default function Layout() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (mainRef.current) {
      console.log(mainRef.current.scrollTop);
      mainRef.current.scrollTop = 0;
      console.log(mainRef.current.scrollTop);
    }
  }, [location.pathname]);

  return (
    <div className="flex h-[900px] w-[425px] flex-col overflow-auto">
      <Header />
      <div ref={mainRef} className="flex-1 overflow-auto">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

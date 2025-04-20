import { Outlet, useLocation, useNavigate } from 'react-router';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex h-[900px] w-[425px] flex-col overflow-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

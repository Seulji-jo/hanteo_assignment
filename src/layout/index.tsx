import { Outlet } from 'react-router';
import Header from './Header';
import Banner from '../components/Banner';

export default function Layout() {
  return (
    <div className="flex h-[900px] w-[425px] flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Banner />
        <section className="flex-1 overflow-y-auto bg-neutral-200">
          <Outlet />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

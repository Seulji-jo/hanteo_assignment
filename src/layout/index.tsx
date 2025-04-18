import { NavLink, Outlet } from 'react-router';
import NavList from '../components/NavList';

export default function Layout() {
  return (
    <div>
      <header>
        <header>
          <nav>
            <ul>
              <NavList path="/chart" name="차트" />
              <NavList path="/whook" name="Whook" />
              <NavList path="/events" name="이벤트" />
              <NavList path="/news" name="뉴스" />
              <NavList path="/store" name="스토어" />
              <NavList path="/charging" name="충전소" />
            </ul>
          </nav>
        </header>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

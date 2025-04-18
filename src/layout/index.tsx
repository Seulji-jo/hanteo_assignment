import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <header>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/category">카테고리</NavLink>
              </li>
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

import NavList from '../components/NavList';

export default function Header() {
  return (
    <header className="h-[45px] bg-[#FFB1B2]">
      <nav className="h-full content-center">
        <ul className="flex flex-nowrap">
          <NavList path="/chart" name="차트" />
          <NavList path="/whook" name="Whook" />
          <NavList path="/events" name="이벤트" />
          <NavList path="/news" name="뉴스" />
          <NavList path="/store" name="스토어" />
          <NavList path="/charging" name="충전소" />
        </ul>
      </nav>
    </header>
  );
}

import { NavLink } from 'react-router';

interface ListProps {
  path: string;
  name: string;
}

export default function NavList({ path, name }: ListProps) {
  return (
    <li className="px-[15px]">
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? 'text-white' : '')}
      >
        {name}
      </NavLink>
    </li>
  );
}

import { NavLink } from 'react-router';

interface ListProps {
  path: string;
  name: string;
}

export default function NavList({ path, name }: ListProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `text-lg font-bold ${isActive ? 'text-white' : ''}`
      }
    >
      {name}
    </NavLink>
  );
}

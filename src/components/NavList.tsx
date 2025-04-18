import { NavLink } from 'react-router';

interface ListProps {
  path: string;
  name: string;
}

export default function NavList({ path, name }: ListProps) {
  return (
    <li>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
}

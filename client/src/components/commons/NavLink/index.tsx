import { NavItem } from "@/types/nav-item";
import Link from "next/link"; 

const NavLink: React.FC<NavItem> = ({ href, label, isExternal }) => {
  const Component = href.startsWith('#') ? 'a' : Link;

  return (
    <Component
        href={href}
        className="nav-item"
        {...(isExternal && {
            target: '_blank',
            rel: 'noopener noreferrer'
        })}
    >
        {label}
    </Component>
  )
};

export default NavLink;
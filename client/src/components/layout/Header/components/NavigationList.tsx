import NavLink from "@/components/commons/NavLink";
import { NavItem } from "@/types/nav-item";

const NavigationList = ({ navigation }: { navigation: NavItem[] }) => {
  return (
    <ul className="flex space-x-12">
      {navigation.map((item) => (
        <li key={item.href}>
          <NavLink {...item} />
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
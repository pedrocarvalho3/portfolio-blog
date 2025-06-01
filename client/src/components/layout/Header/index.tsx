'use client';

import useSmoothScroll from './hooks/use-smooth-scroll';
import { NavItem } from '@/types/nav-item';
import NavigationList from './components/NavigationList';
import Logo from '@/components/commons/Logo';

export interface HeaderProps {
  logoUrl: string;
  logoText: string;
  navigation: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ logoUrl, logoText, navigation }) => {
  useSmoothScroll();

  return (
    <header className="default-container flex items-end justify-between pt-8" role="banner">
      <Logo logoUrl={logoUrl} logoText={logoText} />
      <NavigationList navigation={navigation} />
    </header>
  );
};

export default Header;

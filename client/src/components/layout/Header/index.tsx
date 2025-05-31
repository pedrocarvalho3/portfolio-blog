'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/components/commons/NavLink';

import useSmoothScroll from './hooks/use-smooth-scroll';

const Header: React.FC = () => {
  useSmoothScroll();

  return (
    <header className="default-container flex items-end justify-between pt-8" role="banner">
      <div>
        <Link href="/" className="text-gray-300">
          <Image
            src="/pedro_dev.png"
            alt="Pedro Dev"
            width={300}
            height={300}
            className="w-48"
          />
        </Link>
      </div>
      <nav role="navigation" aria-label="Main navigation">
        <ul className="flex space-x-12">
          {/* {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink {...item} />
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Social() {
  return (
    <nav className="fixed left-10 top-1/2 z-50 -translate-y-1/2">
      <ul className="flex flex-col gap-8">
        <Link href="https://github.com/pedrocarvalho3" target="_blank">
          <li className="text-teal-300 transition-all duration-300 hover:text-teal-700">
            <Github className="h-8 w-8" />
          </li>
        </Link>
        <Link href="https://www.instagram.com/pdr_vinic" target="_blank">
          <li className="text-teal-300 transition-all duration-300 hover:text-teal-700">
            <Instagram className="h-8 w-8" />
          </li>
        </Link>
        <Link
          href="https://www.linkedin.com/in/pedrocarvalhodev/"
          target="_blank"
        >
          <li className="text-teal-300 transition-all duration-300 hover:text-teal-700">
            <Linkedin className="h-8 w-8" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

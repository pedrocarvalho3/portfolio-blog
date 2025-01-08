'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const element = document.getElementById(targetId || '');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <header className="flex items-end justify-between container">
      <div>
        <Link href="/" className="text-gray-300">
          <Image src="/pedro_dev.png" alt="Pedro Dev" width={300} height={300} className="w-48" />
        </Link>
      </div>
      <nav>
      <ul className="flex space-x-12">
          <li>
            <Link href="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="nav-item">
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#projetos" className="nav-item">
              Projetos
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-item">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#experiencia" className="nav-item">
              Experiência
            </a>
          </li>
          <li>
            <a href="#contato" className="nav-item">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}


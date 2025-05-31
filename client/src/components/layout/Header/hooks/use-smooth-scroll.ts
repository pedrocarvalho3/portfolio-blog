import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const element = document.getElementById(targetId || '');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
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
};

export default useSmoothScroll;

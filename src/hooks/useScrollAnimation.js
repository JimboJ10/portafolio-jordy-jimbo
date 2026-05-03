import { useEffect } from "react";

/**
 * Hook que observa elementos con la clase 'animate-on-scroll'
 * y les añade la clase 'visible' cuando entran al viewport.
 * Los elementos que ya están visibles al cargar se animan inmediatamente.
 */
export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    // Pequeño delay para asegurar que los elementos estén en el DOM
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}

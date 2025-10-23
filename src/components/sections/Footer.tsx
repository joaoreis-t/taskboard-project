import { useEffect, useState } from "react";

export const Footer = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollable = document.documentElement.scrollHeight > window.innerHeight;
      setIsScrollable(scrollable);
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <footer
      className={`text-center text-gray-500 pt-[10px] pb-[30px] transition-all dark:text-[#8E8E8E] ${
        isScrollable
          ? "mt-auto relative"
          : "fixed bottom-[0px] left-0 w-full"
      }`}
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      Desenvolvido por João Reis
    </footer>
  );
};
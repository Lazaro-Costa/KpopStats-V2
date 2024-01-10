import React, { useState, useEffect } from 'react';

const FootRoot: React.FC = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer
      className={`glass border-glass-t text-slate-50 w-full h-8 sm:h-16 fixed bottom-0 transition-all duration-300 ${
        showFooter ? 'opacity-100' : 'opacity-0 -bottom-16'
      }`}
    >
      <div className="h-full flex items-center justify-center">
      Powered by <a href="https://www.instagram.com/lazarao_?igsh=ODA1NTc5OTg5Nw=="
      className='flex mx-1 text-blue-500'>&copy;LZ Productions</a> | {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default FootRoot;

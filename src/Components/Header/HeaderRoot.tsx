import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const HeaderRoot: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`glass border-glass-b text-slate-50 w-full h-14 sm:h-16 fixed top-0 transition-all duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 -top-16'
      }`}
    >
      <div className="h-full flex p-2">
        <nav className="self-start">
          <Link to="/" aria-label="KpopStats - Home">
            <Logo />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderRoot;

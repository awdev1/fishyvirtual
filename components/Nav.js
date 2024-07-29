import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/staff', label: 'Staff' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/route', label: 'Routes' },
    { href: '/events', label: 'Events' },
    { href: '/joinus', label: 'Join Us' },
  ];

  return (
    <nav className="bg-yellow-500 bg-opacity-75 backdrop-blur-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="text-white font-bold text-xl">Fishy Virtual</a>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:ml-auto">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} legacyBehavior>
                  <a
                    className={`text-white hover:bg-yellow-600 px-3 py-2 rounded-md text-sm font-medium ${
                      router.pathname === item.href ? 'bg-yellow-600' : ''
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-yellow-600 p-2 rounded-md"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} legacyBehavior>
                <a
                  className={`block text-white hover:bg-yellow-600 px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname === item.href ? 'bg-yellow-600' : ''
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

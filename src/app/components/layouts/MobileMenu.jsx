import Link from 'next/link';
import Image from 'next/image';

import DropDown from '../Dropdown';

const links = [
  { label: 'GAME', path: '/' },
  { label: 'HEROES', path: '/' },
  { label: 'NEWS', path: '/' },
  { label: 'ESPORTS', path: '/' },
];

const MobileMenu = ({ isOpen, onOpen }) => {
  return (
    <div
      className={`${isOpen} fixed lg:hidden inset-0 w-full min-h-screen bg-brand-dark transition-all duration-300 p-5`}
    >
      <div className="inline-flex items-center gap-6">
        <DropDown />
        <Link
          href="/"
          className="hover:text-purple-400 transition-all duration-200"
        >
          LOGIN
        </Link>
      </div>
      <div className="w-full h-full grid place-content-center">
        <button
          className="absolute top-5 right-5"
          onClick={() => onOpen('-translate-y-full')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="space-y-8 text-center">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.path}
                className="hover:text-purple-400  transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="btn-gradient py-3.5 px-8">PLAY FOR FREE</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

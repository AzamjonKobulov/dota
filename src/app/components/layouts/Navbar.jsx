'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import MobileMenu from '../layouts/MobileMenu';
import Dropdown from '../Dropdown';

const links = [
  { label: 'GAME', path: '/' },
  { label: 'HEROES', path: '/' },
  { label: 'NEWS', path: '/' },
  { label: 'ESPORTS', path: '/' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState('-translate-y-full');
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 z-50 ${
        scrolling ? 'box-gradient !rounded-none bg-brand-dark/95' : ''
      }`}
    >
      <div className=" max-w-base mx-auto flex items-center justify-between px-5 py-4 md:py-5">
        <div className="w-40 h-8 md:w-[12.75rem] md:h-10 shrink-0">
          <Image
            src="/assets/images/logo-nav.svg"
            alt="Logo"
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
        <ul className="hidden lg:flex items-center gap-10">
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
        </ul>
        <div className="hidden lg:flex items-center gap-6">
          <Dropdown />
          <Link
            href="/"
            className="hover:text-purple-400 transition-all duration-200"
          >
            LOGIN
          </Link>
          <button className="btn-gradient py-3.5 px-8">PLAY FOR FREE</button>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsOpen('translate-y-0')}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2_254"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2_254)">
              <path
                d="M3.5 17.6346V16.1346H20.5V17.6346H3.5ZM3.5 12.75V11.25H20.5V12.75H3.5ZM3.5 7.86536V6.36539H20.5V7.86536H3.5Z"
                fill="#FBFBFB"
              />
            </g>
          </svg>
        </button>
      </div>
      {isOpen && <MobileMenu isOpen={isOpen} onOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;

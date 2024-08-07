'use client';
import React from 'react';
import Logo from '../logo/Logo';
import { TOP_NAV_LINKS } from '@/constants/GlobalConstant';
import Link from 'next/link';
import ThemeSwitch from '../theme/ThemeSwitch';
import { usePathname, useRouter } from 'next/navigation';
import TopMenu from './TopMenu';
import useTopMegaMenu from '@/hooks/useHandleTopMenu';
import { useDivisionContext } from '@/context/ContextProvider';


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const {
    selectedLink,
    isPolygonVisible,
    handleLinkClick,
    handleMouseEnter,
    handleMouseLeave,
    handlePolygonMouseEnter,
    handlePolygonMouseLeave,
    polygonRef,
  } = useTopMegaMenu();
  const { divisionData } = useDivisionContext();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className='sticky top-0 z-50 bg-blue-500 dark:bg-blue-1000'>
      <div className="max-width-container">
        <nav className="main-width-container">
          <div className="nav-container">
            <div className="w-[228px] h-[59px]">
              <Logo height={59} width={228} handleClick={pathname !== '/' ? () => router.push('/') : handleBackToTop} />
            </div>
            <div className="flex items-center gap-x-16">
              <ThemeSwitch />
              {TOP_NAV_LINKS.map((link) => (
                link.href.startsWith('http') ? (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 cursor-pointer text-lg font-normal"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="text-gray-300 cursor-pointer text-lg font-normal"
                    onMouseEnter={() => handleMouseEnter(link.key)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleLinkClick(link.key)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              {selectedLink === 'explore' && isPolygonVisible && (
                <div
                  ref={polygonRef}
                  className="polygon-shape-top"
                  onMouseEnter={handlePolygonMouseEnter}
                  onMouseLeave={handlePolygonMouseLeave}
                >
                  <TopMenu data={divisionData} />
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

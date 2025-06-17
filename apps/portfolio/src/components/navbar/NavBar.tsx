import { LogoSvg } from '@/components/icon/CSvg.tsx';
import IconNavBar from '@/components/navbar/IconNavBar';
import MobileMenu from '@/components/navbar/MobileSheet.tsx';
import TextNavBar from '@/components/navbar/TextNavBar';
import type { PropsWithChildren } from 'react';

export interface NavProps extends PropsWithChildren {
  className?: string;
}

const Nav = ({ children, className }: NavProps) => {
  return (
    <nav className={className}>
      <a href={`#${'home'}`}>
        <LogoSvg />
      </a>
      {children}
    </nav>
  );
};

const NavBar = () => {
  return (
    <div id="home">
      <Nav className="md:hidden bg-background w-full flex flex-row fixed z-40 border-b border-primary px-4 py-[10px] items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <IconNavBar />
          <MobileMenu />
        </div>
      </Nav>
      <Nav className="hidden bg-background md:flex w-full max-w-[1920px] flex flex-row gap-auto fixed z-40 border-b border-primary px-16 py-[10px] items-center justify-between primary">
        <TextNavBar />
        <IconNavBar />
      </Nav>
    </div>
  );
};

export default NavBar;

import type { TextElement, TextNavBarProps } from '@/components/navbar/types';
import { Button } from '@/components/ui/button.tsx';
import { useMemo } from 'react';

const Elements = ({ items }: TextNavBarProps) => {
  return (
    <div className="flex flex-row items-center justify-center px-6 py-2 gap-12">
      {items.map((elem, index) => (
        <Button variant="link" key={`${elem.id}-${index}`} className="text-sm font-normal" asChild>
          <a href={`#${elem.id}`}>{elem.content}</a>
        </Button>
      ))}
    </div>
  );
};

const TextNavBar = () => {
  const navItems: TextElement[] = useMemo(
    () => [
      {
        id: 'projects',
        content: 'PROJECTS',
        action: () => {
          console.log('Navigate to Home');
        },
      },
      {
        id: 'work',
        content: 'WORK',
        action: () => {
          console.log('Navigate to Work');
        },
      },
      {
        id: 'about',
        content: 'ABOUT ME',
        action: () => {
          console.log('Navigate to About');
        },
      },
    ],
    []
  );

  return <Elements items={navItems} />;
};

export default TextNavBar;

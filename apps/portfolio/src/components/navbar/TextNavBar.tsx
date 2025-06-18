import type { TextElement, TextNavBarProps } from '@/components/navbar/types';
import { Button } from '@/components/ui/button.tsx';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const navItems: TextElement[] = useMemo(
    () => [
      {
        id: 'projects',
        content: t('nav.projects'),
        action: () => {
          console.log('Navigate to Home');
        },
      },
      {
        id: 'work',
        content: t('nav.work'),
        action: () => {
          console.log('Navigate to Work');
        },
      },
      {
        id: 'about',
        content: t('nav.about'),
        action: () => {
          console.log('Navigate to About');
        },
      },
    ],
    [t]
  );

  return <Elements items={navItems} />;
};

export default TextNavBar;

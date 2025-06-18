import type { TextElement, TextNavBarProps } from '@/components/navbar/types';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MobileElements = ({ items, onClose }: TextNavBarProps & { onClose: () => void }) => {
  return (
    <div className="flex flex-col items-start pt-8 space-y-4 w-full">
      {items.map((elem, index) => (
        <Button
          variant="link"
          key={`${elem.id}-${index}`}
          className="text-lg font-normal justify-start w-full p-4 h-auto"
          asChild
        >
          <a
            href={`#${elem.id}`}
            onClick={() => {
              onClose();
              elem.action();
            }}
          >
            {elem.content}
          </a>
        </Button>
      ))}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div className="h-9 flex items-center rounded-md px-2 pr-4 py-2 hover:bg-accent cursor-pointer group">
          <AlignRight className="w-5 h-5 transition-all duration-400 ease-in-out group-hover:translate-x-2 group-hover:scale-110 group-hover:text-orange-500 group-hover:drop-shadow-md">
            <title>AlignRight Icon</title>
          </AlignRight>
        </div>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-80 [&>button]:ring-0 [&>button]:ring-offset-0
        [&>button]:focus:ring-0 [&>button]:focus:ring-offset-0 [&>button]:outline-none [&>button]:border-none
        [&>button>svg]:hover:text-foreground [&>button>svg]:text-muted-foreground [&>button>svg]:transition-colors
        [&>button>svg]:duration-200"
      >
        <MobileElements items={navItems} onClose={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

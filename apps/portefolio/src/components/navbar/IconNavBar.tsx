import type { IconElement, IconNavBarProps } from '@/components/navbar/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/context/useTheme.tsx';
import { Languages, Moon, Sun } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const Elements = ({ items }: IconNavBarProps) => {
  return (
    <div className="flex flex-row items-center justify-center gap-[16px]">
      {items.map((item, index) => {
        if (item.type === 'dropdown') {
          return (
            <div key={`${item.id}-${index}`}>
              <item.icon />
            </div>
          );
        }
        return (
          <button
            type="button"
            key={`${item.id}-${index}`}
            onClick={() => {
              if (item.action) {
                item.action();
              }
            }}
            className="h-9 flex items-center rounded-md p-2 hover:bg-accent cursor-pointer"
          >
            <item.icon />
          </button>
        );
      })}
    </div>
  );
};

const ThemeIcon = ({ theme }: { theme: string }) => {
  if (theme === 'light') {
    return (
      <Moon className="w-5 h-5 transition-all duration-500 ease-in-out hover:text-blue-400 hover:rotate-12 hover:scale-110">
        <title>Moon Icon</title>
      </Moon>
    );
  }
  return (
    <Sun className="w-5 h-5 text-yellow-400 transition-all duration-500 ease-in-out hover:text-yellow-300 hover:rotate-90 hover:scale-110">
      <title>Sun Icon</title>
    </Sun>
  );
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-9 flex items-center rounded-md p-2 hover:bg-accent cursor-pointer focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none">
        <Languages className="h-5 w-5">
          <title>Language Icon</title>
        </Languages>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('fr')}>Français</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('es')}>Español</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const IconNavBar = () => {
  const { theme, setTheme } = useTheme();
  const selectedTheme = theme === 'light' ? 'dark' : 'light';

  const navIconItems: IconElement[] = useMemo(
    () => [
      {
        id: 'language',
        type: 'dropdown',
        icon: () => <LanguageSwitcher />,
      },
      {
        id: 'theme',
        icon: () => <ThemeIcon theme={theme} />,
        action: () => {
          setTheme(selectedTheme);
        },
      },
    ],
    [theme, selectedTheme, setTheme]
  );

  return <Elements items={navIconItems} />;
};

export default IconNavBar;

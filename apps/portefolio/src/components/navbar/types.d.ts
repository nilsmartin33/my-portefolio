import type { Theme } from '@/context/types';
import type { JSX } from 'react';

type actionType = undefined | ((theme: Theme) => void);

interface Element {
  id: string;
}

export interface TextElement extends Element {
  content: string;
}

export interface IconElement extends Element {
  icon: () => JSX.Element;
  action: actionType;
}

export interface NavBarProps<T extends Element> {
  items: T[];
}

export type TextNavBarProps = NavBarProps<TextElement>;
export type IconNavBarProps = NavBarProps<IconElement>;

import type { JSX } from 'react';

interface Element {
  id: string;
}

export interface TextElement extends Element {
  content: string;
}

export interface IconElement extends Element {
  icon: () => JSX.Element;
  action?: () => void;
  type?: 'dropdown' | 'button';
}

export interface NavBarProps<T extends Element> {
  items: T[];
}

export type TextNavBarProps = NavBarProps<TextElement>;
export type IconNavBarProps = NavBarProps<IconElement>;

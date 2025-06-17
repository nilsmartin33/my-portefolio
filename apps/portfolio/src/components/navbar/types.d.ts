import {JSX} from "react";

type actionType = () => void | ((theme: Theme) => void);

interface Element {
    id: string;
    action: actionType;
}

export interface TextElement extends Element {
    content: string;
}

export interface IconElement extends Element {
    icon: () => JSX.Element;
}

export interface NavBarProps<T extends Element> {
    items: T[];
}

export type TextNavBarProps = NavBarProps<TextElement>;
export type IconNavBarProps = NavBarProps<IconElement>;
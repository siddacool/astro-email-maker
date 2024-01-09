import { type CSSProperties } from 'react';

export type CssStyleObject = CSSProperties;

export const baseComponentStyles: CssStyleObject = {
  boxSizing: 'border-box',
};

export function createStyles(style?: CssStyleObject) {
  const combineStyles = {
    ...baseComponentStyles,
    ...style,
  };

  return combineStyles as CssStyleObject;
}

export function getDynamicLocalLink(link: string) {
  const dynmaicLocalPath = import.meta.env.VITE_DYNAMIC_LOCAL_PATH || 'email';

  return import.meta.env.PROD ? `${dynmaicLocalPath}/${link}` : `email/${link}`;
}

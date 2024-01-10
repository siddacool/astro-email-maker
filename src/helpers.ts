import type { JSX } from 'solid-js';

export type CSSProperties = JSX.CSSProperties;

export const baseComponentStyles: CSSProperties = {
  'box-sizing': 'border-box',
};

export function createStyles(style?: CSSProperties) {
  const combineStyles = {
    ...baseComponentStyles,
    ...style,
  };

  return combineStyles as CSSProperties;
}

export function getDynamicLocalLink(link: string) {
  const dynmaicLocalPath = import.meta.env.VITE_DYNAMIC_LOCAL_PATH || 'email';

  return import.meta.env.PROD ? `${dynmaicLocalPath}/${link}` : `email/${link}`;
}

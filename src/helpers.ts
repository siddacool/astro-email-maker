import type { CSSProperties } from 'react';

export const baseComponentStyles: CSSProperties = {
  boxSizing: 'border-box',
};

function convertNumericToPixelsValue(value: string | number) {
  if (typeof value !== 'number') {
    return value;
  }

  if (value === 0) {
    return '0';
  }

  return `${value}px`;
}

export function createAstroStyles(style?: CSSProperties) {
  const fixedStyles: any = {};

  if (style) {
    for (const [key, value] of Object.entries(style)) {
      fixedStyles[key] = convertNumericToPixelsValue(value);
    }
  }

  const combineStyles = {
    ...baseComponentStyles,
    ...fixedStyles,
  };

  return combineStyles as CSSProperties;
}

export function createReactStyles(style?: CSSProperties) {
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

import type * as CSS from 'csstype';

export const baseComponentStyles: CSS.Properties<string | number> = {
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

export function createStyles(style?: CSS.Properties<string | number>) {
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

  return combineStyles as CSS.Properties<string | number>;
}

export function getDynamicLocalLink(link: string) {
  const dynmaicLocalPath = import.meta.env.VITE_DYNAMIC_LOCAL_PATH || 'email';

  return import.meta.env.PROD ? `${dynmaicLocalPath}/${link}` : `email/${link}`;
}

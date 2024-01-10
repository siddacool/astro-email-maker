import type { CSSProperties, FC, ReactNode } from 'react';
import { createReactStyles } from '../helpers';

export type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  style?: CSSProperties;
};

export type HeadingExtendProps = {
  children?: ReactNode;
  style?: CSSProperties;
};

export const Heading: FC<HeadingProps> = ({ children, variant, style }) => {
  const combinedStyles = createReactStyles(style);

  if (variant === 'h1') {
    return <h1 style={combinedStyles}>{children}</h1>;
  }

  if (variant === 'h2') {
    return <h2 style={combinedStyles}>{children}</h2>;
  }

  if (variant === 'h3') {
    return <h3 style={combinedStyles}>{children}</h3>;
  }

  if (variant === 'h4') {
    return <h4 style={combinedStyles}>{children}</h4>;
  }

  if (variant === 'h5') {
    return <h5 style={combinedStyles}>{children}</h5>;
  }

  if (variant === 'h6') {
    return <h6 style={combinedStyles}>{children}</h6>;
  }

  return <></>;
};

export const H1: FC<HeadingExtendProps> = ({ children, style }) => (
  <Heading variant="h1" style={style}>
    {children}
  </Heading>
);

export const H2: FC<HeadingExtendProps> = ({ children, style }) => (
  <Heading variant="h2" style={style}>
    {children}
  </Heading>
);

export const H3: FC<HeadingExtendProps> = ({ children, style }) => (
  <Heading variant="h3" style={style}>
    {children}
  </Heading>
);

export const H4: FC<HeadingExtendProps> = ({ children, style }) => (
  <Heading variant="h4" style={style}>
    {children}
  </Heading>
);

export const H5: FC<HeadingExtendProps> = ({ children, style }) => (
  <Heading variant="h5" style={style}>
    {children}
  </Heading>
);

export const H6: FC<HeadingExtendProps> = ({ children, style }) => (
  <Heading variant="h6" style={style}>
    {children}
  </Heading>
);

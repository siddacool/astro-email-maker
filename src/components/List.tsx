import type { CSSProperties, FC, ReactNode } from 'react';
import { createReactStyles } from '../helpers';

export type ListProps = {
  variant: 'ol' | 'ul';
  children?: ReactNode;
  style?: CSSProperties;
};

export type ListExtendProps = {
  children?: ReactNode;
  style?: CSSProperties;
};

export type ListItemProps = {
  children?: ReactNode;
  style?: CSSProperties;
};

export const List: FC<ListProps> = ({ children, variant, style }) => {
  const combinedStyles = createReactStyles(style);

  if (variant === 'ul') {
    return <ul style={combinedStyles}>{children}</ul>;
  }

  if (variant === 'ol') {
    return <ol style={combinedStyles}>{children}</ol>;
  }

  return <></>;
};

export const Ul: FC<ListExtendProps> = ({ children, style }) => (
  <List variant="ul" style={style}>
    {children}
  </List>
);

export const Ol: FC<ListExtendProps> = ({ children, style }) => (
  <List variant="ol" style={style}>
    {children}
  </List>
);

export const Li: FC<ListExtendProps> = ({ children, style }) => (
  <li style={createReactStyles(style)}>{children}</li>
);

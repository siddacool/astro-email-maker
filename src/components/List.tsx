import { createStyles, type CSSProperties } from '../helpers';
import type { ParentComponent } from 'solid-js';

export type ListProps = {
  variant: 'ol' | 'ul';
  style?: CSSProperties;
};

export type ListExtendProps = {
  style?: CSSProperties;
};

export type ListItemProps = {
  style?: CSSProperties;
};

export const List: ParentComponent<ListProps> = (props) => {
  const combinedStyles = createStyles(props.style);

  if (props.variant === 'ul') {
    return <ul style={combinedStyles}>{props.children}</ul>;
  }

  if (props.variant === 'ol') {
    return <ol style={combinedStyles}>{props.children}</ol>;
  }

  return <></>;
};

export const Ul: ParentComponent<ListExtendProps> = (props) => (
  <List variant="ul" style={props.style}>
    {props.children}
  </List>
);

export const Ol: ParentComponent<ListExtendProps> = (props) => (
  <List variant="ol" style={props.style}>
    {props.children}
  </List>
);

export const Li: ParentComponent<ListExtendProps> = (props) => (
  <li style={createStyles(props.style)}>{props.children}</li>
);

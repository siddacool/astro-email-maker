import type { ParentComponent } from 'solid-js';
import { createStyles, type CSSProperties } from '../helpers';

export type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: CSSProperties;
};

export type HeadingExtendProps = {
  style?: CSSProperties;
};

export const Heading: ParentComponent<HeadingProps> = (props) => {
  const combinedStyles = createStyles(props.style);

  if (props.variant === 'h1') {
    return <h1 style={combinedStyles}>{props.children}</h1>;
  }

  if (props.variant === 'h2') {
    return <h2 style={combinedStyles}>{props.children}</h2>;
  }

  if (props.variant === 'h3') {
    return <h3 style={combinedStyles}>{props.children}</h3>;
  }

  if (props.variant === 'h4') {
    return <h4 style={combinedStyles}>{props.children}</h4>;
  }

  if (props.variant === 'h5') {
    return <h5 style={combinedStyles}>{props.children}</h5>;
  }

  if (props.variant === 'h6') {
    return <h6 style={combinedStyles}>{props.children}</h6>;
  }

  return <></>;
};

export const H1: ParentComponent<HeadingExtendProps> = (props) => (
  <Heading variant="h1" style={props.style}>
    {props.children}
  </Heading>
);

export const H2: ParentComponent<HeadingExtendProps> = (props) => (
  <Heading variant="h2" style={props.style}>
    {props.children}
  </Heading>
);

export const H3: ParentComponent<HeadingExtendProps> = (props) => (
  <Heading variant="h3" style={props.style}>
    {props.children}
  </Heading>
);

export const H4: ParentComponent<HeadingExtendProps> = (props) => (
  <Heading variant="h4" style={props.style}>
    {props.children}
  </Heading>
);

export const H5: ParentComponent<HeadingExtendProps> = (props) => (
  <Heading variant="h5" style={props.style}>
    {props.children}
  </Heading>
);

export const H6: ParentComponent<HeadingExtendProps> = (props) => (
  <Heading variant="h6" style={props.style}>
    {props.children}
  </Heading>
);

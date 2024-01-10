import type { Component } from 'solid-js';
import { getDynamicLocalLink, type CSSProperties, createStyles } from '../helpers';

export type ImageProps = {
  src: string;
  alt: string;
  external?: boolean;
  style?: CSSProperties;
};

const Image: Component<ImageProps> = (props) => {
  const modifiedSrc = props.external === true ? props.src : getDynamicLocalLink(props.src);

  return <img style={createStyles(props.style)} src={modifiedSrc} alt={props.alt} />;
};

export default Image;

import type { CSSProperties, FC } from 'react';
import { createReactStyles, getDynamicLocalLink } from '../helpers';

export type ImageProps = {
  src: string;
  alt: string;
  external?: boolean;
  style?: CSSProperties;
};

const Image: FC<ImageProps> = ({ src, alt, external = false, style }) => {
  const modifiedSrc = external ? src : getDynamicLocalLink(src);

  return <img style={createReactStyles(style)} src={modifiedSrc} alt={alt} />;
};

export default Image;

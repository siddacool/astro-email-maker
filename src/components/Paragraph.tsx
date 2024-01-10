import type { CSSProperties, FC, ReactNode } from 'react';
import { createReactStyles } from '../helpers';

export type ParagraphProps = {
  style?: CSSProperties;
  children?: ReactNode;
};

const Paragraph: FC<ParagraphProps> = ({ children, style }) => {
  return <p style={createReactStyles(style)}>{children}</p>;
};

export default Paragraph;

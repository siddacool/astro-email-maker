import type { CSSProperties, FC, ReactNode } from 'react';
import { createReactStyles } from '../helpers';

export type DivProps = {
  style?: CSSProperties;
  children?: ReactNode;
};

const Div: FC<DivProps> = ({ children, style }) => {
  return <div style={createReactStyles(style)}>{children}</div>;
};

export default Div;

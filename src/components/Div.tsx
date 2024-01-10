import type { ParentComponent } from 'solid-js';
import { createStyles, type CSSProperties } from '../helpers';

export type DivProps = {
  style?: CSSProperties;
};

const Div: ParentComponent<DivProps> = (props) => (
  <div style={createStyles(props.style)}>{props.children}</div>
);

export default Div;

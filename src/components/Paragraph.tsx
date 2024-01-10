import type { ParentComponent } from 'solid-js';
import { createStyles, type CSSProperties } from '../helpers';

export type ParagraphProps = {
  style?: CSSProperties;
};

const Paragraph: ParentComponent<ParagraphProps> = (props) => (
  <p style={createStyles(props.style)}>{props.children}</p>
);

export default Paragraph;

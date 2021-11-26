/** @jsxImportSource @emotion/react */
import { useHeadingStyles } from './headingStyles';
import { ReactNode } from 'react';

type HeadingProps = {
  children?: ReactNode;
} & HeadingDefaultProps;

type HeadingDefaultProps = {
  type?: 'main' | 'sub';
  size?: 'small' | 'regular' | 'large';
};

const defaultProps: HeadingDefaultProps = {
  type: 'main',
  size: 'regular',
};

const Heading = (props: HeadingProps) => {
  const styles = useHeadingStyles(props);

  return <h1 css={styles.root}>{props.children}</h1>;
};

Heading.defaultProps = defaultProps;

export { Heading };
export type { HeadingProps };

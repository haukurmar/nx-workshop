/** @jsxImportSource @emotion/react */
import { useMainNavStyles } from './mainNavStyles';
import { ReactNode } from 'react';

type MainNavProps = {
  children?: ReactNode;
};

const MainNav = (props: MainNavProps) => {
  const styles = useMainNavStyles(props);

  return <div css={styles.root}>Main Nav</div>;
};

export { MainNav };
export type { MainNavProps };

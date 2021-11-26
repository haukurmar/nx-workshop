/** @jsxImportSource @emotion/react */
import { useMainNavStyles } from './mainNavStyles';
import { ReactNode } from 'react';

type MainNavProps = {
  children?: ReactNode;
};

const MainNav = (props: MainNavProps) => {
  const styles = useMainNavStyles(props);

  // TODO: We need to get component items in here at some point

  return (
    <div css={styles.root}>
      <ul css={styles.listWrapper}>
        <li css={styles.listItem}>Home</li>
        <li css={styles.listItem}>Search</li>
      </ul>
    </div>
  );
};

export { MainNav };
export type { MainNavProps };

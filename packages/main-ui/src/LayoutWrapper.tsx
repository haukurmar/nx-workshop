/** @jsxImportSource @emotion/react */
import { useLayoutWrapperStyles } from './layoutWrapperStyles';
import { Fragment, ReactNode } from 'react';
import { MainNav } from './MainNav';

type LayoutWrapperProps = {
  children?: ReactNode;
};

const LayoutWrapper = (props: LayoutWrapperProps) => {
  const styles = useLayoutWrapperStyles(props);

  return (
    <div css={styles.root}>
      <Fragment>
        <div css={styles.nav}>
          <MainNav />
        </div>
        <main css={styles.main}>{props.children}</main>
      </Fragment>
    </div>
  );
};

export { LayoutWrapper };
export type { LayoutWrapperProps };

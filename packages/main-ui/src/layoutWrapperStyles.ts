import { CSSObject } from '@emotion/react';
import { LayoutWrapperProps } from './LayoutWrapper';

type LayoutWrapperStyles = {
  root: CSSObject;
  nav: CSSObject;
  main: CSSObject;
};

const useLayoutWrapperStyles = (
  props: LayoutWrapperProps
): LayoutWrapperStyles => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
    },
    nav: {
      backgroundColor: '#30343d',
      minWidth: '220px',
    },
    main: {
      backgroundColor: '#fff',
      color: '#242424',
      width: '100%',
      padding: '56px 24px',
    },
  };
};

export { useLayoutWrapperStyles };

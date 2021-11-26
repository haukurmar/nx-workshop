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
      border: '1px solid red',
      height: '100%',
    },
    nav: {
      backgroundColor: '#30343d',
      minWidth: '30%',
    },
    main: {
      backgroundColor: 'green',
      width: '70%',
    },
  };
};

export { useLayoutWrapperStyles };

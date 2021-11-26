import { CSSObject } from '@emotion/react';
import { MainNavProps } from './MainNav';

type MainNavStyles = {
  root: CSSObject;
  listWrapper: CSSObject;
  listItem: CSSObject;
};

const useMainNavStyles = (props: MainNavProps): MainNavStyles => {
  return {
    root: {},
    listWrapper: {
      margin: '56px 20px',
    },
    listItem: {
      color: '#fff',
      margin: '0 0 16px 0',
    },
  };
};

export { useMainNavStyles };

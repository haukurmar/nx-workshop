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
      margin: '40px 20px',
    },
    listItem: {
      color: '#fff',
      padding: '8px 0',
    },
  };
};

export { useMainNavStyles };

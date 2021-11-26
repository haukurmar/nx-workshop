import { CSSObject } from '@emotion/react';
import { MainNavProps } from './MainNav';

type MainNavStyles = {
  root: CSSObject;
};

const useMainNavStyles = (props: MainNavProps): MainNavStyles => {
  return {
    root: {},
  };
};

export { useMainNavStyles };

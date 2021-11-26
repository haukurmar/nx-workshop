import { CSSObject } from '@emotion/react';
import { HeadingProps } from './Heading';

type HeadingStyles = {
  root: CSSObject;
};

const getColorStyles = (props: HeadingProps): CSSObject => {
  if (props.type === 'sub') {
    return {
      color: '#242424',
    };
  }
  return {
    color: '#fd4140',
  };
};

const getSizeStyles = (props: HeadingProps): CSSObject => {
  switch (props.size) {
    case 'small':
      return {
        fontSize: 18,
      };
    case 'large':
      return {
        fontSize: 32,
      };
    case 'regular':
    default:
      return {
        fontSize: 24,
      };
  }
};

const useHeadingStyles = (props: HeadingProps): HeadingStyles => {
  return {
    root: {
      ...getColorStyles(props),
      ...getSizeStyles(props),
    },
  };
};

export { useHeadingStyles };

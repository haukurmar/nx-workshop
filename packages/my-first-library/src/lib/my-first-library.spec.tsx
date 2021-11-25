import { render } from '@testing-library/react';

import MyFirstLibrary from './my-first-library';

describe('MyFirstLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyFirstLibrary />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import MyCoolComponent from './my-cool-component';

describe('MyCoolComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyCoolComponent />);
    expect(baseElement).toBeTruthy();
  });
});

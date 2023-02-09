import { render } from '@testing-library/react';

import LoggedIn from './logged-in';

describe('LoggedIn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoggedIn />);
    expect(baseElement).toBeTruthy();
  });
});

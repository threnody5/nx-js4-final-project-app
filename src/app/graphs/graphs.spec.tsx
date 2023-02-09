import { render } from '@testing-library/react';

import Graphs from './graphs';

describe('Graphs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Graphs />);
    expect(baseElement).toBeTruthy();
  });
});

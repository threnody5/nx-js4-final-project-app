import { render } from '@testing-library/react';

import InsulinWeeklySmoothedLine from './insulin-weekly-smoothed-line';

describe('InsulinWeeklySmoothedLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InsulinWeeklySmoothedLine />);
    expect(baseElement).toBeTruthy();
  });
});

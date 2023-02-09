import { render } from '@testing-library/react';

import InsulinMonthlySmoothedLine from './insulin-monthly-smoothed-line';

describe('InsulinMonthlySmoothedLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InsulinMonthlySmoothedLine />);
    expect(baseElement).toBeTruthy();
  });
});

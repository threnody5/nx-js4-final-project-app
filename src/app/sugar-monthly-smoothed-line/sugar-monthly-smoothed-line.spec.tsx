import { render } from '@testing-library/react';

import SugarMonthlySmoothedLine from './sugar-monthly-smoothed-line';

describe('SugarMonthlySmoothedLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SugarMonthlySmoothedLine />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import SugarWeeklySmoothedLine from './sugar-weekly-smoothed-line';

describe('SugarWeeklySmoothedLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SugarWeeklySmoothedLine />);
    expect(baseElement).toBeTruthy();
  });
});

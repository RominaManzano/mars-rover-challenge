import { render } from '@testing-library/react';

import BackHomeButton from '../BackHomeButton';

describe('<BackHomeButton />', () => {
  it('should render the button correctly', () => {
    const { getByRole } = render(<BackHomeButton />);
    const button = getByRole('link');

    expect(button).toBeInTheDocument();
    expect(button.getAttribute('href')).toBe('/');
  });
});

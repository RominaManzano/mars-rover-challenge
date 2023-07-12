import { render } from '@testing-library/react';

import Home from '../app/page';

describe('<Home />', () => {
  it('should render the component', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Get started by editing')).toBeInTheDocument();
  });
});

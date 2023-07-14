import { render } from '@testing-library/react';

import Home from '../app/page';
import { Rover } from '@/types/Rover.type';

describe('<Home />', () => {
  it('should render the component', () => {
    const { getByText } = render(<Home />);

    expect(getByText(Rover.CURIOSITY)).toBeInTheDocument();
    expect(getByText(Rover.OPPORTUNITY)).toBeInTheDocument();
    expect(getByText(Rover.SPIRIT)).toBeInTheDocument();
  });
});

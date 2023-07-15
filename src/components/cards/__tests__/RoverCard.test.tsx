import React from 'react';
import { render } from '@testing-library/react';

import RoverCard from '../RoverCard';
import { Rover } from '@/types/Rover.type';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('<RoverCard />', () => {
  it('should render the component with the correct props', () => {
    const { getByText } = render(<RoverCard name={Rover.CURIOSITY} />);
    expect(getByText(Rover.CURIOSITY)).toBeInTheDocument();
  });
});

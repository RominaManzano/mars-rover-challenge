import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';

import RoverCard, { Rover } from '../RoverCard';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('<RoverCard />', () => {
  it('should render the component with the correct props', () => {
    const { getByText } = render(<RoverCard name={Rover.CURIOSITY} />);
    expect(getByText(Rover.CURIOSITY)).toBeInTheDocument();
  });
});

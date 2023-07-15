import { act, fireEvent, render } from '@testing-library/react';

import cameras from '@/constants/cameras';
import FiltersCard, { FiltersCardProps } from '../FiltersCard';
import { Rover } from '@/types/Rover.type';

const defaultProps: FiltersCardProps = {
  filters: {
    page: 0,
    camera: '',
    earthDate: '',
    solDate: '2890',
  },
  setFilters: jest.fn(),
  rover: Rover.CURIOSITY,
}

const renderFiltersCard = (props: FiltersCardProps = defaultProps) => (
  render(<FiltersCard {...props} />)
);

describe('<FiltersCard />', () => {
  it('should select a camera from the dropdown', () => {
    const mockCamera = cameras[Rover.CURIOSITY][0];

    const { getByText } = renderFiltersCard();
    const cameraSelect = getByText(mockCamera.name) as HTMLSelectElement;

    act(() => {
      fireEvent.change(cameraSelect, { target: { value: mockCamera.id } });
    });

    expect(cameraSelect.value).toBe(mockCamera.id);
  });
});

import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import usePhotos from '@/hooks/usePhotos';
import RoverPage, { Props } from '../app/[rover]/page';
import { mockFilters } from '@/__mocks__/filters.mock';
import { mockPhotos } from '@/__mocks__/photos.mock';
import { Rover } from '@/types/Rover.type';

jest.mock('../hooks/usePhotos');

const mockUsePhotos = usePhotos as jest.MockedFunction<typeof usePhotos>;
const setFiltersMock = jest.fn();

const defaultProps: Props = { params: { rover: Rover.CURIOSITY } };

const renderRoverPage = (props: Props = defaultProps) => (
  render(<RoverPage {...props} />)
);

describe('<RoverPage />', () => {
  beforeEach(() => {
    mockUsePhotos.mockReturnValue({
      filters: mockFilters,
      isLoading: false,
      photos: mockPhotos,
      setFilters: setFiltersMock,
    });
  });

  it('should render the rover\'s name', () => {
    const { getByText } = renderRoverPage();
    expect(getByText(Rover.CURIOSITY)).toBeInTheDocument();
  });

  it('should render the photos', () => {
    const { getAllByRole } = renderRoverPage();
    const photoElements = getAllByRole('img');
    expect(photoElements).toHaveLength(mockPhotos.length);
  });

  it('should call setFilters when page is changed', () => {
    const { getByLabelText } = renderRoverPage();
    const nextPageButton = getByLabelText('Next page');

    act(() => {
      userEvent.click(nextPageButton);
    });

    expect(setFiltersMock).toHaveBeenCalled();
  });
});
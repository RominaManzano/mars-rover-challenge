import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import usePhotos from '@/hooks/usePhotos';
import RoverPage, { Props } from '../app/[rover]/page';
import { Rover } from '@/components/RoverCard';
import { mockPhotos } from '@/__mocks__/photos.mock';

jest.mock('../hooks/usePhotos');

const mockUsePhotos = usePhotos as jest.MockedFunction<typeof usePhotos>;
const setCurrentPageMock = jest.fn();

const defaultProps: Props = { params: { rover: Rover.CURIOSITY } };

const renderRoverPage = (props: Props = defaultProps) => (
  render(<RoverPage {...props} />)
);

describe('<RoverPage />', () => {
  beforeEach(() => {
    mockUsePhotos.mockReturnValue({
      currentPage: 1,
      isLoading: false,
      photos: mockPhotos,
      setCurrentPage: setCurrentPageMock,
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

  it('should call setCurrentPage when page is changed', () => {
    const { getByText } = renderRoverPage();
    const nextPageButton = getByText('next');

    userEvent.click(nextPageButton);

    expect(setCurrentPageMock).toHaveBeenCalledWith(1);
  });
});
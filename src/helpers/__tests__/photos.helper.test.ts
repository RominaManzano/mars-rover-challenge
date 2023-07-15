import { Rover } from '@/types/Rover.type';
import { getPageCount, buildUrl } from '../photos.helper';

describe('getPageCount', () => {
  it('should return 0 when there are not photos on the page', () => {
    expect(getPageCount(0, 0)).toBe(0);
  });

  it('should return 1 when is the first page and the amount of photos is less than 25', () => {
    expect(getPageCount(20, 0)).toBe(1);
  });

  it('should return 8 for any other input', () => {
    expect(getPageCount(25, 2)).toBe(8);
  });
});

describe('buildUrl', () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  it('should build url with rover, page and earth date', () => {
    const result = buildUrl({
      page: 0,
      rover: Rover.CURIOSITY,
      camera: '',
      earthDate: '2023-07-14',
      solDate: '',
    });

    expect(result).toBe(
      `${apiUrl}/rovers/${Rover.CURIOSITY}/photos?api_key=${apiKey}&earth_date=2023-07-14&page=1`
    );
  });

  it('should build url with rover, page, camera, and earth date', () => {
    const result = buildUrl({
      page: 0,
      rover: Rover.CURIOSITY,
      camera: 'fhaz',
      earthDate: '2023-07-14',
      solDate: '',
    });

    expect(result).toBe(
      `${apiUrl}/rovers/${Rover.CURIOSITY}/photos?api_key=${apiKey}&earth_date=2023-07-14&page=1&camera=fhaz`
    );
  });

  it('should build url with rover, page, camera, and sol date', () => {
    const result = buildUrl({
      page: 0,
      rover: Rover.CURIOSITY,
      camera: 'fhaz',
      earthDate: '',
      solDate: '1000',
    });

    expect(result).toBe(
      `${apiUrl}/rovers/${Rover.CURIOSITY}/photos?api_key=${apiKey}&sol=1000&page=1&camera=fhaz`
    );
  });
});
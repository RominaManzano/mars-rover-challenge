import dayjs from "dayjs";
import { Filters, UsePhotosParams } from "@/hooks/usePhotos";

type GetPageCount = (photosInPage: number, page: number) => number;
type BuildUrl = (params: Filters & UsePhotosParams) => string;

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getPageCount: GetPageCount = (photosInPage, page) => {
  if ((page === 0) && (photosInPage === 0)) return 0;
  if ((page === 0) && (photosInPage < 25)) return 1;
  return 8;
};

export const buildUrl: BuildUrl = ({
  rover,
  camera,
  page,
  earthDate,
  solDate,
}) => {
  const roverQuery = `/rovers/${rover}/photos`;
  const cameraQuery = camera ? `&camera=${camera}` : '';
  const earthDateQuery = !solDate ? `&earth_date=${(earthDate ? dayjs(earthDate) : dayjs()).format('YYYY-MM-DD')}` : '';
  const solQuery = !earthDate ? `&sol=${solDate}` : '';
  const pageQuery = `&page=${page + 1}`;

  return `${apiUrl}${roverQuery}?api_key=${apiKey}${solQuery}${earthDateQuery}${pageQuery}${cameraQuery}`;
};
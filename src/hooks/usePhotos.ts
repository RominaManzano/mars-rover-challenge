import { useCallback, useEffect, useState } from "react";
import dayjs from 'dayjs';

import { RoverCamera } from "@/constants/cameras";
import { Photo } from "@/types/Photo.type";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

interface UsePhotosParams {
  rover: string;
}

export interface Filters {
  page: number;
  camera: RoverCamera | null;
  earthDate: string | null,
  solDate: string;
}

type BuildUrl = (params: Filters & UsePhotosParams) => string;

const buildUrl: BuildUrl = ({
  rover,
  camera,
  page,
  earthDate,
  solDate,
}) => {
  const roverQuery = `/rovers/${rover}/photos`;
  const cameraQuery = camera ? `&camera=${camera.id}` : '';
  const earthDateQuery = earthDate ? `&earth_date=${dayjs().format('YYYY-MM-DD')}` : '';
  const solQuery = !earthDate ? `&sol=${solDate}` : '';
  const pageQuery = `&page=${page + 1}`;

  return `${apiUrl}${roverQuery}?api_key=${apiKey}${solQuery}${earthDateQuery}${pageQuery}${cameraQuery}`;
};

const usePhotos = ({ rover }: UsePhotosParams) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    page: 0,
    camera: null,
    earthDate: null,
    solDate: '2890',
  });

  const fetchPhotos = useCallback(() => {
    setIsLoading(true);

    fetch(buildUrl({
      rover,
      ...filters,
    })).then((response) => {
      response.json()
        .then((data) => {
          setPhotos(data.photos);
          setIsLoading(false);
        });
    }).catch(() => {
      setIsLoading(false);
    });
  }, [rover, filters.page]);

  useEffect(() => {
    console.log('useEffect')
    fetchPhotos();
  }, [rover, filters.page, fetchPhotos]);

  return {
    filters,
    isLoading,
    photos,
    setFilters,
  };
};

export default usePhotos;

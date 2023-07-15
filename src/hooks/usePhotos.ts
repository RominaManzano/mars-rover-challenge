import { useCallback, useEffect, useState } from "react";
import dayjs from 'dayjs';

import { Photo } from "@/types/Photo.type";
import { buildUrl } from "@/helpers/photos.helper";

export interface UsePhotosParams {
  rover: string;
}

export interface Filters {
  page: number;
  camera: string;
  earthDate: string,
  solDate: string;
}

const usePhotos = ({ rover }: UsePhotosParams) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    page: 0,
    camera: '',
    earthDate: dayjs().format('YYYY-MM-DD'),
    solDate: '',
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
  }, [rover, filters.page, filters.camera, filters.earthDate, filters.solDate]);

  useEffect(() => {
    fetchPhotos();
  }, [rover, filters.page, filters.camera, filters.earthDate, filters.solDate, fetchPhotos]);

  return {
    filters,
    isLoading,
    photos,
    setFilters,
  };
};

export default usePhotos;

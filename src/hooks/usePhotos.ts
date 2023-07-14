import { useCallback, useEffect, useState } from "react";
import dayjs from 'dayjs';

import { RoverCamera } from "@/constants/cameras";
import { Photo } from "@/types/Photo.type";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

interface UsePhotosParams {
  rover: string;
}

interface BuildUrlParams extends UsePhotosParams {
  currentPage: number;
  camera: RoverCamera | null;
  earthDate: string | null,
  solDate: string;
}

type BuildUrl = (params: BuildUrlParams) => string;

const buildUrl: BuildUrl = ({
  rover,
  camera,
  currentPage,
  earthDate,
  solDate,
}) => {
  const roverQuery = `/rovers/${rover}/photos`;
  const cameraQuery = camera ? `&camera=${camera.id}` : '';
  const earthDateQuery = earthDate ? `&earth_date=${dayjs().format('YYYY-MM-DD')}` : '';
  const solQuery = !earthDate ? `&sol=${solDate}` : '';
  const pageQuery = `&page=${currentPage + 1}`;

  return `${apiUrl}${roverQuery}?api_key=${apiKey}${solQuery}${earthDateQuery}${pageQuery}${cameraQuery}`;
};

const usePhotos = ({ rover }: UsePhotosParams) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [camera, setCamera] = useState<RoverCamera | null>(null);
  const [earthDate, setEarthDate] = useState<string | null>(null);
  const [solDate, setSolDate] = useState<string>('2890');

  const fetchPhotos = useCallback(() => {
    setIsLoading(true);

    fetch(buildUrl({
      rover,
      currentPage,
      camera,
      earthDate,
      solDate,
    })).then((response) => {
      response.json()
        .then((data) => {
          setPhotos(data.photos);
          setIsLoading(false);
        });
    }).catch(() => {
      setIsLoading(false);
    });
  }, [rover, currentPage]);

  useEffect(() => {
    fetchPhotos();
  }, [rover, currentPage, fetchPhotos]);

  return {
    currentPage,
    isLoading,
    photos,
    setCurrentPage,
    setCamera,
    setEarthDate,
    setSolDate,
  };
};

export default usePhotos;

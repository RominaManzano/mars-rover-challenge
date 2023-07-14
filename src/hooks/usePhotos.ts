import { useCallback, useEffect, useState } from "react";

interface Options {
  rover: string;
}

const usePhotos = ({ rover }: Options) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPhotos = useCallback(() => {
    setIsLoading(true);

    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/rovers/${rover}/photos?sol=1000&page=${currentPage + 1}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    ).then((response) => {
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
  };
};

export default usePhotos;

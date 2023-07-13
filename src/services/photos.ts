import { Rover } from "@/components/RoverCard";

interface FetchPhotosOptions {
  rover: Rover;
}

type FetchPhotos = (options: FetchPhotosOptions) => Promise<any>;

export const fetchPhotos: FetchPhotos = async ({ rover }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/rovers/${rover}/photos?sol=1000&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
};
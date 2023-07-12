import axios from 'axios';

export const fetchPhotos = async ({ }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/rovers/curiosity/photos?sol=1000&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return res.data;
};
export const fetchPhotos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/rovers/curiosity/photos?sol=1000&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
};
import { fetchPhotos } from '@/services/photos';
import React from 'react';

export const getStaticPaths = async () => ({
  paths: [
    { params: { rover: 'curiosity' } },
    { params: { rover: 'opportunity' } },
    { params: { rover: 'spirit' } },
  ],
  fallback: false,
});

const RoverPage: React.FC = async () => {
  const data = await fetchPhotos();

  return (
    <div>ID: {data?.photos[0]?.id}</div>
  )
}

export default RoverPage;
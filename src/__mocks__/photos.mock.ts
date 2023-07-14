import { Camera, Photo, RoverType } from "@/types/Photo.type";

const mockCamera: Camera = {
  id: 1,
  name: 'camera',
  rover_id: 1,
  full_name: '',
};

const mockRover: RoverType = {
  id: 1,
  name: '',
  landing_date: '',
  launch_date: '',
  status: '',
  max_sol: 1000,
  max_date: '',
  total_photos: 1000,
  cameras: [mockCamera],
};

export const mockPhotos: Photo[] = [
  {
    id: 1,
    img_src: 'photo1.jpg',
    sol: 1000,
    camera: mockCamera,
    earth_date: '',
    rover: mockRover,
  },
  {
    id: 2,
    img_src: 'photo2.jpg',
    sol: 1000,
    camera: mockCamera,
    earth_date: '',
    rover: mockRover,
  },
  {
    id: 3,
    img_src: 'photo3.jpg',
    sol: 1000,
    camera: mockCamera,
    earth_date: '',
    rover: mockRover,
  },
];
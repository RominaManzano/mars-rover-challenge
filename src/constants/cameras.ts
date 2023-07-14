import { Rover } from "@/types/Rover.type";

export interface RoverCamera {
  id: string;
  name: CameraEnum;
}

enum CameraEnum {
  FHAZ = 'Front Hazard Avoidance Camera',
  RHAZ = 'Rear Hazard Avoidance Camera',
  MAST =	'Mast Camera',
  CHEMCAM = 'Chemistry and Camera Complex',
  MAHLI =	'Mars Hand Lens Imager',
  MARDI =	'Mars Descent Imager',
  NAVCAM =	'Navigation Camera',
  PANCAM =	'Panoramic Camera',
  MINITES =	'Miniature Thermal Emission Spectrometer(Mini- TES)',
};

const cameras: { [key: string]: RoverCamera[] } = {
  [Rover.CURIOSITY]: [
    { id: 'fhaz', name: CameraEnum.FHAZ },
    { id: 'rhaz', name: CameraEnum.RHAZ },
    { id: 'mast', name: CameraEnum.MAST },
    { id: 'chemcam', name: CameraEnum.CHEMCAM },
    { id: 'mahli', name: CameraEnum.MAHLI },
    { id: 'mardi', name: CameraEnum.MARDI },
    { id: 'navcam', name: CameraEnum.NAVCAM },
  ],
  [Rover.OPPORTUNITY]: [
    { id: 'fhaz', name: CameraEnum.FHAZ },
    { id: 'rhaz', name: CameraEnum.RHAZ },
    { id: 'navcam', name: CameraEnum.NAVCAM },
    { id: 'pancam', name: CameraEnum.PANCAM },
    { id: 'minites', name: CameraEnum.MINITES },
  ],
  [Rover.SPIRIT]: [
    { id: 'fhaz', name: CameraEnum.FHAZ },
    { id: 'rhaz', name: CameraEnum.RHAZ },
    { id: 'navcam', name: CameraEnum.NAVCAM },
    { id: 'pancam', name: CameraEnum.PANCAM },
    { id: 'minites', name: CameraEnum.MINITES },
  ],
};

export default cameras;
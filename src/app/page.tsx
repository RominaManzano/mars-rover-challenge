import RoverCard from '@/components/RoverCard';
import { Rover } from '@/types/Rover.type';

const Home: React.FC = () => {
  const generalClasses = 'flex h-full flex-col md:flex-row items-center justify-between p-24 gap-8';

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="m-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl uppercase font-extrabold">Mars Rover Challenge</h1>
        <h3 className="text-lg mt-4 italic text-gray-400">Select a Rover to see their photos</h3>
      </div>

      <main className={generalClasses}>
        <RoverCard name={Rover.CURIOSITY} />
        <RoverCard name={Rover.OPPORTUNITY} />
        <RoverCard name={Rover.SPIRIT} />
      </main>
    </div>
  );
};

export default Home;

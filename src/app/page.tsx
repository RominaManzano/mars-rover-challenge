import RoverCard from '@/components/RoverCard';
import { Rover } from '@/types/Rover.type';

const Home: React.FC = () => {
  const generalClasses = 'flex min-h-screen flex-col md:flex-row items-center justify-between p-24 gap-8';

  return (
    <main className={generalClasses}>
      <RoverCard name={Rover.CURIOSITY} />
      <RoverCard name={Rover.OPPORTUNITY} />
      <RoverCard name={Rover.SPIRIT} />
    </main>
  );
};

export default Home;

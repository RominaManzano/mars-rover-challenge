import PageTitle from '@/components/common/PageTitle';
import RoverCard from '@/components/cards/RoverCard';
import { Rover } from '@/types/Rover.type';

const Home: React.FC = () => {
  const generalClasses = 'flex h-full flex-col md:flex-row items-center justify-between p-12 lg:p-24 gap-8';

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="m-8 md:m-10 flex flex-col items-center justify-center">
        <PageTitle title="Mars Rover Challenge" />
        <h3 className="text-md md:text-lg mt-4 italic text-gray-400 text-center">
          Select a Rover to see their photos
        </h3>
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

import RoverCard, { Rover } from '@/components/RoverCard';

const Home: React.FC = () => (
  <main className="flex min-h-screen flex-col md:flex-row items-center justify-between p-24 gap-8">
    <RoverCard name={Rover.CURIOSITY} />
    <RoverCard name={Rover.OPPORTUNITY} />
    <RoverCard name={Rover.SPIRIT} />
  </main>
);

export default Home;

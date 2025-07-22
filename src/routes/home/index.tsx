import { Dashboard } from '../dashboard';

import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';

const Home = () => (
  <div className="flex justify-center items-center w-full">
    <div className="w-full h-full bg-white rounded-xl">
      <Header />
      <div className="flex mt-14">
        <Navigation />
        <Dashboard />
      </div>
    </div>
  </div>
);

export default Home;

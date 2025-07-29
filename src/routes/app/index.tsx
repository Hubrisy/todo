import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { AppModes } from '..';

import { HeaderDekstop } from '@/components/header/HeaderDekstop';
import { HeaderMobile } from '@/components/header/HeaderMobile';
import { Navigation } from '@/components/navigation';

const Main = dynamic(() => import('./modes/main'));
const Board = dynamic(() => import('./modes/board'));

const ComponentMap: Record<AppModes, React.ComponentType> = {
  [AppModes.main]: Main,
  [AppModes.board]: Board,
};

const App = () => {
  const { query } = useRouter();
  const mode = query.mode as AppModes;
  const Component = ComponentMap[mode] ?? Main;

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full h-full bg-white rounded-xl">
        <div>
          <div className="hidden sm:block">
            <HeaderDekstop />
          </div>
          <div className="block sm:hidden">
            <HeaderMobile />
          </div>
        </div>
        <div className="flex mt-14">
          <div className="hidden sm:block">
            <Navigation />
          </div>
          <div className="min-w-[85%] m-auto">
            {!!Component && <Component />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

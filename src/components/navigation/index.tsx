import Categories from '@assets/img/svg/icons/Categories.svg';
import Dashboard from '@assets/img/svg/icons/Dashboard.svg';
import Help from '@assets/img/svg/icons/Help.svg';
import MyTask from '@assets/img/svg/icons/MyTask.svg';
import Settings from '@assets/img/svg/icons/Settings.svg';
import VitalTask from '@assets/img/svg/icons/VitalTask.svg';
import Image from 'next/image';

const nav = [
  {
    id: 1,
    name: 'Dashboard',
    img: <Dashboard />,
  },
  {
    id: 2,
    name: 'Vital Task',
    img: <VitalTask />,
  },
  {
    id: 3,
    name: 'My Task',
    img: <MyTask />,
  },
  {
    id: 4,
    name: 'Task Categories',
    img: <Categories />,
  },
  {
    id: 5,
    name: 'Settings',
    img: <Settings />,
  },
  {
    id: 6,
    name: 'Help',
    img: <Help />,
  },
];

export const Navigation = () => (
  <div className="min-w-[330px] h-screen bg-bittersweet rounded-r-xl text-white">
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[-42px]">
        <Image src="/img/ava1.png" alt="ava" width={86} height={86} />
      </div>
      <div className="text-center pt-[55px]">
        <div className="font-semibold text-[16px]">Sundar Gurung</div>
        <div className="font-normal text-[12px]">sundargurung360@gmail.com</div>
      </div>
      <div className="mt-5 px-5">
        {nav.map(item => (
          <div key={item.id} className="flex max-w-[290px] items-center p-4">
            <div className="min-w-6 flex justify-center">{item.img}</div>
            <div className="ml-4">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

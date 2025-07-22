import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { navModes } from './data';

import { type AppModes, Routes } from '@/routes';

export const Navigation = () => {
  const { query, push } = useRouter();
  const selectedMode = query.mode as AppModes;

  const onModeChange = (mode: AppModes) => {
    push(Routes.appMode.replace('[mode]', mode));
  };

  return (
    <div className="min-w-[330px] h-screen bg-bittersweet rounded-r-xl text-white">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[-42px]">
          <Image src="/img/ava1.png" alt="ava" width={86} height={86} />
        </div>
        <div className="text-center pt-[55px]">
          <div className="font-semibold text-[16px]">Sundar Gurung</div>
          <div className="font-normal text-[12px]">
            sundargurung360@gmail.com
          </div>
        </div>
        <div className="mt-5 px-5">
          {navModes.map(item => (
            <div
              key={item.mode}
              onClick={() => onModeChange(item.mode)}
              className={clsx('flex max-w-[290px] items-center p-4', {
                'bg-white text-black': selectedMode === item.mode,
              })}
            >
              <div className="min-w-6 flex justify-center">{item.icon}</div>
              <div className="ml-4">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

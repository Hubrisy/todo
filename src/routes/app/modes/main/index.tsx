import HandWave from '@assets/img/svg/icons/HandWave.svg';

import { Todo } from './todo';

import { getDate } from '@/utils/getDate';

export const Main = () => {
  const { date, dayName } = getDate();

  return (
    <div className="">
      <div className="font-medium text-2xl flex flex-row items-center">
        <div className="flex flex-row">
          <div>Welcome back</div>
          <div className="ml-4">
            <HandWave />
          </div>
        </div>
      </div>
      <div className="mt-3 w-full">
        <div>
          <div className="mt-2 text-[14px] font-medium">
            <span>{date.toLocaleDateString()}</span> - <span>{dayName}</span>
          </div>
        </div>
        <div className="flex mt-4 ">
          <div className="w-full">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

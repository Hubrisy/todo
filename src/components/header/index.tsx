import Calendar from '@assets/img/svg/icons/Calendar.svg';
import Notification from '@assets/img/svg/icons/Notifications.svg';
import SearchIcon from '@assets/img/svg/icons/Search.svg';

import Input from '../input';

export const Header = () => (
  <div className="bg-[#F8F8F8] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-t-xl">
    <div className="min-h-[100px] flex justify-between items-center px-[75px]">
      <div className="font-semibold text-3xl">
        <span className="text-bittersweet">Dash</span>
        <span className="text-black">board</span>
      </div>
      <div className="flex relative min-w-[50%]">
        <Input
          placeholder="Search your task here..."
          className="pl-3.5 font-semibold text-[12px]"
        />
        <div className="absolute right-0">
          <SearchIcon />
        </div>
      </div>
      <div className="flex min-w-[80px] justify-between">
        <div>
          <Notification />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
      <div className="font-medium">
        <div className="text-[16px]">Tuesday</div>
        <div className="text-dodgerblue text-[14px]">20/06/2025</div>
      </div>
    </div>
  </div>
);

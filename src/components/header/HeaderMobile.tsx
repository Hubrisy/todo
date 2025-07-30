import { useEffect } from 'react';
import BurgerBtn from '@assets/img/svg/icons/Burger.svg';
import Calendar from '@assets/img/svg/icons/Calendar.svg';
import CloseBtn from '@assets/img/svg/icons/Close.svg';
import Notifications from '@assets/img/svg/icons/Notifications.svg';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { navModes } from '../navigation/data';

import styles from './styles.module.scss';

import { ModalType, useModalContext } from '@/context/modal';
import { type AppModes, Routes } from '@/routes';
import { getDate } from '@/utils/getDate';

export const HeaderMobile: React.FC = () => {
  const { date, dayName } = getDate();
  const { modal, setModal } = useModalContext();

  const { query, push } = useRouter();
  const selectedMode = query.mode as AppModes;

  const onModeChange = (mode: AppModes) => {
    push(Routes.appMode.replace('[mode]', mode));
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  return (
    <div className="p-[10px]">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-2xl">
          <span className="text-bittersweet">Dash</span>
          <span className="text-black">board</span>
        </div>
        <div
          onClick={() => setModal(ModalType.burger)}
          className="self-end mr-2.5"
        >
          <BurgerBtn />
        </div>
      </div>
      {modal === ModalType.burger && (
        <div className="fixed inset-0 z-10 bg-[#656565d7] flex justify-end">
          <div
            className={`${styles.show} bg-white flex flex-col items-center w-[70%] h-full`}
          >
            <div className="self-end mr-[10px] mt-[10px]">
              <CloseBtn onClick={() => setModal(undefined)} />
            </div>
            <div className="flex mt-[20px] flex-col items-center text-granite-grey text-base w-full">
              {navModes.map(item => (
                <div
                  key={item.label}
                  className={clsx(
                    selectedMode === item.mode
                      ? 'bg-bittersweet text-white'
                      : 'bg-white text-bittersweet',
                    'cursor-pointer mt-6 text-[18px] flex items-center min-w-[90%] rounded-2xl p-6',
                  )}
                  onClick={() => onModeChange(item.mode)}
                >
                  <div
                    className={clsx(
                      item.mode === selectedMode
                        ? styles.whitesvg
                        : styles.redsvg,
                    )}
                  >
                    {item.icon}
                  </div>
                  <div className="self-start pl-6">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <div className="flex min-w-[80px] justify-between items-center">
                <div>
                  <Calendar />
                </div>
                <div>
                  <Notifications />
                </div>
              </div>
              <div className="flex mt-8 flex-col items-center font-medium">
                <div className="text-[16px]">{dayName}</div>
                <div className="text-dodgerblue text-[14px]">
                  {date.toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

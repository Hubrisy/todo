import Categories from '@assets/img/svg/icons/Categories.svg';
import Dashboard from '@assets/img/svg/icons/Dashboard.svg';

import { AppModes } from '@/routes';

interface NavModeItem {
  label: string;
  mode: AppModes;
  icon: React.ReactNode;
}

export const navModes: Array<NavModeItem> = [
  {
    label: 'Main',
    mode: AppModes.main,
    icon: <Dashboard />,
  },
  {
    label: 'Board',
    mode: AppModes.board,
    icon: <Categories />,
  },
];

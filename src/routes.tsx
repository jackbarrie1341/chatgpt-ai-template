import { Icon } from './lib/chakra';
import {
  MdFileCopy,
  MdHome,
  MdLock,
  MdLayers,
  MdAutoAwesome,
  MdOutlineManageAccounts,
  MdOutlineDesignServices,
  MdMenuBook,
} from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { LuHistory } from 'react-icons/lu';
import { RoundedChart } from '@/components/icons/Icons';

// Auth Imports
import { IRoute } from './types/navigation';

const routes: IRoute[] = [
  {
    name: 'Ops Manual',
    path: '/',
    icon: <Icon as={MdMenuBook} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
  {
    name: 'AISC & AWS Manual',
    disabled: true,
    path: '/all-templates',
    icon: <Icon as={MdFileCopy} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
  {
    name: 'ADA & IBC Codes',
    disabled: true,
    path: '/my-projects',
    icon: <Icon as={MdLayers} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
  {
    name: 'Detailing Standards',
    disabled: true,
    path: '/my-projects',
    icon: (
      <Icon
        as={MdOutlineDesignServices}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    collapse: false,
  },
];

export default routes;

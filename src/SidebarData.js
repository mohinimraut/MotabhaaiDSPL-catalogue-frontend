import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: '-Fruits & Vegetables',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '-Staples',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: '-Snacks & Branded Foods',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: '-Beverages',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    subNav: [
        {
          title: 'Users',
          path: '/overview/users',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Revenue',
          path: '/overview/revenue',
          icon: <IoIcons.IoIosPaper />
        }
      ]
  },
  {
    title: '-Personal Care',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: '-Home Care',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: '-Flower Bouquets & Bunches',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    subNav: [
        {
          title: 'Users',
          path: '/overview/users',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Revenue',
          path: '/overview/revenue',
          icon: <IoIcons.IoIosPaper />
        }
      ]
  },
  {
    title: '-Dairy & Bakery',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];

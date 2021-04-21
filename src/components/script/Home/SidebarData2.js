import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData2 = [
  {
    title: '  Fruits & Vegetables',
    path: '/overview',
    icon:"Fruits-&-Vegetables-icn.svg"   


  },
  {
    title: '-Staples',
    path: '/reports',
    icon: "Staples-icn.svg",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: '-Snacks & Branded Foods',
    path: '/products',
    icon: "Snacks-&-Branded-Foods-icn.svg"
  },
  {
    title: '-Dairy & Bakery',
    path: '/team',
    icon: "Dairy-&-Bakery-icn.svg",
    
  },
  {
    title: '-Beverages',
    path: '/messages',
    icon: "Beverages-icn.svg",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: '-Home Care',
    path: '/support',
    icon: "Home-Care-icn.svg"
  },
  {
    title: '-Flower Bouquets & Bunches',
    path: '/support',
    icon: "Flower-Bouquets,-Bunches-icn.svg",
    
  },
  {
    title: '-Personal Care',
    path: '/support',
    icon: "Personal-Care-icn.svg"
  },
  {
    title: '-Electrical',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];

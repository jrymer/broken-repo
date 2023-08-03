import Link from 'next/link';
import React from 'react';
import KitsIcon from './icons/KitsIcon';
import HomeIcon from './icons/HomeIcon';
import TripsIcon from './icons/TripsIcon';
import ProfileIcon from './icons/ProfileIcon';
import GearIcon from './icons/GearIcon';

const Appbar = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <Link href="/" className="flex  items-center">
        <HomeIcon />
      </Link>
      <div className="flex">
        <Link href="/gear" className="flex items-center">
          <GearIcon />
          Gear
        </Link>
        <Link href="/kits" className="flex items-center">
          <KitsIcon />
          Kits
        </Link>
        <Link href="/trips" className="flex items-center">
          <TripsIcon />
          Trips
        </Link>
        <Link href="/profile" className="flex items-center">
          <ProfileIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Appbar;

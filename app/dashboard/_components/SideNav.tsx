"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import { Home, LucideFileClock, Settings, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Dynamic imports to avoid SSR issues
const UserButton = dynamic(
  () => import('@clerk/nextjs').then((mod) => mod.UserButton),
  { ssr: false }
);

const UsageTrack = dynamic(() => import('./UsageTrack'), {
  ssr: false,
  loading: () => <div>Loading usage...</div>,
});

function SideNav() {
  const MenuList = [
    { name: 'Home', icon: Home, path: '/dashboard/' },
    { name: 'History', icon: LucideFileClock, path: '/dashboard/history' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  const path = usePathname();
  const activePath = path || ''; // Fallback for SSR

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className='p-2 flex justify-center'>
        <Link href={'/dashboard/'}>
          <Image src={'/logo.png'} alt='logo' width={160} height={100} />
        </Link>
      </div>
      <hr className='my-6 border' />
      <div className='mt-3'>
        <div className='flex items-center gap-2 mb-1 p-3'>
          <UserButton />
          <h2 className='text-lg'>Profile</h2>
        </div>
        {MenuList.map((menu) => (
          <Link href={menu.path} key={menu.name}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
                activePath === menu.path && 'bg-primary text-white'
              }`}
            >
              <menu.icon className='h-6 w-6' />
              <h2 className='text-lg'>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
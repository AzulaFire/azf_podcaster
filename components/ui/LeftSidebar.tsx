'use client';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const LeftSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <section className='left_sidebar'>
      <nav className='flex flex-col gap-6'>
        <Link
          href='/'
          className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'
        >
          <Image src='/icons/logo.svg' width={23} height={27} alt='logo' />
          <h1 className='text-24 font-extrabold text-white max-lg:hidden'>
            Podcaster
          </h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathName === route || pathName.startsWith(`${route}/`);

          return (
            <Link
              key={label}
              href={route}
              className={cn(
                'flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start',
                { 'bg-nav-focus border-r-4 border-orange-1': isActive }
              )}
            >
              <Image src={imgURL} width={24} height={24} alt={label} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
export default LeftSidebar;

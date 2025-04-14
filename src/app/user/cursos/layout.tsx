'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import Link from 'next/link';

export default function UserCursoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div>
      <Navbar variant="secondary" />

      <div className="max-w-screen-lg mx-auto my-10">
        <ul className="flex gap-10 justify-center text-black60 text-lg">
          <li
            className={`${!pathname.includes('instrutor') && !pathname.includes('favoritos') ? 'border-b border-primary text-primary' : ''} px-2 font-bold`}
          >
            <Link href="/user/cursos/">Cursos</Link>
          </li>
          <li
            className={`${pathname.includes('favoritos') ? 'border-b border-primary text-primary' : ''} px-2 font-bold`}
          >
            <Link href="/user/cursos/favoritos">Favoritos</Link>
          </li>
          <li
            className={`${pathname.includes('instrutor') ? 'border-b border-primary text-primary' : ''} px-2 font-bold`}
          >
            <Link href="/user/cursos/instrutor">Cursos como Instrutor</Link>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
}

'use client';

import { Navbar } from '@/components/navbar';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function UserCursoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const { id } = useParams();

  return (
    <div>
      <Navbar variant="secondary" />

      <div className="max-w-screen-lg mx-auto my-10">
        <ul className="flex gap-10 justify-center text-black60 text-lg">
          <li
            className={`${!pathname.includes('nova-aula') ? 'border-b border-primary text-primary' : ''} px-2 font-bold`}
          >
            <Link href={`/user/curso/${id}`}>Informações</Link>
          </li>
          <li
            className={`${pathname.includes('nova-aula') ? 'border-b border-primary text-primary' : ''} px-2 font-bold`}
          >
            <Link href={`/user/curso/${id}/nova-aula`}>Adicionar Aula</Link>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
}

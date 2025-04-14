'use client';

import { Navbar } from '@/components/navbar';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function UserCursoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { id } = useParams();

  return (
    <div>
      <Navbar variant="secondary" />

      <div className="max-w-screen-lg mx-auto">
        <ul className="flex gap-10 border-b">
          <li>
            <Link href={`/user/curso/${id}`}>Informações</Link>
          </li>
          <li>
            <Link href={`/user/curso/${id}/nova-aula`}>Adicionar Aula</Link>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
}

import { Navbar } from '@/components/navbar';
import Link from 'next/link';

export default function UserCursoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar variant="secondary" />

      <div className="max-w-screen-lg mx-auto">
        <ul className="flex gap-10 border-b">
          <li>
            <Link href="/user/cursos/">Cursos</Link>
          </li>
          <li>
            <Link href="/user/cursos/favoritos">Favoritos</Link>
          </li>
          <li>
            <Link href="/user/cursos/instrutor">Cursos como Instrutor</Link>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
}

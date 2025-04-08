'use client';

import { AuthContext } from '@/context/auth-context';
import { useContext } from 'react';
import Link from 'next/link';

export function UserBox() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div className="p-1 text-xl text-white90 bg-primary border border-primary rounded-sm w-44 flex gap-3 justify-center font-bold group relative">
      <div className="w-6 h-6 flex justify-center items-center text-md leading-none border rounded-full font-bold">
        {user?.name?.substring(0, 1).toUpperCase()}
      </div>
      <div className="flex items-center jutstify-center">
        <span>{user?.name?.split(' ')[0]}</span>
      </div>

      <div className="opacity-0 scale-95 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-opacity transition-transform duration-300 absolute right-0 top-full pt-2 ">
        <ul className="rounded-md px-4 py-2 bg-white90 border shadow-md text-black90">
          <li className="font-bold">{user?.name}</li>
          <li className="text-xs text-black60">{user?.email}</li>
          <hr className="text-black30 my-4" />

          <li className="text-base">Área Instrutor</li>
          <li className="text-sm text-black60">
            <Link href="/curso/cadastrar">Cadastrar curso</Link>
          </li>

          <hr className="text-black30 my-4" />
          <li
            className="text-red40 hover:underline"
            onClick={signOut}
          >
            Sair da conta
          </li>
        </ul>
      </div>
    </div>
  );
}

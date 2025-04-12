import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get('nextauth.token');

  if (!token) {
    redirect('/login');
  }

  return <>{children}</>;
}

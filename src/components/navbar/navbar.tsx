import Link from 'next/link';

type TNavbar = {
  variant?: 'primary' | 'secondary';
};

export function Navbar({ variant = 'primary' }: TNavbar) {
  const classname = {
    container: '',
    title: '',
  };
  if (variant === 'primary') {
    classname.container =
      'absolute top-0 bg-none z-20 flex justify-between px-12 w-full h-20 items-center';
    classname.title = 'text-white90 font-bold text-2xl';
  } else if (variant === 'secondary') {
    classname.container =
      'flex justify-between px-12 w-full h-20 items-center border border-black30';
    classname.title = 'text-primary font-bold text-2xl';
  }

  return (
    <nav className={classname.container}>
      <Link href="/home">
        <h1 className={classname.title}>ImpCourse</h1>
      </Link>
      <div className="flex gap-10">
        <Link href="/sign-up">
          <p className="bg-primary p-1 text-lg text-white90 rounded-sm w-32 flex justify-center font-bold">
            Cadastrar
          </p>
        </Link>
        <Link href="/login">
          <p className="p-1 text-lg text-primary border border-primary rounded-sm w-32 flex justify-center font-bold">
            Entrar
          </p>
        </Link>
      </div>
    </nav>
  );
}

import { Navbar } from '@/components/navbar';

export default function SignUp() {
  return (
    <div>
      <Navbar variant="secondary" />

      <div className="flex gap-10 justify-center">
        <div>
          <img
            src="/analyze-data.png"
            alt=""
          />
        </div>

        <div>
          <form action="">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Nome</label>
              <input
                type="text"
                className="w-full bg-black30"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">E-mail</label>
              <input
                type="text"
                className="w-full bg-black30"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Senha</label>
              <input
                type="text"
                className="w-full bg-black30"
              />
            </div>

            <button className="bg-primary w-full text-white90 text-xl">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

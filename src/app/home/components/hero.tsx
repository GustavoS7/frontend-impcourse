export function Hero() {
  return (
    <div className="bg-[url('/hero.png')] bg-black bg-opacity-40 bg-cover bg-center h-[40rem] flex justify-center items-center relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-white90 text-5xl font-bold">
          Aprenda algo novo todo dia.
        </h1>
        <h2 className="text-white60 text-xl">
          Torne-se um profissional e esteja pronto para ingressar no mundo.
        </h2>
      </div>
    </div>
  );
}

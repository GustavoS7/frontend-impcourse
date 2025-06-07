'use client';

import { _paymentRequest } from '@/service/cursos/payment.service';
import { redirect, useParams } from 'next/navigation';
import { _buscarCursoRequest } from '@/service';
import { TCourseInfo } from '@/core/entities';
import { Navbar } from '@/components/navbar';
import { useEffect, useState } from 'react';
import { formatCurrency } from '@/helper';

export default function Page() {
  const [hasUserPurchased, setHasUserPurchased] = useState<boolean>(false);
  const [curso, setCurso] = useState<TCourseInfo | null>(null);

  const { id } = useParams();

  const getCurso = async () => {
    const data = await _buscarCursoRequest(String(id));
    if (data.error) setCurso(null);
    else {
      setCurso(data.curso);
      setHasUserPurchased(data.hasUserPurchased);
    }
  };

  const handleBuy = async () => {
    const data = await _paymentRequest({ id: String(id) });
    if (!data.error) {
      redirect(data.initPoint);
    }
  };

  useEffect(() => {
    getCurso();
  }, []);

  return (
    <div>
      <Navbar variant="secondary" />

      <div className="max-w-screen-lg mx-auto w-full flex gap-10 my-10">
        <div className="flex-1 flex flex-col gap-6">
          {curso?.cover && (
            <img
              src={curso.cover}
              alt="Capa do curso"
              className="w-full h-[24rem] rounded-md"
            />
          )}

          <h2 className="text-3xl font-bold">{curso?.title}</h2>

          <div>
            <p className="text-primary text-lg">{curso?.author.name}</p>
            <p className="text-sm text-black60">Instrutor</p>
          </div>

          <div className="w-full flex flex-col gap-2">
            <p className="text-lg font-bold">Sobre o curso</p>
            <div className="text-lg text-black60 w-full">
              {curso?.description}
            </div>
          </div>
        </div>

        <div className="w-[16rem]">
          <div className="flex flex-col gap-10">
            {!hasUserPurchased && (
              <p className="text-3xl font-bold">
                {formatCurrency(curso?.price ?? 0)}
              </p>
            )}

            {!hasUserPurchased ? (
              <button
                className="w-full text-2xl font-bold rounded-md py-1 text-white90 bg-primary"
                onClick={handleBuy}
              >
                Comprar
              </button>
            ) : (
              <button className="w-full text-2xl font-bold rounded-md py-1 text-white90 bg-primary">
                Ir para curso
              </button>
            )}

            <div className="text-lg text-black60">
              <p>{curso?.category}</p>
              <p>{curso?.content.length} aulas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { UseFormSetValue } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';

type TCoverInputProps = {
  setValue: UseFormSetValue<any>;
};

export function AulaInput({ setValue }: TCoverInputProps) {
  const [image, setImage] = useState<File | null>(null);

  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(file);
      setValue('file', file);
    } else {
      setImage(null);
    }
  };

  return (
    <label
      htmlFor="file"
      className={`rounded-md h-42 w-[36rem] shadow-xl ${image ? 'bg-primary' : 'bg-black30'} `}
    >
      <input
        type="file"
        accept="video/mp4"
        hidden
        name="file"
        id="file"
        onChange={handleCoverChange}
      />

      {image ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col items-center w-80 gap-2">
            <p className="bg-white90 w-full p-4 rounded-sm text-center text-primary text-2xl font-bold">
              Aula Selecionada
            </p>
            <p className="w-full truncate px-2 text-white text-sm">
              {image.name}
            </p>
            <p className="text-center text-xs text-white90">{image.size}MB</p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p className="bg-primary w-80 p-4 rounded-sm text-center text-white text-2xl font-bold">
            Selecione o arquivo...
          </p>
        </div>
      )}
    </label>
  );
}

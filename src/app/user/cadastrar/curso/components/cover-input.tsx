import { UseFormSetValue } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';

type TCoverInputProps = {
  setValue: UseFormSetValue<any>;
};

export function CoverInput({ setValue }: TCoverInputProps) {
  const [image, setImage] = useState<any>(null);

  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImage(e.target?.result);
        setValue('file', file);
      };
    } else {
      setImage(null);
    }
  };

  return (
    <label
      htmlFor="file"
      className="bg-black30 rounded-md h-70 w-[36rem] shadow-xl"
    >
      <input
        type="file"
        accept="image/png, image/jpeg"
        hidden
        name="file"
        id="file"
        onChange={handleCoverChange}
      />

      {image ? (
        <img
          src={image}
          alt="Cover"
          className="w-full h-full object-cover rounded-md"
        />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p className="bg-primary w-80 p-4 rounded-sm text-center text-white text-2xl font-bold">
            Selecione uma capa...
          </p>
        </div>
      )}
    </label>
  );
}

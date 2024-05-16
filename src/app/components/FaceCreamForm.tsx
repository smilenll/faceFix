"use client";
import { FormEvent, useState } from "react";
import { Select } from "../shared/components/Select";
import { ISkinCreamParams } from "../shared/interfaces/ai-api";
import { OilinessEnum, ThicknessEnum } from "../shared/enums/SkinEnum";

export function FaceCreamForm() {
  const [form, setForm] = useState<ISkinCreamParams>({
    age: 0,
    skinColor: 0,
    oiliness: OilinessEnum.OILY,
    thickness: ThicknessEnum.THIN,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={(e) => onSubmit(e)}>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <>
        <Select
          name="age"
          label="Your Age"
          options={Array.from(Array(101).keys()).slice(12)}
          onSelect={handleChange}
        />
        <Select
          name="skinColor"
          label="Skin tone"
          options={[1, 2, 3]}
          onSelect={handleChange}
        />
        <Select
          name="oiliness"
          label="Oiliness"
          options={Object.values(OilinessEnum)}
          onSelect={handleChange}
        />
        <Select
          name="thickness"
          label="Thickness of skin"
          options={Object.values(ThicknessEnum)}
          onSelect={handleChange}
        />
      </>
      <button
        type="submit"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Green
      </button>
    </form>
  );
}
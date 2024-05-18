"use client";
import { FormEvent, useState } from "react";
import { Select } from "../shared/components/Select";
import { ISkinCreamParams } from "../shared/interfaces/ai";
import { OilinessEnum, ThicknessEnum } from "../shared/enums/SkinEnum";
import { objectToQueryString } from "../utils/ObjectToString";

type Props = {
  setResult: (result: any) => void;
};

export function FaceCreamForm(props: Props) {
  // TODO: find why useActionState doses't work probably local env issue
  const [form, setForm] = useState<ISkinCreamParams>({
    age: 12,
    skinColor: 1,
    oiliness: OilinessEnum.OILY,
    thickness: ThicknessEnum.THIN,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3000/api/face-cream?${objectToQueryString(form)}`
    );
    const json = await response.json();
    
    props.setResult(json);
    setLoading(false);
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={(e) => onSubmit(e)}>
      <label
        htmlFor="countries"
        className="mt-12 block mb-2 text-lg font-bold text-gray-900"
      >
        Select your skin parameters
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
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          onSelect={handleChange}
        />
        <Select
          name="oiliness"
          label="Oiliness of skin"
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
        disabled={loading}
        type="submit"
        className="mt-10 w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        {!loading ? "Find my product" : "Loading..."}
      </button>
    </form>
  );
}

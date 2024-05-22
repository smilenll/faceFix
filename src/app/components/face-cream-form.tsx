"use client";
import { FormEvent, SyntheticEvent, useState } from "react";
import { Select } from "../shared/components/Select";
import { IFaceCreamResponse, ISkinCreamParams } from "../shared/interfaces/ai";
import { OilinessEnum, ThicknessEnum } from "../shared/enums/SkinEnum";
import { handleError } from "../utils/HandleError";

type Props = {
  setResult: (result: IFaceCreamResponse) => void;
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

  const handleChange = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
    const { name, value } = e.target as unknown as {
      name: string;
      value: string;
    };
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}face-cream?${new URLSearchParams(
          form as unknown as Record<string, string>
        )}`
      );
      const json = await response.json();

      props.setResult(json);
      setLoading(false);
    } catch (error) {
      handleError(error, setLoading);
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={(e) => handleSubmit(e)}>
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

import { SyntheticEvent } from "react";

type Props = {
  label: string;
  name: string;
  options: Array<string | number>;
  onSelect: (e: SyntheticEvent<HTMLSelectElement, Event>) => void;
};
export function Select({ label, name, options, onSelect }: Props) {
  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      {/* TODO: Fix initial value */}
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onSelect}
        name={name}
      >
        {options.map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
    </>
  );
}

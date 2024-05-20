import { SyntheticEvent } from "react";

type Props = {
  label: string;
  name: string;
  options: Array<string | number>;
  onSelect: (e: SyntheticEvent<HTMLSelectElement, Event>) => void;
};
export function Select({ label, name, options, onSelect }: Props) {
  const getOptionColorClass = (number: number | string) => {
    if (name !== "skinColor") {
      return "";
    }
    return `bg-neutral-${number}00`;
  };

  const renderOption = (option: string | number) => {
    const className = getOptionColorClass(option);
    return (
      <option value={option} key={option} className={className}>
        {option}
      </option>
    );
  };

  return (
    <div className="mt-4">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-semibold text-gray-900"
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
        {options.map((o) => renderOption(o))}
      </select>
    </div>
  );
}

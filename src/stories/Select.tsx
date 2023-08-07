import React, { useState } from 'react';
import { BaseFormFieldProps, Datum } from '../types/Fr';

interface SelectProps extends BaseFormFieldProps {
  options: Datum[];
  selected?: Datum;
  onSelected: (value: Datum) => void;
}

export const Select: FC<SelectProps> = ({
  label,
  name,
  options,
  placeholder,
  selected,
  onSelected,
}) => {
  const [open, setOpen] = useState(false);

  const htmlId = `${label || name}-select`;
  return (
    <>
      {label && (
        <label
          htmlFor={htmlId}
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <button
        id={htmlId}
        className="flex w-fit items-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        onClick={() => setOpen((prev) => !prev)}
      >
        {<span className="p-2">{selected?.label || placeholder}</span>}
        {open ? (
          <i className="fas fa-caret-up p-2" />
        ) : (
          <i className="fas fa-caret-down p-2" />
        )}
      </button>
      {open && (
        <div className="z-10 w-fit divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  className={`inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                    selected && option.value === selected.value
                      ? 'bg-gray-200'
                      : ''
                  }`}
                  onClick={() => onSelected(option)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

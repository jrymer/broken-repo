import React from 'react';
import { BaseFormFieldProps } from '../types';

type TextFieldProps = BaseFormFieldProps;

export const TextField: FC<TextFieldProps> = ({ label, name, placeholder }) => {
  const htmlId = `${label || name}-input`;
  return (
    <form>
      {label && (
        <label
          htmlFor={htmlId}
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        id={htmlId}
        name={name}
        placeholder={placeholder}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "
      />
    </form>
  );
};

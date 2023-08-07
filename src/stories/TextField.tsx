import React, { useEffect, useState } from 'react';
import { uniqueId } from 'lodash';
import { useDebounce } from '../hooks/useDebounce';
import { BaseFormFieldProps } from '../types/Fr';

interface TextFieldProps extends BaseFormFieldProps {
  onChange: (value: string) => void;
  value?: string;
}

export const TextField: FC<TextFieldProps> = ({
  label,
  name,
  placeholder,
  value = '',
  onChange,
}) => {
  const htmlId = `${label || name}-input-${uniqueId()}`;
  const [text, setText] = useState<string>(value);
  // const debouncedValue = useDebounce(text);

  // useEffect(() => {
  //   onChange(debouncedValue);
  // }, [debouncedValue, onChange]);

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
        onChange={(e) => onChange(e.target.value)}
        value={text}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "
      />
    </form>
  );
};

import React, { useState } from 'react';
import { TextField } from './TextField';
import { DatumId } from '../types/Fr';
export interface Category {
  id: string;
  name: string;
}

interface CategoryFieldProps {
  category?: Category;
  onChange: (value: DatumId) => void;
  onDelete: (id: string) => void;
}

export const CategoryField: FC<CategoryFieldProps> = ({
  category,
  onChange,
  onDelete,
}) => {
  const [name, setName] = useState<string | undefined>(undefined);
  return (
    <div>
      {category ? (
        category.name
      ) : (
        <TextField name="category" onChange={() => {}} />
      )}
    </div>
  );
};

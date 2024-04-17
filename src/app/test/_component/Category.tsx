'use client';

import { useState } from 'react';

import { useGetCategory } from '../../../query/test/useGetCategory';
import CategorySelect from './CategorySelect';

export default function Category() {
  const { data, isSuccess } = useGetCategory();

  const [selectedMainIndex, setSelectedMainIndex] = useState<number | null>(
    null,
  );
  const [selectedSubIndex, setSelectedSubIndex] = useState<number | null>(null);

  const handleSelectMain = (index: number) => {
    if (index === selectedMainIndex) {
      setSelectedMainIndex(null);
    } else {
      setSelectedMainIndex(index);
    }
    setSelectedSubIndex(null);
  };

  const handleSelectSub = (index: number) => {
    if (index === selectedMainIndex) {
      setSelectedSubIndex(null);
    } else {
      setSelectedSubIndex(index);
    }
  };

  return (
    <aside className="category-container">
      {isSuccess && (
        <>
          <CategorySelect
            categoryList={data}
            onSelect={handleSelectMain}
            selectedIndex={selectedMainIndex}
          />
          <CategorySelect
            categoryList={
              selectedMainIndex !== null
                ? data[selectedMainIndex].subCategory
                : []
            }
            onSelect={handleSelectSub}
            selectedIndex={selectedSubIndex}
          />
        </>
      )}
    </aside>
  );
}

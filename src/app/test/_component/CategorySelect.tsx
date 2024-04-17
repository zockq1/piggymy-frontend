interface CategorySelectProps {
  categoryList: { id: number; title: string }[];
  onSelect: (id: number) => void;
  selectedIndex: number | null;
}

export default function CategorySelect({
  categoryList,
  selectedIndex,
  onSelect,
}: CategorySelectProps) {
  return (
    <div>
      <div>
        선택됨:{' '}
        {`${selectedIndex !== null ? categoryList[selectedIndex].title : `없음`}`}
      </div>
      <ul>
        {categoryList.map((category, index) => {
          const { id, title } = category;
          return (
            <li key={id} onClick={() => onSelect(index)}>
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

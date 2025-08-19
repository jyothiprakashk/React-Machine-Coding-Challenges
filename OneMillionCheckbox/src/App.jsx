import { useState } from "react";
import { FixedSizeList as List } from "react-window";

const dataForCheckbox = new Array(1_000_000).fill(null).map((_, i) => ({
  id: i,
  label: `Item ${i + 1}`,
}));

function App() {
  const [initialCheckbox, setInitialCheckBox] = useState({});

  const onHandleCheckboxChange = (index) => {
    setInitialCheckBox((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const Row = ({style, index}) => {
    const Item = dataForCheckbox[index];
    const isChecked = initialCheckbox[Item.id] || false;
    return (
      <div style={style}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onHandleCheckboxChange(index)}
        />
        <span>{Item.label}</span>
      </div>
    );
  };
  return (
    <>
      <List
        height={500}
        itemCount={dataForCheckbox.length}
        itemSize={50}
        width={500}
      >
        {Row}
      </List>
    </>
  );
}

export default App;

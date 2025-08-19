import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <NestedCheck />
    </>
  );
}

export default App;

const NestedCheck = () => {
  const [allTypedChecked, setAllTypeChecked] = useState({
    parent: false,
    children: {
      child1: false,
      child2: false,
      child3: false,
    },
  });

  const handleParentCheckbox = (e) => {
    const isChecked = e.target.checked;
    setAllTypeChecked({
      parent: isChecked,
      children: {
        child1: isChecked,
        child2: isChecked,
        child3: isChecked,
      },
    });
  };

  const handleChildrenChange = (e) => {
    const { name, checked } = e.target;

    const updateChildren = {
      ...allTypedChecked.children,
      [name]: checked,
    };

    const childValues=Object.values(updateChildren);
    const checkChild=childValues.every(Boolean);

    setAllTypeChecked({
      parent:checkChild,
      children:updateChildren
    })
  };

  return (
    <div>
      <label>Parent</label>
      <input
        type="checkbox"
        checked={allTypedChecked.parent}
        onChange={handleParentCheckbox}
      />
      {Object.keys(allTypedChecked.children).map((eachBox) => {
        console.log(eachBox, allTypedChecked.children[eachBox], "eachBox");
        return (
          <div>
            <label>{eachBox}</label>
            <input
              type="checkbox"
              name={eachBox}
              checked={allTypedChecked.children[eachBox]}
              onChange={handleChildrenChange}
            />
          </div>
        );
      })}
    </div>
  );
};

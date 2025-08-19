import { useEffect, useState } from "react";
import "./App.css";



function App() {
  const [Items,setItems]=useState(["Amma","Nanna","Akka","Aunty","Anna","Jyothi","Prakash"]);
  const [searchValue,setSearchValue]=useState("");
  const [filteredValues,setFilteredValues]=useState([])


  useEffect(()=>{
    if(!searchValue.trim("")) {
      setFilteredValues([]);
      return
    };

    const filterValues=Items.filter((item)=>{
      console.log(item.toLocaleLowerCase().includes(searchValue),item,searchValue,'searchValue')
      let newItem=item.toLocaleLowerCase().includes(searchValue);
      return newItem
    });
    setFilteredValues(filterValues)

  },[Items, searchValue])


  const onHandleAutoComplete=(e)=>{
    setSearchValue(e.target.value)
  }


  return (
    <div>
      <input placeholder="Please Enter..." value={searchValue} onChange={onHandleAutoComplete}></input>
      {filteredValues.map((filterValue)=><div>{filterValue}</div>)}
    </div>
  );
}

export default App;

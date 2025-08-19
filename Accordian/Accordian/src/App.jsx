import { useState } from "react";
import "./App.css";

const LengthOfAccordian = [
    {
      id:1,
      title: "Accordian1",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      open:false
    },
    {
      id:2,
      title: "Accordian2",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      open:false
    },
    {
      id:3,
      title: "Accordian3",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      open:false
    },
  ];

function App() {
  const [accordianData,setAccordianData]=useState(new Set())
  

  const handleClick=(index)=>{
    // setAccordianData((prev)=>prev.map((item)=>item.id===index?{...item,open:true}:{...item,open:false}))
    setAccordianData((prev)=>{
      const newSet= new Set(prev)
      newSet.has(index)?newSet.delete(index):newSet.add(index);
      return newSet
  }
)
  }

  return (
    <div>
      {LengthOfAccordian.map((accordian) => {
        return <div>
          <div onClick={()=>handleClick(accordian.id)}>{accordian.title}</div>
          {accordianData.has(accordian.id)&&<p>{accordian.data}</p>}
        </div>;
      })}
    </div>
  );
}

export default App;

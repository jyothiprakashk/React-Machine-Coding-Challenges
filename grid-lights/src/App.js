import './App.css';
import React,{useState,useEffect,useRef} from 'react';

const config=[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]


function App() {
  const [colorIndex,setColorIndex]=useState([]);
  let abortController=useRef(null);


  const abortRequest=()=>{
    if(abortController.current) abortController.current?.abort();
    abortController.current=new AbortController();
    fetch("https://jsonplaceholder.typicode.com/todos",{
        signal:abortController.current.signal
    }).then((res)=>res.json()).then((response)=>{
      console.log(response,"responsedata")
    }).catch((error)=>{
      console.log(error,'abort error')
    })
    
  }

  const onHandleBoxClick=(index)=>{
    let totalIndx=[...colorIndex,index]
    if(totalIndx.length===config.flat(1).filter(Boolean).length){
      deActivatingCells()
    }
    setColorIndex(totalIndx)
  }

  const deActivatingCells=()=>{
    const timer= setInterval(()=>{
      setColorIndex((prevItems)=>{
        let newItem=prevItems.slice()
        newItem.pop()
        if(newItem.length===0){
          clearInterval(timer)
        }
        return newItem
      })
    },1000);
  }


  return (
    <div className="App">
      {config.flat(1).map((box,outerindex)=>{
        return(
          <div className="boxContainer" key={outerindex}>
           {box===1? <div className='box' onClickCapture={()=>onHandleBoxClick(outerindex)} style={{backgroundColor:colorIndex.includes(outerindex)?"green":""}}></div>:""}
        </div>
        )
      })}
      <div className='container'>
      <p>New Task assigned to people</p>

      </div>
      <button onClick={abortRequest}>Cancel</button>
    </div>
  );
}

export default App;

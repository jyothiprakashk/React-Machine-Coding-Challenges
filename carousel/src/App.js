import './App.css';
import React,{useState} from 'react';
import { FcNext,FcPrevious } from "react-icons/fc";


const IMAGE_CONFIG=[
  "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
  "https://source.unsplash.com/78A265wPiO4",
  "https://source.unsplash.com/eOpewngf68w",
  "https://source.unsplash.com/ndN00KmbJ1c",

]
function App() {
  const [currentIndex,setIndex]=useState(0);

  const handlePrevious=()=>{
    setIndex((prevIndex)=>prevIndex===0?IMAGE_CONFIG.length-1:prevIndex-1)
  }

  const handleNext=()=>{
    setIndex((prevIndex)=>prevIndex===IMAGE_CONFIG.length-1?0:prevIndex+1)
  }

  return (
    <div className="AppContainer">
      <div onClick={handlePrevious} className='actionButton' style={{left:'30px'}}><FcPrevious /></div>
       {IMAGE_CONFIG.map((image,index)=>{
          return <React.Fragment key={index}><img src={image} alt="carousel" className={currentIndex===index?"active":"inactive"}/></React.Fragment>
       })}
       
      <div onClick={handleNext} className='actionButton' style={{right:'30px'}}>
      <FcNext />
      </div>
    </div>
  );
}

export default App;

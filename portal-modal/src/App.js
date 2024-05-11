import React,{useState} from 'react' 
import './App.css';
import { Modal } from './modal';

function App() {
  const [isModalOpen,setModalOpen]=useState(false);

  const onClose=()=>{
    setModalOpen(false)
  }

  const onOpen=()=>{
    setModalOpen(!isModalOpen)
  }
  return (
    <div className="App">
      <button onClick={onOpen} className='OpenModal'>Open Modal To View</button>
      <Modal onClose={onClose} isOpen={isModalOpen} onOpen={onOpen} title="React Portal Modal">
        <div>Habits are powerful mechanisms that influence our behavior, often without us even realizing it. Research suggests that habits are formed through a process called habit loop, which consists of a cue, a routine, and a reward. The cue triggers the behavior, the routine is the behavior itself, and the reward is the positive reinforcement that strengthens the habit.</div>
      </Modal>
    </div>
  );
}

export default App;

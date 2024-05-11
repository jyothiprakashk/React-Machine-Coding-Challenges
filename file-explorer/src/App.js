import { useState } from "react";
import "./App.css";
import { EXPLORER_CONFIG } from "./config";
import { FcFolder } from "react-icons/fc";

function App() {
  const [treeData,setTreeData]=useState(EXPLORER_CONFIG);
  
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.path.unshift({
        id:new Date().getTime(),
        name: item,
        isFolder: isFolder,
        path: []
      });

      return tree;
    }

    let latestNode = [];
    console.log(tree,"treepath")
    latestNode = tree.path.map((ob) => {
      console.log(ob,'objjjj')
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, path: latestNode };
  };

  const onHandleFolderFileName = (folderId,value,isFolder) => {
    const result=insertNode(treeData,folderId,value,isFolder);
    setTreeData(result)
  };

  return (
    <div>
      <Exporer config={treeData} onHandleFolderFileName={onHandleFolderFileName}/>
    </div>
  );
}

export default App;

const Exporer = ({ config,onHandleFolderFileName }) => {
  const [isOpen, setOpen] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const onHandleChange = (isFolder) => {
    setShowInput({
      visible: true,
      isFolder,
    });
  };


  const onAddChange=(e)=>{
    if (e.keyCode === 13 && e.target.value) {
      onHandleFolderFileName(config.id,e.target.value,showInput.isFolder);
      setShowInput({...showInput,visible:false})
    }
  }
  

  if (config.isFolder) {
    return (
      <div>
        <div className="folderContainer">
          <div className="folderName" onClick={() => setOpen(!isOpen)}>
            <FcFolder />
            {config.name}
          </div>
          <div>
            <button onClick={() => onHandleChange(true)}>Folder +</button>
            <button onClick={() => onHandleChange(false)}>File +</button>
          </div>
        </div>
        {showInput.visible && (
          <div style={{ paddingLeft: 20 }}>
            {showInput.isFolder && <FcFolder />}
            <input
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              onKeyDown={(e)=>onAddChange(e)}
            />
          </div>
        )}
        {config.path.map((each) => {
          return (
            <div style={{ display: isOpen ? "flex" : "none" }}>
              <Exporer config={each} onHandleFolderFileName={onHandleFolderFileName}/>
            </div>
          );
        })}
      </div>
    );
  }
  return <div style={{ paddingLeft: 20 }}>{config.name}</div>;
};

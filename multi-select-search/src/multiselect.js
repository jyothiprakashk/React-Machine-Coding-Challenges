import React from "react";
import { useState,useEffect } from "react";

export const MultiSelect = (props) => {
  const { users = [], setSearchWord, searchWord,setUsers } = props;
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [isOpen,setOpen]=useState(false);

  useEffect(()=>{
    setOpen(true)
  },[users])

  const HandleUpdateUsers=(user)=>{
    setUpdatedUsers([...updatedUsers,user]);
    setUsers((prevUsers)=>prevUsers.filter((users)=>users.firstName!==user.firstName))
  }

  const removedSelectedUser=(user)=>{
    setUpdatedUsers((prevUsers)=>prevUsers.filter((users)=>users.firstName!==user.firstName));
    setOpen(false)
  }

  return (
    <div>
        <div className="inputContainer">
      <input
        onChange={(e) => setSearchWord(e.target.value)}
        value={searchWord}
      />
      <div className="selectedUsers">
        {updatedUsers.map((user)=><div className="userDetails">{user.firstName}
        <div className="deleteUser" onClick={()=>removedSelectedUser(user)}>X</div>
        </div>)}
      </div>
      </div>
      <div className={isOpen&&"userContainer"}>
        {users.map((user) => {
          return <div onClick={()=>HandleUpdateUsers(user)} className="suggestion-list">
            <img className="userImage" src={user.image} alt={user.firstName}/>
            <div>{user.firstName}</div>
          </div>;
        })}
      </div>
    </div>
  );
};

import React from "react";
import { useState, useEffect, useRef } from "react";
import { Pill } from "./pill";

export const MultiSelect = (props) => {
  const { users = [], setSearchWord, searchWord, setUsers } = props;
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const outerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (outerRef.current && !outerRef.current.contains(event.target)) {
        setOpen(true);
        console.log("outsode click");
      } else {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutSideClick);
    return () => {
      document.addEventListener("click", handleOutSideClick);
    };
  }, [outerRef]);

  const HandleUpdateUsers = (user) => {
    setUpdatedUsers([...updatedUsers, user]);
    setUsers((prevUsers) =>
      prevUsers.filter((users) => users.firstName !== user.firstName)
    );
    inputRef.current.focus();
  };

  const removedSelectedUser = (user) => {
    setUpdatedUsers((prevUsers) =>
      prevUsers.filter((users) => users.firstName !== user.firstName)
    );
  };

  const onHandleChange = (value) => {
    setSearchWord(value);
  };

  const onHandleKeyDown = (e) => {
    console.log("onHandleKeyDown", e.key);
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      updatedUsers.length > 0
    ) {
      let lastUser = updatedUsers[updatedUsers.length - 1];
      removedSelectedUser(lastUser);
    }
  };

  return (
    <div className="user-search-container" ref={outerRef}>
      <div className="inputContainer">
        {updatedUsers.map((user) => (
          <Pill user={user} removedSelectedUser={removedSelectedUser} />
        ))}

        <div>
          <input
            onChange={(e) => onHandleChange(e.target.value)}
            value={searchWord}
            placeholder="Search for a User..."
            ref={inputRef}
            onKeyDown={onHandleKeyDown}
          />

          <div
            className="userContainer"
            style={{ display: isOpen ? "none" : "" }}
          >
            {users.map((user) => {
              return (
                <div
                  onClick={() => HandleUpdateUsers(user)}
                  className="suggestion-list"
                >
                  <img
                    className="userImage"
                    src={user.image}
                    alt={user.firstName}
                  />
                  <div>{user.firstName}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

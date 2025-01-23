import React from "react";

const ListItems = (props) => {
  const { users, setUsers } = props;

  const DeleteUsers = (id) => {
    setUsers(() => users.filter((item) => item.id !== id));
  };
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <div id={user.id}>{user.name}</div>
            <div onClick={() => DeleteUsers(user.id)}>Delete</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;

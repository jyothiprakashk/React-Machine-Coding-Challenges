import React from "react";

export const Pill = (props) => {
  const { user, removedSelectedUser } = props;
  return (
    <div className="user-pill">
      <img src={user.image} alt="userImage" />
      {user.firstName}
      <div className="deleteUser" onClick={() => removedSelectedUser(user)}>
        x
      </div>
    </div>
  );
};

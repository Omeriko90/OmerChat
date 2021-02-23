import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ListContainer,
  SearchContainer,
  SearchInput,
  UsersContainer,
} from "./style";
import User from "components/User/User";

UsersList.propTypes = {
  users: PropTypes.array,
  selectedUser: PropTypes.object,
  onUserSelection: PropTypes.func,
};

function UsersList(props) {
  const [searchStr, setSearchStr] = useState("");

  const handleSearch = (event) => {
    setSearchStr(event.target.value.toLowerCase());
  };

  const onUserSelection = (userId) => {
    const user = props.users?.find((user) => user.userId === userId);
    props.onUserSelection && props.onUserSelection(user);
  };

  return (
    <ListContainer>
      <SearchContainer>
        <SearchInput placeholder={"Search User..."} onChange={handleSearch} />
      </SearchContainer>
      <UsersContainer>
        {props.users?.map((user, index) => {
          const selectedUser = user.userId === props.selectedUser.userId;
          if (user.userName.toLowerCase().includes(searchStr)) {
            return (
              <User
                selected={selectedUser}
                userImg={user.avatar}
                userName={user.userName}
                userId={user.userId}
                key={index}
                lastMessage={user.lastMessage}
                onClick={onUserSelection}
              />
            );
          }
          return <></>;
        })}
      </UsersContainer>
    </ListContainer>
  );
}

export default UsersList;

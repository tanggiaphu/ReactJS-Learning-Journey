import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addNewUserHandler = function (newUser) {
    setUsersList((prev) => {
      return [newUser, ...prev];
    })
  }

  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler}></AddUser>
      <UsersList usersDataList={usersList} />
    </div>
  );
}

export default App;

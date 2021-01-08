import './App.css';
import React, { useState } from 'react';

import FormInfo from './components/FormInfo';
import UserForm from './components/UserForm';

function App() {
  const [ user, setUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpw: "",
  })

  return (
    <div className="App">
      <h1>Create A User</h1>
      <UserForm user={user} setUser={setUser} />
      <h2>New User</h2>
      <FormInfo data={user} />
    </div>
  );
}

export default App;

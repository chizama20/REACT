import { useState } from "react";

function Profile() {
  const [users, setUser] = useState([]);
  const [username, setName] = useState("");
  const [userage, setAge] = useState("");
  const [screen, setScreen] = useState("home");

  function handleAddUser(e) {
    e.preventDefault(); 

    const newUser = { name: username, age: userage };
    setUser((u) => [...u, newUser]);

    setName("");
    setAge("");
    setScreen("home");
  }

  function handleAddName(event) {
    setName(event.target.value); 
  }

  function handleAddAge(event) {
    setAge(event.target.value);
  }

  function handleRemoveUser(index) {
    setUser((u) => u.filter((_, i) => i !== index));
  }

    if (screen === "add") {
    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            placeholder="Enter a Username"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Enter your age"
            value={userage}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setScreen("home")}>Back</button>
        </form>
      </div>
    );
  }

    return (
    <div>
      <h2>User Selection</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age})
            <button onClick={() => handleRemoveUser(index)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setScreen("add")}>➕ Add New User</button>
    </div>
  );
}

export default Profile;

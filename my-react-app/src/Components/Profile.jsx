import { useState } from "react";


function Profile(){
    
    const [users, setUser] = useState([]);
    const [username, setName] = useState("");
    const [userage, setAge] = useState("");

    function handleAddUser(){
        const newUser = {name: username,
                        age: userage};

        setUser(u => [...u, newUser]);
    }

    function handleAddName(event){
        setUser(event.target.value);        
    }
    
    function handleAddAge(event){
        setAge(event.target.value);
    }
    function handleRemoveUser(index){

    }

    return(

        <div>
            <form className="profile-form">
                <p>Who are you...</p>
                <ul>
                    {users.map((username, index) =>
                    <li key={index}>
                        {username.name}

                    </li>)}
                </ul>

                <form>
                    <h4>Add User</h4>
                    <input type="text" placeholder="Enter a Username" value={username} onChange={handleAddName} ></input><br></br>
                    <input type="number" placeholder="Enter your age" value={userage} onChange={handleAddAge}></input><br></br>
                    <button onClick={handleAddUser}>Submit</button>
                </form>



            </form>
        </div>
    )
}
export default Profile
import React,{useState} from "react";
import axios from "axios";

export const App = () => {

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')


  const onSubmit = () => {
    const z = {
      username: username,
      email: email,
      password: pass
    }
    console.log(z);
    axios.post('http://localhost:8000/auth/users/', z).then((res) => {
      console.log(res.data)
    })
  }
  return <div>
    <input type="text" placeholder="Name" onChange={(e) => {setUserName(e.target.value)}}/>
    <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
    <input type="text" placeholder="Password" onChange={(e) => {setPass(e.target.value)}}/>
    <button onClick={() => onSubmit()}>Send</button>
  </div>
};

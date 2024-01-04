import React, { useState } from 'react'
import axios from 'axios';
function Registration() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    function handleChange(e) {
        switch (e.target.id) {
            case "username": setUsername(e.target.value);
                break;
            case "password": setPassword(e.target.value);
                break;
            default: console.log("Invalid input");
                break;
        }
    }

    function handleSubmit(){
        const userData = {
            username:username,
            password:password
        }

        axios.post("http://localhost:5000/create",userData)
        .then((response)=>{
            console.log(response.data);
            alert(response.data,"Data Inserted");
        })
        .catch((err)=>{
            alert(err.message);
        })

    }

    
    return (
        <div className='container mt-5'>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="username"
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                    onChange={handleChange}
                />
                <label for="password" class="form-label">Password</label>
                <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    placeholder='password'
                    onChange={handleChange}
                />
                <button className='btn btn-primary m-5' onClick={handleSubmit} >Submit</button>
            </div>
        </div>
    )
}

export default Registration
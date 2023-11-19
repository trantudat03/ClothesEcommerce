import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export default function LoginAdmin() {
    
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const {user, setUser} = useContext(ShopContext)

    function handleLoginSubmit(ev) {
        //preventDefault
        ev.preventDefault();
        if(email && password) {
            const userDoc = axios.post('/login', {
                email, 
                password
            }).then(response => {
                alert("Login success");
                // setUser(userDoc)
                setUser(response.data)
            })
            .catch(e=> {
                alert("Login fail");
            }) 
        }else{
            alert("Please enter all fields")
        }
    }

    // console.log(user.email);
    if(user) {
         if(user.email !== "dat1@gmail.com"){
            return <Navigate to='/'/>
         }else{
            return <Navigate to={'/admin'}/>
         }
        
    }

    return (
        <div className="mt-0  grow flex items-center justify-around ">
            <div className="mb-64 mt-48 py-14 px-10 bg-pink-100 rounded-2xl">
                <h1 className="text-4xl text-center mb-4">Admin Login</h1>
                <form className="max-w-md mx-auto gap-10" onSubmit={handleLoginSubmit} >
                <input type="email"
                        placeholder="your@email.com"
                        value={email} onChange={(ev)=>{setEmail(ev.target.value)}}
                        
                         />
                <input type="password"
                        placeholder="password"
                        value={password} onChange={(ev)=>{setPassword(ev.target.value)}}
                         />
                <button className=" cursor-pointer primary mt-5">Login</button>
                
                </form>
            </div>
        </div>
    )
}
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";


export default function AccountPage() {

    const {user, setUser} = useContext(ShopContext);
    function handLogout() {
        axios.post('/logout').then(response => {
            setUser(null);
            alert('Logout success');
        })
        .catch(e => {
            alert('Logout fail');
        })
    }

    if(user===null) {
        return <Navigate to={'/login'} />
    }
    return (
        <div className="text-center mt-20">
            AccountPage<br/>
            <span className="text-primary cursor-pointer" onClick={handLogout}>
                Logout
            </span>
        </div>
    )
}
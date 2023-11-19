import Sidebar from "./Sidebar/Sidebar";
import './Css/Style.css'
import { useState } from "react";
import Main from "./Main/Main";
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ManageProduct from "./Main/ManageProduct";
import Dashboard from "./Main/Dashboard";



export default function PageAdmin() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const {action} = useParams();
    var actionSrc = action;
     
    if(action === undefined) {
        actionSrc = 'dashboard';
    }

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='page-admin flex flex-row h-screen'>
            <div className='w-60 h-full'>
            <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} className='h-full'/>
            </div>
           
            <div className="flex-1">
                <Header OpenSidebar={OpenSidebar}/>
                {actionSrc==='dashboard'  && (<Dashboard/>)}
                {actionSrc==='product' && (< ManageProduct  />)}
            </div>
        </div>
    )
}
import { Navbar } from './Components/Navbar/Navbar';
import Shop from './Page/Shop';
import ShopCategory from './Page/ShopCategory';
import Product from './Page/Product';
import Cart from './Page/Cart'
import LoginSignup from './Page/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Login from './Page/Login';
import AccountPage from './Page/AccountPage';
import PageAdmin from './PageAdmin/PageAdmin'
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginAdmin from './PageAdmin/LoginAdmin';


export default function Routers() {
    const location = useLocation();
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/');
    const desiredPath = pathSegments[1];
    console.log(desiredPath)
    return (
        <div>
            {desiredPath !== 'admin' && <Navbar/>}
            <Routes>
                <Route path="/" element={<Shop/>} />
                <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
                <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
                <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
                <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>} />
                </Route>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/signup' element={<LoginSignup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/account' element={<AccountPage/>}/>
                <Route path='/admin' element={<PageAdmin/>}/>
                <Route path='/admin/:action' element={<PageAdmin/>}/>
                <Route path='/admin/login' element={<LoginAdmin/>}/>
        
            </Routes>
            {desiredPath !== 'admin' && <Footer/>}
        </div>
       
    )
}
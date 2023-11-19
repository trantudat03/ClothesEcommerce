import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'


export default function Sidebar({openSidebarToggle, OpenSidebar}) {

    return (
        <aside  id="sidebar" className={openSidebarToggle ? "sidebar-responsive": " pt-10"}>
        <div className='sidebar-title'>
            <div className='sidebar-brand flex pr-10'>
                <BsCart3  className='icon_header'/> <span>SHOP</span>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list pr-10 '>
            <li className='sidebar-list-item '>
                <Link to={'/admin'} className='flex flex-row '  >
                    <BsGrid1X2Fill className='icon'/> <span>Dashboard</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to={'/admin/product'} className='flex flex-row' >
                    <BsFillArchiveFill className='icon'/> <span>Products</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <div className='flex flex-row' >
                    <BsFillGrid3X3GapFill className='icon'/> <span>Categories</span>
                </div>
            </li>
            <li className='sidebar-list-item'>
                <div className='flex flex-row' >
                    <BsPeopleFill className='icon'/> <span>Customers</span>
                </div>
            </li>
            <li className='sidebar-list-item'>
                <div className='flex flex-row' >
                    <BsListCheck className='icon'/> <span>Inventory</span>
                </div>
            </li>
            <li className='sidebar-list-item'>
                <div className='flex flex-row' >
                    <BsMenuButtonWideFill className='icon'/> <span>Reports</span>
                </div>
            </li>
            <li className='sidebar-list-item'>
                <div className='flex flex-row' >
                    <BsFillGearFill className='icon'/> <span>Setting</span>
                </div>
            </li>
        </ul>
    </aside>
    )
}
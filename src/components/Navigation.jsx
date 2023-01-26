import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineBars,AiFillCloseCircle} from "react-icons/ai";
import '../components/Navigation.css'
import MenuData from '../data/MenuData';

const Navigation = () => {
    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu=()=>{
        setShowMenu(!showMenu)
    }

  return (
        <aside>
            <div className='navbar'>
                <div className='navbar-toggle'>
                    <Link to="#" className="menu-bar">
                        <AiOutlineBars onClick={toggleMenu}/>
                    </Link>
                </div>
            </div>
            <nav className={showMenu? "nav-menu active" : "nav-menu"}>
                <ul className='nav-menu-item' onClick={toggleMenu}>
                    <li className='navbar-toggle'>
                        <Link to="#"><AiFillCloseCircle/></Link>
                    </li>
                    {MenuData.map((menu,index)=>{
                    return(
                    <li className='menu-text' key={index}>
                        <Link to={menu.path}><span>{menu.title}</span></Link>
                        {/* <Link to={menu.path}><a>{menu.title}</a></Link> */}
                    </li>
                    )
                   })}
                </ul>
            </nav>
        </aside>
  )
}

export default Navigation
import './styles.css'
import Icons from '../Icons'
import { useState } from 'react'
import Menu from '../Menu'

export default function NavBar (){

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const handleMenu =()=>{
        setMenuIsOpen(!menuIsOpen)
    }
    return(
        <div className="nvbar">
            {
                menuIsOpen? <Menu handleMenu={handleMenu}/> : ''
            }
            <div className="logoAndName">
                <span>D' Liam Tours</span>
            </div>
            <div className="Menu">
                <Icons.IoMdMenu onClick={()=> setMenuIsOpen(!menuIsOpen)}/>
            </div>
        </div>
    )
}
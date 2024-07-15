import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import logo from "../assets/images/logo.png"
export default function Navbar() {
    const [ChangeClass ,setChangeClass] = useState()
    function HandleChangingClass() {
        setChangeClass (!ChangeClass)

    }
    const [Color ,setColor]=useState(false)
    function ChangeColor() {
        if (window.scrollY >= 70){
            setColor(true)
        }else{
            setColor(false)
        }
        
    }
    window.addEventListener('scroll', ChangeColor)


    return(
        <>
        <nav className={Color ? 'navbr navbr-bg' : 'navbr' }>
            <div className="nav-baba">
                <div className="nav1"><p className="nav-par1">focal</p><img className="nav-img" src={logo}/></div>
                <p className="nav-par2">Digital marketing agency</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faBars} className="icominmobile" onClick={HandleChangingClass} />
            <div className={ChangeClass ? 'navHumbrger' : 'nav2'} >
            <a href="#home">Home</a>
            <a href="#Services">Services</a>
            <a href="#Portfolio">Portfolio</a>
            <a href="#Clients-Partners">Clients & Partners</a>
            <a href="#About Us">About Us</a>
            <a href="#Let's Talk">Let's Talk</a>
            </div>
            </div>
        </nav>
        </>
    )
    
}
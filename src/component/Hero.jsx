import logo2 from "../assets/images/pattren.png"
import logo3 from "../assets/images/gamefor-mobile.png"
import logo4 from "../assets/images/footer-mobile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons"
export default function Hero() {
    return(
        <>
        <div className="hero" id="home">
            <div className="hero-son1">
                <div className="son11"><h2>Hey !! Mario still here, But don’t forget that</h2>
                <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                   Branding, Digital Marketing, Web/App Development, Ui/Ux
                   Content creation, Graphic design, Social media and More........
                   So you can take a tour in our website, OR just Press Start :)</p></div>
                <div className="hero-images"> <img className="image-logo2" src={logo2} />
                      <img className="image-logo3" src={logo3}/>
                </div>
                 </div>

            <div> <img  className="image-logo4" src={logo4}/>
            <div className="footer-end">
            <div className="hero-icons">
            <FontAwesomeIcon icon={faXTwitter} className="hero-ic" />
            <FontAwesomeIcon icon={faInstagram} className="hero-ic" />
            <FontAwesomeIcon icon={faLinkedinIn} className="hero-ic"/>
            <FontAwesomeIcon icon={faBehance} className="hero-ic"/>
            <FontAwesomeIcon icon={faFacebookF} className="hero-ic"/>

            </div>
            <p>© 2021 - 2022 focal X agency All Right Reserved</p>
            </div>
            </div>
        </div>
        </>
    )}
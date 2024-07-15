import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import logo7 from "../assets/images/images.jfif"
export default function Footer() {
    return(
        <>
        <section className="footer" id="About Us">
            <div className="footer-son1">
                <div className="footer-par1">
                    <h1>focal</h1>
                    <img className="images7" src={logo7}/>
                    <p>.agency</p>

                </div>
                <h3>Head Office</h3>
                <p className="footer-par1">Syria - Latakia - grh2+hjx35.5199518</p>
                <p className="footer-par2">© 2021 - 2023 focal X L.L.C All Right Reserved</p>

            </div>



            <div className="footer-son2">
                <div className="footer-part2">
                    <h2>Sales</h2>
                    <a>contact@focal-x.com+963 953 666 056</a>
                    <h2>Public Relations</h2>
                    <a>pr@focal-x.com+963 953 666 052</a>
                </div>
                <div className="footer-part2">
                    <h2>Customer Support</h2>
                    <a>info@focal-x.com+963 953 666 054</a>
                    <h2>Human Resources</h2>
                    <a>hr@focal-x.com</a>
                </div>
                <div className="footer-part2">
                    <h2>Useful Links</h2>
                    <ul>
                        <li>Clients & Partners</li>
                        <li>Check Certificat ID</li>
                        <li>Check for employee</li>
                        <li>Our Brand ID guidlines</li>
                        <li>guidlines</li>
                    </ul>
                </div>
                <div className='footer-smoll'>
                    <h2>Keep In Touch</h2>
                    <div className="footer-icons">
                    <FontAwesomeIcon icon={faFacebookF} className="foot-ic"/>
                    <FontAwesomeIcon icon={faBehance} className="foot-ic"/>
                    <FontAwesomeIcon icon={faInstagram} className="foot-ic" />
                    <FontAwesomeIcon icon={faTwitter} className="foot-ic" />
                    <FontAwesomeIcon icon={faLinkedinIn} className="foot-ic"/>                    
                    </div>
                </div>
            </div>













        </section>
        </>
    )
}
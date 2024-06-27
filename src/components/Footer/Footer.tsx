import { FC } from "react";
import "./Footer.scss";
import Logo from "../../assets/images/brand_icon.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer:FC = () => {
    return(
        <>
            <div className="footer-container">
                <div className="footer-inner">
                    <img src={Logo}/>
                    <div className="footer-content">
                        <div className="footer-text">
                            <p>
                                Lorem ipsun dolor sit amet<br/>
                                Loreem ipsum<br/>
                                dolor sit amet Lorem<br/>
                                ipsum dolor sit.
                            </p>
                            <div className="footer-social-links">
                                <span><FaFacebookF/></span>
                                <span><FaInstagram/></span>
                                <span><FaLinkedinIn/></span>
                                <span><FaXTwitter/></span>
                            </div>
                        </div>
                        <div className="site-links">
                            <div className="links">
                                <h4 className="links-title">TEST</h4>
                                <div>
                                    <span>About us</span>
                                    <span>Contact us</span>
                                    <span>FAQs</span>
                                </div>

                            </div>
                            <div className="links">
                                <h4 className="links-title">LEGAL</h4>
                                <div>
                                    <span>Terms and condition</span>
                                    <span>Provacy policy</span>
                                </div>

                            </div>
                            <div className="links">
                                <h4 className="links-title">CONTACT</h4>
                                <div>
                                    <span>support@local.test</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
import "./footer.css"
import { footer } from "../../Data/data"
export default function Footer() {
    return(
    <div >
    <section className="footerContact">
        <div className="container glass-bg">
            <div className="send flex">
                <div className="text">
                    <h1>HAVE A QUESTION FOR US?</h1>
                    <p>We will help you grow your career </p>
                </div>
                <button className="btn5 contact-us"> Contact Us today</button>
            </div>
        </div>
    </section>


    <footer>
        <div className="container footer-dark">
            <div className="box footer-grid0">
                <div className="logo">
                    <h1>HAVEN HOMES🏠</h1>
                    <h2>Do you need help with anything?</h2>
                    <p>Receive updates, Hot deals, Tutorials, and discount sent straight into your inbox every month. </p>
                    <div className="input">
                        <input type="text" name="" placeholder="Email adress" id="" />
                        <button className="subscribe">Subscribe</button>
                    </div>
                </div>
            </div>

            
            <div className="footer-grid1">
                <div className="quick-links">
                    <h1>Quick Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="social-media">
                <h1>Connect</h1>
                    <ul>
                        <li> <i className="fa-brands fa-instagram" ></i> </li>
                        <li> <i className="fa-brands fa-facebook" ></i> </li>
                        <li> <i className="fa-brands fa-youtube" ></i> </li>
                        <li> <i className="fa-brands fa-whatsapp" ></i> </li>
                        <li> <i className="fa-brands fa-discord" ></i> </li>
                        
                    </ul>
                </div>
                
            </div>
        </div>
    </footer>
        <div className="legal">
        <span>©copyright HavenHomes 2022 Designed with ♥ by Francis</span>
        </div>
    </div>
    )
}
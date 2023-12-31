import { Link } from "react-router-dom";
import "./Home.css"

export default function Home(){
    return(
        <div className="home-container">
            <header>
                <div className="header-body" id="header">
                    <div className="logo">
                        <img src="./vips-logo-lw.png" alt="" />    
                    </div>                    
                    <div className="title">
                            VIPS Research Portal
                    </div>
                </div>
            </header>
            <nav>
                <div className="navbar-body">
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/sign-up'}>Sign up</Link>
                </div>
            </nav>
            <main>
                <div className="main-container">
                    <div className="navigation-tabs-container">
                        <Link to={"/"} className="navigation-tab">Home</Link>
                        <Link to={"/NewResearchProposal"} className="navigation-tab">New Research Proposal</Link>
                        <Link to={"/Publications"} className="navigation-tab">Publications</Link>
                        <Link to={"/Help"} className="navigation-tab">Help</Link>
                    </div>
                    <div className="navigation-window-container">
                        <div className="navigation-window">
                            <img src="./vips-campus.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="footer-body">
                &#169; Vivekananda Institute of Professional Studies. All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"


function NavBar() {
    return (
        <nav className="navbar fixed-top navbar-light bg-light text-white">

            
            <section className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <section className="navbar-nav">
                    <Link
                        to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/about"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        About
                   </Link>
                    <Link
                        to="/portfolio"
                        className={window.location.pathname === "/portfolio" || window.location.pathname === "/portfolio"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >
                        Portfolio
                  </Link>
                    <Link
                        to="contact"
                        className={window.location.pathname === "/contact" || window.location.pathname === "/contact"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >
                        Contact
                    </Link>
                </section>
            </section>
      </nav>
    )
}
export default NavBar;
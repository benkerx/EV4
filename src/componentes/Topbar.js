import React from "react";

const Topbar = () => {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-ligth">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget = "pushmenu" href="#" role = "button"><i className="fas fa-bars"/></a>

                </li>

            </ul>

        </nav>
    );
}

export default Topbar;
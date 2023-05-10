import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className={"header"}>
                <div className="container">
                    <div className="inner">
                        <div className="logo">
                            <Link to={"/"} className={"logo_link"}>
                                <img className={"logo_link_img"} src="/img/logo.png" alt="logo"/>
                            </Link>
                        </div>
                        <nav className="menu_header">
                            <button className="menu_header_btn"></button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

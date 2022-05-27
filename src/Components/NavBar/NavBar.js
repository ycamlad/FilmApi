import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <NavLink to={"/"}  exact  className={"nav-link"}>Page d'acceuil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/films"} exact className={"nav-link"}>les films</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default NavBar;

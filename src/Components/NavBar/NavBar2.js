import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar2 = (props) => {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/*nav link pour pouvoir faire des changements personnaliser */}
                        <ul className="navbar-nav mr-auto">
                            {/*nav nav-pills autre class name de bootstrap pour mettre effet bleu*/}
                            <li className="nav-item">
                                <NavLink to={"/"}
                                         /* exact sert a empecher les autres liens du NavLink a prendre les memes parametres de style*/
                                         exact
                                         className={"nav-link"}
                                         /* activeClassname sert a activer des classes css specifique donne un couleur a l'arriere plan du lien couleur est rose  */
                                         activeClassName={"activeAcceuil active"}
                                         /*activeStyle sert a inserer un style specifique creer un soulignement blanc sous le lien  */
                                         activeStyle={{
                                             textDecoration:"underline"
                                         }}
                                         >Page d'acceuil
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                     to={"/pays"}
                                     exact className={"nav-link"}
                                     activeClassName={"activeAcceuil activePays"}
                                     >les pays
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default NavBar2;

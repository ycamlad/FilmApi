import React from 'react';
import img404 from "../../../Assets/images/Erreur404/error404.png"

const Erreur404 = () => {

    return (
        <div className={"text-center"}>
            <img src={img404} alt={'erreur 404'} width={"66%"} />
            <div>La page demandée n'existe pas</div>
        </div>
    );
};

export default Erreur404;

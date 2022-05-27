import React from 'react';

const Bouton = (props) => {

    return (
        <>
            <button type="button" className="btn btn-outline-info  " onClick={props.clic}>{props.children}</button>
        </>
    );
};

export default Bouton;

import React, {useEffect, useState} from 'react';
import imageBriser from "../../../Assets/images/ImageNonDisponible/No-image-availablex2.png"
import {NavLink} from "react-router-dom";
import ReactPlayer from 'react-player'


const UnFilm = (props) => {

    const image1 =`https://image.tmdb.org/t/p/w500${props.affiche}`
   const pl =()=> {
       if (props.video !== null) {
           return `https://youtu.be/${props.video}`
       } else {

       }
   }


 useEffect(()=>{
     affichageUnFilm()
    },[])


    const style={
        fontSize:"1.125rem",
        textanchor:"middle"
    }




  const affichageUnFilm =()=> {
      if (props.solo) {

          return(
              <>
                  <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                  Bande-annonce
                              </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse"
                               aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body ">
                                  <div><ReactPlayer onReady  controls={true} url={pl()} /></div>
                              </div>
                          </div>
                      </div>

                  <div className="accordion-item" >
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
                                  Sommaire
                              </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse"
                               aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div className="accordion-body ">
                                  <div className={"fw-bolder "}><h4 className={"text-black"}>{props.sommaire}</h4></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
              </>
          )
      }
      else{
          return <> <NavLink to={"/films/"+props.id}>Voir la fiche du film</NavLink></>
      }
  }

    const briser =()=>{
        if(props.affiche==null){
            return(
              <img src={imageBriser} alt={props.sommaire}/>
            )
        }
        else{
            return <img src={image1} alt={props.titre} width={props.dimension} className={"align-items-center"}  />
        }
    }

    const comparerTitre=()=>{
        if(props.solo&&(props.titre!== props.titreOriginal)){
            return(
                <>
                    <div className="card-body text p-1">
                        <h4 className="card-subtitle text-black fw-bold">Titre original : {props.titreOriginal}</h4>
                    </div>
                </>
            )

        }

    }

    const langue=()=>{
        if(props.solo){
            return(
                <>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item bg-info text-white fs-4">Langue original : {props.langueOriginal}</li>
                    </ul>
                </>
            )
        }
    }


    return (
        <>


            <div className="card mb-3  h-100 p-2 m-2 border-primary container col-8 text-center align-content-center">
                <h3 className="card-header bg-dark text-white  ">{props.titre}</h3>
                {comparerTitre()}
                <div>

                <h5 className={"bg-info"}>Date de parution : {props.dateDeParution}</h5>
                </div>
                {briser()}
                {langue()}
                <div className="card-body">
                    {affichageUnFilm()}
                </div>

            </div>

        </>
    );
};

export default UnFilm;

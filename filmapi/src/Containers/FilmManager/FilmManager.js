import React,{Component} from "react";
import Bouton from "../../Components/Bouton/Bouton";
import axios from "axios";
import UnFilm from "./UnFilm/UnFilm";


class FilmManager extends Component {

    state={
        film:"oldboy",
        lesFilms:[],
        loading:false,
        nbrResultat:0

    }
    loading =()=>{
        this.setState({
            loading:true
        })
    }

    handleFilm=(recherche)=>{
        this.loading()
        let remplacement= recherche.replaceAll(" ","+")
       // console.log(remplacement)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=14cac0169f43ff308d533e1a2dc061de&query=${remplacement}`)
            .then(reponse =>{
               // console.log(reponse.data)
                const res = reponse.data.results.length;
                const tabFilms = reponse.data.results.map(film =>{
                    return{
                        titreOriginal:film.original_title,
                        titre:film.title,
                        langueOriginal:film.original_language,
                        sommaire:film.overview,
                        affiche:film.poster_path,
                        dateDeParution:film.release_date,
                        id:film.id,
                    }
                })
               // console.log(tabFilms)
                this.setState({
                    lesFilms:tabFilms,
                    loading:true,
                    nbrResultat:res

                })


           })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading:false
                });
            })
    }


    division =(x)=>{
        if(x===1){
            return "col p m"
        }
        else if(x<=3){
            const div = 12/x;
            return `col-${div}`

        }
        else{
            return "col-4"
        }
     }

    render() {
       let lesFilms= this.state.lesFilms.map((films)=>{

           // console.log(this.division(films.length))
            return(
                <div className={ this.division(this.state.nbrResultat)} key={films.id}>
                    <UnFilm
                        {...films}

                    />
                </div>
            )
        })
        return (
            <>
                <div className="container">
                    <div className="form-group">
                        <label className="form-label mt-4">Titre du film</label>
                        <div className="form-floating mb-3">
                            <input
                                required={true}
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Titre du film"
                                onChange={(e)=>this.setState({film:e.target.value})}/>
                            <label htmlFor="floatingInput" >Film</label>
                            <Bouton clic={()=>this.handleFilm(this.state.film)}>Recherche</Bouton>
                          <div className={"row"}>{lesFilms}</div>

                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default FilmManager;
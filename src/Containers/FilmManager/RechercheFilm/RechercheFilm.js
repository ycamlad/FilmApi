// import React, {useState} from 'react';
// import LeFilm from "../LeFilm/LeFilm";
// import axios from "axios";
//
//
// const RechercheFilm = (props) => {
//     const[film,setFilm]=useState({
//         lesFilms:[]
//     })
//
//     const[loading,setLoading] = useState({
//         loading:false
//     })
//
//   const handleFilm=(recherche)=>{
//       let remplacement= recherche.replaceAll(" ","+")
//       console.log(remplacement)
//         axios.get(`https://api.themoviedb.org/3/search/movie?api_key=14cac0169f43ff308d533e1a2dc061de&query=${remplacement}`)
//             .then(reponse =>{
//                 const lesFilms = reponse.data.results.map(film =>{
//                     return{
//                         titreOriginal:film.original_title,
//                         titre:film.title,
//                         langueOriginal:film.original_language,
//                         sommaire:film.overview,
//                         affiche:film.poster_path,
//                         dateDeParution:film.release_date,
//                     }
//                 })
//                 console.log(lesFilms)
//                 const newFilms={...film}
//                 newFilms.lesFilms=[...lesFilms]
//                 setFilm(newFilms)
//
//             })
//             .catch(error => {
//                 console.log(error);
//                 setLoading({
//                      loading:false
//                 });
//             })
//     }
//
//     const lesFilms= film.lesFilms.map((films)=>{
//         return(
//             <LeFilm
//                 {...films}
//             />
//         )
//     })
//
//
//         handleFilm(props.recherche)
//
//
//     return (
//         <>
//             {lesFilms}
//         </>
//     );
// };
//
// export default RechercheFilm;

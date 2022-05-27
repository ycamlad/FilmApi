import "bootswatch/dist/cerulean/bootstrap.min.css";
import TitreH1 from "./Components/TitreH1/TitreH1";
import FilmManager from "./Containers/FilmManager/FilmManager";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import LeFilm from "./Containers/FilmManager/LeFilm/LeFilm";
import Erreur from "./Components/Erreur/Erreur";
import Erreur404 from "./Components/Erreur/Erreur404/Erreur404";

function App() {
  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path={"/"} exact render={()=><TitreH1>Page d'acceuil</TitreH1>}/>
                <Route path={"/films"} exact component={FilmManager}/>
                <Route path={"/films/:id"}  render={(props)=>{
                    return <LeFilm  {...props} id={props.match.params.id} />}
                }/>
                <Route render={()=><Erreur>
                    <Erreur404/>
                </Erreur>}/>
            </Switch>
        </BrowserRouter>

    </>
  )}

export default App;

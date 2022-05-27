import React, {useEffect, useState} from 'react';
import UnFilm from "../UnFilm/UnFilm";
import axios from "axios";


const LeFilm = (props) => {
    const [lesData,setData]=useState({
        data:null
    })

    const [video,setVideo] = useState({
        videos:""
    })

    const [langue,setLangue]=useState({
        lesLangue:""
    })

    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        handleLeFilm()
    },[])

    const handleLeFilm=()=> {
        setLoading(!loading)
        axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=14cac0169f43ff308d533e1a2dc061de&append_to_response=videos,image`)
            .then(reponse =>{
                console.log(reponse.data)

                const newData={...langue}
                newData.data=reponse.data.spoken_languages[0].english_name
                setLangue(newData)
                setData(reponse.data)
                setLoading(loading)
                const newtab={...video}
                newtab.videos=reponse.data.videos.results[0].key
                setVideo(newtab)
                console.log(langue)

            })
            .catch((error)=>{
                console.log(error)
                setLoading(loading)

            })
    }



    return (
        <>
            <div className={"container  "}>
            <UnFilm
                titreOriginal={lesData.original_title}
                titre={lesData.title}
                affiche={lesData.poster_path}
                langueOriginal={langue.data}
                sommaire={lesData.overview}
                dateDeParution={lesData.release_date}
                dimension={"100%"}
                video={video.videos}
                loading={true}
                solo={true}


            />
            </div>
        </>
    );
};

export default LeFilm;

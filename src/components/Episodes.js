import React, {useState, useEffect} from "react"
import axios from "axios"
function Episodes(){
    const [episode, setEpisode] = useState([]);
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/episode/")
            .then(res => {
                console.log(res);
                setEpisode(res.data.results)
            })
            .catch(err => console.log("Episodes.js catch error", err),)
    },[])
    return(
        <div>
            {episode.map((ele) => <div><div>{ele.id}: {ele.name}</div><div>Date: {ele.air_date}</div></div>)}
        </div>
    )
}





export default Episodes
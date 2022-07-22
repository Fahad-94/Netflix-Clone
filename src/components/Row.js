import {useState, useEffect} from 'react';
import requests from './requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Row(props) {

    const imgBase = 'https://image.tmdb.org/t/p/original/';

    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState('');

    let url = requests[props.type];

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    function handleClick(movie) {
        if (trailerURL) {
            setTrailerURL('');
        } else {
            movieTrailer(movie.original_title)
              .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
              })
        }
    }


    useEffect(() => {


        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }, [url])

        
    

    let img;

    if (props.type === 'netflixOriginals') {
        img = movies.map(
                            movie => {
                            return (<img src={`${imgBase}${movie.poster_path}`} alt={`${movie.original_title}`} onClick={()=>handleClick(movie)} className='posterImg' id={movie.id}/>)
                        })
    } else {
         img = movies.map(
                            movie => {
                            return (<img src={`${imgBase}${movie.backdrop_path}`} alt={`${movie.original_title}`} onClick={()=>handleClick(movie)} className='posterImg' id={movie.id}/>)
                         })
                        
    }
    

    return (
        <>
         <div className="container">
            {props.type === 'netflixOriginals'? <h2 id='netflix-originals'>{props.title}</h2> : <h2>{props.title}</h2>}
            <div id='posters'>
                {img}
            </div>
         </div>
         {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </>
    )
}


export default Row;
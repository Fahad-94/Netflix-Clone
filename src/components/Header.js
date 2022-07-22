import {useState, useEffect} from 'react';
import requests from './requests';


function Header() {

    const [movie, setMovie] = useState([]);

    let url = requests.netflixOriginals;

    const imgBase = 'https://image.tmdb.org/t/p/original/';


    useEffect(() => {

        fetch(url)
        .then(res => res.json())
        .then(data => {
            let randomNum = Math.floor(Math.random() * data.results.length - 1);
            setMovie(data.results[randomNum]);
        })
    }, [url])

    const headerStyle = {
        backgroundImage : `linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(${imgBase}${movie.backdrop_path}) `,
        backgroundSize : 'cover',
        backgroundPosition : 'top center',
        display : 'flex',
        flexDirection : 'column',
        height : '550px'
    }

    console.log(movie)

    return (
        <header style={headerStyle}>
            <div id='header-div'>
                <h1>{movie.original_name}</h1>
                <div id='header-btn-div'>
                    <button className='header-btn'>Play</button>
                    <button className='header-btn'>My List</button>
                </div>
                <h3>{movie.overview}</h3>
            </div>
            <div id='grad'></div>
        </header>
    )
    
}


export default Header;


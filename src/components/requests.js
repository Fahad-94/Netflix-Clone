require('dotenv').config();

const api_key = process.env.REACT_APP_MOVIES_API_KEY;

const base = 'https://api.themoviedb.org/3';


const requests = {
    trending : `${base}/trending/all/week?api_key=${api_key}&language=en-US`,
    netflixOriginals : `${base}/discover/tv?api_key=${api_key}&with_networks=213`,
    topRated : `${base}/movie/top_rated?api_key=${api_key}&language=en-US`,
    actionMovies : `${base}/discover/movie?api_key=${api_key}&with_genres=28`,
    comedyMovies : `${base}/discover/movie?api_key=${api_key}&with_genres=35`,
    horrorMovies : `${base}/discover/movie?api_key=${api_key}&with_genres=27`,
    scienceFiction : `${base}/discover/movie?api_key=${api_key}&with_genres=878`,
    romanceMovies : `${base}/discover/movie?api_key=${api_key}&with_genres=10749`,
    documentaries : `${base}/discover/movie?api_key=${api_key}&with_genres=99`
}

export default requests;
import './App.css';
import Row from './components/Row';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Nav />
        <Header />
        
        <Row 
        title = 'Netflix Originals'
        type = 'netflixOriginals'
        />

        <Row 
        title = 'Trending'
        type = 'trending'
        />

        <Row 
        title = 'Top Rated'
        type = 'topRated'
        />

        <Row 
        title = 'Action Movies'
        type = 'actionMovies'
        />

        <Row 
        title = 'Comedy Movies'
        type = 'comedyMovies'
        />

        <Row 
        title = 'Horror Movies'
        type = 'horrorMovies'
        />

        <Row 
        title = 'Science Fiction Movies'
        type = 'scienceFiction'
        />

        <Row 
        title = 'Romance Movies'
        type = 'romanceMovies'
        />

        <Row 
        title = 'Documentaries'
        type = 'documentaries'
        />

        <Footer />
    </div>
  );
}

export default App;

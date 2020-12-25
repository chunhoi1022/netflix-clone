import "./css/App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetechNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetechTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetechTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetechActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetechComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetechHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetechRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetechDocumentaries} />
    </div>
  );
}

export default App;

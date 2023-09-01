import React from "react";
import Rows from "./Components/Rows";
import Banner from "./Components/Banner";
import request from "./Request.js";
import "./MyStyles/App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Rows title="Romace Movies" fetchUrl={request.fetchRomanceMovies} />
      <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;

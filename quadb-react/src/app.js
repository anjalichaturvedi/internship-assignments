import React, { useState, useEffect } from 'react';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      {shows.map((show) => (
        <div className="show" key={show.show.id}>
          <h2>{show.show.name}</h2>
          <p>{show.show.summary}</p>
          <button onClick={() => window.location.href = `/summary/${show.show.id}`}>Show Summary</button>
        </div>
      ))}
    </div>
  );
}

export default App;

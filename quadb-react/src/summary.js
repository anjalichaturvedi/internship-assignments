import React, { useState, useEffect } from 'react';

function Summary({ match }) {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const showId = match.params.id;
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setSummary(data.summary))
      .catch((error) => console.log(error));
  }, [match.params.id]);

  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
    </div>
  );
}

export default Summary;

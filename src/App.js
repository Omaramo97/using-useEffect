import React, { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    document.title = "useEffect Example";
  });

  useEffect(() => {
    console.log("I re-rendered");
  }, [update]);

  useEffect(() => {
    let didCancel = false;

    async function fetchJoke() {
      if (!didCancel) {
        let response = await fetch("https://api.chucknorris.io/jokes/random");
        let data = await response.json();
        setJoke(data);
      }
    }
    fetchJoke();

    return () => {
      didCancel = true;
    };
  }, [update]);

  return (
    <div className="App">
      {joke && (
        <>
          <img src={joke.icon_url} alt={joke.id} />
          <h1>{joke.value}</h1>
        </>
      )}
      <button onClick={() => setUpdate((prevState) => !prevState)}>
        {" "}
        Cause a re-render!
      </button>
      <button onClick={() => setUpdate((prevState) => !prevState)}>
        {" "}
        Get me a new joke!
      </button>
    </div>
  );
}

export default App;

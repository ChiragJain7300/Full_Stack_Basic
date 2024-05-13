import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  let [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then(function (response) {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>JOKES</h1>

      {jokes.map((el) => (
        <div key={el.id}>
          <h2>{el.title}</h2>
          <h2>{el.content}</h2>
        </div>
      ))}
    </>
  );
}

export default App;

import Header from "./Header";
import Content from "./Content";
import { useState, useEffect } from "react";

function App() {
  const [info, setInfo] = useState({});

  const URL = "https://swapi.dev/api/films";

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw Error("did not retrieve data");
        const data = await response.json();
        console.log(data);
        setInfo(data);
        console.log(info, 'from info');
      } catch (err) {
        console.log(err);
      }
    };

    fetchInfo();
  }, []);

  return (
    <div className="App">
      <Header />
      <Content movies={info.results}/>
    </div>
  );
}

export default App;

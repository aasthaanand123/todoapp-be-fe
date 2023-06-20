import { useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const URL = (mypath) => {
    return `http://localhost:5454/${mypath}`;
  };
  console.log(URL("items"));
  useEffect(() => {
    //will run once when component rendered
    axios
      .get(URL("items"))
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <div>hello</div>
    </div>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import "./App.css";
// import DatePicker from "./NasaCom/button.js"

import axios from "axios";
import { setDate } from "date-fns";

function App() {
  
    const [image, setImage] = useState([])
    const [paragraphState, setparagraphState] = useState([]);
    const [date, setDate] = useState([])
   
    
    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            console.log(response.data.url);
            setImage(response.data.url);
            setparagraphState(response.data.explanation);
            setDate(response.data.date)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])


  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <h3>{date}</h3>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <img src={image} />
      <p>{paragraphState}</p>
    </div>
  );
}

export default App;

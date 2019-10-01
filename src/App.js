import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import "./App.css";
import axios from "axios";

const Button = styled.button`
   padding:0.6rem 1 rem;
   margin: 0.5rem;
   border:none;
   border-radius: 0.3rem;
   background-color:#99ccff;
`;

const Text = styled.h3`
  font-size: 3.5rem;
`;


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
      <Button>random</Button>
      <Text>{date}</Text>
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

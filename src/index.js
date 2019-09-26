import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";



export function nasaComponent() {
    const [image, setImage] = useState([])

    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            console.log(response.data.url);
            setImage(response.data.url);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
}



ReactDOM.render(<App />, document.getElementById("root"));

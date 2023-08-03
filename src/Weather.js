import React from "react";
import axios from "axios";
import { Puff } from  'react-loader-spinner';

export default function Weather(props){
    // function handleResponse(response){
    //     alert(`The weather in ${response.data.name} is ${response.data.main.temp}`)
    // }

    // let apiKey = "2718952144ed077c12e7c160fb6fc351";
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    // axios.get(url).then(handleResponse);
    
    
    
    return (
        <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    );
}
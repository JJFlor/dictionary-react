import React,{ useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyWord, setKeyWord] = useState("");
    let [results, setResults] = useState(null);
    
    function handleResponse(response){
        setResults(response.data[0]);
    }
    function search(event){
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleWordChange(event){
         event.preventDefault();
         setKeyWord(event.target.value);

    }
    return (
        <div className="Dictionary">
         <form onSubmit={search}>
             <input
             type="search"
             placeholder="Type a word"
             onChange={handleWordChange}
             />
         </form>
         <Results results={results}/>
        </div>
    )
}
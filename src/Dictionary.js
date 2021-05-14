import React,{ useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    
    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(){
        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleWordChange(event){
         event.preventDefault();
         setKeyWord(event.target.value);

    }

    function load(){
        setLoaded(true);
        search();
    }

    if(loaded){
         return (
          <div className="Dictionary">
             <section>
                <div className="opening">
                    What word do you want to look up?
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                   type="search"
                   placeholder="Type a word..."
                   onChange={handleWordChange}
                   defaultValue={props.defaultKeyWord}
                  /> 
               </form>
               <div className="hint">
                  Suggested words: yoga, sunset, ice cream, hello...
               </div>
             </section>
             <Results results={results}/>
           </div>
    );
    } else {
        load();
        return "Loading...";
    }



   
}
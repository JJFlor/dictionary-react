import React,{ useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Loader from "react-loader-spinner";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos]= useState(null);
    
    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handleImagesResponse (response){
        setPhotos(response.data.photos);
    }

    function search(){
        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
         axios.get(apiUrl).then(handleDictionaryResponse).catch((error) => {
         alert("Ops! Sorry, word not found.Try again!😃");
         });

        //documentation: https://www.pexels.com/api/documentation/
        const pexelsApiKey = "563492ad6f917000010000012c9b635b7a1d4cff8fa2a7b8a4204d0d";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyWord}&per_page=8`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers }).then(handleImagesResponse);
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
                    What word do you want to search?
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
             <Photos photos={photos} />
           </div>
    );
    } else {
        load();
        return (
            <Loader
              type="ThreeDots"
              color="#9771F3"
              height={80}
              width={80}
              className="Loader"
            />
        );
    }
}
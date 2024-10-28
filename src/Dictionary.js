import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Loader from "react-loader-spinner";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handleImagesResponse(response) {
        console.log(response)
        if (response && response.data){
            setPhotos(response.data.photo.src.original);
        } else {
            console.error("La respuesta no contiene 'data':", response);
        }
        
    }

    function search() {
        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleDictionaryResponse).catch((error) => {
            alert("Ops! Sorry, word not found.Try again!😃");
        });

        //documentation: https://www.pexels.com/api/documentation/
        let serverProxyAPI = `https://api.pexels.com/v1/query=${keyWord}&per_page=8`;
        
        axios.get(serverProxyAPI).then(handleImagesResponse()).catch((error)=>{
            alert("Ops! Sorry, it was not possible to load the pictures.😢")
        });
       
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleWordChange(event) {
        event.preventDefault();
        setKeyWord(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
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
                <Results results={results} />
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
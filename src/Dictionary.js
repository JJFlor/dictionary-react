import React,{ useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [word, setWord] = useState("");
    
    function search(event){
        event.preventDefault();
        alert(`Searching for ${word} definition`);
    }
    function handleWordChange(event){
         event.preventDefault();
         setWord(event.target.value);

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
        </div>
    )
}
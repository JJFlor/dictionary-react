import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

import "./Meaning.css";

export default function Meaning(props){
    return (
      <div className="Meanings">
          <h3>
            {props.meaning.partOfSpeech};
          </h3>
          {props.meaning.definitions.map(function(definition,index){
              return(
               <div key={index}>
                 <p>
                  <strong>Definition:</strong> {definition.definition}
                  <br />
                    <Example example={definition.example}/>
                  <br />
                  <Synonyms synonyms={definition.synonyms}/> 
                 </p>   
               </div>
              );
          })}
      </div>
    ); 
}
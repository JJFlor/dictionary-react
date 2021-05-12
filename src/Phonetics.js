import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props){
    return (
        <div className="Phonetics">
            {props.phonetics.text}
            <br />
            <ReactAudioPlayer
               src={props.phonetics.audio}
               autoPlay={false}
               controls
              />
        </div>
    );
}
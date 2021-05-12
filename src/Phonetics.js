import React from "react";
import ReactAudioPlayer from 'react-audio-player';

import "./Phonetics.css";

export default function Phonetics(props){
    return (
        <div>
            <div className="text">
               {props.phonetics.text}
            </div>
            <br />
            <div className="audio">
                <ReactAudioPlayer
                  src={props.phonetics.audio}
                  autoPlay={false}
                  controls
                 />
            </div>
        </div>
    );
}
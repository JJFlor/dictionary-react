import React from "react";

export default function Example(props){
    if(props.example){
    return (
        <div className="example">
            <em>"{props.example}"</em>
        </div>
    );
} else {
    return null;
}
}
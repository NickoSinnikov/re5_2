import React from "react";

export default function SectionItem(props){
    return(
        <div className="services-item__section">
            {props.children(props.items)}
        </div>
    )
}
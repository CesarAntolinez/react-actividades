import React from "react";

export default function Button(props) {

    return (
        <div className="mb-3">
            <button type={props.type || 'button'} className={`btn btn-${props.color || 'primary'}`}>{props.children}</button>
        </div>
    )
}
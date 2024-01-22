import React from 'react';

export default function Input(props) {

    return (
        <div className='mb-3 text-start'>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type || 'text'} className='form-control' id={props.id} placeholder={props.placeholder || ''}
                onChange={(e) => props.onChange(e)} />
        </div>
    )
}
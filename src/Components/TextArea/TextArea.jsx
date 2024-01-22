import React from 'react';

export default function TextArea(props) {

    return (
        <div className='mb-3 text-start'>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea className='form-control' id={props.id} rows='3' placeholder={props.placeholder || ''}
                onChange={(e) => props.onChange(e)}></textarea>
        </div>
    )
}
import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


function Job(props) {
    
    return (
        <div className={ `list-group-item mb-1 d-flex justify-content-between align-items-start ${props.completed ? 'bg-success-subtle text-emphasis-success' : ''}` }>
            <div className='ms-2 me-auto'>
                <div className='fw-bold'>{props.title || ''}</div>
                {props.content || ''}
            </div>

            <div className='my-auto mx-0 pointer-event' style={{ cursor: 'pointer' }}>
                <IoIosCheckmarkCircleOutline  size={25} onClick={() => props.onCompleted(props.id)}/>
            </div>
            <div className='my-auto mx-0 pointer-event' style={{ cursor: 'pointer' }}>
                <IoMdCloseCircleOutline size={25} onClick={() => props.onDelete(props.id)} />
            </div>
        </div>
    )
}

export default Job;
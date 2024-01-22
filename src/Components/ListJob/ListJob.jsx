import React from "react";
import Job from "@/Components/Job/Job";

export default function ListJob(props) {

    let jobs = props.jobs

    return (
        <>
            <h4>Listado de tareas</h4>
            <div className='list-group p-0'>
                {
                    jobs.map( (item, index) => <Job key={item.id} title={item.title} content={item.content} completed={item.completed} onCompleted={props.onCompleted} onDelete={props.onDelete} id={item.id}/>)
                }
            </div>
        </>
    )
}
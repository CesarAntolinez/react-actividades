import React, { useState } from "react";
import TextArea from "@/Components/TextArea/TextArea";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import { v4 as uuidv4 } from 'uuid';

export default function JobForm(props) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        let newJob = {
            id: uuidv4(),
            title: title,
            content: content,
            completed: false
        }

        props.onAddJob(newJob);
    };

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const onContentChange = (event) => {
        setContent(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <Input label='Titulo de la tarea' id='title' onChange={onTitleChange} />
            <TextArea label='Contenido de la tarea' id='content' onChange={onContentChange} />
            <Button type='submit'>Guardar</Button>
        </form>
    )
}
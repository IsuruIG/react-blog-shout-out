import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const NewPost = () => {
    const formState = useForm({
        title: '',
        body: '',
        userId: 1 
    });
    const redirect = useHistory();

    const addPost = useCallback(async (event) => {
        event.preventDefault();
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    title: formState.inputs.title.value,
                    body: formState.inputs.description.value,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            };
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', options);
            const data = await response.json();
            redirect.push(`/posts/${data.id}`);
        } catch (error) {};
    }, [formState, redirect]);

    return (
        <div onSubmit={addPost}>
            <form>
                <label>Title</label>
                <input id='title' type='text' />
                <label>Description</label>
                <input id='desc' type='textarea' />
                <button type='submit'>Add Post</button>
            </form>
        </div>
    );
};

export default NewPost;
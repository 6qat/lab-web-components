'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const PostButton = () => {
    const [id, setId] = useState(1);

    return (
        <>
            <Button onClick={() => setId(Math.floor(Math.random() * 100))}>Next post</Button>
            <PostBody id={id} />
        </>
    );
};

const PostBody = ({ id }: { id: number }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            signal: controller.signal,
        })
            .then((response) => response.json())
            .then((json) => setText(json.body));

        return () => {
            controller.abort();
        };
    }, [id]);

    return (
        <>
            <p>Post id: {id}</p>
            <div>{text}</div>
        </>
    );
};

export default PostButton;

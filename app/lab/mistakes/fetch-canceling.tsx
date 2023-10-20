import React, { useEffect, useState } from 'react';

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

    return <div>{text}</div>;
};

export default PostBody;

'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import useSWR, { Fetcher } from 'swr';

const PostButton = () => {
    const [id, setId] = useState(1);

    return (
        <>
            <Button onClick={() => setId(Math.floor(Math.random() * 100))}>
                Next post
            </Button>
            {/*<PostBody id={id} />*/}
            <PostBodyWithSWR id={id} />
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

// https://swr.vercel.app/docs/typescript
function PostBodyWithSWR({ id }: { id: number }) {
    const fetcher: Fetcher<string, string > = (key) =>
        fetch(key)
            .then((res) => res.json())
            .then((json) => json.body);

    // const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, options)
    const { data, error, isLoading } = useSWR(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        fetcher,
        {
            dedupingInterval: 8000,
            refreshInterval: 8000
        }
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    // render data
    return (
        <>
            <p>Post id: {id}</p>
            <div>hello {data}!</div>
        </>
    );
}

export default PostButton;

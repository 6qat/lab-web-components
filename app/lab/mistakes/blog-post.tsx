'use client';
import React, { useEffect, useState } from 'react';

type TPost = {
    title: string;
    body: string;
};

function BlogPost() {
    console.log('Rendering component.');

    // const [post, setPost] = useState<TPost>({
    //     title: '',
    //     body: '',
    // });
    const [post, setPost] = useState<TPost | null>(null);

    const [loading, setLoading] = useState(true);

    // useEffect(() runs AFTER RENDERING the component
    useEffect(() => {
        console.log('Component mounted.');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                setPost(json);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1 className='text-2xl'>{post?.title}</h1>
                    <p>{post?.body}</p>
                </>
            )}
        </>
    );
}

export default BlogPost;

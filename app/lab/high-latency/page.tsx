'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

// https://www.youtube.com/watch?v=ZqerXMzt-EY
const HighLatency = () => {
    const [fetchStatus, setFetchStatus] = useState('idle');
    const [users, setUsers] = useState<unknown[]>([]);
    const controllerRef = useRef<AbortController>();

    async function getUsers() {
        setFetchStatus('loading');
        controllerRef.current = new AbortController();
        setUsers([]);

        const timeout = setTimeout(() => {
            // controller.abort();
            setFetchStatus('delayed');
        }, 2000);

        return await fetch('http://localhost:3004/users', {
            signal: controllerRef.current.signal,
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setFetchStatus('idle');
            })
            .catch((e) => {
                if (e.name === 'AbortError') setFetchStatus('aborted');
                else setFetchStatus('error');
            })
            .finally(() => {
                clearTimeout(timeout);
            });
    }

    function cancelFetch() {
        if (controllerRef.current) controllerRef.current.abort();
        setFetchStatus('idle');
    }

    return (
        <div>
            {fetchStatus === 'idle' ? (
                <Button onClick={getUsers}> Press Me</Button>
            ) : fetchStatus === 'loading' ? (
                <Button disabled> Loading Users </Button>
            ) : fetchStatus === 'aborted' ? (
                <>
                    <Button onClick={getUsers}> Press Me</Button>
                    <p className={`text-red-500`}>Fetching aborted...</p>
                </>
            ) : fetchStatus === 'delayed' ? (
                <>
                    <Button disabled> DELAYED </Button>
                    <Button onClick={cancelFetch}>Cancel fetch</Button>
                </>
            ) : (
                <>
                    <Button onClick={getUsers}> Press Me</Button>
                    <p>ERROR</p>
                </>
            )}
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    );
};

export default HighLatency;

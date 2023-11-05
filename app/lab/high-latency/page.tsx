'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// https://www.youtube.com/watch?v=ZqerXMzt-EY
const HighLatency = () => {
    const [fetchStatus, setFetchStatus] = useState('idle');
    const [users, setUsers] = useState<unknown[]>([]);

    async function getUsers() {
        setFetchStatus('loading');
        const controller = new AbortController();

        const timeout = setTimeout(() => {
            controller.abort();
        }, 20000);

        return await fetch('http://localhost:3004/users', {
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setFetchStatus('idle');
            })
            .catch((_) => setFetchStatus('error'))
            .finally(() => {
                clearTimeout(timeout);
            });
    }

    return (
        <div>
            {fetchStatus === 'idle' ? (
                <Button onClick={getUsers}> Press Me</Button>
            ) : fetchStatus === 'loading' ? (
                <Button disabled> Loading Users </Button>
            ) : (
                <Button disabled>Error</Button>
            )}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HighLatency;

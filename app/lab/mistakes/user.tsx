'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

function User() {
    const [user, setUser] = useState({
        name: '',
        city: 'Belo Horizonte',
        age: 47,
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUser((prev) => ({ ...prev, name: e.target.value }));
    }

    return (
        <>
            <form>
                <Input
                    type='text'
                    onChange={handleChange}
                    placeholder='Your Name'
                />
            </form>
            <p>{JSON.stringify(user)}</p>
        </>
    );
}

export default User;
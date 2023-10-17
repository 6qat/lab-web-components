"use client";

import React, {useState} from 'react';
import {Input} from "@/components/ui/input";

function User() {

    const [user, setUser,] = useState({name: "", city: "", age: 50});

    return (
        <form>
            <Input type="text" placeholder="Your Name"/>
        </form>
    );
}

export default User;
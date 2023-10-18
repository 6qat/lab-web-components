"use client"
import React, {useState} from 'react';
import {Input} from "@/components/ui/input";

type TFormState = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const Form = () => {

    const [form, setForm] = useState<TFormState>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setForm(prev =>
            ({
                ...prev, [e.target.name]: value
            })
        );
    }

    return (
        <>
            <form className="flex flex-col gap-y-2">
                <Input type="text"
                       name="firstName"
                       placeholder="First Name"
                       className="px-4 py-2"
                       onChange={handleChange}
                />
                <Input type="text"
                       name="lastName"
                       placeholder="Last Name"
                       className="px-4 py-2"
                       onChange={handleChange}
                />
                <Input type="email"
                       name="email"
                       placeholder="Email"
                       className="px-4 py-2"
                       onChange={handleChange}
                />
                <Input type="password"
                       name="password"
                       placeholder="Password"
                       className="px-4 py-2"
                       onChange={handleChange}
                />
            </form>
            <p>
                {JSON.stringify(form)}
            </p>
        </>
    );
};

export default Form;
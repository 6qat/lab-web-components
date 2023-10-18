import React from 'react';
import Counter from "@/app/lab/mistakes/counter";
import ProductCard from "@/app/lab/mistakes/product-card";
import User from "@/app/lab/mistakes/user";
import {Separator} from "@/components/ui/separator";
import Form from "@/app/lab/mistakes/form";

function Page() {
    return (
        <>
            <Separator className="mb-6 h-2"/>
            <Counter/>
            <Separator className="my-6 h-2"/>
            <ProductCard/>
            <Separator className="my-6 h-2"/>
            <User/>
            <Separator className="my-6 h-2"/>
            <Form/>
            <Separator className="my-6 h-2"/>
            
        </>
    );
}

export default Page;


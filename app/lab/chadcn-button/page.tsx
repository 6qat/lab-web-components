'use client';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';

export default function ChadCnButton() {
    return (
        <main className=''>
            <h1>Buttons</h1>
            <div className='flex'>
                <Button variant='default'>Button</Button>
                <Button disabled>
                    <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
                    Please wait
                </Button>
            </div>
        </main>
    );
}

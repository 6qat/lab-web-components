"use client"
import {Button} from "@/components/ui/button";
import {ReloadIcon} from "@radix-ui/react-icons";
import {notifications} from '@mantine/notifications';

import {rem} from '@mantine/core';
import {IconBrandMantine} from "@tabler/icons-react";

export default function Home() {
    return (
        <main className="">
            <h1>Home</h1>
            <div className="flex">
                <Button variant="default">
                    Button
                </Button>
                <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/>
                    Please wait
                </Button>
            </div>
            <Button
                variant="outline"
                onClick={() =>
                    notifications.show({
                        title: 'Default notification',
                        message: 'Hey there, your code is awesome! 🤥',
                    })
                }
            >
                Show notification
            </Button>
            <IconBrandMantine
                style={{width: rem(80), height: rem(80)}}
                stroke={1.2}
                color="var(--mantine-color-blue-filled)"
            />
        </main>
    )
}
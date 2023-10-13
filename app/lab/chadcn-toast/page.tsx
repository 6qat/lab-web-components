"use client"
import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";

export default function ChadCnToast() {
    const {toast} = useToast()
    return (
        <main className="">
            <h1>ChadCn Toast</h1>
            <Button
                variant="outline"
                onClick={() => toast({
                    title: "Scheduled: Catch up ",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    duration: Infinity,
                    // duration: 5000,
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                })}>
                Toast
            </Button>

        </main>
    )
}
"use client"
import {Button} from "@/components/ui/button";
import {ReloadIcon} from "@radix-ui/react-icons";

// https://react-hot-toast.com/docs/toast
import toast from "react-hot-toast";
import {XCircle} from "lucide-react";

const notify1 = () => toast('Hey there, your code is awesome!', {
    // duration: Infinity,
    duration: 4000,

    position: 'top-center',

    // Styling
    style: {},
    className: '',

    // Custom Icon
    icon: '👏',

    // Change colors of success/error/loading icon
    iconTheme: {
        primary: '#000',
        secondary: '#fff',
    },

})

const notify2 = () => toast((t) => (

    <span className="flex items-center">
    Custom and <b>bold</b>
    <button className="ml-2" onClick={() => toast.dismiss(t.id)}>
      <XCircle className="ml-5"/>
    </button>
    </span>
    
), {
    duration: Infinity,
});

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
                onClick={notify1}>
                Show notification 1
            </Button>
            <Button
                variant="outline"
                onClick={notify2}>
                Show notification 2
            </Button>
        </main>
    )
}
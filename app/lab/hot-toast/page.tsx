"use client"
import {Button} from "@/components/ui/button";

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

export default function HotToast() {
    return (
        <main className="">
            <h1>React Hot Toast</h1>

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
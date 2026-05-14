"use client"

import { LogOutIcon } from "lucide-react"
import {useFormStatus} from "react-dom"

export function LogoutButton() {
    const {pending} = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            
            className="w-full rounded-xl inline-flex items-center gap-2  bg-[#4b5205] px-3 py-2 
                        text-sm font-semibold text-white 
                        shadow-lg shadow-[#4b5205]/25 
                        transition hover:-translate-y-0.5 
                        hover:bg-[#3f4306] hover:shadow-xl hover:shadow-[#4b5205]/30 
                        disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-[#9b967c]"
        >
            <LogOutIcon size={20} />
             
            {pending ? "Logging out..." : "Logout"}
        </button>
    )
}
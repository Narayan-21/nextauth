"use client";

import { signIn, signOut, useSession } from "next-auth/react"

export const AppBar = () => {
    const session = useSession();

    return <div>
        <button onClick={() => {
            signIn();
        }}>Signin</button> <br />
        <button onClick={() => {
            signOut();
        }}>Signout</button>
        {JSON.stringify(session)}
    </div>
}
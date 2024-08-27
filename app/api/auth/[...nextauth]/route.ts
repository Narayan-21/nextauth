import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: "Email", type: "text", placeholder: "Email"},
                password: {label: "Password", type: "password", placeholder: "Password"},
            },
            async authorize(credentials: any){
                console.log(credentials);
                const username = credentials.username;
                const password = credentials.password;

                return {
                    id: 'user1',
                    name: 'hairi'
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler;
export const POST = handler;
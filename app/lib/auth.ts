import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google"; "next-auth/providers/google";

export const NEXT_AUTH = {
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
                    id: '1',
                    name: 'hairi'
                }
            }
        }),
        Google({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({token, user}: any) => {
            console.log(token);
            token.userId = token.sub;
            return token;
        },
        async signIn({user, email}: any) {
            const isAllowedToSignIn=true;
            if (isAllowedToSignIn) {
                return true
            } else {
                return false
            }
        },
        session: ({session, token, user}: any) => { // To further add fields like 'id' from the provider
            if (session && session.user) {
                session.user.id = token.userId;
            }
            return session;
        }
    }
}
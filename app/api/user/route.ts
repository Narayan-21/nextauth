import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// client component => useSession();
// server component => getServerSession();

export async function GET() {
    const session = await getServerSession(NEXT_AUTH);
    return NextResponse.json({
        session
    })
}
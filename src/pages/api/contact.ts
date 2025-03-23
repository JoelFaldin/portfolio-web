import type { APIRoute } from "astro";
import { db, Messages } from "astro:db";
import { randomUUID } from "node:crypto";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        
        const newMessage = {
            messageId: randomUUID(),
            name: data.name,
            email: data.email,
            message: data.message,
        }

        await db.insert(Messages).values(newMessage);

        return new Response(
            JSON.stringify({ ok: true, message: "Message submitted!" }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ ok: false, message: "There was an error on the server, try again later." }),
            { status: 500 }
        );
    }
}

export const prerender = false;
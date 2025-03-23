import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        console.log(data)

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
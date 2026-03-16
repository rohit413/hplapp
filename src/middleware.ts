import { NextResponse } from "next/server";


export async function middleware() {
    const start = Date.now();

    try {
        const response = NextResponse.next();

        // Calculate processing time (of the middleware itself)
        const duration = Date.now() - start;

        // Add custom header for debugging
        response.headers.set("X-Response-Time", `${duration}ms`);

        return response;
    } catch (error) {
        console.error("Middleware Error:", error);
        return new NextResponse(
            JSON.stringify({ success: false, message: "Server Busy / Timeout" }),
            { status: 504, headers: { "content-type": "application/json" } }
        );
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};

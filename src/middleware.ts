import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Timeout duration in milliseconds (300 seconds as requested)
const REQUEST_TIMEOUT_MS = 300000;

export async function middleware(request: NextRequest) {
    const start = Date.now();
    const url = request.nextUrl.pathname;

    try {
        const response = NextResponse.next();

        // Calculate processing time (of the middleware itself)
        const duration = Date.now() - start;

        // Add custom header for debugging
        response.headers.set("X-Response-Time", `${duration}ms`);

        // Log request (optional, can be noisy)
        // console.log(`[MW] ${request.method} ${url} - ${duration}ms`);

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

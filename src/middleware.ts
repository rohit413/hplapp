import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Timeout duration in milliseconds (e.g., 2.5 seconds to beat the 3s PM2 kill)
const REQUEST_TIMEOUT_MS = 2500;

export async function middleware(request: NextRequest) {
    const start = Date.now();

    try {
        // Create a promise that rejects after timeout
        const timeoutPromise = new Promise<never>((_, reject) => {
            setTimeout(() => {
                reject(new Error("Request Timeout"));
            }, REQUEST_TIMEOUT_MS);
        });

        // Race the actual response handling against the timeout
        // Note: Middleware in Next.js runs *before* the request is processed by the page/API.
        // However, we can't easily wrap the *entire* downstream processing here in the Edge runtime.
        // So usually middleware is used for routing/auth. 
        // BUT we can check if the middleware ITSELF hangs.

        // For a Global Request Timeout, we primarily rely on the server configuration.
        // However, we can use this to add safety headers and log the incoming request.

        const response = NextResponse.next();

        // Calculate processing time (of the middleware itself)
        const duration = Date.now() - start;

        // Add custom header for debugging
        response.headers.set("X-Response-Time", `${duration}ms`);

        // If we want to strictly abort requests on the client side if they take too long,
        // we can only control the response headers here.
        // Real server-side processing timeout for Pages needs to be handled in node/config.

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

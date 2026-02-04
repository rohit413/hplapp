/**
 * Safety wrapper for async operations to prevent undefined hanging
 */

export class TimeoutError extends Error {
    constructor(message = "Operation timed out") {
        super(message);
        this.name = "TimeoutError";
    }
}

/**
 * Wraps a promise with a timeout
 * @param promise The async operation to run
 * @param msTimeout Timeout in milliseconds (default: 5000ms)
 * @param operationName Optional name for logging
 */
export async function withTimeout<T>(
    promise: Promise<T>,
    msTimeout: number = 5000,
    operationName: string = "Anonymous Operation"
): Promise<T> {
    let timeoutId: NodeJS.Timeout;

    const timeoutPromise = new Promise<never>((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new TimeoutError(`[${operationName}] timed out after ${msTimeout}ms`));
        }, msTimeout);
    });

    try {
        const result = await Promise.race([promise, timeoutPromise]);
        return result;
    } finally {
        clearTimeout(timeoutId!);
    }
}

/**
 * High-order function version for wrapping API handlers
 */
export function createSafeHandler<T extends any[], R>(
    handler: (...args: T) => Promise<R>,
    timeoutMs: number = 10000,
    fallbackValue?: R
) {
    return async (...args: T): Promise<R | undefined> => {
        try {
            return await withTimeout(handler(...args), timeoutMs, handler.name);
        } catch (error) {
            console.error(`Handler failed:`, error);
            if (fallbackValue !== undefined) return fallbackValue;
            throw error;
        }
    };
}

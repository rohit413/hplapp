/**
 * Performance monitoring utility
 */
import { logger } from './logger';

export const performanceMonitor = {
    startTimer: (label: string) => {
        const start = process.hrtime();
        return {
            end: () => {
                const diff = process.hrtime(start);
                const durationMs = (diff[0] * 1000 + diff[1] / 1e6).toFixed(2);

                // Log if operation takes longer than expected (e.g., 500ms)
                if (parseFloat(durationMs) > 500) {
                    logger.warn(`Slow Operation Detected`, { label, durationMs: `${durationMs}ms` });
                } else {
                    logger.debug(`Operation completed`, { label, durationMs: `${durationMs}ms` });
                }
                return durationMs;
            }
        };
    },

    // High-order function to measure async function duration automatically
    measureAsync: <T extends any[], R>(
        fn: (...args: T) => Promise<R>,
        label: string = fn.name
    ) => {
        return async (...args: T): Promise<R> => {
            const timer = performanceMonitor.startTimer(label);
            try {
                const result = await fn(...args);
                timer.end();
                return result;
            } catch (error) {
                timer.end();
                throw error;
            }
        };
    }
};

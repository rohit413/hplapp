/**
 * Structured logger for production debugging
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogPayload {
    message: string;
    [key: string]: any;
}

const isProduction = process.env.NODE_ENV === 'production';

export const logger = {
    info: (message: string, meta: object = {}) => log('info', message, meta),
    warn: (message: string, meta: object = {}) => log('warn', message, meta),
    error: (message: string, error?: any, meta: object = {}) => {
        const errorMeta = error instanceof Error
            ? { name: error.name, message: error.message, stack: error.stack, ...meta }
            : { error, ...meta };
        log('error', message, errorMeta);
    },
    debug: (message: string, meta: object = {}) => {
        if (!isProduction) log('debug', message, meta);
    }
};

function log(level: LogLevel, message: string, meta: object) {
    const timestamp = new Date().toISOString();
    // JSON format for easier parsing in PM2/CloudWatch
    const logEntry = JSON.stringify({
        timestamp,
        level,
        message,
        ...meta,
        pid: process.pid
    });

    // In development, pretty print
    if (!isProduction) {
        const color = {
            info: '\x1b[36m', // Cyan
            warn: '\x1b[33m', // Yellow
            error: '\x1b[31m', // Red
            debug: '\x1b[90m' // Gray
        }[level];

        console.log(`${color}[${level.toUpperCase()}] ${message}\x1b[0m`, meta);
    } else {
        // Production: Standard output
        console.log(logEntry);
    }
}

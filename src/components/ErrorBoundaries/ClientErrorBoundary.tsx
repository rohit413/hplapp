"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ClientErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log to console in development
        console.error("Uncaught error:", error, errorInfo);

        // You could send this to your logging service
        // simple logging:
        console.log("Error Boundary Caught:", {
            error: error.message,
            componentStack: errorInfo.componentStack
        });
    }

    public render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="flex min-h-[400px] w-full flex-col items-center justify-center bg-gray-50 p-6 text-center">
                        <div className="max-w-md rounded-xl bg-white p-8 shadow-lg">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                Something went wrong
                            </h2>
                            <p className="mb-6 text-gray-600">
                                We encountered an unexpected error. Please try refreshing the page.
                            </p>
                            <button
                                onClick={() => {
                                    this.setState({ hasError: false });
                                    window.location.reload();
                                }}
                                className="rounded-full bg-[#6db921] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#5ca01b]"
                            >
                                Refresh Page
                            </button>
                            {process.env.NODE_ENV === "development" && (
                                <pre className="mt-4 max-h-40 overflow-auto rounded bg-gray-100 p-2 text-left text-xs text-red-600">
                                    {this.state.error?.toString()}
                                </pre>
                            )}
                        </div>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}

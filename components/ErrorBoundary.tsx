"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-screen flex items-center justify-center bg-dark">
            <div className="text-center p-8 glass-card rounded-2xl max-w-md">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Something went wrong
              </h2>
              <p className="text-gray-400 mb-4">
                We encountered an error loading the 3D interface.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Reload Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

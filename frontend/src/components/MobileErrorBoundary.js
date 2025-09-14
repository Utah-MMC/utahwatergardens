import React from 'react';

class MobileErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console and any error reporting service
    console.error('Mobile Error Boundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Send error to analytics if available
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      });
    }
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI for mobile
      return (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <div style={{
            maxWidth: '400px',
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h1 style={{
              color: '#1e40af',
              fontSize: '24px',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Utah Water Gardens
            </h1>
            
            <p style={{
              color: '#6b7280',
              fontSize: '16px',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              We're experiencing a technical issue. Please try refreshing the page.
            </p>
            
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#1e40af',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              Refresh Page
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Go Home
            </button>

            {process.env.NODE_ENV === 'development' && (
              <details style={{ marginTop: '20px', textAlign: 'left' }}>
                <summary style={{ cursor: 'pointer', color: '#1e40af' }}>
                  Error Details (Development)
                </summary>
                <pre style={{
                  fontSize: '12px',
                  color: '#dc2626',
                  backgroundColor: '#fef2f2',
                  padding: '10px',
                  borderRadius: '4px',
                  marginTop: '10px',
                  overflow: 'auto'
                }}>
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default MobileErrorBoundary;

import * as Sentry from "@sentry/react";

function init () {
    Sentry.init({
        dsn: "https://3bbdb8f1db0e489ae2e58f63e27611a3@o4506157850492928.ingest.sentry.io/4506157855604736",
        integrations: [
            new Sentry.BrowserTracing({
                // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
                tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
            }),
            new Sentry.Replay(),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    })
}

function log (error) {
    Sentry.captureException()
}

const logger = {
    init,
    log
}

export default logger

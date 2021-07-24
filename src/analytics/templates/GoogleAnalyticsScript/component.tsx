import * as React from "react";

const GOOGLE_ANALYTICS_ID: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

export function GoogleAnalyticsScript() {
    if (typeof window === undefined) {
        return null;
    }

    // Render Google Analytics Script
    return (
        <React.Fragment>
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GOOGLE_ANALYTICS_ID}', {
        page_path: window.location.pathname,
    });
    `,
                }}
            />
        </React.Fragment>
    );
}

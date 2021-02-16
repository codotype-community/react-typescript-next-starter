import * as React from "react";
import Head from "next/head";

export function HomePage() {
    return (
        <div className="p-5">
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="text-2xl">React TypeScript Next.js starter</h1>
        </div>
    );
}

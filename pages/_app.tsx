import "../src/styles/tailwind.css";
import Head from "next/head";
import { Navbar } from "../src/components/Navbar";

export default ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
};

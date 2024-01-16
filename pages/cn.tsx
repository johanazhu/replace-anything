import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import DropDown2, { VibeType2 } from "../components/DropDown2";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CnFaq from "../components/CnFaq";
import Github from "../components/GitHub";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Script from "next/script";

const Home: NextPage = () => {


    return (
        <div className="flex mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>
                    Replace Anything | 千变万换 | 替换任何东西
                </title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>

            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center mt-2 sm:my-16">
                <h1 className="sm:text-4xl text-2xl max-w-1xl font-bold text-slate-900">
                    在几秒钟内{" "}
                    <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                        替换任何东西
                    </span>{" "}
                </h1>
                <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
                <iframe
                    src={process.env.Replace_Anything_URL}
                    style={{ overflow: 'hidden', width: '100%', height: '1337px' }} />
            </main>
            <CnFaq />
            <Footer />
        </div>
    );
};

export default Home;


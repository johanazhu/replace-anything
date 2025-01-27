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
import Faq from "../components/Faq";
import Github from "../components/GitHub";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Script from "next/script";

const Home: NextPage = () => {


  return (
    <div className="flex mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>ReplaceAnything as you want: Ultra-high quality content replacement</title>
      </Head>

      <Header />

      <main className="flex flex-1 w-full flex-col items-center justify-center text-center mt-2 sm:my-16">
        <h1 className="sm:text-4xl text-2xl max-w-1xl font-bold text-slate-900 my-2">
          Replace you{" "}
          <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            Anything
          </span>{" "}
          in seconds
        </h1>
        <iframe
          src="https://modelscope-replaceanything.hf.space"
          style={{ overflow: 'hidden', width: '100%', height: '1337px' }} />
      </main>
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;


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
                    ReplaceAnything as you want | 千变万换 | 替换任何东西
                </title>
                <meta
                    name="description"
                    content="在严格保持某个“物体ID”不变的情况下生成新的内容有着很大的市场需求，同时也是具有挑战性的。为此，我们提出了ReplaceAnything框架。它可以用于很多场景，比如人体替换、服装替换、物体替换以及背景替换等等"
                />
                <meta
                    name="keywords"
                    content="人工智能图像编辑, 图片元素替换, 在线照片编辑器, 定制图像处理, 背景移除工具, 创意照片编辑, 高级图像技术, 用户友好的编辑平台, 照片个性化, 快速图像处理, ReplaceAnything, AI照片定制, 数字图像编辑器, 网络照片编辑器, 图像编辑软件" />


            </Head>

            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center mt-2 sm:my-16">
                <h1 className="sm:text-4xl text-2xl max-w-1xl font-bold text-slate-900 my-2">
                    在几秒钟内{" "}
                    <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                        替换任何东西
                    </span>{" "}
                </h1>
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


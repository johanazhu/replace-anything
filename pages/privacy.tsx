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
                    Replace Anything | Privacy Policy | 隐私页面 | 千变万换 | 替换任何东西
                </title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>


            <Header />

            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Privacy Policy</h1>

                    <div className="flow-root mt-12 sm:mt-16">
                        <div className="divide-y divide-gray--200 -my-9">
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">Who we are?</p>
                                <h2 className="mt-3 text-base text-gray-600">
                                    Replace Anything Our website address is:{" "}
                                    <a
                                        className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                                        href="https://www.replace-anything.fun"
                                        title="replace-anything.fun faster"
                                    >https://www.replace-anything.fun/</a>
                                </h2>
                            </div>

                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">Comments</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>Replace Anything</strong>: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                                </p>
                                <p className="mt-3 text-base text-gray-600">An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here:{" "}
                                    <a
                                        className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                                        href="https://www.replace-anything.fun"
                                        title="replace-anything.fun faster"
                                    >https://www.replace-anything.fun/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                            </div>

                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">Media</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>Replace Anything</strong>: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                                </p>
                            </div>

                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">Cookies</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>Replace Anything</strong>: If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                                </p>
                            </div>

                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">Embedded content from other websites</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>Replace Anything</strong>: Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                                </p>
                            </div>

                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">Who we share your data with</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>Replace Anything</strong>: If you request a password reset, your IP address will be included in the reset email.
                                </p>
                            </div>

                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">How long we retain your data</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>Replace Anything</strong>: If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                                </p>
                            </div>

                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">What rights you have over your data</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>Replace Anything</strong>: If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                                </p>
                            </div>

                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">Where your data is sent</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>Replace Anything</strong>: Visitor comments may be checked through an automated spam detection service.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default Home;


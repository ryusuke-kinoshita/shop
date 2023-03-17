import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>SUSTAIN THE FUTURE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <h1 className="text-3xl font-bold underline text-center items-center">
        SUSTAIN THE FUTURE
      </h1>
      <Footer />
    </>
  );
}

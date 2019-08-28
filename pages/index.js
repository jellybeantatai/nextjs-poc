import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import "../style.css";

const Home = () => (
  <div className="bg-black h-screen">
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title text-white">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <Link href="https://github.com/zeit/next.js#setup">
          <a className="card bg-gray-900">
            <h3 className="text-white">Getting Started &rarr;</h3>
            <p className="text-gray-600 font-bold">
              Learn more about Next.js on GitHub and in their examples.
            </p>
          </a>
        </Link>
        <Link href="https://github.com/zeit/next.js/tree/master/examples">
          <a className="card bg-gray-900">
            <h3 className="text-white">Examples &rarr;</h3>
            <p className="text-gray-600 font-bold">
              Find other example boilerplates on the Next.js GitHub.
            </p>
          </a>
        </Link>
        <Link href="https://github.com/zeit/next.js">
          <a className="card bg-gray-900">
            <h3 className="text-white">Create Next App &rarr;</h3>
            <p className="text-gray-600 font-bold">
              Was this tool helpful? Let us know how we can improve it!
            </p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
      }
    `}</style>
  </div>
);

export default Home;

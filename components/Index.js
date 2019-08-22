import React from "react";
import Head from "next/head";
import App from "./App";

import { ContextController } from "./ScraperContextController";

const Index = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </Head>
      <ContextController>
        <App />
      </ContextController>
    </>
  );
};

export default Index;

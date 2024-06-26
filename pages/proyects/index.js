import React from "react";
import PublicNavbar from "../../components/PublicNavbar";
import Proyects from "../../components/Proyects";
import { useEffect } from "react";
import Head from "next/head";
import Foot from "../../components/Foot";

export default function AllProyects() {
  useEffect(() => {
    if (true) {
      document.body.style.backgroundColor = "var(--main-raven)";
    } else {
      document.body.style.backgroundColor = "var(--logo-light)";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Proyects - RAS Uniandes</title>
      </Head>
      <PublicNavbar/>
      <Proyects/>
      <Foot/>
    </>
  );
}

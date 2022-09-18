import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { usePlausible } from "next-plausible";

const Home: NextPage = () => {
  const plausible = usePlausible();

  return (
    <button onClick={() => plausible("plausibleEvent")}>Send Plausible</button>
  );
};

export default Home;

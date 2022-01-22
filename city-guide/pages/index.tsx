import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import type { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getImgPrefix } from "../utils/images";

import { getCities } from "../lib/api";

export async function getStaticProps() {
  return {
    props: { cities: getCities() },
  }
}

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const imgPrefix = getImgPrefix();
  return (
    <div>
      <Head>
        <title>City Guide</title>
        <meta name="description" content="Stephen's City Guide" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>City Guide</h1>
        <section className={styles.cities}>
          {props.cities.map((city) => (
            <>
              <Link key={city.abbr} href={`/${city.abbr}`}>
                <div className={styles.city}>
                  <a
                    className={styles.cityImage}
                    style={{
                      backgroundImage: `url("${imgPrefix}/${city.abbr}.jpeg")`,
                      backgroundPosition: city.imgPosition,
                    }}
                  />
                  <span>{city.name}</span>
                </div>
              </Link>
            </>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home

import type { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getCities, getPlaces } from "../lib/api";
import styles from "../styles/Home.module.css";

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return { paths: getCities().map(city => ({ params: { city } })), fallback: "blocking" };
}

export async function getStaticProps(context: GetStaticPropsContext<{ city: string }>) {
  const city = context.params?.city;
  if (!city) {
    throw new Error("no city passed in params");
  }
  return {
    props: { places: getPlaces(city) },
  }
}

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const groups = props.places.reduce((groups, place) => {
    groups.set(place.kind, [...(groups.get(place.kind) || []), place]);
    return groups;
  }, new Map<string, typeof props["places"]>());

  return (
    <>
      <Head>
        <title>New York City</title>
        <meta name="description" content="New York City" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Public+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
      </Head>
      <header className={styles.header}>
        <img src="/nyc.jpeg" />
        <aside>
          <h1>New York City</h1>
        </aside>
      </header>
      <div className={styles.grid}>
        {Array.from(groups.entries()).map(([group, places], i) => {
          return (
            <div className={styles.list} key={i}>
              <h1>{group}</h1>
              {places.map((p, i) => {
                return (
                  <div className={styles.place} key={i}>
                    <h3>{p.title}</h3>
                    <div>
                      <ReactMarkdown>
                        {p.description}
                      </ReactMarkdown>
                    </div>
                  </div>
                )
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home

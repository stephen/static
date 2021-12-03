import type { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
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
  return (
    <div>
      <Head>
        <title>New York City</title>
        <meta name="description" content="New York City" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.grid}>
        {[props.places].map((p, i) => {
          return (
            <div className={styles.list} key={i}>
              {p.map(p => {
                return (
                  <div className={styles.place}>
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
    </div>
  );
}

export default Home

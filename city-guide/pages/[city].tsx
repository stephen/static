import type { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { getCities, getCity, getPlaces } from "../lib/api";
import styles from "../styles/Home.module.css";

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return { paths: getCities().map(city => ({ params: { city: city.abbr } })), fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext<{ city: string }>) {
  const city = context.params?.city;
  if (!city) {
    throw new Error("no city passed in params");
  }
  return {
    props: { places: getPlaces(city), city: getCity(city), },
  }
}

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const groups = props.places.reduce((groups, place) => {
    groups.set(place.kind, [...(groups.get(place.kind) || []), place]);
    return groups;
  }, new Map<string, typeof props["places"]>());

  const isProd = process.env.NODE_ENV === "production";
  const imgPrefix = isProd ? "/city-guide" : "";
  return (
    <>
      <Head>
        <title>{props.city.name}</title>
        <meta name="description" content={props.city.name} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Public+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
      </Head>
      <header className={styles.header}>
        <img src={`${imgPrefix}/${props.city.abbr}.jpeg`} width="100%" height="100%" style={{ objectPosition: props.city.imgPosition }} />
        <aside style={{ backgroundColor: `${props.city.color}10` }}>
          <h1>{props.city.name}</h1>
        </aside>
      </header>
      <div className={styles.grid}>
        {Array.from(groups.entries()).map(([group, places], i) => {
          return (
            <div className={styles.list} key={i}>
              <h1 style={{ borderBottomColor: props.city.color }}>{group}</h1>
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

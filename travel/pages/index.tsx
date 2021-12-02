import type { NextPage } from 'next'
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

enum Rating {
  Recommended,
  Favorite,
  Okay,
  Bad,
}

const places = [
  [
    {
      type: "dessert",
      heading: "Ke-ki",
      description: "I have been craving Castella ever since I had it in Taiwan. This place does pretty good castella. I like to eat the fresh cake same-day, then freeze the rest for a different, but just as good texture.",
      rating: Rating.Favorite,
    },
    {
      type: "dessert",
      heading: "Cha-an Teahouse",
      description: "Japanese sweets. The seasonally flavored parfaits are a treasure chest - different treat in each bite!",
      rating: Rating.Favorite,
    },
    {
      type: "dessert",
      heading: "Levain Bakery",
      description: "The huge, monster, gooey cookies are so good. When I used to visit the city, I'd fly home with a bag of these to keep in my freezer for rainy days.",
    },
    {
      type: "food",
      heading: "Panya",
      description: "I like the Japanese breakfast. Nice 和食 to start the day. The cream pan is not bad too.",
    },
    {
      type: "food",
      heading: "Mala Project",
      description: "Drypot drypot drypot.",
    },
    {
      type: "sushi",
      heading: "Uchu",
      description: "My favorite place for Omakase so far. The flavors are out of this world - quite a pleasant surprise after I had gone through a string of mediocre sushi places in New York. I liked the sake pairing but it can be overwhelming in both alcohol volume and snooty explanations.",
      rating: Rating.Favorite,
    },
    {
      type: "sushi",
      heading: "Yoshino",
      description: "Really, really great Omakase. I'd say the flavors are more tame compared to Uchu, but still exceptionally good.",
      rating: Rating.Favorite,
    },
    {
      type: "sushi",
      heading: "Noz Market",
      description: "An offshoot of Sushi Noz. Sadly, I haven't been able to try the Omakase, but the chirashi from Noz market is really excellent and worth a try.",
    },
    {
      type: "food",
      heading: "Davelle",
      description: "Cute, small cafe with a Japanese menu. The curry with karaage is great and the toast (berry and cream cheese!) is very delicious and very instagramable.",
      rating: Rating.Favorite,
    },
    {
      type: "food",
      heading: "uluh",
      description: "Great, modern-ish Chinese food. Uluh is hulu (葫芦) backwards, but I guess you can't name your Chinese restaurant after a Chinese gourd when an American startup decides to use it. My favorites are the pork trotters and truffle fried rice. The duck is not bad, but a little pricey for how much duck you get.",
      rating: Rating.Favorite,
    },
    {
      type: "food",
      heading: "Ise",
      description: "Pretty solid Japanese fare. I like the soba, but not as much as Sobaya.",
    },
    {
      type: "food",
      heading: "Sobaya",
      description: "I'm a big fan of soba it's pretty exciting to go to a place named after it. The ten(pura) zaru is great, both cold and hot. I also had the soba with duck, but I think tempura is the way to go.",
    },
    {
      type: "food",
      heading: "Benemon",
      description: "The star here is the appetizers. I like the gobo, tofu, tempura, both tatakis, and the (fried) soft shell crab is the best. The rice bowls and curry are fine but not anything special.",
    },
    {
      type: "food",
      heading: "BT (Boxed To-Go)",
      description: "<$10 Bentos. Pretty solid. The portions are small, but it's perfect for a light lunch. The fried shrimp is my favorite.",
    },
    {
      type: "food",
      heading: "Dolar Shop",
      description: "The hotpot is good. The wait can be kind of insane, so get a reservation. I usually like spicy broths, but in this case the silver soup is the thing to get.",
    },
    {
      type: "food",
      heading: "Aburiya Kinnosuke",
      description: "The grilled fish is so good. Other appetizers are not bad, but the Saba Shioyaki and Hamachi Kama are the best.",
    },
    {
      type: "dessert",
      heading: "Sundaes and Cones",
      description: "I think I only like this place because it's on my block. But it's not bad. I like the Taro and Pistachio flavors in a waffle cone the best.",
    },
    {
      type: "food",
      heading: "Raku",
      description: "Somewhat non-traditional udon. It's not bad but not my favorite.",
      rating: Rating.Okay,
    },
    {
      type: "food",
      heading: "Prince St. Pizza",
      description: "I like the pepperoni squares. Delicious but extremely greasy.",
    },
    {
      type: "food",
      heading: "Shanghai You Garden",
      description: "The key here is not to go into the restaurant, but to order the duck buns to-go in the front. $1.50 (+inflation?) for a prewrapped Peking Duck bun. It's great.",
    },
  ],
];

const Home: NextPage = () => {
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
        {places.map((p, i) => {
          return (
            <div className={styles.list} key={i}>
              {p.map(p => {
                return (
                  <div className={styles.place}>
                    <h3>{p.heading}</h3><p>{p.description}</p>
                  </div>
                )
              })}

            </div>
          );
        })}
      </div>
      <div>

      </div>
    </div>
  );
}

export default Home

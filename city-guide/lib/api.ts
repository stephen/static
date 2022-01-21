import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getCities() {
    return fs.readdirSync(citiesDir).filter(c => !c.startsWith(".")).map(c => cities[c]);
}

const citiesDir = path.join(process.cwd(), "_cities");

type Rating = "favorite" | "recommended" | "okay" | "bad";

interface Category {
    description: string;
}

const cities: Record<string, { name: string, abbr: string, imgPosition: string, color: string, categories?: Record<string, Category> }> = {
    nyc: {
        abbr: "nyc",
        name: "New York City",
        imgPosition: "left bottom",
        color: "#1e90ff",
    },
    hnl: {
        abbr: "hnl",
        name: "Oahu",
        imgPosition: "left top",
        color: "#1e90ff",
        categories: {
            acai: {
                description: "I didn't think I liked acai bowls, but Yolanda took me to enough of them that I formed an opinion.",
            }
        }
    },
    sea: {
        abbr: "sea",
        name: "Seattle",
        imgPosition: "center",
        color: "#747d8c"
    },
    yvr: {
        abbr: "yvr",
        name: "Vancouver",
        imgPosition: "center",
        color: "#a4b0be"
    },
    sf: {
        abbr: "sf",
        name: "San Francisco (Bay Area)",
        imgPosition: "center",
        color: "#ff6348",
    },
    tpe: {
        abbr: "tpe",
        name: "Taipei",
        imgPosition: "center top",
        color: "#2ed573",
    },
};

export function getCity(city: string) {
    return cities[city];
}

function isRating(input: unknown): input is Rating {
    if (typeof input !== "string") {
        return false;
    }
    return ["favorite", "recommended", "okay", "bad"].includes(input);
}

export interface Place {
    title: string;
    rating: Rating;
    kind: string;
    description: string;
    // date is in the format yyyy-mm. We prefer this over a Date object
    // because next can't serialize the Date object and the string format
    // is sortable anyways.
    date: string;
}

export function getPlaces(city: string) {
    const places = fs.readdirSync(path.join(citiesDir, city));
    return places.map(file => {
        return getPlace(path.join(city, file));
    })
}

// getPlace returns the markdown content. slug should be
// in the form nyc/2021-06-place.md
export function getPlace(slug: string): Place {
    slug = slug.replace(/\.md$/, "")
    const p = path.join(citiesDir, `${slug}.md`)
    const fileContents = fs.readFileSync(p, "utf8")

    const [date] = path.basename(p).match(/^([0-9]{4})-([0-9]{2})/) || [];

    const { data, content } = matter(fileContents) as { data: Record<string, unknown>, content: string };
    if (typeof data.kind !== "string" || !data.kind) {
        throw new Error(`place ${slug} must have kind defined`);
    }

    if (!data.title) {
        throw new Error(`place ${slug} must have title defined`);
    }

    let rating = "recommended" as Rating;
    if (isRating(data.rating)) {
        rating = data.rating;
    }

    return {
        title: `${data.title}`,
        rating,
        kind: data.kind,
        description: content,
        date,
    };
}

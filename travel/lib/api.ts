import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getCities() {
    return fs.readdirSync(citiesDir);
}

const citiesDir = path.join(process.cwd(), "_cities");

type Rating = "favorite" | "recommended" | "okay" | "bad";

export interface Place {
    title: string;
    rating?: Rating;
    kind?: string;
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

    const { data, content } = matter(fileContents);
    return {
        title: data.title,
        rating: data.rating || "recommended",
        kind: data.kind || null,
        description: content,
        date,
    };
}

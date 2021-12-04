import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getCities() {
    return fs.readdirSync(citiesDir);
}

const citiesDir = path.join(process.cwd(), "_cities");

type Rating = "favorite" | "recommended" | "okay" | "bad";

function isRating(input: unknown): input is Rating {
    if (typeof input !== "string") {
        return false;
    }
    return ["favorite", "recommended", "okay", "bad"].includes(input);
}

export interface Place {
    title: string;
    rating?: Rating;
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

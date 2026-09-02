import readingRoom from "../assets/photos/01-reading-room.jpg";
import burningCar from "../assets/photos/02-burning-car.jpg";
import sbyRoom from "../assets/photos/03-sby-room.jpg";
import prambananSilhouette from "../assets/photos/04-prambanan-silhouette.jpg";
import prambananGoldenHour from "../assets/photos/05-prambanan-golden-hour.jpg";
import templeRelief from "../assets/photos/06-temple-relief.jpg";
import reachingTheSky from "../assets/photos/07-reaching-the-sky.jpg";
import cityAndMountain from "../assets/photos/08-city-and-mountain.jpg";
import tamanSari from "../assets/photos/09-taman-sari.jpg";
import undergroundPassage from "../assets/photos/10-underground-passage.jpg";
import campusWalkway from "../assets/photos/11-campus-walkway.jpg";
import ministryBuilding from "../assets/photos/12-ministry-building.jpg";

export type Category = "portrait" | "landscape" | "street" | "travel";

export interface Location {
  slug: string;
  place: string;
  country: string;
  lat: number;
  lng: number;
}

export interface Photo {
  id: number;
  title: string;
  category: Category;
  src: string;
  location: Location;
}

export const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "portrait", label: "Portrait" },
  { value: "landscape", label: "Landscape" },
  { value: "street", label: "Street" },
  { value: "travel", label: "Travel" },
];

// NOTE: only "Yogyakarta" is inferred confidently from the photo titles
// (Prambanan / Taman Sari are well-known Yogyakarta landmarks). Every other
// photo is placed under "Makassar" as an honest default (the photographer's
// home base) rather than a guessed city — edit `location` below once you
// have the real place for each shot.
const YOGYAKARTA: Location = {
  slug: "yogyakarta",
  place: "Yogyakarta",
  country: "Indonesia",
  lat: -7.7956,
  lng: 110.3695,
};

const MAKASSAR: Location = {
  slug: "makassar",
  place: "Makassar",
  country: "Indonesia",
  lat: -5.1477,
  lng: 119.4327,
};

export const photos: Photo[] = [
  { id: 1, title: "Reading Room", category: "travel", src: readingRoom, location: MAKASSAR },
  { id: 2, title: "Burning Car", category: "street", src: burningCar, location: MAKASSAR },
  { id: 3, title: "SBY's Room", category: "travel", src: sbyRoom, location: MAKASSAR },
  { id: 4, title: "Prambanan Silhouette", category: "travel", src: prambananSilhouette, location: YOGYAKARTA },
  { id: 5, title: "Prambanan at Golden Hour", category: "travel", src: prambananGoldenHour, location: YOGYAKARTA },
  { id: 6, title: "Temple Relief", category: "travel", src: templeRelief, location: YOGYAKARTA },
  { id: 7, title: "Reaching the Sky", category: "travel", src: reachingTheSky, location: MAKASSAR },
  { id: 8, title: "City and the Mountain", category: "landscape", src: cityAndMountain, location: MAKASSAR },
  { id: 9, title: "Taman Sari", category: "travel", src: tamanSari, location: YOGYAKARTA },
  { id: 10, title: "Underground Passage", category: "travel", src: undergroundPassage, location: MAKASSAR },
  { id: 11, title: "Campus Walkway", category: "landscape", src: campusWalkway, location: MAKASSAR },
  { id: 12, title: "Ministry Building", category: "street", src: ministryBuilding, location: MAKASSAR },
];

export interface LocationGroup extends Location {
  photos: Photo[];
  cover: Photo;
}

export const locations: LocationGroup[] = Object.values(
  photos.reduce<Record<string, LocationGroup>>((acc, photo) => {
    const key = photo.location.slug;
    if (!acc[key]) {
      acc[key] = { ...photo.location, photos: [], cover: photo };
    }
    acc[key].photos.push(photo);
    return acc;
  }, {}),
).sort((a, b) => b.photos.length - a.photos.length);

export function getLocation(slug: string): LocationGroup | undefined {
  return locations.find((l) => l.slug === slug);
}

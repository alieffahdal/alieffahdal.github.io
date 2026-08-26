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

export interface Photo {
  id: number;
  title: string;
  category: Category;
  src: string;
}

export const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "portrait", label: "Portrait" },
  { value: "landscape", label: "Landscape" },
  { value: "street", label: "Street" },
  { value: "travel", label: "Travel" },
];

export const photos: Photo[] = [
  { id: 1, title: "Reading Room", category: "travel", src: readingRoom },
  { id: 2, title: "Burning Car", category: "street", src: burningCar },
  { id: 3, title: "SBY's Room", category: "travel", src: sbyRoom },
  { id: 4, title: "Prambanan Silhouette", category: "travel", src: prambananSilhouette },
  { id: 5, title: "Prambanan at Golden Hour", category: "travel", src: prambananGoldenHour },
  { id: 6, title: "Temple Relief", category: "travel", src: templeRelief },
  { id: 7, title: "Reaching the Sky", category: "travel", src: reachingTheSky },
  { id: 8, title: "City and the Mountain", category: "landscape", src: cityAndMountain },
  { id: 9, title: "Taman Sari", category: "travel", src: tamanSari },
  { id: 10, title: "Underground Passage", category: "travel", src: undergroundPassage },
  { id: 11, title: "Campus Walkway", category: "landscape", src: campusWalkway },
  { id: 12, title: "Ministry Building", category: "street", src: ministryBuilding },
];

export type Category = "portrait" | "landscape" | "street" | "travel";

export interface Photo {
  id: number;
  title: string;
  category: Category;
  gradient: string;
  tall?: boolean;
}

export const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "portrait", label: "Portrait" },
  { value: "landscape", label: "Landscape" },
  { value: "street", label: "Street" },
  { value: "travel", label: "Travel" },
];

export const photos: Photo[] = [
  { id: 1, title: "Golden Hour Portrait", category: "portrait", gradient: "linear-gradient(135deg, #f6ad55, #c53030)", tall: true },
  { id: 2, title: "Mountain Ridge", category: "landscape", gradient: "linear-gradient(135deg, #4facfe, #00f2fe)" },
  { id: 3, title: "City Crossing", category: "street", gradient: "linear-gradient(135deg, #434343, #000000)" },
  { id: 4, title: "Coastal Village", category: "travel", gradient: "linear-gradient(135deg, #43cea2, #185a9d)", tall: true },
  { id: 5, title: "Quiet Gaze", category: "portrait", gradient: "linear-gradient(135deg, #ee9ca7, #ffdde1)" },
  { id: 6, title: "Rice Terraces", category: "landscape", gradient: "linear-gradient(135deg, #56ab2f, #a8e063)" },
  { id: 7, title: "Rainy Alley", category: "street", gradient: "linear-gradient(135deg, #2c3e50, #4ca1af)", tall: true },
  { id: 8, title: "Market Morning", category: "travel", gradient: "linear-gradient(135deg, #f7971e, #ffd200)" },
  { id: 9, title: "Studio Light", category: "portrait", gradient: "linear-gradient(135deg, #7f00ff, #e100ff)" },
  { id: 10, title: "Sunset Cliffs", category: "landscape", gradient: "linear-gradient(135deg, #ff5f6d, #ffc371)", tall: true },
  { id: 11, title: "Neon Corner", category: "street", gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" },
  { id: 12, title: "Island Ferry", category: "travel", gradient: "linear-gradient(135deg, #2193b0, #6dd5ed)" },
];

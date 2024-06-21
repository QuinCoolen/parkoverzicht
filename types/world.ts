import { Attraction } from "./attraction";

export type World = {
  id: number;
  name: string;
  attractions: Attraction[];
};